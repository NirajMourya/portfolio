import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.FROM_EMAIL;

if (!resendApiKey || !fromEmail) {
  console.warn("Missing RESEND_API_KEY or FROM_EMAIL environment variable.");
}

const resend = new Resend(resendApiKey);

export async function POST(req) {
  const { email, subject, message } = await req.json();

  if (!email || !subject || !message) {
    return NextResponse.json(
      { error: "Email, subject, and message are required." },
      { status: 400 }
    );
  }

  if (!resendApiKey || !fromEmail) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  try {
    const response = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thanks for reaching out!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json({ success: true, id: response.id });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Failed to send email." }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.FROM_EMAIL;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_SUBJECT_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 2000;

const sanitizeText = (value) => value.replace(/[<>]/g, "").trim();

if (!resendApiKey || !fromEmail) {
  console.warn("Missing RESEND_API_KEY or FROM_EMAIL environment variable.");
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req) {
  const body = await req.json();
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const subject = typeof body?.subject === "string" ? sanitizeText(body.subject) : "";
  const message = typeof body?.message === "string" ? sanitizeText(body.message) : "";

  if (!email || !subject || !message) {
    return NextResponse.json(
      { error: "Email, subject, and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  if (subject.length > MAX_SUBJECT_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: "Subject or message exceeds the allowed length." },
      { status: 400 }
    );
  }

  if (!resend || !resendApiKey || !fromEmail) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  try {
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
        <h1 style="margin-bottom: 8px;">${subject}</h1>
        <p>Thanks for reaching out!</p>
        <p>New message submitted:</p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      </div>
    `;

    const response = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject,
      html,
      text: `New message from ${email}\n\n${message}`,
    });

    return NextResponse.json({ success: true, id: response.id });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Failed to send email." }, { status: 500 });
  }
}

//import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL
export async function POST(req,res) {
    const {email, subject, message} =  await req.json();
    
    try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['nirajmourya786@gmail.com',email],
      subject: subject,
      react: (<>
      <h1>{subject}</h1>
      <p>Thanks for reaching out!</p>
      <p>New Message submitted!</p>
      <p>{message}</p></>),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY || process.env.api_key;
  const sender = process.env.FROM_EMAIL;
  if (!apiKey || !sender) {
    return NextResponse.json({ error: "Email delivery is unavailable. Open your email app to send your message." }, { status: 503 });
  }
  const input = await request.json().catch(() => null);
  const { email, subject, message } = input || {};
  if (![email, subject, message].every(value => typeof value === "string" && value.trim()) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || subject.length > 160 || message.length > 5000) {
    return NextResponse.json({ error: "Enter a valid email, subject and message." }, { status: 400 });
  }
  try {
    const { data, error } = await new Resend(apiKey).emails.send({
      from: sender, to: ["olimjonovrahmonjon20@gmail.com"], replyTo: email,
      subject: "Portfolio inquiry: " + subject, text: "From: " + email + "\n\n" + message
    });
    if (error || !data?.id) throw new Error("Delivery unavailable");
    return NextResponse.json({ accepted: true });
  } catch {
    return NextResponse.json({ error: "Email delivery is unavailable. Open your email app to send your message." }, { status: 502 });
  }
}

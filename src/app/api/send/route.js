import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.resend_api_key);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    // Parse the request body correctly using req.json()
    const { email, subject, message } = await req.json();

    console.log(email, subject, message);

    // Send the email using Resend
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      html: `  <!-- Use HTML content here instead of JSX -->
                <h1>${subject}</h1>
                <p>Thank you for contacting us!</p>
                <p>New message submitted:</p>
                <p>${message}</p>
              `,
    });

    // Return the data as JSON response
    return NextResponse.json(data);
  } catch (error) {
    // Return any errors as JSON response
    console.error("Error sending email:", error);
    return NextResponse.json({
      error: error.message || "An unexpected error occurred",
    });
  }
}

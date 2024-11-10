import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.resend_api_key);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    // Parse the request body correctly using req.json()
    const { email, subject, message } = await req.json();

    // Debugging the input data
    console.log("Sending email...");
    console.log("From:", fromEmail);
    console.log("To:", [fromEmail, email]);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Send the email using Resend
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      `,
    });

    // Log the response data
    console.log("Resend response:", data);

    // Return the data as JSON response
    return NextResponse.json(data);
  } catch (error) {
    // Log the error
    console.error("Error sending email:", error);
    return NextResponse.json({
      error: error.message || "An unexpected error occurred",
    });
  }
}

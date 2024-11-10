import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend client with API key
const resend = new Resend(process.env.api_key);
const fromEmail = process.env.FROM_EMAIL;

// Helper function to handle rate limits (retry logic)
async function sendEmailWithRetry(emailData, retries = 3, delay = 1000) {
  try {
    // Try to send the email
    const data = await resend.emails.send(emailData);
    console.log("Email sent successfully:", data);
    return data; // Return the successful response
  } catch (error) {
    // If rate limit exceeded (429), retry after waiting
    if (error.statusCode === 429 && retries > 0) {
      console.log(
        `Rate limit exceeded. Retrying in ${delay / 1000} seconds...`
      );
      await new Promise((resolve) => setTimeout(resolve, delay)); // Wait before retrying
      return sendEmailWithRetry(emailData, retries - 1, delay * 2); // Exponential backoff
    }

    // If not a rate-limit error or retries exhausted, log and throw the error
    console.error("Error sending email:", error);
    throw error;
  }
}

export async function POST(req) {
  try {
    // Parse the request body
    const { email, subject, message } = await req.json();

    // Validate inputs
    if (!email || !subject || !message) {
      return NextResponse.json(
        {
          error: "Missing required fields: email, subject, or message.",
        },
        { status: 400 }
      );
    }

    // Check if FROM_EMAIL environment variable is set
    if (!fromEmail) {
      return NextResponse.json(
        {
          error: "The 'FROM_EMAIL' environment variable is not set.",
        },
        { status: 500 }
      );
    }

    // Debugging the input data
    console.log("Sending email...");
    console.log("From:", fromEmail);
    console.log("To:", [fromEmail, email]);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Prepare the email data
    const emailData = {
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      `,
    };

    // Attempt to send the email with retry logic for rate-limiting
    const data = await sendEmailWithRetry(emailData);

    // Log the successful email response
    console.log("Resend response:", data);

    // Return the response data as JSON
    return NextResponse.json(data);
  } catch (error) {
    // Log unexpected errors
    console.error("Error sending email:", error);

    // Return a user-friendly error message
    return NextResponse.json(
      {
        error: error.message || "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}

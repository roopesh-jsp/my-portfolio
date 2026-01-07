import { Resend } from "resend";

export const runtime = "nodejs"; // keep this

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, contact, message } = body;

    if (!name || !contact || !message) {
      return Response.json({ error: "Invalid request data" }, { status: 400 });
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["rupzkumar5@gmail.com"],
      subject: "New message from portfolio viewer",
      html: emailHtml, // ✅ NO JSX
      text: `
New Portfolio Message

Name: ${name}
Contact: ${contact}

Message:
${message}
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("resend error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

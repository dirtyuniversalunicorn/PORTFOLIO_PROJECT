import { EmailTemplate } from "@/components/ContactMeSection/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // MUST be a verified sender
      to: ["jaroslavfilo95@gmail.com"],
      subject: "Message from Contact Form",
      replyTo: email, // user's email goes here
      react: EmailTemplate({ name, message, email }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}

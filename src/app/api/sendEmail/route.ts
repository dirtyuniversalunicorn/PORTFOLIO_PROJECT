import { Resend } from "resend";
import { EmailTemplate } from "@/components/ContactMeSection/EmailTemplate";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "RESEND_API_KEY not configured" },
        { status: 500 },
      );
    }

    if (!secretKey) {
      return Response.json(
        { error: "reCAPTCHA secret key not configured" },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const { name, email, message, token } = await req.json();

    if (!name || !email || !message || !token) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
        }),
      },
    );

    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success) {
      return Response.json(
        { error: "reCAPTCHA verification failed" },
        { status: 403 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["jaroslavfilo95@gmail.com"],
      subject: "Message from Contact Form",
      replyTo: email,
      react: EmailTemplate({ name, message, email }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}

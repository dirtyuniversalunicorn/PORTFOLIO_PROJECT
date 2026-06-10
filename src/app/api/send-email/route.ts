import { Resend } from "resend";
import { contactSchema } from "@/features/contact/contact-schema";
import { EmailTemplate } from "@/features/contact/email-template";

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

    const body: unknown = await req.json();
    const payload =
      body && typeof body === "object" ? (body as Record<string, unknown>) : {};
    const token = typeof payload.token === "string" ? payload.token : "";
    const contactResult = contactSchema.safeParse(payload);

    if (!contactResult.success || !token) {
      return Response.json(
        { error: "Invalid contact form submission" },
        { status: 400 },
      );
    }

    const { name, email, message } = contactResult.data;

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

    const recaptchaData: unknown = await recaptchaRes.json();
    const recaptchaPayload =
      recaptchaData && typeof recaptchaData === "object"
        ? (recaptchaData as Record<string, unknown>)
        : {};

    if (recaptchaPayload.success !== true) {
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

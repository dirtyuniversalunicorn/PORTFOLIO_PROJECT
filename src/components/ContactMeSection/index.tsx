"use client";

import { Button, Field, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import type { z } from "zod";
import { CONFIG } from "../../../portfolio.config";
import { toaster } from "../ui/toaster";
import { contactSchema } from "./contact.schema";
import { ProgressMessageBar } from "./Progress";

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [message, setMessage] = useState("");
  const [recaptchaError, setRecaptchaError] = useState("");

  const letters = message.length;

  const sendEmailRequest = async (
    payload: ContactFormData & { token: string },
  ) => {
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Failed to send email");
    }

    return data;
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setRecaptchaError("");

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const payload: ContactFormData = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const result = contactSchema.safeParse(payload);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      });
      return;
    }

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      setRecaptchaError("Please verify that you are not a robot.");
      return;
    }

    setLoading(true);

    try {
      toaster.promise(sendEmailRequest({ ...result.data, token }), {
        loading: { title: "", description: "Sending message..." },
        success: {
          title: "Message sent!",
          description: "Your message was successfully sent.",
        },
        error: {
          title: "Sending failed!",
          description: "Something went wrong while sending the message.",
        },
      });

      formRef.current.reset();
      setMessage("");
      recaptchaRef.current?.reset();
    } catch (err: any) {
      toaster.error(err.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <Flex flexDirection="column" gap={2}>
        <Input
          name="name"
          placeholder="Enter your name"
          borderColor="whiteAlpha.400"
          borderRadius={0}
          backgroundColor="whiteAlpha.100"
        />
        {errors.name && <Text color="red.500">{errors.name}</Text>}
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          borderColor="whiteAlpha.400"
          borderRadius={0}
          backgroundColor="whiteAlpha.100"
        />
        {errors.email && <Text color="red.500">{errors.email}</Text>}
        <Field.Root required gap={2}>
          <Textarea
            autoresize
            placeholder="Your message ..."
            variant="outline"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={CONFIG.MAX_LETTERS}
            name="message"
            borderColor="whiteAlpha.400"
            backgroundColor="whiteAlpha.100"
            borderRadius={0}
          />
          <Field.HelperText as="div" width="100%">
            <ProgressMessageBar letters={letters} max={CONFIG.MAX_LETTERS} />
          </Field.HelperText>
        </Field.Root>
        {errors.message && <Text color="red.500">{errors.message}</Text>}

        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}
          ref={recaptchaRef}
        />
        {recaptchaError && <Text color="red.500">{recaptchaError}</Text>}

        <Button
          type="submit"
          loading={loading}
          mt={1}
          borderColor="white"
          borderRadius={0}
          textAlign="center"
        >
          Send
        </Button>
      </Flex>
    </form>
  );
};

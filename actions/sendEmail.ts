"use server";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const senderEmail = formdata.get("senderEmail");
  if (!validateString(message, 500)) {
    return {
      error: "invalid message",
    };
  }
  if (!validateString(senderEmail, 5000)) {
    return {
      error: "invalid sender email",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Page <TrasuaTopOne@trasuatopone.online>",
      to: "dngocson12@gmail.com",
      subject: "Message from portfolio page",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return { data };
};

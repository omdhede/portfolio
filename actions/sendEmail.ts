"use server";

import React from "react";
import { Resend } from 'resend';


// import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export const sendEmail = async (formData: FormData) => {
//   const senderEmail = formData.get("senderEmail");
//   const message = formData.get("message");

//   // simple server-side validation
//   if (!validateString(senderEmail, 500)) {
//     return {
//       error: "Invalid sender email",
//     };
//   }
//   if (!validateString(message, 5000)) {
//     return {
//       error: "Invalid message",
//     };
//   }

//   let data;
//   try {
//     data = await resend.emails.send({
//       from: "Contact Form <onboarding@resend.dev>",
//       to: "omdhede@gmail.com",
//       subject: "Message from contact form",
//       reply_to: senderEmail,
//       react: React.createElement(ContactFormEmail, {
//         message: message,
//         senderEmail: senderEmail,
//       }),
//     });
//   } catch (error: unknown) {
//     return {
//       error: getErrorMessage(error),
//     };
//   }

//   return {
//     data,
//   };
// };

const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: "omdhede@gmail.com",
      subject: "Message from contact form",
      reply_to: String(senderEmail), // Convert senderEmail to string
      react: React.createElement(ContactFormEmail, {
        message: String(message),
        senderEmail: String(senderEmail),
      }),
    });

    return { data: JSON.parse(JSON.stringify(data)) }; // Convert Response object to plain object
  } catch (error) {
    return { error: JSON.parse(JSON.stringify(error)) }; // Convert Response object to plain object
  }
}
"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type ContactFormState = {
  success: boolean;
  message?: string | null;
};

export async function submitContactForm(
  data: z.infer<typeof contactFormSchema>
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data. Please check your entries.",
    };
  }

  const { name, email, message } = validatedFields.data;

  // In a real-world application, you would integrate an email service
  // like Resend, SendGrid, or Nodemailer here to send the email.
  // For this example, we'll log the data to the console to simulate
  // the email being sent to contact@calcuconsulting.com.

  console.log("--- New Contact Form Submission ---");
  console.log(`Recipient: contact@calcuconsulting.com`);
  console.log(`From: ${name} <${email}>`);
  console.log("Message:");
  console.log(message);
  console.log("-----------------------------------");

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Always return a success message for this simulation.
  return { success: true };
}

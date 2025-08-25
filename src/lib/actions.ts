"use server";

import { z } from "zod";
import { firestore } from "./firebase/server";

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
  // the email being sent to calcuconsulting@proton.me.

  console.log("--- New Contact Form Submission ---");
  console.log(`Recipient: calcuconsulting@proton.me`);
  console.log(`From: ${name} <${email}>`);
  console.log("Message:");
  console.log(message);
  console.log("-----------------------------------");

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Always return a success message for this simulation.
  return { success: true };
}


const inquiryFormSchema = z.object({
  companyName: z.string().min(2, { message: "Company name is required." }),
  contactPerson: z.string().min(2, { message: "Contact person is required." }),
  email: z.string().email({ message: "A valid email is required." }),
  phone: z.string().min(10, { message: "A valid phone number is required." }),
  jobTitle: z.string().min(3, { message: "Job title is required." }),
  jobDescription: z.string().min(20, { message: "Job description must be at least 20 characters." }),
  requiredSkills: z.string().min(5, { message: "Please list some required skills." }),
  employmentType: z.enum(["permanent", "temporary", "contract"]),
  additionalInfo: z.string().optional(),
});

type InquiryFormState = {
  success: boolean;
  message?: string | null;
};

export async function submitInquiryForm(
  data: z.infer<typeof inquiryFormSchema>
): Promise<InquiryFormState> {
  const validatedFields = inquiryFormSchema.safeParse(data);

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.errors.map(e => e.message).join(', ');
    return {
      success: false,
      message: `Invalid form data: ${errorMessages}`,
    };
  }

  try {
    const inquiryData = {
      ...validatedFields.data,
      submittedAt: new Date(),
    };
    await firestore.collection("inquiries").add(inquiryData);

    return { success: true };

  } catch (error) {
    console.error("Error writing to Firestore: ", error);
    return {
      success: false,
      message: "Failed to submit inquiry. Please try again later.",
    };
  }
}

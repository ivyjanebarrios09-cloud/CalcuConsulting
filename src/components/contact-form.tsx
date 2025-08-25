
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import app from "@/lib/firebase";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "A valid phone number is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const db = getFirestore(app);
       // To enable this write operation and fix the "Missing or insufficient permissions" error,
      // you must update your Firestore security rules in the Firebase console.
      //
      // Go to your Firebase project -> Firestore Database -> Rules
      // And paste the following rules:
      //
      // rules_version = '2';
      // service cloud.firestore {
      //   match /databases/{database}/documents {
      //     // Allow anyone to submit an application.
      //     match /applications/{applicationId} {
      //       allow create: if true;
      //     }
      //     // Allow anyone to submit an inquiry.
      //     match /inquiries/{inquiryId} {
      //       allow create: if true;
      //     }
      //     // Allow anyone to submit a contact message.
      //     match /contacts/{contactId} {
      //       allow create: if true;
      //     }
      //     // Deny all other read/write access to your database by default.
      //     match /{document=**} {
      //       allow read, write: if false;
      //     }
      //   }
      // }
      await addDoc(collection(db, "contacts"), {
        ...values,
        submittedAt: serverTimestamp(),
      });

      toast({
        title: "Success!",
        description: "Your message has been sent. Replies will be sent to your email or phone number.",
      });
      form.reset();
    } catch (error) {
       console.error("Error writing to Firestore: ", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john.doe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="01234 567890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us how we can help you"
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  );
}

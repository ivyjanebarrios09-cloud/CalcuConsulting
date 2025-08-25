
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import app from "@/lib/firebase";

const formSchema = z.object({
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


export function ClientInquiryForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      jobTitle: "",
      jobDescription: "",
      requiredSkills: "",
      additionalInfo: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const db = getFirestore(app);
      // To enable this write, you need to set your Firestore security rules.
      // Go to your Firebase project -> Firestore Database -> Rules
      // And paste the following:
      //
      // rules_version = '2';
      // service cloud.firestore {
      //   match /databases/{database}/documents {
      //     // Allow anyone to submit an inquiry
      //     match /inquiries/{inquiryId} {
      //       allow create: if true;
      //       // Only allow authenticated users to read/update/delete
      //       allow read, update, delete: if request.auth != null;
      //     }
      //     // Lock down all other collections
      //     match /{document=**} {
      //       allow read, write: if false;
      //     }
      //   }
      // }
      await addDoc(collection(db, "inquiries"), {
        ...values,
        submittedAt: serverTimestamp(),
      });

      toast({
        title: "Inquiry Submitted!",
        description: "Thank you for your submission. We will get back to you shortly.",
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
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Company Inc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactPerson"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Person</FormLabel>
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
        </div>

        <FormField
          control={form.control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Senior Software Engineer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jobDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the role, responsibilities, and requirements."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="requiredSkills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Required Skills</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g., React, Node.js, Project Management"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
            control={form.control}
            name="employmentType"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Employment Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select an employment type" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        <SelectItem value="permanent">Permanent</SelectItem>
                        <SelectItem value="temporary">Temporary</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
        />

        <FormField
          control={form.control}
          name="additionalInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Information (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any other details, such as salary range or start date."
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
              Submitting Inquiry...
            </>
          ) : (
            "Submit Inquiry"
          )}
        </Button>
      </form>
    </Form>
  );
}


"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2, UploadCloud } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "@/lib/firebase";
import { v4 as uuidv4 } from 'uuid';
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";
import { useState } from "react";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];


const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required." }),
  lastName: z.string().min(2, { message: "Last name is required." }),
  email: z.string().email({ message: "A valid email is required." }),
  phone: z.string().min(10, { message: "A valid phone number is required." }),
  jobType: z.string().min(1, { message: "Job type is required." }),
  location: z.string().min(1, { message: "Location is required." }),
  cv: z.any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max file size is 10MB.`)
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file?.type),
      "Only .pdf, .doc, and .docx formats are supported."
    ).optional().nullable(),
  agreeToPolicy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy.",
  }),
});


export function ApplyForm({ jobTitle }: { jobTitle: string | null }) {
  const { toast } = useToast();
  const [fileName, setFileName] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      jobType: jobTitle || "",
      location: "London",
      cv: null,
      agreeToPolicy: false,
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const db = getFirestore(app);
      const storage = getStorage(app);
      let cvUrl = "";

      if (values.cv) {
        const cvFile = values.cv;
        const fileExtension = cvFile.name.split('.').pop();
        const cvFileName = `${uuidv4()}.${fileExtension}`;
        const storageRef = ref(storage, `cvs/${cvFileName}`);
        const uploadResult = await uploadBytes(storageRef, cvFile);
        cvUrl = await getDownloadURL(uploadResult.ref);
      }

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
      //       // Only allow authenticated users to read, update, or delete.
      //       allow read, update, delete: if request.auth != null;
      //     }
      //     // Deny all other read/write access to your database by default.
      //     match /{document=**} {
      //       allow read, write: if false;
      //     }
      //   }
      // }
      //
      // For Firebase Storage, you'll need to set rules as well.
      // Go to your Firebase project -> Storage -> Rules
      // And paste the following rules to allow writes to the 'cvs' folder:
      //
      // rules_version = '2';
      // service firebase.storage {
      //  match /b/{bucket}/o {
      //    match /cvs/{fileName} {
      //      allow write: if request.resource.size < 10 * 1024 * 1024
      //                   && request.resource.contentType.matches('application/pdf|application/msword|application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      //    }
      //  }
      // }
      await addDoc(collection(db, "applications"), {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        jobType: values.jobType,
        location: values.location,
        cvUrl: cvUrl,
        submittedAt: serverTimestamp(),
      });

      toast({
        title: "Application Submitted!",
        description: "Thank you for your application. We have received your details and will be in contact with you shortly.",
      });
      form.reset();
      setFileName(null);
    } catch (error) {
      console.error("Error submitting application: ", error);
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
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
          name="jobType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Type</FormLabel>
              <FormControl>
                <Input {...field} readOnly className="bg-muted"/>
              </FormControl>
               <FormDescription>
                Various roles include but not limited to: - Front of House - Waiting staff, bar & wine, hospitality assistant etc. - Back of House - Chef de Partie, kitchen porter, kitchen assistant etc.
               </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Your Location</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select your location" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        <SelectItem value="London">London</SelectItem>
                        <SelectItem value="Wirral">Wirral</SelectItem>
                        <SelectItem value="Manchester">Manchester</SelectItem>
                         <SelectItem value="Liverpool">Liverpool</SelectItem>
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
        />
        
        <FormField
          control={form.control}
          name="cv"
          render={({ field: { onChange, value, ...rest } }) => (
            <FormItem>
              <FormLabel>CV</FormLabel>
              <FormControl>
                <div className="relative flex items-center justify-center w-full">
                    <label htmlFor="cv-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-muted">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <UploadCloud className="w-8 h-8 mb-2 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            {fileName && <p className="text-xs text-muted-foreground">{fileName}</p>}
                        </div>
                        <Input 
                            id="cv-upload" 
                            type="file" 
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                onChange(file);
                                setFileName(file ? file.name : null);
                            }}
                            accept=".pdf,.doc,.docx"
                            {...rest}
                        />
                    </label>
                </div>
              </FormControl>
              <FormDescription>
                Accepted file types: pdf, docx, doc. Max. file size: 10 MB.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
            control={form.control}
            name="agreeToPolicy"
            render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                    <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    />
                </FormControl>
                <div className="space-y-1 leading-none">
                    <FormLabel>
                    By sending us your information, you agree to our{' '}
                    <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                    </Link>
                    .
                    </FormLabel>
                </div>
                 <FormMessage />
                </FormItem>
            )}
        />


        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
}

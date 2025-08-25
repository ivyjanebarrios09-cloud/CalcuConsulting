
'use client';
import { ApplyForm } from "@/components/apply-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ApplyPageContent() {
    const searchParams = useSearchParams();
    const jobTitle = searchParams.get('jobTitle');

    return (
        <>
            <section className="bg-primary text-primary-foreground py-16 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline">Apply for a Position</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
                        Complete the form below to submit your application.
                    </p>
                </div>
            </section>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle>Application Form</CardTitle>
                                <CardDescription>Please provide your details to apply for the selected position.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ApplyForm jobTitle={jobTitle} />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}


export default function ApplyPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ApplyPageContent />
        </Suspense>
    );
}

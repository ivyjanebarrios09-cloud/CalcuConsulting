import { ClientInquiryForm } from "@/components/client-inquiry-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ClientsPage() {
    return (
        <>
            <section className="bg-primary text-primary-foreground py-16 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline">Submit Your Workforce Needs</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
                        Fill out the form below to let us know your talent requirements.
                    </p>
                </div>
            </section>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle>Client Inquiry Form</CardTitle>
                                <CardDescription>Please provide the details of the position you are looking to fill.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ClientInquiryForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}

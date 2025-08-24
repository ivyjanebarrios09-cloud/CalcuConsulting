import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, User } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            We&apos;re here to help. Reach out to us with any questions or to discuss your needs.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div className="flex items-start gap-4">
                    <User className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Jun Bryan Torres
                      <br />
                      <span className="text-sm">Managing Director</span>
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      07446197421
                      <br />
                      07521907111
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">calcuconsulting@proton.me</span>
                  </div>
                   <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      123 Business Rd, Suite 100
                      <br />
                      New York, NY 10001
                    </span>
                  </div>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                  <CardTitle>Our Office</CardTitle>
                </CardHeader>
                <CardContent>
                   <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image src="https://placehold.co/600x400.png" alt="Map to office" layout="fill" objectFit="cover" data-ai-hint="world map" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

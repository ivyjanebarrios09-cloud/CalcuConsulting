import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, User } from "lucide-react";

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
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
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
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-12">Our Office Locations</h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Wirral Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Twelve Quays House, Egerton Wharf, Wirral, CH41 1LD
                  </p>
                  <div className="relative h-64 rounded-lg overflow-hidden border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.1666498141413!2d-3.019397984160408!3d53.39893637998967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b26c6e2b41c6b%3A0x6b4f7e5b0d4e9c7c!2sTwelve%20Quays%20House%2C%20Egerton%20Wharf%2C%20Birkenhead%2C%20Wirral%20CH41%201LD!5e0!3m2!1sen!2suk!4v1678886400000"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    London Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Suite 5, 5th floor, City Reach, 5 Greenwich View Place, London, E14 9NN
                  </p>
                  <div className="relative h-64 rounded-lg overflow-hidden border">
                     <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.771962332159!2d-0.01950568422956983!3d51.49969497963388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602dd0f203875%3A0x7d6587a8e7a685dd!2sCity%20Reach%2C%205%20Greenwich%20View%20Pl%2C%20London%20E14%209NN!5e0!3m2!1sen!2suk!4v1678886400001"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
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

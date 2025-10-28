
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Users, Lightbulb, CheckCircle, Target, Handshake, Search, UserCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section 
          className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/img/heroo.jpg')" }}
        >
          <div className="absolute inset-0 bg-primary/60" />
          <div className="relative z-10 p-4 flex flex-col items-center">
            <Image src="/img/logos.png" alt="Calcu Consulting Logo" width={150} height={150} className="mb-4 drop-shadow-lg" />
            <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
              Calcu Consulting
            </h1>
            <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-md">
              For all your recruitment needs
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <Link href="/candidates">
                <div className="relative rounded-lg overflow-hidden group h-64 flex flex-col items-center justify-center p-6 bg-primary text-primary-foreground">
                    <Image src="https://placehold.co/600x300/A7C7E7/374151.png?text=Candidates" alt="Candidates" fill objectFit="cover" className="opacity-10 group-hover:opacity-20 transition-opacity" data-ai-hint="geometric abstract" />
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold font-headline mb-2">CANDIDATES</h3>
                      <p className="mb-4">FIND YOUR PERFECT JOB HERE!</p>
                      <Button variant="outline" className="text-primary bg-primary-foreground border-primary-foreground hover:bg-primary-foreground/90">CLICK HERE!</Button>
                    </div>
                </div>
              </Link>
              <Link href="/clients">
                <div className="relative rounded-lg overflow-hidden group h-64 flex flex-col items-center justify-center p-6 bg-accent text-accent-foreground">
                     <Image src="https://placehold.co/600x300/B5EAD7/374151.png?text=Clients" alt="Clients" fill objectFit="cover" className="opacity-10 group-hover:opacity-20 transition-opacity" data-ai-hint="geometric abstract" />
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold font-headline mb-2">CLIENTS</h3>
                      <p className="mb-4">DISCOVER TOP TALENT!</p>
                      <Button variant="outline" className="text-accent bg-accent-foreground border-accent-foreground hover:bg-accent-foreground/90">CLICK HERE!</Button>
                    </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-headline font-bold text-primary mb-4">About Us</h2>
                <p className="text-muted-foreground mb-4">
                  Calcu Consulting is a premier recruitment and consulting firm dedicated to connecting exceptional talent with leading organizations. Our mission is to build lasting partnerships by providing tailored solutions that drive growth and success.
                </p>
                <p className="text-muted-foreground">
                  With years of industry experience, our team of experts leverages deep market insights and a vast network to deliver results that exceed expectations. We believe in a personalized approach, ensuring we understand the unique needs of both our clients and candidates.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                 <Image src="/img/aboutt.jpg" alt="Team meeting" fill objectFit="cover" data-ai-hint="business team" />
              </div>
            </div>
          </div>
        </section>
        
        <section id="why-choose-us" className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-headline font-bold text-primary mb-2">Why Choose Us?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-12">We are committed to excellence and delivering unparalleled value to our clients through our bespoke services.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="pt-4">Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Our team possesses deep industry knowledge to find the perfect fit for your company's needs.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <Handshake className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="pt-4">Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We build strong, long-term relationships to better understand and serve our clients.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="pt-4">Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Our track record of successful placements and satisfied clients speaks for itself.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-headline font-bold text-primary mb-2">Our Services</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-12">We offer a comprehensive range of recruitment and consulting services designed to meet your business challenges.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit">
                    <Briefcase className="h-10 w-10 text-accent" />
                  </div>
                  <CardTitle className="pt-4">Permanent Recruitment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Finding the right long-term talent to drive your company forward. We handle the entire process from sourcing to onboarding.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit">
                    <Users className="h-10 w-10 text-accent" />
                  </div>
                  <CardTitle className="pt-4">Temporary Staffing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Flexible staffing solutions to manage workload fluctuations, special projects, and seasonal demands.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit">
                    <Lightbulb className="h-10 w-10 text-accent" />
                  </div>
                  <CardTitle className="pt-4">Consulting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Strategic advice and HR consulting to optimize your talent management and recruitment strategies.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

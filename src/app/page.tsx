'use client';

import { Button } from '@/components/ui/button';
import { AnimatedCard } from '@/components/animated-card';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Briefcase, Users, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';
import { motion } from 'framer-motion';


export default function Home() {
  return (
    <>
      <AnimatedSection 
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-foreground bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/img/heroo.jpg')" }}
      >
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 p-4 flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
            <Image src="/img/logos.png" alt="Calcu Consulting Logo" width={250} height={250} className="mb-4 drop-shadow-lg" />
          </motion.div>
           <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-2 text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-md"
           >
            For all your recruitment needs
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 text-4xl md:text-6xl font-headline font-bold drop-shadow-lg"
          >
            <span className="text-accent">Calcu</span> <span className="text-primary">Consulting</span>
          </motion.h1>
        </div>
      </AnimatedSection>

      <AnimatedSection id="services" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-headline font-bold text-primary mb-2">Our Services</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-12">We offer a comprehensive range of recruitment and consulting services designed to meet your business challenges.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard index={0} className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit">
                  <Briefcase className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="pt-4">Permanent Recruitment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Finding the right long-term talent to drive your company forward. We handle the entire process from sourcing to onboarding.</p>
              </CardContent>
            </AnimatedCard>
            <AnimatedCard index={1} className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit">
                  <Users className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="pt-4">Temporary Staffing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Flexible staffing solutions to manage workload fluctuations, special projects, and seasonal demands.</p>
              </CardContent>
            </AnimatedCard>
            <AnimatedCard index={2} className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit">
                  <Lightbulb className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="pt-4">Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Strategic advice and HR consulting to optimize your talent management and recruitment strategies.</p>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <Link href="/candidates">
              <div className="relative rounded-lg overflow-hidden group h-64 flex flex-col items-center justify-center p-6 bg-primary text-primary-foreground transition-transform duration-300 hover:scale-105">
                  <Image src="/img/candidates.jpg" alt="Candidates" fill style={{objectFit: 'cover'}} className="opacity-10 group-hover:opacity-20 transition-opacity" data-ai-hint="recruitment candidates" />
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold font-headline mb-2 text-accent">CANDIDATES</h3>
                    <p className="mb-4 text-accent">FIND YOUR PERFECT JOB HERE!</p>
                    <Button variant="outline" className="text-accent bg-transparent border-accent hover:bg-accent hover:text-accent-foreground">CLICK HERE!</Button>
                  </div>
              </div>
            </Link>
            <Link href="/clients">
              <div className="relative rounded-lg overflow-hidden group h-64 flex flex-col items-center justify-center p-6 bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105">
                   <Image src="/img/clients.jpg" alt="Clients" fill style={{objectFit: 'cover'}} className="opacity-10 group-hover:opacity-20 transition-opacity" data-ai-hint="business handshake" />
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold font-headline mb-2">CLIENTS</h3>
                    <p className="mb-4">DISCOVER TOP TALENT!</p>
                    <Button variant="outline" className="text-accent-foreground bg-transparent border-accent-foreground hover:bg-accent-foreground hover:text-accent">CLICK HERE!</Button>
                  </div>
              </div>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}


import { AnimatedCard } from '@/components/animated-card';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Handshake, CheckCircle } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';

export default function WhyChooseUsPage() {
    return (
        <>
            <AnimatedSection className="bg-primary text-primary-foreground py-16 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline">Why Choose Us?</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
                        We are committed to excellence and delivering unparalleled value to our clients.
                    </p>
                </div>
            </AnimatedSection>
            <AnimatedSection id="why-choose-us" className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <AnimatedCard index={0} className="text-center">
                        <CardHeader>
                        <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                            <Target className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="pt-4">Expertise</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <p className="text-muted-foreground">Our team possesses deep industry knowledge to find the perfect fit for your company's needs.</p>
                        </CardContent>
                    </AnimatedCard>
                    <AnimatedCard index={1} className="text-center">
                        <CardHeader>
                        <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                            <Handshake className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="pt-4">Partnership</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <p className="text-muted-foreground">We build strong, long-term relationships to better understand and serve our clients.</p>
                        </CardContent>
                    </AnimatedCard>
                    <AnimatedCard index={2} className="text-center">
                        <CardHeader>
                        <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                            <CheckCircle className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="pt-4">Proven Results</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <p className="text-muted-foreground">Our track record of successful placements and satisfied clients speaks for itself.</p>
                        </CardContent>
                    </AnimatedCard>
                    </div>
                </div>
            </AnimatedSection>
        </>
    );
}


import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
    <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">About Us</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
                Learn more about our mission, vision, and the team that makes it all happen.
            </p>
        </div>
    </section>
    <section id="about" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">Who We Are</h2>
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
    </>
  );
}

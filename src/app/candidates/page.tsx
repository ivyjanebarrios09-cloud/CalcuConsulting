import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const jobs = [
    {
        title: "Software Engineer",
        company: "Tech Solutions Inc.",
        location: "London, UK",
        description: "Developing and maintaining web applications using modern technologies.",
        image: "https://placehold.co/100x100.png"
    },
    {
        title: "Project Manager",
        company: "Innovate Ltd.",
        location: "Manchester, UK",
        description: "Leading project teams to deliver high-quality products on time.",
        image: "https://placehold.co/100x100.png"
    },
    {
        title: "UX/UI Designer",
        company: "Creative Minds",
        location: "Remote",
        description: "Designing intuitive and engaging user interfaces for our clients.",
        image: "https://placehold.co/100x100.png"
    },
     {
        title: "Data Scientist",
        company: "Analytics Co",
        location: "Edinburgh, UK",
        description: "Analyzing large datasets to extract meaningful insights.",
        image: "https://placehold.co/100x100.png"
    },
];

export default function CandidatesPage() {
    return (
        <>
            <section className="bg-primary text-primary-foreground py-16 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline">Find Your Perfect Job</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
                        Browse our open positions and take the next step in your career.
                    </p>
                    <div className="mt-8 max-w-xl mx-auto">
                        <div className="relative">
                            <Input
                                type="search"
                                placeholder="Search for jobs (e.g., 'Software Engineer')"
                                className="w-full !pr-12 text-base text-foreground"
                            />
                            <Button size="icon" variant="ghost" className="absolute top-1/2 right-2 -translate-y-1/2 h-8 w-8">
                                <Search className="h-5 w-5 text-muted-foreground" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {jobs.map((job, index) => (
                            <Card key={index} className="flex flex-col">
                                <CardHeader className="flex-row items-center gap-4">
                                     <Image src={job.image} alt={`${job.company} logo`} width={56} height={56} className="rounded-lg" data-ai-hint="company logo" />
                                    <div>
                                        <CardTitle>{job.title}</CardTitle>
                                        <CardDescription>{job.company} - {job.location}</CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground text-sm">{job.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                                        <Link href="#">Apply Now</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const candidates = [
    {
        name: "Alice Johnson",
        role: "Senior Software Engineer",
        skills: ["React", "Node.js", "TypeScript", "AWS"],
        experience: "8 years",
        image: "https://placehold.co/100x100.png"
    },
    {
        name: "Bob Williams",
        role: "Product Manager",
        skills: ["Agile", "Scrum", "JIRA", "Roadmapping"],
        experience: "6 years",
        image: "https://placehold.co/100x100.png"
    },
    {
        name: "Charlie Brown",
        role: "Lead UX/UI Designer",
        skills: ["Figma", "Sketch", "Prototyping", "User Research"],
        experience: "10 years",
        image: "https://placehold.co/100x100.png"
    },
    {
        name: "Diana Miller",
        role: "Data Scientist",
        skills: ["Python", "TensorFlow", "Machine Learning", "SQL"],
        experience: "5 years",
        image: "https://placehold.co/100x100.png"
    },
    {
        name: "Ethan Davis",
        role: "DevOps Engineer",
        skills: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
        experience: "7 years",
        image: "https://placehold.co/100x100.png"
    },
    {
        name: "Fiona Garcia",
        role: "Marketing Director",
        skills: ["SEO", "Content Strategy", "Google Analytics"],
        experience: "12 years",
        image: "https://placehold.co/100x100.png"
    }
];

export default function ClientsPage() {
    return (
        <>
            <section className="bg-primary text-primary-foreground py-16 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline">Discover Top Talent</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
                        Find the perfect candidates to build your dream team.
                    </p>
                    <div className="mt-8 max-w-2xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <Input
                                    type="search"
                                    placeholder="Search by role or skill..."
                                    className="w-full !pr-12 text-base text-foreground"
                                />
                                <Button size="icon" variant="ghost" className="absolute top-1/2 right-2 -translate-y-1/2 h-8 w-8">
                                    <Search className="h-5 w-5 text-muted-foreground" />
                                </Button>
                            </div>
                            <Select>
                                <SelectTrigger className="text-base text-foreground">
                                    <SelectValue placeholder="Filter by experience" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1-3">1-3 Years</SelectItem>
                                    <SelectItem value="3-5">3-5 Years</SelectItem>
                                    <SelectItem value="5-10">5-10 Years</SelectItem>
                                    <SelectItem value="10+">10+ Years</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {candidates.map((candidate) => (
                            <Card key={candidate.name} className="flex flex-col">
                                <CardHeader className="text-center items-center">
                                    <Image src={candidate.image} alt={candidate.name} width={96} height={96} className="rounded-full mb-4" data-ai-hint="person portrait" />
                                    <CardTitle>{candidate.name}</CardTitle>
                                    <CardDescription>{candidate.role}</CardDescription>
                                    <p className="text-sm text-muted-foreground">{candidate.experience} experience</p>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {candidate.skills.map(skill => (
                                            <Badge key={skill} variant="secondary">{skill}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                                        <Link href="#">View Profile</Link>
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

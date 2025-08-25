import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const jobs = [
    {
        title: "Room Attendant",
        company: "Hotels & Hospitality",
        location: "London, UK",
        description: "Maintain guest rooms to the highest standard of cleanliness and presentation.",
        image: "https://placehold.co/100x100.png"
    },
    {
        title: "Chef de Partie",
        company: "Restaurants, Pubs & Bars",
        location: "Manchester, UK",
        description: "Manage a section of the kitchen, preparing high-quality dishes.",
        image: "https://placehold.co/100x100.png"
    },
    {
        title: "Event Steward",
        company: "Events, Venues & Stadiums",
        location: "Birmingham, UK",
        description: "Ensure the safety and enjoyment of attendees at live events.",
        image: "https://placehold.co/100x100.png"
    },
     {
        title: "Care Assistant",
        company: "Care & Support Work",
        location: "Liverpool, UK",
        description: "Provide compassionate care and support to individuals in need.",
        image: "https://placehold.co/100x100.png"
    },
    {
        title: "Construction Labourer",
        company: "Construction",
        location: "Leeds, UK",
        description: "Assist with various tasks on construction sites, including manual labour.",
        image: "https://placehold.co/100x100.png"
    },
    {
        title: "Commercial Cleaner",
        company: "Cleaning & Facilities Management",
        location: "Glasgow, UK",
        description: "Perform cleaning duties in commercial buildings and offices.",
        image: "https://placehold.co/100x100.png"
    },
    {
        title: "Warehouse Operative",
        company: "Warehouse & Logistics",
        location: "Bristol, UK",
        description: "Handle the receipt, storage, and dispatch of goods in a warehouse.",
        image: "https://placehold.co/100x100.png"
    },
    {
        title: "Delivery Driver",
        company: "Driving & Delivery",
        location: "Remote",
        description: "Transport goods and packages to various destinations in a timely manner.",
        image: "https://placehold.co/100x100.png"
    },
    {
        title: "Waiter/Waitress",
        company: "Restaurants, Pubs & Bars",
        location: "Edinburgh, UK",
        description: "Provide excellent customer service, take orders, and serve food and beverages.",
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
                                placeholder="Search for jobs (e.g., 'Chef')"
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
                                     <Image src={job.image} alt={`${job.company} logo`} width={56} height={56} className="rounded-lg" data-ai-hint="industry icon" />
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

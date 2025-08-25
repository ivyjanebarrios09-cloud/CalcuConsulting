
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, BedDouble, ConciergeBell, UserCheck, ChefHat, UtensilsCrossed, Wine, Shield, Ticket, Crown, Martini, CookingPot, NotebookPen, PartyPopper, MonitorSpeaker, Utensils, House, Tent, Music } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const allJobs = [
    // Hotels
    {
        title: "Room Attendant",
        company: "Hotels",
        description: "Maintain guest rooms to the highest standard of cleanliness and presentation.",
        icon: BedDouble,
        tags: ["Hotels"]
    },
    {
        title: "Concierge",
        company: "Hotels",
        description: "Assist guests with various tasks such as making restaurant reservations, booking transportation and arranging spa services.",
        icon: ConciergeBell,
        tags: ["Hotels"]
    },
    {
        title: "Front Desk Agent",
        company: "Hotels",
        description: "Welcome guests, manage reservations and provide information about the hotel and its services.",
        icon: UserCheck,
        tags: ["Hotels"]
    },

    // Restaurants
    {
        title: "Chef de Partie",
        company: "Restaurants",
        description: "Manage a section of the kitchen, preparing high-quality dishes.",
        icon: ChefHat,
        tags: ["Restaurants", "Hotels", "Contract Catering", "Private Members Clubs", "Events"]
    },
    {
        title: "Waiter/Waitress",
        company: "Restaurants",
        description: "Provide excellent customer service, take orders, and serve food and beverages.",
        icon: UtensilsCrossed,
        tags: ["Restaurants", "Hotels", "Private Members Clubs", "Events"]
    },
    {
        title: "Sommelier",
        company: "Restaurants",
        description: "Manage wine cellar and advise guests on wine pairings.",
        icon: Wine,
        tags: ["Restaurants", "Private Members Clubs", "Hotels"]
    },

    // Stadiums
    {
        title: "Event Steward",
        company: "Stadiums",
        description: "Ensure the safety and enjoyment of attendees at live events in stadiums.",
        icon: Shield,
        tags: ["Stadiums", "Events", "Festivals"]
    },
    {
        title: "Box Office Clerk",
        company: "Stadiums",
        description: "Sell tickets and provide information for events at the stadium.",
        icon: Ticket,
        tags: ["Stadiums", "Events", "Festivals"]
    },

    // Private Members Clubs
    {
        title: "Club Manager",
        company: "Private Members Clubs",
        description: "Oversee the operations of a private members club, ensuring excellent service.",
        icon: Crown,
        tags: ["Private Members Clubs"]
    },
    {
        title: "Bartender",
        company: "Private Members Clubs",
        description: "Prepare and serve drinks to members in a professional and friendly manner.",
        icon: Martini,
        tags: ["Private Members Clubs", "Restaurants", "Hotels", "Events"]
    },
    
    // Contract Catering
    {
        title: "Catering Manager",
        company: "Contract Catering",
        description: "Plan, organize, and manage catering operations for various clients and events.",
        icon: CookingPot,
        tags: ["Contract Catering", "Events"]
    },
    {
        title: "Catering Assistant",
        company: "Contract Catering",
        description: "Assist in food preparation, service, and cleanup for catered events.",
        icon: NotebookPen,
        tags: ["Contract Catering", "Events", "Festivals"]
    },

    // Events
    {
        title: "Event Coordinator",
        company: "Events",
        description: "Plan and execute events, managing all aspects from logistics to guest services.",
        icon: PartyPopper,
        tags: ["Events", "Festivals"]
    },
    {
        title: "A/V Technician",
        company: "Events",
        description: "Set up, operate, and maintain audio and visual equipment for live events.",
        icon: MonitorSpeaker,
        tags: ["Events", "Festivals", "Stadiums"]
    },

    // Private Households
    {
        title: "Private Chef",
        company: "Private Households",
        description: "Create and prepare meals for private households, catering to specific dietary needs and preferences.",
        icon: Utensils,
        tags: ["Private Households"]
    },
    {
        title: "Housekeeper",
        company: "Private Households",
        description: "Maintain cleanliness and order within a private residence.",
        icon: House,
        tags: ["Private Households", "Hotels"]
    },
    
    // Festivals
    {
        title: "Festival Staff",
        company: "Festivals",
        description: "Perform various duties at festivals, including ticket scanning, crowd management, and information services.",
        icon: Tent,
        tags: ["Festivals", "Events"]
    },
    {
        title: "Sound Engineer",
        company: "Festivals",
        description: "Manage audio equipment for live performances at festivals.",
        icon: Music,
        tags: ["Festivals", "Events", "Stadiums"]
    }
];

const jobCategories = ["All", ...Array.from(new Set(allJobs.map(job => job.company)))];


export default function CandidatesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredJobs, setFilteredJobs] = useState(allJobs);

    useEffect(() => {
        const results = allJobs.filter(job => {
            const matchesCategory = selectedCategory === "All" || job.tags.includes(selectedCategory);
            const matchesSearch =
                job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            
            return matchesCategory && matchesSearch;
        });
        setFilteredJobs(results);
    }, [searchTerm, selectedCategory]);


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
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Button size="icon" variant="ghost" className="absolute top-1/2 right-2 -translate-y-1/2 h-8 w-8" aria-label="Search">
                                <Search className="h-5 w-5 text-muted-foreground" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                     <div className="mb-12 flex flex-wrap justify-center gap-2 md:gap-4">
                        {jobCategories.map(category => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                onClick={() => setSelectedCategory(category)}
                                className="capitalize"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job, index) => (
                                <Card key={index} className="flex flex-col">
                                    <CardHeader className="flex-row items-center gap-4">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                                            <job.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <div>
                                            <CardTitle>{job.title}</CardTitle>
                                            <CardDescription>{job.company}</CardDescription>
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
                            ))
                        ) : (
                            <div className="col-span-full text-center text-muted-foreground">
                                <p>No jobs found matching your search criteria.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

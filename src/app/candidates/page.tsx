
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { allJobs, jobCategories } from "@/lib/jobs";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";


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
                                            {job.image ? (
                                                <Image src={job.image} alt={job.title} width={56} height={56} className="rounded-lg object-cover h-14 w-14" />
                                            ) : (
                                                <job.icon className="h-8 w-8 text-primary" />
                                            )}
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
                                            <Link href={`/apply?jobTitle=${encodeURIComponent(job.title)}`}>Apply Now</Link>
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

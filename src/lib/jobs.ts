
import { BedDouble, ConciergeBell, UserCheck, ChefHat, UtensilsCrossed, Wine, Shield, Ticket, Crown, Martini, CookingPot, NotebookPen, PartyPopper, MonitorSpeaker, Utensils, House, Tent, Music } from "lucide-react";

export const allJobs = [
    // Hotels
    {
        title: "Room Attendant",
        company: "Hotels",
        description: "Maintain guest rooms to the highest standard of cleanliness and presentation.",
        icon: BedDouble,
        tags: ["Hotels"],
        image: "/img/room attendant.jpg"
    },
    {
        title: "Concierge",
        company: "Hotels",
        description: "Assist guests with various tasks such as making restaurant reservations, booking transportation and arranging spa services.",
        icon: ConciergeBell,
        tags: ["Hotels"],
        image: "/img/Concierge.jpg"
    },
    {
        title: "Front Desk Agent",
        company: "Hotels",
        description: "Welcome guests, manage reservations and provide information about the hotel and its services.",
        icon: UserCheck,
        tags: ["Hotels"],
        image: "/img/front desk agent.jpg"
    },

    // Restaurants
    {
        title: "Chef de Partie",
        company: "Restaurants",
        description: "Manage a section of the kitchen, preparing high-quality dishes.",
        icon: ChefHat,
        tags: ["Restaurants", "Hotels", "Contract Catering", "Private Members Clubs", "Events"],
        image: "/img/Chef de Partie.jpg"
    },
    {
        title: "Waiter/Waitress",
        company: "Restaurants",
        description: "Provide excellent customer service, take orders, and serve food and beverages.",
        icon: UtensilsCrossed,
        tags: ["Restaurants", "Hotels", "Private Members Clubs", "Events"],
        image: "/img/waiter.jpg"
    },
    {
        title: "Sommelier",
        company: "Restaurants",
        description: "Manage wine cellar and advise guests on wine pairings.",
        icon: Wine,
        tags: ["Restaurants", "Private Members Clubs", "Hotels"],
        image: "/img/Sommelier.jpg"
    },

    // Stadiums
    {
        title: "Event Steward",
        company: "Stadiums",
        description: "Ensure the safety and enjoyment of attendees at live events in stadiums.",
        icon: Shield,
        tags: ["Stadiums", "Events", "Festivals"],
        image: "/img/event steward.jpg"
    },
    {
        title: "Box Office Clerk",
        company: "Stadiums",
        description: "Sell tickets and provide information for events at the stadium.",
        icon: Ticket,
        tags: ["Stadiums", "Events", "Festivals"],
        image: "/img/Box Office Clerk.jpg"
    },

    // Private Members Clubs
    {
        title: "Club Manager",
        company: "Private Members Clubs",
        description: "Oversee the operations of a private members club, ensuring excellent service.",
        icon: Crown,
        tags: ["Private Members Clubs"],
        image: "/img/Club Manager.jpeg"
    },
    {
        title: "Bartender",
        company: "Private Members Clubs",
        description: "Prepare and serve drinks to members in a professional and friendly manner.",
        icon: Martini,
        tags: ["Private Members Clubs", "Restaurants", "Hotels", "Events"],
        image: "/img/Bartender.jpg"
    },
    
    // Contract Catering
    {
        title: "Catering Manager",
        company: "Contract Catering",
        description: "Plan, organize, and manage catering operations for various clients and events.",
        icon: CookingPot,
        tags: ["Contract Catering", "Events"],
        image: "/img/catering manager.png"
    },
    {
        title: "Catering Assistant",
        company: "Contract Catering",
        description: "Assist in food preparation, service, and cleanup for catered events.",
        icon: NotebookPen,
        tags: ["Contract Catering", "Events", "Festivals"],
        image: "/img/Catering Assistant.jpg"
    },

    // Events
    {
        title: "Event Coordinator",
        company: "Events",
        description: "Plan and execute events, managing all aspects from logistics to guest services.",
        icon: PartyPopper,
        tags: ["Events", "Festivals"],
        image: "/img/Event Coordinator.jpg"
    },
    {
        title: "A/V Technician",
        company: "Events",
        description: "Set up, operate, and maintain audio and visual equipment for live events.",
        icon: MonitorSpeaker,
        tags: ["Events", "Festivals", "Stadiums"],
        image: "/img/AV Technician.png"
    },

    // Private Households
    {
        title: "Private Chef",
        company: "Private Households",
        description: "Create and prepare meals for private households, catering to specific dietary needs and preferences.",
        icon: Utensils,
        tags: ["Private Households"],
        image: "/img/Private chef.jpg"
    },
    {
        title: "Housekeeper",
        company: "Private Households",
        description: "Maintain cleanliness and order within a private residence.",
        icon: House,
        tags: ["Private Households", "Hotels"],
        image: "/img/House Keeper.jpg"
    },
    
    // Festivals
    {
        title: "Festival Staff",
        company: "Festivals",
        description: "Perform various duties at festivals, including ticket scanning, crowd management, and information services.",
        icon: Tent,
        tags: ["Festivals", "Events"],
        image: "/img/Festival Staff.jpg"
    },
    {
        title: "Sound Engineer",
        company: "Festivals",
        description: "Manage audio equipment for live performances at festivals.",
        icon: Music,
        tags: ["Festivals", "Events", "Stadiums"],
        image: "/img/Sound Engineer.jpg"
    }
];

export const jobTitles = allJobs.map(job => job.title);

export const jobCategories = ["All", ...Array.from(new Set(allJobs.map(job => job.company)))];

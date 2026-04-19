/* Footer.tsx */
import { Link } from "react-router-dom";
import { CommandIcon } from "lucide-react";

const menuItems = [
    {
        title: "Product",
        links: [
            { text: "Overview", url: "#" },
            { text: "Pricing", url: "#" },
            { text: "Marketplace", url: "#" },
            { text: "Features", url: "#" },
            { text: "Integrations", url: "#" },
            { text: "Pricing", url: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { text: "About", url: "#" },
            { text: "Team", url: "#" },
            { text: "Blog", url: "#" },
            { text: "Careers", url: "#" },
            { text: "Contact", url: "#" },
            { text: "Privacy", url: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { text: "Help", url: "#" },
            { text: "Sales", url: "#" },
            { text: "Advertise", url: "#" },
        ],
    },
    {
        title: "Social",
        links: [
            { text: "Twitter", url: "#" },
            { text: "Instagram", url: "#" },
            { text: "LinkedIn", url: "#" },
        ],
    },
];

const bottomLinks = [
    { text: "Terms and Conditions", url: "/terms" },
    { text: "Privacy Policy", url: "/privacy" },
];

export default function Footer() {
    return (
        <section className="py-4 border-t">
            <footer>
                <div className="container mx-auto grid grid-cols-2 gap-8 lg:grid-cols-6">
                    <div className="col-span-2 mb-8 lg:mb-0">
                        <div className="flex items-center gap-2 lg:justify-start">
                            <Link to="/" className="flex items-center gap-2">
                                <CommandIcon className="size-5!" />
                                <span className="text-lg font-semibold tracking-tighter">
                                    Trakor
                                </span>
                            </Link>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            An AI-powered vehicle speed monitoring platform.
                        </p>
                    </div>
                    {menuItems.map((section, sectionIdx) => (
                        <div key={sectionIdx}>
                            <h3 className="mb-4 font-bold">{section.title}</h3>
                            <ul className="space-y-4 text-muted-foreground">
                                {section.links.map((link, linkIdx) => (
                                    <li
                                        key={linkIdx}
                                        className="font-medium hover:text-primary"
                                    >
                                        <a href={link.url}>{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-24 border-t">
                    <div className="container mx-auto flex flex-col justify-between gap-4 pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
                        <p>© {new Date().getFullYear()} Trakor. All rights reserved.</p>
                        <ul className="flex gap-4">
                            {bottomLinks.map((link, linkIdx) => (
                                <li key={linkIdx} className="underline hover:text-primary">
                                    <Link to={link.url}>{link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </footer>
        </section>
    );
};



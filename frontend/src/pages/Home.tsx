/* Home.tsx */
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import image from "@/assets/cover.png";
import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa6";

export default function Home() {
    return (
        <section className="py-32">
            <div className="container">
                <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
                        <Badge variant="outline">
                            Your AI Tracker
                            <ArrowUpRight className="ml-2 size-4" />
                        </Badge>
                        <h1 className="text-4xl font-bold text-pretty lg:text-6xl">
                            Trakor
                        </h1>
                        <p className="max-w-xl text-muted-foreground lg:text-xl">
                            An AI-powered website that helps you track vehicle speeds in real-time.
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            <Button asChild className="w-full sm:w-auto">
                                <Link to="/sign-up">
                                    Sign Up
                                </Link>
                            </Button>

                            <Button asChild variant="outline" className="w-full sm:w-auto">
                                <a href="https://github.com/mhanzlah/trakor" target="_blank" rel="noopener noreferrer">
                                    Source Code
                                    <FaGithub className="size-4" />
                                </a>
                            </Button>
                        </div>
                    </div>
                    <img
                        src={image}
                        alt="Image"
                        className="aspect-video w-full rounded-md object-cover"
                    />
                </div>
            </div>
        </section>
    );
};



/* AuthLayout.tsx */
import { CommandIcon } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

import image from "@/assets/cover.png";

export default function AuthLayout() {
    return (
        <>
            <div className="grid min-h-svh lg:grid-cols-2">
                <div className="flex flex-col gap-4 p-6 md:p-10">
                    <div className="flex justify-center gap-2 md:justify-start">
                        <Link to="/" className="flex items-center gap-2 font-medium" >
                            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                                <CommandIcon className="size-4" />
                            </div>
                            Trakor</Link>
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                        <div className="w-full max-w-xs">
                            <Outlet />
                        </div>
                    </div>
                </div>
                <div className="relative w-[50vw] overflow-hidden hidden bg-muted lg:block">
                    <img
                        src={image}
                        alt="Image"
                        className="absolute top-0 left-0 w-full h-full object-cover object-left-top dark:brightness-[0.2] dark:grayscale"
                    />
                </div>
            </div>
        </>
    );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/menu" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact & Book", href: "/contact" },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-black/80 backdrop-blur-md transition-all">
            <div className="max-w-[85rem] flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-xl font-semibold text-white tracking-wide"
                >
                    <UtensilsCrossed className="size-6 text-amber-500" />
                    The Saffron Table
                </Link>
                <div className="md:hidden">
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-white/20 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white disabled:opacity-50"
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                    </button>
                </div>
                <div
                    className={cn(
                        "hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto",
                        isOpen && "block h-auto"
                    )}
                >
                    <div className="flex flex-col gap-5 mt-5 md:flex-row md:items-center md:justify-end md:mt-0 md:ps-5">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="font-medium text-white/70 hover:text-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:ring-offset-2 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

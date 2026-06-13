"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full px-4 py-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-black px-6 py-3 shadow-lg">
                {/* Logo */}
                <Link href="/" className="text-xl font-black">
                    Rahul<span className="text-lime-500">.</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
                    <Link href="#services" className="hover:text-lime-600">
                        Services
                    </Link>

                    <Link href="#portfolio" className="hover:text-lime-600">
                        Portfolio
                    </Link>

                    <Link href="#case-studies" className="hover:text-lime-600">
                        Case Studies
                    </Link>

                    <Link href="#testimonials" className="hover:text-lime-600">
                        Testimonials
                    </Link>

                    <Link href="#faq" className="hover:text-lime-600">
                        FAQ
                    </Link>
                </nav>

                {/* CTA */}
                <div className="hidden lg:flex">
                    <button className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition hover:scale-105">
                        Let&apos;s Talk
                    </button>
                </div>

                {/* Mobile Menu */}
                <button className="lg:hidden">
                    <Menu size={24} />
                </button>
            </div>
        </header>
    );
}
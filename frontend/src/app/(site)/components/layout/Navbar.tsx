"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    // { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <div className="w-full bg-[#f5f5f7] text-center text-[12px] text-[#1d1d1f] py-2.25 px-4 leading-tight">
                Available for freelance projects.{" "}
                <Link href="/contact" className="underline underline-offset-2 hover:text-[#0071e3] transition-colors">
                    Lets talk → 
                </Link>
            </div>

            <header
                className={`
            sticky top-0 z-50 w-full h-14
            transition-all duration-300
            ${scrolled
                        ? "bg-[rgba(255,255,255,0.85)] backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.08)]"
                        : "bg-[rgba(255,255,255,0.72)] backdrop-blur-xl"
                    }
        `}
            >
                <nav className="max-w-245 mx-auto h-full flex items-center justify-between px-4">

                    {/* ── Logo ── */}
                    <Link
                        href="/"
                        className="text-[#1d1d1f] text-[17px] font-semibold tracking-tight hover:opacity-70 transition-opacity"
                        onClick={() => setMenuOpen(false)}
                    >
                        RahulShakya.
                    </Link>

                    {/* ── Desktop nav links ── */}
                    <ul className="hidden md:flex items-center gap-0">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="
                                        block px-3 text-[12px] text-[#1d1d1f]
                                        opacity-80 hover:opacity-100
                                        transition-opacity duration-200
                                        whitespace-nowrap
                                        "
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* ── Right side actions ── */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Search icon */}
                        <button
                            aria-label="Search"
                            className="text-[#1d1d1f] opacity-80 hover:opacity-100 transition-opacity"
                        >
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.3" />
                                <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                            </svg>
                        </button>

                        {/* CTA — "Hire me" styled like Apple's bag icon but as text */}
                        <Link
                            href="/contact"
                            className="
                text-[12px] text-[#0071e3]
                hover:underline underline-offset-2
                transition-all duration-200
                whitespace-nowrap
              "
                        >
                            Hire me
                        </Link>
                    </div>

                    {/* ── Mobile hamburger ── */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        <span
                            className={`block w-[18px] h-[1.5px] bg-[#1d1d1f] transition-all duration-300 origin-center
                ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}
              `}
                        />
                        <span
                            className={`block w-[18px] h-[1.5px] bg-[#1d1d1f] transition-all duration-300
                ${menuOpen ? "opacity-0 scale-x-0" : ""}
              `}
                        />
                        <span
                            className={`block w-[18px] h-[1.5px] bg-[#1d1d1f] transition-all duration-300 origin-center
                ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}
              `}
                        />
                    </button>
                </nav>
            </header>

            {/* ── Mobile Menu Overlay ── */}
            <div
                className={`
          fixed inset-0 z-40 md:hidden
          bg-[rgba(255,255,255,0.95)] backdrop-blur-xl
          flex flex-col
          transition-all duration-300 ease-in-out
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
            >
                {/* spacer for navbar height + announcement bar */}
                <div className="h-[82px]" />

                <ul className="flex flex-col px-6 pt-6 gap-0">
                    {navLinks.map((link, i) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="
                  flex items-center justify-between
                  py-4 text-[17px] text-[#1d1d1f]
                  border-b border-[#d2d2d7]
                  hover:text-[#0071e3] transition-colors
                "
                                style={{
                                    transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
                                    transform: menuOpen ? "translateY(0)" : "translateY(8px)",
                                    opacity: menuOpen ? 1 : 0,
                                    transition: `opacity 0.3s ease ${i * 40}ms, transform 0.3s ease ${i * 40}ms, color 0.2s`,
                                }}
                            >
                                {link.label}
                                <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
                                    <path d="M1 1L7 6.5L1 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="px-6 pt-8">
                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="
              block w-full text-center
              bg-[#0071e3] text-white
              text-[15px] font-medium
              py-3 rounded-[980px]
              hover:bg-[#0077ed] transition-colors
            "
                    >
                        Hire me
                    </Link>
                </div>
            </div>
        </>
    );
}

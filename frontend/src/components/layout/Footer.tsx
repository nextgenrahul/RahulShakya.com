import Link from "next/link";
import { Mail } from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-[#5A3B8C] px-6 py-20 text-white">
            <div className="mx-auto max-w-7xl">
                {/* Card */} 
                <div className="rounded-[40px] bg-white p-10 text-black">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
                        {/* Brand */}
                        <div className="lg:col-span-2">
                            <h2 className="mb-4 text-3xl font-black">
                                Rahul<span className="text-lime-500">.</span>
                            </h2>

                            <p className="max-w-sm text-zinc-600">
                                Full Stack Developer focused on building scalable
                                applications, beautiful user experiences, and
                                reliable backend systems.
                            </p>

                            <button className="mt-6 rounded-full bg-lime-400 px-5 py-3 font-semibold text-black">
                                Work With Me
                            </button>
                        </div>

                        {/* Links */}
                        <div>
                            <h3 className="mb-4 font-bold">Company</h3>

                            <ul className="space-y-3 text-zinc-600">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="#services">Services</Link>
                                </li>
                                <li>
                                    <Link href="#portfolio">Portfolio</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 font-bold">Resources</h3>

                            <ul className="space-y-3 text-zinc-600">
                                <li>
                                    <Link href="/">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/">Case Studies</Link>
                                </li>
                                <li>
                                    <Link href="/">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 font-bold">Connect</h3>

                            <div className="flex gap-4">
                                <Link href="/">
                                    <FaGithub size={20} />
                                </Link>

                                <Link href="/">
                                    <FaLinkedin size={20} />
                                </Link>

                                <Link href="/">
                                    <FaInstagram size={20} />
                                </Link>

                                <Link href="/">
                                    <FaXTwitter size={20} />
                                </Link>

                                <Link href="/">
                                    <Mail size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-white/80 md:flex-row">
                    <p>
                        © {new Date().getFullYear()} Rahul Shakya. All rights
                        reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link href="/">Privacy Policy</Link>
                        <Link href="/">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
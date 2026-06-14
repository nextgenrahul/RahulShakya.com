import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#030303] text-white">
            {/* Subtle Glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[180px]" />

            <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-20">
                <div className="grid w-full gap-20 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center">
                        <span className="mb-6 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 backdrop-blur-xl">
                            🚀 Full Stack Engineer • Software Architect
                        </span>

                        <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
                            Building scalable software products for ambitious businesses.
                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                            I design and develop modern web applications, SaaS products,
                            automation systems, and scalable backend architectures using
                            Next.js, React, FastAPI, PostgreSQL, and cloud-native tools.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-zinc-200">
                                View Projects
                            </button>

                            <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10">
                                Book Discovery Call
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="mt-16 flex flex-wrap gap-12">
                            <div>
                                <h3 className="text-3xl font-bold">20+</h3>
                                <p className="mt-1 text-sm text-zinc-500">
                                    Projects Built
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold">3+</h3>
                                <p className="mt-1 text-sm text-zinc-500">
                                    Years of Learning
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold">100%</h3>
                                <p className="mt-1 text-sm text-zinc-500">
                                    Client Focused
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="relative flex items-center justify-center">
                        {/* Main Image */}
                        <div className="relative h-[650px] w-full max-w-[550px] overflow-hidden rounded-[40px] border border-white/10 bg-[#0A0A0A]">
                            <Image
                                src="/hero-image.jpg"
                                alt="Rahul Shakya"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width:768px)100vw,50vw"
                            />
                        </div>

                        {/* Floating Card 1 */}
                        <div className="absolute -left-6 bottom-8 rounded-3xl border border-white/10 bg-[#111111]/80 p-6 backdrop-blur-xl">
                            <h4 className="text-xl font-bold">Next.js</h4>

                            <p className="mt-2 text-sm text-zinc-400">
                                Production-grade web applications
                            </p>
                        </div>

                        {/* Floating Card 2 */}
                        <div className="absolute right-0 top-16 rounded-3xl border border-white/10 bg-[#111111]/80 p-6 backdrop-blur-xl">
                            <h4 className="text-xl font-bold">FastAPI</h4>

                            <p className="mt-2 text-sm text-zinc-400">
                                High-performance backend systems
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
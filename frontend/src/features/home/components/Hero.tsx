import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-[#C9E33D]">
            <div className="mx-auto flex min-h-225 max-w-7xl items-center px-6 pt-32 pb-20">
                <div className="grid w-full gap-16 lg:grid-cols-2">

                    {/* Left Side */}
                    <div className="flex flex-col justify-center">
                        <span className="mb-6 inline-flex w-fit rounded-full bg-white px-4 py-2 text-sm font-semibold">
                            🚀 Full Stack Developer
                        </span>

                        <h1 className="max-w-2xl text-5xl font-black leading-[1.05] text-black md:text-7xl">
                            Building modern web applications that people love to use.
                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-black/70">
                            I help startups and businesses create scalable web
                            applications using React, Next.js, Node.js and PostgreSQL.
                            From idea to deployment, I build products that solve real
                            problems.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <button className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105">
                                View Projects
                            </button>

                            <button className="rounded-full border-2 border-black px-8 py-4 font-semibold">
                                Contact Me
                            </button>
                        </div>

                        <div className="mt-16 flex gap-12">
                            <div>
                                <h3 className="text-3xl font-black">20+</h3>
                                <p className="text-sm text-black/60">
                                    Projects Completed
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-black">2+</h3>
                                <p className="text-sm text-black/60">
                                    Years Learning
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-black">100%</h3>
                                <p className="text-sm text-black/60">
                                    Passion Driven
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative h-162.5 w-full max-w-137.5 overflow-hidden rounded-[40px] bg-black shadow-2xl">
                            <Image
                                src="/hero-image.jpg"
                                alt="Rahul Shakya"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -left-6 rounded-3xl bg-white p-6 shadow-xl">
                            <h4 className="text-2xl font-black">MERN</h4>
                            <p className="text-sm text-zinc-500">
                                React • Node • PostgreSQL
                            </p>
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -right-4 top-10 rounded-3xl bg-white p-6 shadow-xl">
                            <h4 className="text-2xl font-black">Next.js</h4>
                            <p className="text-sm text-zinc-500">
                                Production Ready Apps
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
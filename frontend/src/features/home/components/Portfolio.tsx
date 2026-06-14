export default function Portfolio() {
    const projects = [
        {
            title: "LinksToMe",
            description:
                "A modern link-in-bio platform with authentication, analytics, custom themes, and profile management.",
            tech: ["React", "Node.js", "PostgreSQL"],
        },
        {
            title: "RahulShakya.com",
            description:
                "Personal portfolio showcasing projects, skills, experience, and technical articles.",
            tech: ["Next.js", "Tailwind", "TypeScript"],
        },
        {
            title: "Auth Boilerplate",
            description:
                "Production-ready authentication system with JWT, refresh tokens, PostgreSQL, and Docker.",
            tech: ["Express", "PostgreSQL", "Docker"],
        },
    ];

    return (
        <section id="portfolio" className="bg-[#050505] py-32">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-20">
                    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                        Portfolio
                    </span>

                    <h2 className="mt-6 max-w-4xl text-5xl font-black text-white md:text-7xl">
                        Projects Ive built while learning and growing as a developer.
                    </h2>

                    <p className="mt-6 max-w-2xl text-lg text-white/70">
                        Real-world applications focused on performance,
                        scalability, authentication, databases, and user experience.
                    </p>
                </div>

                {/* Featured Project */}
                <div className="mb-10 overflow-hidden rounded-[40px] bg-white">
                    <div className="grid lg:grid-cols-2">
                        {/* Image */}
                        <div className="flex min-h-112.5 items-center justify-center bg-zinc-100">
                            <div className="text-center">
                                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-black" />
                                <p className="font-semibold text-zinc-500">
                                    Project Preview
                                </p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-10 lg:p-14">
                            <span className="rounded-full bg-lime-300 px-4 py-2 text-sm font-semibold">
                                Featured Project
                            </span>

                            <h3 className="mt-6 text-4xl font-black">
                                LinksToMe
                            </h3>

                            <p className="mt-6 leading-8 text-zinc-600">
                                A complete link-in-bio platform allowing creators to
                                manage links, track analytics, customize themes,
                                and grow their online presence.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm">
                                    React
                                </span>

                                <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm">
                                    Express
                                </span>

                                <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm">
                                    PostgreSQL
                                </span>

                                <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm">
                                    Docker
                                </span>
                            </div>

                            <div className="mt-10 flex gap-4">
                                <button className="rounded-full bg-black px-6 py-3 font-semibold text-white">
                                    Live Demo
                                </button>

                                <button className="rounded-full border border-black px-6 py-3 font-semibold">
                                    Source Code
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="rounded-4xl bg-white p-8 transition hover:-translate-y-2"
                        >
                            <div className="mb-6 h-48 rounded-2xl bg-zinc-100" />

                            <h3 className="text-2xl font-black">
                                {project.title}
                            </h3>

                            <p className="mt-4 text-zinc-600">
                                {project.description}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.tech.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full bg-zinc-100 px-3 py-1 text-sm"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <button className="mt-8 font-semibold">
                                View Project →
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className="mt-20 grid gap-6 md:grid-cols-3">
                    <div className="rounded-3xl bg-white p-8">
                        <h3 className="text-5xl font-black">20+</h3>
                        <p className="mt-2 text-zinc-600">
                            Projects Completed
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-8">
                        <h3 className="text-5xl font-black">10+</h3>
                        <p className="mt-2 text-zinc-600">
                            Technologies Learned
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-8">
                        <h3 className="text-5xl font-black">100%</h3>
                        <p className="mt-2 text-zinc-600">
                            Passion For Building
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default function Testimonials() {
    const testimonials = [
        {
            name: "John Smith",
            role: "Startup Founder",
            review:
                "Rahul delivered a clean, scalable application and communicated clearly throughout the project. The final result exceeded expectations.",
        },
        {
            name: "Sarah Johnson",
            role: "Product Manager",
            review:
                "Excellent attention to detail and strong technical skills. The application was fast, responsive, and production-ready.",
        },
        {
            name: "Michael Brown",
            role: "Business Owner",
            review:
                "Professional, reliable, and highly motivated. Rahul transformed our ideas into a fully functional platform.",
        },
    ];

    return (
        <section id="testimonials" className="bg-[#050505] py-32">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-20 text-center">
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-medium">
                        Testimonials
                    </span>

                    <h2 className="mt-6 text-5xl font-black md:text-7xl">
                        What people say about my work
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
                        Building products is not just about code. Its about solving
                        problems and creating experiences that users enjoy.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid gap-8 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="rounded-[36px] bg-white p-8 shadow-sm transition hover:-translate-y-2"
                        >
                            {/* Stars */}
                            <div className="mb-6 flex gap-1 text-2xl">
                                ⭐⭐⭐⭐⭐
                            </div>

                            <p className="text-lg leading-8 text-zinc-700">
                                {testimonial.review}
                            </p>

                            <div className="mt-8 flex items-center gap-4">
                                {/* Avatar */}
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2D63D6] text-lg font-bold text-white">
                                    {testimonial.name.charAt(0)}
                                </div>

                                <div>
                                    <h4 className="font-bold">
                                        {testimonial.name}
                                    </h4>

                                    <p className="text-sm text-zinc-500">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-20 grid gap-6 md:grid-cols-3">
                    <div className="rounded-3xl bg-white p-8 text-center">
                        <h3 className="text-5xl font-black">20+</h3>
                        <p className="mt-2 text-zinc-600">
                            Projects Completed
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 text-center">
                        <h3 className="text-5xl font-black">100%</h3>
                        <p className="mt-2 text-zinc-600">
                            Client Satisfaction
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 text-center">
                        <h3 className="text-5xl font-black">24/7</h3>
                        <p className="mt-2 text-zinc-600">
                            Passion For Learning
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
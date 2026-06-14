export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Modern, responsive interfaces built with React, Next.js, TypeScript, and Tailwind CSS.",
      color: "bg-[#C9E33D]",
      textColor: "text-black",
    },
    {
      title: "Backend Development",
      description:
        "Scalable APIs, authentication systems, databases, and business logic using Node.js.",
      color: "bg-white",
      textColor: "text-black",
    },
    {
      title: "Database Design",
      description:
        "Production-ready PostgreSQL architecture, indexing, optimization, and security.",
      color: "bg-[#DDAFE8]",
      textColor: "text-black",
    },
    {
      title: "DevOps & Deployment",
      description:
        "Docker, VPS deployment, CI/CD pipelines, monitoring, and server management.",
      color: "bg-[#101010]",
      textColor: "text-white",
    },
  ];

  return (
    <section id="services" className="bg-[#030303] py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
            Services
          </span>

          <h2 className="mt-6 max-w-4xl text-5xl font-black text-white md:text-7xl">
            Everything needed to build and scale modern web applications.
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-white/70">
            From frontend interfaces to backend systems and deployment,
            I create complete solutions that are fast, scalable, and maintainable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className={`${service.color} ${service.textColor}
              rounded-[36px] p-8 transition duration-300 hover:-translate-y-2`}
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#09090B]/10 text-2xl font-black">
                0{services.indexOf(service) + 1}
              </div>

              <h3 className="text-2xl font-black">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 opacity-80">
                {service.description}
              </p>

              <button className="mt-8 font-semibold">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8">
            <h3 className="text-5xl font-black">20+</h3>
            <p className="mt-2 text-zinc-600">
              Projects Built
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8">
            <h3 className="text-5xl font-black">10+</h3>
            <p className="mt-2 text-zinc-600">
              Technologies Used
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8">
            <h3 className="text-5xl font-black">24/7</h3>
            <p className="mt-2 text-zinc-600">
              Learning & Improving
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
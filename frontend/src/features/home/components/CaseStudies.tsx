export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="bg-[#D8DDC8] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl bg-[#8A9560] p-8 text-white">
              <h3 className="text-4xl font-black">20+</h3>
              <p className="mt-2 text-sm">
                Projects Completed
              </p>
            </div>

            <div className="rounded-3xl bg-[#DDAFE8] p-8">
              <h3 className="text-4xl font-black">643+</h3>
              <p className="mt-2 text-sm">
                GitHub Contributions
              </p>
            </div>

            <div className="rounded-3xl bg-[#B08AF0] p-8 text-white">
              <h3 className="text-4xl font-black">99%</h3>
              <p className="mt-2 text-sm">
                Learning Consistency
              </p>
            </div>

            <div className="rounded-3xl bg-[#2049A8] p-8 text-white">
              <h3 className="text-4xl font-black">MERN</h3>
              <p className="mt-2 text-sm">
                Full Stack Development
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center">
            <span className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Case Studies
            </span>

            <h2 className="max-w-xl text-4xl font-black leading-tight md:text-6xl">
              From idea to deployment, every project follows a
              proven process.
            </h2>

            <p className="mt-6 max-w-lg text-lg text-black/70">
              I focus on creating scalable, maintainable, and
              user-friendly applications using modern technologies
              like Next.js, Node.js, PostgreSQL, Docker, and AWS.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <h3 className="text-xl font-bold">
                  01. Discovery
                </h3>
                <p className="text-black/70">
                  Understanding requirements, users, and business
                  goals.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  02. Development
                </h3>
                <p className="text-black/70">
                  Building responsive frontend and scalable backend
                  systems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  03. Deployment
                </h3>
                <p className="text-black/70">
                  Dockerized deployment with monitoring,
                  performance, and security in mind.
                </p>
              </div>
            </div>

            <button className="mt-10 w-fit rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-[#5A3B8C] py-32">
      {/* Decorative Circle */}
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-cyan-400/30 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
              🚀 Available For Work
            </span>

            <h2 className="max-w-2xl text-5xl font-black leading-tight text-white md:text-7xl">
              Let build your next web application together.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">
              Whether you need a modern SaaS platform, portfolio,
              dashboard, REST API, or full-stack web application,
              Im ready to help bring your idea to life.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#C9E33D] px-8 py-4 font-bold text-black transition hover:scale-105">
                Start a Project
              </button>

              <button className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="rounded-[40px] bg-white p-8 shadow-2xl">
              <h3 className="text-3xl font-black text-black">
                Get a Free Consultation
              </h3>

              <p className="mt-3 text-zinc-600">
                Tell me about your project and Il get back to you.
              </p>

              <form className="mt-8 space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-black"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-black"
                />

                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-black"
                />

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-black py-4 font-semibold text-white transition hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
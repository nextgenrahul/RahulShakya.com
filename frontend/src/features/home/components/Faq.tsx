"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I build modern web applications using Next.js, React, Node.js, PostgreSQL, Docker, and cloud technologies.",
  },
  {
    question: "Do you build full-stack applications?",
    answer:
      "Yes. I handle frontend, backend, database design, authentication, APIs, deployment, and maintenance.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Small projects typically take 1–3 weeks, while larger applications can take several months depending on complexity.",
  },
  {
    question: "Can you work with existing projects?",
    answer:
      "Absolutely. I can improve, maintain, refactor, and scale existing applications.",
  },
  {
    question: "Do you provide deployment support?",
    answer:
      "Yes. I deploy applications using Docker, VPS servers, cloud platforms, CI/CD pipelines, and PostgreSQL databases.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#030303] py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Everything you need to know before starting a project
            with me.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white"
            >
              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? null : index
                  )
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <span className="text-lg font-bold text-black">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-8 pb-8">
                  <p className="leading-7 text-zinc-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-white/70">
            Still have questions?
          </p>

          <button className="mt-5 rounded-full bg-[#C9E33D] px-8 py-4 font-bold text-black transition hover:scale-105">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
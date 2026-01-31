"use client";

import Link from "next/link";

const focusAreas = [
  { name: "AI", icon: "🤖" },
  { name: "Robotics", icon: "🦾" },
  { name: "Energy", icon: "⚡" },
  { name: "Defense", icon: "🛡️" },
  { name: "Blockchain", icon: "⛓️" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="animate-fade-in-up animation-delay-600 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            About
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Bio Content */}
        <div className="space-y-8">
          {/* Main Role */}
          <div className="animate-fade-in-up animation-delay-700">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Currently serving as{" "}
              <span className="text-foreground font-semibold">
                VP of Engineering
              </span>{" "}
              at{" "}
              <Link
                href="https://saga.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-semibold hover:text-purple-500 transition-colors underline underline-offset-4 decoration-purple-500/30 hover:decoration-purple-500"
              >
                Saga.xyz
              </Link>
              , leading engineering teams building scalable blockchain infrastructure
              for the next generation of web3 applications.
            </p>
          </div>

          {/* VC Focus */}
          <div className="animate-fade-in-up animation-delay-800">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              I also run a{" "}
              <span className="text-foreground font-semibold">
                family office venture fund
              </span>
              , investing in transformative technologies that shape our future.
            </p>
          </div>

          {/* Focus Areas */}
          <div className="animate-fade-in-up animation-delay-900 pt-4">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Investment Focus Areas
            </p>
            <div className="flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <div
                  key={area.name}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300"
                >
                  <span className="text-lg">{area.icon}</span>
                  <span className="text-sm font-medium text-foreground">
                    {area.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="animate-fade-in-up animation-delay-1000 pt-6">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-base">Bay Area, California</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

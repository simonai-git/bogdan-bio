"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "Twitter",
    handle: "@balx",
    href: "https://twitter.com/balx",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "/in/alexandrescu",
    href: "https://linkedin.com/in/alexandrescu",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Email",
    handle: "bogdan@alexandrescu.io",
    href: "mailto:bogdan@alexandrescu.io",
    icon: (
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
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "Schedule",
    handle: "Book a call",
    href: "https://cal.com/bogdan-alexandrescu",
    icon: (
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
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "Resume",
    handle: "Download CV",
    href: "/resume.pdf",
    icon: <Download className="w-5 h-5" />,
    download: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="animate-fade-in-up animation-delay-100 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Intro Text */}
        <div className="animate-fade-in-up animation-delay-200 text-center mb-12">
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Interested in discussing investments, technology, or potential collaborations?
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="animate-fade-in-up animation-delay-300 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {socialLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              target={link.href.startsWith("mailto:") || link.href.startsWith("/") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") || link.href.startsWith("/") ? undefined : "noopener noreferrer"}
              download={"download" in link ? link.download : undefined}
              className={`animate-fade-in-up animation-delay-${(index + 3) * 100} group flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-indigo-500/30 transition-all duration-300">
                <span className="text-muted-foreground group-hover:text-purple-500 transition-colors">
                  {link.icon}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-muted-foreground">
                  {link.name}
                </p>
                <p className="text-base font-semibold text-foreground truncate group-hover:text-purple-500 transition-colors">
                  {link.handle}
                </p>
              </div>
              <svg
                className="w-5 h-5 text-muted-foreground group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up animation-delay-700 text-center">
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
          >
            <Link href="mailto:bogdan@alexandrescu.io">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send a Message
            </Link>
          </Button>
        </div>

        {/* Decorative Element */}
        <div className="animate-fade-in animation-delay-800 pt-16">
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500/60 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-purple-500/40 animate-pulse animation-delay-100" />
            <div className="w-2 h-2 rounded-full bg-purple-500/20 animate-pulse animation-delay-200" />
          </div>
        </div>
      </div>
    </section>
  );
}

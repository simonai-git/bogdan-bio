"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Avatar with gradient background */}
        <div className="animate-fade-in-up">
          <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 p-1 shadow-xl shadow-purple-500/25">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-500 flex items-center justify-center">
                <span className="text-4xl sm:text-5xl font-bold text-white">BA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Name */}
        <div className="animate-fade-in-up animation-delay-100">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
            Bogdan Alexandrescu
          </h1>
        </div>

        {/* Title */}
        <div className="animate-fade-in-up animation-delay-200">
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
            VP of Engineering @ <span className="text-foreground font-semibold hover:text-purple-500 transition-colors">
              <Link href="https://saga.xyz" target="_blank" rel="noopener noreferrer">
                Saga.xyz
              </Link>
            </span>
          </p>
        </div>

        {/* Tagline */}
        <div className="animate-fade-in-up animation-delay-300">
          <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Building the future at the intersection of{" "}
            <span className="text-foreground font-medium">AI</span>,{" "}
            <span className="text-foreground font-medium">Robotics</span> &{" "}
            <span className="text-foreground font-medium">Web3</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="animate-fade-in-up animation-delay-400 flex flex-wrap justify-center gap-4 pt-4">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300"
          >
            <Link
              href="https://twitter.com/balx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg
                className="w-5 h-5 group-hover:text-purple-500 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>@balx</span>
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="group hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300"
          >
            <Link
              href="https://linkedin.com/in/alexandrescu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg
                className="w-5 h-5 group-hover:text-purple-500 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </Link>
          </Button>
        </div>

        {/* Subtle decorative element */}
        <div className="animate-fade-in animation-delay-500 pt-8">
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

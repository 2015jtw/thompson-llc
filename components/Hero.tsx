import Image from 'next/image';
import React from 'react';
import { ArrowRight, LineChart, Sparkles } from 'lucide-react';

export default function EnhancedHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto sm:py-8 px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">
                Transforming Global Development
              </span>
            </div>

            {/* Main heading with gradient */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-emerald-200 bg-clip-text text-transparent">
                Empowering Sustainable Growth
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
              Strategic consulting for international development, private sector
              growth, and urban innovation
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold text-white hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-slate-400">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">20+</div>
                <div className="text-sm text-slate-400">Countries</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-slate-400">Years</div>
              </div>
            </div>
          </div>

          {/* Right content - Image with card overlay */}
          <div className="flex-1 relative max-w-lg w-full">
            <div
              className="absolute -inset-10 bg-blue-500/10 blur-3xl"
              aria-hidden="true"
            ></div>
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-slate-900/40 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/carrie-thompson-original.webp"
                  alt="Carrie Thompson, Founder and Principal Consultant"
                  fill
                  priority
                  className="object-cover [object-position:center_55%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent"></div>

                {/* Top badges */}
                <div className="absolute inset-x-6 top-6 flex flex-col gap-3">
                  <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-100/90">
                    <Sparkles className="h-4 w-4 text-emerald-300" />
                    Proven Impact
                  </div>
                </div>

                {/* Bottom insight pill */}
                <div className="absolute inset-x-6 bottom-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 backdrop-blur">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-300/80">
                      Sustainable Outcomes
                    </p>
                    <p className="text-sm font-semibold text-white">
                      93% of projects exceed KPI targets
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
                    <LineChart className="h-5 w-5 text-blue-200" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating expert card */}
            <div className="relative mt-8 ml-10 max-w-sm rounded-2xl border border-white/10 bg-white/95 p-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 text-white">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    Expert Consultation
                  </div>
                  <div className="text-xs text-slate-600">
                    Available 24/7 for mission-critical support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}

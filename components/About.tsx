import Image from 'next/image';
import React from 'react';
import { Award, Users, Globe, Target, CheckCircle } from 'lucide-react';

const stats = [
  { icon: Award, value: '15+', label: 'Years Experience', color: 'from-blue-600 to-blue-400' },
  { icon: Users, value: '200+', label: 'Clients Served', color: 'from-emerald-600 to-emerald-400' },
  { icon: Globe, value: '35+', label: 'Countries', color: 'from-purple-600 to-purple-400' },
  { icon: Target, value: '98%', label: 'Success Rate', color: 'from-orange-600 to-orange-400' }
];

const achievements = [
  'UN Development Programme Partner',
  'World Bank Consultant Network',
  'International Development Expert',
  'Published Author & Thought Leader',
  'TEDx Speaker on Global Development',
  'Advisory Board Member - Multiple NGOs'
];

export default function EnhancedAbout() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-semibold text-sm mb-4">
            About Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meet
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"> Carrie Thompson</span>
          </h2>
          <p className="text-xl text-slate-600">
            International development expert with over 15 years of experience transforming organizations and communities worldwide
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-[36px] overflow-hidden shadow-2xl border border-slate-100">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/about-carrie.jpg"
                  alt="Carrie Thompson delivering a keynote at the Asian Institute of Technology"
                  fill
                  priority
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-900/10 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="pointer-events-none absolute -top-6 -left-6 w-36 h-36 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="pointer-events-none absolute -bottom-6 -right-6 w-36 h-36 bg-emerald-500/20 rounded-full blur-2xl"></div>

              {/* Quote card overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
                <p className="text-slate-700 italic mb-2">
                  &quot;Sustainable development is not just about economics—it&apos;s about creating lasting positive change in people&apos;s lives.&quot;
                </p>
                <div className="text-sm font-semibold text-blue-600">— Carrie Thompson</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed">
                Carrie Thompson is a distinguished international development consultant with extensive experience working across government agencies, multilateral organizations, and private sector clients.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Her expertise spans sustainable private sector development, economic growth planning, and urban development strategy. With a deep commitment to creating measurable impact, Carrie has led transformative projects in over 35 countries.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Prior to founding Thompson LLC, she served as a senior advisor to the UN Development Programme and held leadership positions at prominent development firms.
              </p>
            </div>

            {/* Achievements list */}
            <div className="pt-6 space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Schedule a Consultation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`
                    w-14 h-14 rounded-xl bg-gradient-to-r ${stat.color}
                    flex items-center justify-center mb-4
                    group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500
                  `}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Stats */}
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 font-medium">
                    {stat.label}
                  </div>

                  {/* Hover effect */}
                  <div className={`
                    absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color}
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    -z-10 blur-xl
                  `}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
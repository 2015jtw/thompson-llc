"use client";

import React, { useState } from 'react';
import { Globe, Handshake, Leaf, Building, User, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Handshake,
    title: "Private Sector Development",
    description: "Strategic frameworks for sustainable business growth and market expansion in emerging economies.",
    color: "from-blue-600 to-blue-400",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: Leaf,
    title: "Economic Growth Planning",
    description: "Comprehensive strategies for sustainable economic development and environmental stewardship.",
    color: "from-emerald-600 to-emerald-400",
    bgColor: "bg-emerald-500/10"
  },
  {
    icon: Building,
    title: "Urban Development",
    description: "Smart city solutions and urban planning strategies for modern, livable communities.",
    color: "from-purple-600 to-purple-400",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: User,
    title: "Leadership Advisory",
    description: "Executive mentorship and strategic guidance for organizational transformation.",
    color: "from-orange-600 to-orange-400",
    bgColor: "bg-orange-500/10"
  },
  {
    icon: TrendingUp,
    title: "Assessments & Analytics",
    description: "Data-driven insights and comprehensive analysis for informed decision-making.",
    color: "from-pink-600 to-pink-400",
    bgColor: "bg-pink-500/10"
  },
  {
    icon: Globe,
    title: "International Linkages",
    description: "Connecting organizations with global development agencies and funding opportunities.",
    color: "from-teal-600 to-teal-400",
    bgColor: "bg-teal-500/10"
  }
];

export default function EnhancedServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-semibold text-sm mb-4">
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Solutions for
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"> Global Impact</span>
          </h2>
          <p className="text-xl text-slate-600">
            Expertise across international development, strategy, and sustainable growth
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className={`
                  h-full bg-white rounded-2xl p-6 sm:p-7 lg:p-8 shadow-lg border border-slate-200
                  transition-all duration-500 ease-out
                  ${isHovered ? 'scale-[1.02] shadow-2xl -translate-y-1 sm:-translate-y-2' : ''}
                `}>
                  <div className="flex items-start gap-4 sm:gap-5 lg:flex-col lg:items-center lg:text-center">
                    {/* Icon container */}
                    <div className={`
                      relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${service.bgColor}
                      flex items-center justify-center flex-shrink-0
                      transition-transform duration-500
                      ${isHovered ? 'scale-110 rotate-3 lg:rotate-6' : ''}
                    `}>
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 lg:flex lg:flex-col lg:items-center">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-base text-slate-600 leading-relaxed mb-4 lg:mb-6">
                        {service.description}
                      </p>

                      {/* Progress bar animation */}
                      <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div className={`
                          h-full bg-gradient-to-r ${service.color} rounded-full
                          transition-all duration-700 ease-out
                          ${isHovered ? 'w-full' : 'w-0'}
                        `}></div>
                      </div>
                    </div>
                  </div>

                  {/* Gradient border effect on hover */}
                  <div className={`
                    absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color}
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    -z-10 blur-xl
                  `}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Schedule a Consultation
            </button>
            <button className="px-8 py-4 bg-white border-2 border-slate-200 rounded-xl font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
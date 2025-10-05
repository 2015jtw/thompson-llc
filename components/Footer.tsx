"use client";

import React from 'react';
import { Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const services = [
    { name: 'Private Sector Development', href: '#private-sector-development' },
    { name: 'Economic Planning', href: '#economic-planning' },
    { name: 'Urban Development', href: '#urban-development' },
    { name: 'Leadership Advisory', href: '#leadership-advisory' },
    { name: 'Analytics', href: '#analytics' },
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Gradient background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold">Thompson LLC</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Empowering sustainable growth through strategic consulting in international development and private sector innovation.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/carrie-thompson-6a61588/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Challenge', 'Services', 'About'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-500 group-hover:w-4 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-emerald-500 group-hover:w-4 transition-all duration-300"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 py-6 text-sm text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Thompson LLC. All rights reserved. Built with excellence.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms of Service</a>
            <a href="#cookies" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white shadow-lg hover:scale-110 transition-transform"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
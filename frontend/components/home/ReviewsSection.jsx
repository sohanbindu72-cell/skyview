"use client";
import React from "react";

export default function ReviewsSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 md:px-12 bg-white">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Hero Review */}
        <div className="lg:w-1/3">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-8">What Our VIPs Say</h2>
          <div className="flex text-[#ea580c] mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            ))}
          </div>
          <blockquote className="text-2xl font-light text-gray-600 italic mb-8 leading-snug">
            "The seamless transition from the aircraft to my private chauffeur was remarkable. D'LUXE sets the gold standard for travel."
          </blockquote>
          <div className="flex items-center gap-4">
            <img src="https://i.pravatar.cc/150?img=11" alt="James Worthington" className="w-14 h-14 rounded-full" />
            <div>
              <h4 className="font-bold text-gray-900">James Worthington</h4>
              <p className="text-sm text-gray-500">CEO, Global Ventures</p>
            </div>
          </div>
        </div>

        {/* Right Reviews Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <p className="text-gray-600 italic mb-6">"The private terminal in Dubai was an oasis of calm. Worth every penny."</p>
              <p className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">- SARAH JENKINS</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <p className="text-gray-600 italic mb-6">"Absolutely stress-free. My concierge took care of everything from luggage to fast-track."</p>
              <p className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">- MARCUS AURELIUS</p>
            </div>
          </div>
          <div className="space-y-6 md:mt-12">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <p className="text-gray-600 italic mb-6">"Exceeded all expectations. The level of detail and care is unmatched in the industry."</p>
              <p className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">- ELENA RODRIGUEZ</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <p className="text-gray-600 italic mb-6">"A must-have for frequent business travelers. Efficiency at its finest."</p>
              <p className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">- THOMAS MULLER</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

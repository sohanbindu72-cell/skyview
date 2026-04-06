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
            "The transition from my private jet to the chauffeur was flawlessly executed. D'LUXE has entirely redefined the standard for elite travel."
          </blockquote>
          <div className="flex items-center gap-4">
            <img src="https://i.pravatar.cc/150?img=11" alt="Alexander Sterling" className="w-14 h-14 rounded-full" />
            <div>
              <h4 className="font-bold text-gray-900">Alexander Sterling</h4>
              <p className="text-sm text-gray-500">Founder, Sterling Capital</p>
            </div>
          </div>
        </div>

        {/* Right Reviews Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <p className="text-gray-600 italic mb-6">"The private terminal in Paris provided an absolute sanctuary. Unparalleled privacy and impeccable service at every turn."</p>
              <p className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">- VICTORIA CHEN</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <p className="text-gray-600 italic mb-6">"Complete peace of mind. My dedicated concierge anticipated every requirement, from fast-track clearance to luggage handling."</p>
              <p className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">- RICHARD VANDERBILT</p>
            </div>
          </div>
          <div className="space-y-6 md:mt-12">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <p className="text-gray-600 italic mb-6">"An experience that surpasses all expectations. The discretion and obsessive attention to detail are truly in a class of their own."</p>
              <p className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">- ISABELLA ROSSELLINI</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <p className="text-gray-600 italic mb-6">"Essential protocol for our executive team's travel. D'LUXE guarantees flawless execution and time synchronization."</p>
              <p className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">- JONATHAN PIERCE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

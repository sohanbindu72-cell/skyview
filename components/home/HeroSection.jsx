"use client";
import React from "react";
import HeroBookingForm from "@/components/home/HeroBookingForm";

export default function HeroSection() {
  return (
    <header className="relative w-full min-h-screen md:h-[80vh] md:min-h-[600px] flex items-center bg-gray-900 py-32 md:py-0">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2600&auto=format&fit=crop" 
          alt="Private Jet Interior" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12 mt-24 md:mt-16">
        <div className="max-w-xl text-white">
          <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-wider text-[#ea580c] mb-6 backdrop-blur-sm uppercase">World Class Travel</span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Elevate Your <br/><span className="text-[#ea580c]">Journey</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Experience seamless airport transitions with our bespoke VIP concierge services. From private suites to dedicated tarmac transfers.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/100?img=1" alt="User 1" className="w-10 h-10 rounded-full border-2 border-gray-800" />
              <img src="https://i.pravatar.cc/100?img=2" alt="User 2" className="w-10 h-10 rounded-full border-2 border-gray-800" />
              <img src="https://i.pravatar.cc/100?img=3" alt="User 3" className="w-10 h-10 rounded-full border-2 border-gray-800" />
            </div>
            <span className="text-sm font-medium text-gray-300">Who we work with: 10k+ Elite Travelers</span>
          </div>
        </div>

        <HeroBookingForm />
      </div>
    </header>
  );
}

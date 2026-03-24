"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 w-full z-50 flex justify-between items-center py-6 px-4 md:px-12 text-white">
        <div className="flex items-center gap-2">
          {/* Logo SVG */}
          <svg className="w-8 h-8 text-[#ea580c]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 16.5l-6.5-3.5L12 9 7 13.5l1.5-4-4.5-5 3.5 1 5 3 4.5-3.5L22 16.5z" />
          </svg>
          <span className="text-xl font-bold tracking-tight">SKYLUXE <span className="text-[#ea580c]">VIP</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#" className="hover:text-[#ea580c] transition-colors">Services</a>
          <a href="#" className="hover:text-[#ea580c] transition-colors">Destinations</a>
          <a href="#" className="hover:text-[#ea580c] transition-colors">Reviews</a>
          <button className="bg-[#ea580c] hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold transition-colors">
            Book Now
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:text-[#ea580c] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0f172a]/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 text-white md:hidden animate-in fade-in duration-200">
          <a href="#" className="text-2xl font-bold hover:text-[#ea580c] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#" className="text-2xl font-bold hover:text-[#ea580c] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Destinations</a>
          <a href="#" className="text-2xl font-bold hover:text-[#ea580c] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
          <button className="bg-[#ea580c] hover:bg-orange-700 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors mt-4">
            Book Now
          </button>
        </div>
      )}
    </>
  );
}

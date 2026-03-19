"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [airport, setAirport] = useState("London Heathrow (LHR)");
  const [serviceType, setServiceType] = useState("VIP Terminal");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [email, setEmail] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans antialiased overflow-x-hidden">
      {/* Navbar */}
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

      {/* Hero Section */}
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
          {/* Hero Left Text */}
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

          {/* Hero Right Form */}
          <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-[#0f172a]">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Reserve Your Experience</h3>
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Select Airport</label>
                  <div className="relative">
                    <select 
                      value={airport}
                      onChange={(e) => setAirport(e.target.value)}
                      className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                    >
                      <option>London Heathrow (LHR)</option>
                      <option>Dubai (DXB)</option>
                      <option>New York (JFK)</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Service Type</label>
                  <div className="relative">
                    <select 
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                    >
                      <option>VIP Terminal</option>
                      <option>Meet & Greet</option>
                      <option>Private Suite</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Date</label>
                  <input 
                    type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c]" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Passengers</label>
                  <input 
                    type="number" 
                    min="1"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c]" 
                  />
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email Address</label>
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c]" 
                />
              </div>

              <button 
                onClick={() => {
                  const query = new URLSearchParams({
                    airport,
                    service: serviceType,
                    date,
                    passengers,
                    email
                  });
                  router.push(`/booking?${query.toString()}`);
                }}
                className="w-full bg-[#ea580c] hover:bg-orange-700 text-white font-bold py-3.5 rounded-lg mt-4 transition-colors shadow-lg shadow-orange-500/30"
              >
                Check Availability
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">No payment required today • 24/7 Concierge Support</p>
            </div>
          </div>
        </div>
      </header>

      {/* Elite Service Levels Section */}
      <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Elite Service Levels</h2>
          <div className="w-16 h-1 bg-[#ea580c] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
            <img src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=800&auto=format&fit=crop" alt="Meet & Greet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-32">
              <div className="bg-[#ea580c] w-10 h-10 flex items-center justify-center rounded-lg mb-4 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">VIP Meet & Greet</h3>
              <p className="text-gray-300 text-sm mb-4">Fast-track through security and immigration with a dedicated personal host.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><svg className="text-[#ea580c] w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> Luggage Assistance</li>
                <li className="flex items-center gap-2"><svg className="text-[#ea580c] w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> Fast-Track Immigration</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] border-2 border-[#ea580c]">
            <div className="absolute top-4 right-4 z-20 bg-[#ea580c] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              Popular
            </div>
            <img src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=800&auto=format&fit=crop" alt="VIP Terminal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-32 backdrop-blur-[2px]">
              <div className="bg-[#ea580c] w-10 h-10 flex items-center justify-center rounded-lg mb-4 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">VIP Terminal</h3>
              <p className="text-gray-300 text-sm mb-4">Avoid the main terminal entirely with access to a private, exclusive building.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><svg className="text-[#ea580c] w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> Private Customs & Security</li>
                <li className="flex items-center gap-2"><svg className="text-[#ea580c] w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> Fine Dining & Bar</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
            <img src="https://images.unsplash.com/photo-1571210862729-78a52d3779a2?q=80&w=800&auto=format&fit=crop" alt="Private Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-32">
              <div className="bg-[#ea580c] w-10 h-10 flex items-center justify-center rounded-lg mb-4 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">VIP Private Suite</h3>
              <p className="text-gray-300 text-sm mb-4">The ultimate in privacy. Your own soundproof suite with personal amenities.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><svg className="text-[#ea580c] w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> Private Bathroom & Shower</li>
                <li className="flex items-center gap-2"><svg className="text-[#ea580c] w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> Dedicated Butler</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Global Network</h2>
              <p className="text-gray-500">Available in over 150+ international airports.</p>
            </div>
            <a href="#" className="flex items-center gap-2 text-[#ea580c] font-semibold hover:text-orange-700 transition-colors">
              View All Destinations
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Dest 1 */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=600&auto=format&fit=crop" alt="London" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-white font-bold text-lg md:text-xl">London (LHR)</h4>
                <p className="text-gray-300 text-xs font-semibold uppercase tracking-wider">United Kingdom</p>
              </div>
            </div>
            {/* Dest 2 */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop" alt="Dubai" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-white font-bold text-lg md:text-xl">Dubai (DXB)</h4>
                <p className="text-gray-300 text-xs font-semibold uppercase tracking-wider">UAE</p>
              </div>
            </div>
            {/* Dest 3 */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=600&auto=format&fit=crop" alt="New York" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-white font-bold text-lg md:text-xl">New York (JFK)</h4>
                <p className="text-gray-300 text-xs font-semibold uppercase tracking-wider">USA</p>
              </div>
            </div>
            {/* Dest 4 */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=600&auto=format&fit=crop" alt="Paris" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-white font-bold text-lg md:text-xl">Paris (CDG)</h4>
                <p className="text-gray-300 text-xs font-semibold uppercase tracking-wider">France</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
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
              "The seamless transition from the aircraft to my private chauffeur was remarkable. SkyLuxe sets the gold standard for travel."
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

      {/* Footer */}
      <footer className="bg-[#0f172a] text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo Column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6 text-white">
              <svg className="w-8 h-8 text-[#ea580c]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 16.5l-6.5-3.5L12 9 7 13.5l1.5-4-4.5-5 3.5 1 5 3 4.5-3.5L22 16.5z" />
              </svg>
              <span className="text-xl font-bold tracking-tight">SKYLUXE <span className="text-[#ea580c]">VIP</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-xs">
              Providing elite airport concierge and VIP terminal services globally. Experience the pinnacle of luxury travel.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ea580c] hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ea580c] hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ea580c] hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-1"></div>

          {/* Company Links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Global Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Settings</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="max-w-7xl mx-auto px-4 md:px-12 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2026 SkyLuxe VIP Concierge. All rights reserved.</p>
          <div className="flex gap-4">
            <div className="w-8 h-5 bg-gray-800 rounded flex items-center justify-center text-[10px] font-bold">VISA</div>
            <div className="w-8 h-5 bg-gray-800 rounded flex items-center justify-center text-[10px] font-bold">MC</div>
            <div className="w-8 h-5 bg-gray-800 rounded flex items-center justify-center text-[10px] font-bold">AMEX</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

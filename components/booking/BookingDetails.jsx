import React, { useState, useEffect } from 'react';

export default function BookingDetails({ airport, date, passengers, activeService, setActiveService }) {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPkgs = async () => {
      try {
        const res = await fetch('/api/packages');
        if (res.ok) {
          const data = await res.json();
          const active = data.filter(p => p.isActive);
          setPackages(active);
          // If the current active service isn't in the list, default to first
          if (active.length > 0 && !active.find(p => p.name === activeService)) {
            setActiveService(active[0].name);
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPkgs();
  }, [activeService, setActiveService]);

  const selectedPkg = packages.find(p => p.name === activeService) || packages[0];

  if (loading) return <div className="p-20 text-center font-bold text-gray-400 animate-pulse uppercase tracking-widest">Loading services...</div>;

  return (
    <div className="flex flex-col gap-6">
      {/* Summary Header Block */}
      <div className="bg-[#f3f4f6] rounded-xl p-8 text-center flex flex-col gap-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] border border-gray-100/50">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1f2937]">Arrival {airport || 'AMS, Amsterdam Airport Schiphol'}</h2>
        <div className="flex justify-center items-center gap-6 text-sm font-semibold text-gray-600">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            {date || '18 Mar, 2026'}
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            {passengers || '1'} {parseInt(passengers || '1') === 1 ? 'Adult' : 'Adults'}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mt-2">
        {packages.map(p => (
          <button 
            key={p._id}
            onClick={() => setActiveService(p.name)}
            className={`flex-1 min-w-[160px] p-5 rounded-2xl border-2 transition-all relative group ${activeService === p.name ? 'border-[#ea580c] bg-white shadow-xl translate-y-[-2px]' : 'border-gray-200 bg-gray-50/50 hover:bg-gray-50 hover:border-gray-300'}`}
          >
            {p.isPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ea580c] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-orange-500/30 whitespace-nowrap">
                Most Popular
              </div>
            )}
            <div className="text-left pt-1">
              <h4 className="font-bold text-gray-900 mb-1">{p.name}</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Base USD ${p.basePrice}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Service Details Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm flex flex-col md:flex-row gap-12 mt-2">
        {/* Left Side: Pricing */}
        <div className="md:w-1/3 flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 bg-gray-900 text-white text-[10px] font-extrabold uppercase tracking-widest rounded mb-4">Elite Selection</span>
            <h3 className="text-3xl font-bold text-gray-900 leading-tight">
              {selectedPkg?.name}
            </h3>
            <p className="text-sm text-gray-500 mt-2 font-medium leading-relaxed">{selectedPkg?.description || "Experience seamless luxury with our curated airport services."}</p>
          </div>
          <div className="mt-8 md:mt-0 pt-6 border-t border-gray-50">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Service price</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-gray-900">USD {selectedPkg?.basePrice}</span>
              <span className="text-sm font-semibold text-gray-400">/ 1 passenger</span>
            </div>
          </div>
        </div>

        {/* Right Side: Features */}
        <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-12">
          <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6 border-b border-gray-50 pb-4">Included in Package:</p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedPkg?.features.map((feature, idx) => (
              <li key={idx} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#ea580c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-xs text-gray-700 font-bold leading-relaxed">{feature}</p>
              </li>
            ))}
            {selectedPkg?.features.length === 0 && (
              <li className="text-sm text-gray-400 italic col-span-full">Standard concierge features included.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}


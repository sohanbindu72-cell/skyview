import React from 'react';

interface BookingDetailsProps {
  airport: string;
  date: string;
  passengers: string;
  activeService: 'meet-greet' | 'vip-terminal';
  setActiveService: (service: 'meet-greet' | 'vip-terminal') => void;
}

export default function BookingDetails({ airport, date, passengers, activeService, setActiveService }: BookingDetailsProps) {
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
      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <button 
          onClick={() => setActiveService('meet-greet')}
          className={`flex-1 p-5 rounded-xl border-2 transition-all ${activeService === 'meet-greet' ? 'border-[#ea580c] bg-white shadow-md' : 'border-gray-200 bg-gray-50/50 hover:bg-gray-50'}`}
        >
          <div className="text-left">
            <h4 className="font-bold text-gray-900 mb-1">VIP Meet & Greet</h4>
            <p className="text-xs text-gray-500 font-medium">Personal assistance with FastTrack.</p>
          </div>
        </button>
        <button 
          onClick={() => setActiveService('vip-terminal')}
          className={`flex-1 p-5 rounded-xl border-2 transition-all ${activeService === 'vip-terminal' ? 'border-[#ea580c] bg-white shadow-md' : 'border-gray-200 bg-gray-50/50 hover:bg-gray-50'}`}
        >
          <div className="text-left">
            <h4 className="font-bold text-gray-900 mb-1">VIP Terminal</h4>
            <p className="text-xs text-gray-500 font-medium">Separate VIP lounge and car to/from aircraft.</p>
          </div>
        </button>
      </div>

      {/* Service Details Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm flex flex-col md:flex-row gap-12 mt-2">
        {/* Left Side: Pricing */}
        <div className="md:w-1/3 flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 bg-gray-400 text-white text-[10px] font-extrabold uppercase tracking-widest rounded mb-4">Silver Package</span>
            <h3 className="text-3xl font-bold text-gray-900 leading-tight">
              {activeService === 'meet-greet' ? 'Meet & Greet' : 'VIP Terminal'}
            </h3>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Service price</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-gray-900">USD {activeService === 'meet-greet' ? '474' : '850'}</span>
              <span className="text-sm font-semibold text-gray-400">/ 1 passenger</span>
            </div>
          </div>
        </div>

        {/* Right Side: Features */}
        <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-12">
          <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">Included in Package:</p>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="mt-1">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
              </div>
              <p className="text-sm text-gray-600"><strong className="text-gray-900">Personal Greeting</strong> at the arrival gate with a name sign</p>
            </li>
            <li className="flex gap-4">
              <div className="mt-1">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.5-12.293a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414l2.293-2.293 2.293 2.293a1 1 0 101.414-1.414l-3-3z" clipRule="evenodd"/></svg>
              </div>
              <p className="text-sm text-gray-600"><strong className="text-gray-900">FastTrack</strong> through the airport formalities</p>
            </li>
            <li className="flex gap-4">
              <div className="mt-1">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd"/></svg>
              </div>
              <p className="text-sm text-gray-600"><strong className="text-gray-900">Baggage Handling</strong> luggage assistance upon request</p>
            </li>
            <li className="flex gap-4">
              <div className="mt-1">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2v1.5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5V15H5a2 2 0 01-2-2V5zm10 8V5H5v8h8zM7.5 7.5a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3a.5.5 0 00-.5-.5zm3 0a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3a.5.5 0 00-.5-.5z" clipRule="evenodd"/></svg>
              </div>
              <p className="text-sm text-gray-600"><strong className="text-gray-900">Airport Exiting</strong> accompanying to the curbside area</p>
            </li>
            <li className="flex gap-4">
              <div className="mt-1">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" /></svg>
              </div>
              <p className="text-sm text-gray-600"><strong className="text-gray-900">Transfer Service</strong> private vehicle from the airport for an additional fee</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

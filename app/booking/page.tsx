"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import BookingHeader from '@/components/booking/BookingHeader';
import ProgressBar from '@/components/booking/ProgressBar';
import BookingDetails from '@/components/booking/BookingDetails';
import QuoteSidebar from '@/components/booking/QuoteSidebar';

function BookingContent() {
  const searchParams = useSearchParams();
  
  const [airport, setAirport] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('1');
  const [activeService, setActiveService] = useState<'meet-greet' | 'vip-terminal'>('meet-greet');

  useEffect(() => {
    setAirport(searchParams.get('airport') || '');
    setDate(searchParams.get('date') || '');
    setPassengers(searchParams.get('passengers') || '1');
    
    // Parse service type roughly based on the select option text from home
    const serviceParam = searchParams.get('service') || '';
    if (serviceParam.toLowerCase().includes('terminal')) {
      setActiveService('vip-terminal');
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <BookingHeader />
      <ProgressBar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-10 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <BookingDetails 
            airport={airport} 
            date={date} 
            passengers={passengers} 
            activeService={activeService}
            setActiveService={setActiveService}
          />
        </div>
        
        <div className="lg:w-1/3">
          <div className="sticky top-10">
            <QuoteSidebar 
              airport={airport} 
              passengers={passengers} 
              activeService={activeService}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center text-indigo-900 font-bold">Loading...</div>}>
      <BookingContent />
    </Suspense>
  );
}

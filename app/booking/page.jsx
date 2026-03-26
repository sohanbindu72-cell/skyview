"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import BookingHeader from '@/components/booking/BookingHeader';
import ProgressBar from '@/components/booking/ProgressBar';
import QuoteSidebar from '@/components/booking/QuoteSidebar';

// Steps
import BookingDetails from '@/components/booking/BookingDetails';
import Step2FlightInfo from '@/components/booking/Step2FlightInfo';
import Step3Passengers from '@/components/booking/Step3Passengers';
import Step4Additional from '@/components/booking/Step4Additional';
import Step5Contact from '@/components/booking/Step5Contact';

import { submitBooking } from '@/app/actions/booking';

const bookingSchema = z.object({
  // Step 2
  airline: z.string().min(1, 'Airline is required'),
  flightNumber: z.string().min(1, 'Flight number is required'),
  // Step 3
  passengerCount: z.number().min(1),
  passengerType: z.string().default('Adult'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  dobMonth: z.string().min(1, 'Required'),
  dobDay: z.string().min(1, 'Required'),
  dobYear: z.string().min(4, 'Required'),
  travelClass: z.string().optional(),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is too short').max(20, 'Phone number is too long'),
  wheelchairRequested: z.boolean().optional(),
  // Step 4
  bagCount: z.number().optional(),
  specialRequirements: z.string().optional(),
  driverInformation: z.string().optional(),
  travelingWithPets: z.boolean().optional(),
  // Step 5
  sameAsPassenger: z.boolean().optional(),
  contactFirstName: z.string().optional(),
  contactLastName: z.string().optional(),
  contactEmail: z.string().optional(),
  contactPhone: z.string().optional(),
});

function BookingContent() {
  const searchParams = useSearchParams();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [airport, setAirport] = useState('');
  const [date, setDate] = useState('');
  const [activeService, setActiveService] = useState('meet-greet');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingId, setBookingId] = useState(null);

  const methods = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      airline: '',
      flightNumber: '',
      passengerCount: 1,
      passengerType: 'Adult',
      firstName: '',
      lastName: '',
      dobMonth: '',
      dobDay: '',
      dobYear: '',
      travelClass: '',
      email: '',
      phone: '',
      wheelchairRequested: false,
      bagCount: 0,
      specialRequirements: '',
      driverInformation: '',
      travelingWithPets: false,
      sameAsPassenger: false,
      contactFirstName: '',
      contactLastName: '',
      contactEmail: '',
      contactPhone: ''
    }
  });

  const passengers = methods.watch('passengerCount') || 1;

  useEffect(() => {
    setBookingId(searchParams.get('bookingId'));
    setAirport(searchParams.get('airport') || 'AMS, Amsterdam Airport Schiphol');
    setDate(searchParams.get('date') || '18 Mar, 2026');
    
    const serviceParam = searchParams.get('service') || '';
    if (serviceParam.toLowerCase().includes('terminal')) {
      setActiveService('vip-terminal');
    }

    const emailParam = searchParams.get('email');
    if (emailParam) {
      methods.setValue('email', emailParam);
      // We'll also prepopulate the contactEmail just in case they uncheck "Same as primary passenger"
      methods.setValue('contactEmail', emailParam);
    }

    const passengersParam = searchParams.get('passengers');
    if (passengersParam) {
      methods.setValue('passengerCount', parseInt(passengersParam, 10) || 1);
    }
  }, [searchParams, methods]);

  const handleNextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Combine form inputs with the state-driven selections
    const finalData = {
      ...data,
      airport,
      date,
      serviceType: activeService,
      pricePerPassenger: activeService === 'meet-greet' ? 474 : 850,
      totalPrice: (activeService === 'meet-greet' ? 474 : 850) * parseInt(passengers)
    };

    try {
      const response = await submitBooking(finalData, bookingId);
      
      if (response.success) {
        alert("Booking submitted successfully! Check browser console.");
        console.log("Server response:", response);
      } else {
        alert("There was an error submitting your booking: " + response.message);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit booking.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 font-sans pb-20">
      <BookingHeader />
      <ProgressBar currentStep={currentStep} />
      
      <FormProvider {...methods}>
        <main className="max-w-7xl mx-auto px-4 md:px-12 py-10 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {currentStep > 1 && (
              <button 
                type="button" 
                onClick={handlePrevStep}
                className="mb-6 flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#2a3bb1] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                Back to previous step
              </button>
            )}

            <form id="booking-form" onSubmit={methods.handleSubmit(onSubmit)} className={isSubmitting ? 'opacity-50 pointer-events-none' : ''}>
              
              <div className={currentStep === 1 ? 'block' : 'hidden'}>
                <BookingDetails 
                  airport={airport} 
                  date={date} 
                  passengers={passengers.toString()} 
                  activeService={activeService}
                  setActiveService={setActiveService}
                />
                <button 
                  type="button" 
                  onClick={handleNextStep}
                  className="mt-6 w-full bg-[#2a3bb1] hover:bg-[#202d8f] text-white font-bold py-4 rounded-lg shadow-sm transition-colors text-sm tracking-wide"
                >
                  Confirm & Continue to next step
                </button>
              </div>

              <div className={currentStep === 2 ? 'block' : 'hidden'}>
                <Step2FlightInfo onNext={handleNextStep} />
              </div>

              <div className={currentStep === 3 ? 'block' : 'hidden'}>
                <Step3Passengers onNext={handleNextStep} />
              </div>

              <div className={currentStep === 4 ? 'block' : 'hidden'}>
                <Step4Additional onNext={handleNextStep} />
              </div>

              <div className={currentStep === 5 ? 'block' : 'hidden'}>
                <Step5Contact />
              </div>

            </form>
          </div>
          
          <div className="lg:w-1/3">
            <div className="sticky top-10">
              <QuoteSidebar 
                airport={airport} 
                passengers={passengers.toString()} 
                activeService={activeService}
              />
            </div>
          </div>
        </main>
      </FormProvider>
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

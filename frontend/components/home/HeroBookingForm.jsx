"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import AirportSearchField from "@/components/booking/AirportSearchField";

export default function HeroBookingForm() {
  const router = useRouter();
  const [servicePackages, setServicePackages] = useState([]);
  const [locations, setLocations] = useState([]);

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      airport: "",
      serviceType: "",
      date: "",
      passengers: "1",
      email: ""
    }
  });

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/packages`);
        if (res.ok) {
          const data = await res.json();
          const activePackages = data.filter(p => p.isActive);
          setServicePackages(activePackages);
        }
      } catch (err) {
        console.error("Failed to fetch packages:", err);
      }
    };
    const fetchLocations = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/locations`);
        if (res.ok) {
          const data = await res.json();
          setLocations(data);

          // Auto-select Sint Maarten / SXM as default if not already set
          if (!watch("airport") || watch("airport") === '') {
             let defaultAirport = null;
             for (const country of data) {
                 if (country.countryName && country.countryName.toLowerCase().includes('maarten')) {
                     defaultAirport = country.airports[0];
                     break;
                 }
                 const sxmMatch = country.airports.find(a => a.name.toLowerCase().includes('sxm'));
                 if (sxmMatch) { defaultAirport = sxmMatch; break; }
             }
             if (defaultAirport) {
                 setValue("airport", defaultAirport.name, { shouldValidate: true });
             } else {
                 setValue("airport", "Princess Juliana International Airport, SXM", { shouldValidate: true });
             }
          }
        }
      } catch (err) {
        console.error("Failed to fetch locations:", err);
      }
    };
    fetchPackages();
    fetchLocations();
  }, [setValue, watch]);

  const selectedAirportName = watch("airport");

  // Filter packages based on selected airport
  const filteredPackages = useMemo(() => {
    if (!selectedAirportName || locations.length === 0) return servicePackages;

    // Find the airport object
    let airportObj = null;
    for (const country of locations) {
      const match = country.airports.find(a => a.name === selectedAirportName);
      if (match) {
        airportObj = match;
        break;
      }
    }

    if (!airportObj || !airportObj.excludedPackages || airportObj.excludedPackages.length === 0) {
      return servicePackages;
    }

    return servicePackages.filter(p => !airportObj.excludedPackages.includes(p.id));
  }, [selectedAirportName, locations, servicePackages]);

  // Update serviceType if the current one is filtered out
  useEffect(() => {
    const currentService = watch("serviceType");
    if (filteredPackages.length > 0) {
      if (!currentService || !filteredPackages.find(p => p.name === currentService)) {
        setValue("serviceType", filteredPackages[0].name);
      }
    }
  }, [filteredPackages, setValue, watch]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Capture lead first if email is provided
    if (data.email) {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/leads`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      } catch (err) {
        console.error('Failed to capture lead:', err);
      }
    }

    const query = new URLSearchParams({
      airport: data.airport,
      service: data.serviceType,
      date: data.date,
      passengers: data.passengers,
      email: data.email
    });

    router.push(`/booking?${query.toString()}`);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-[#0f172a] border border-gray-100">
      <div className="mb-6">
        <h3 className="text-2xl font-black text-gray-900 tracking-tight">Reserve Experience</h3>
        <p className="text-gray-400 text-sm mt-1">Book VIP airport services in seconds.</p>
      </div>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Select Airport</label>
            <AirportSearchField 
              selectedAirport={selectedAirportName} 
              onSelect={(name) => setValue("airport", name, { shouldValidate: true })} 
            />
          </div>
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Service Level</label>
            <div className="relative">
              <select
                {...register("serviceType", { required: true })}
                className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-900 rounded-lg px-4 py-3.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#ea580c] transition-all"
              >
                {filteredPackages.map(p => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
                {filteredPackages.length === 0 && (
                  <option value="">No services available</option>
                )}
              </select>
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className={`text-xs font-semibold uppercase tracking-wide ${errors.date ? 'text-red-500' : 'text-gray-500'}`}>
              Date {errors.date && '*'}
            </label>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className={`w-full bg-gray-50 border ${errors.date ? 'border-red-300 ring-1 ring-red-100' : 'border-gray-200'} text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c]`}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Passengers</label>
            <input
              type="number"
              min="1"
              {...register("passengers")}
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
            />
          </div>
        </div>

        <div className="space-y-1.5 pt-2">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email Address</label>
          <input
            type="email"
            placeholder="your@email.com"
            {...register("email")}
            className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#ea580c] hover:bg-orange-700 text-white font-bold py-4 rounded-lg mt-4 transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-70"
        >
          {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
          {isSubmitting ? 'Checking...' : 'Check Price'}
        </button>
        <p className="text-center text-[10px] text-gray-400 mt-5 font-bold uppercase tracking-tight">No payment required today • 24/7 Support</p>
      </form>
    </div>
  );
}

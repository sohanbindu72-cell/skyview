"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import AirportSearchField from "@/components/booking/AirportSearchField";

export default function HeroBookingForm() {
  const router = useRouter();

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      airport: "",
      serviceType: "VIP Terminal",
      date: "",
      passengers: "1",
      email: ""
    }
  });

  const selectedAirport = watch("airport");

  const onSubmit = (data) => {
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
    <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-[#0f172a]">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Reserve Your Experience</h3>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Select Airport</label>
            <AirportSearchField 
              selectedAirport={selectedAirport} 
              onSelect={(name) => setValue("airport", name, { shouldValidate: true })} 
            />
          </div>
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Service Type</label>
            <div className="relative">
              <select
                {...register("serviceType")}
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
          className="w-full bg-[#ea580c] hover:bg-orange-700 text-white font-bold py-3.5 rounded-lg mt-4 transition-colors shadow-lg shadow-orange-500/30"
        >
          Check Price
        </button>
        <p className="text-center text-xs text-gray-400 mt-4">No payment required today • 24/7 Concierge Support</p>
      </form>
    </div>
  );
}

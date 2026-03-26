"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function ReservationDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchReservation();
  }, [id]);

  const fetchReservation = async () => {
    try {
      const res = await fetch(`/api/reservations/${id}`);
      if (!res.ok) throw new Error("Failed to fetch reservation");
      const data = await res.ok ? await res.json() : null;
      setReservation(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (newStatus, paymentStatus = null) => {
    setUpdating(true);
    try {
      const body = { status: newStatus };
      if (paymentStatus) body.paymentStatus = paymentStatus;

      const res = await fetch(`/api/reservations/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Update failed");
      await fetchReservation();
    } catch (err) {
      alert(err.message);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-500">Loading details...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Error: {error}</div>;
  if (!reservation) return <div className="p-8 text-center">Reservation not found.</div>;

  return (
    <div className="p-8 max-w-6xl mx-auto font-sans">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/admin/reservations" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Reservation <span className="text-gray-400 font-mono text-xl ml-2">#{id.slice(-6).toUpperCase()}</span>
          </h1>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => window.print()}
            className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center gap-2 font-semibold text-sm shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
            Print Manifest
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Main Info Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-50 bg-gray-50/50 flex justify-between items-center">
              <h2 className="font-bold text-gray-900 uppercase tracking-wider text-xs">Customer Information</h2>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                reservation.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 
                reservation.status === 'Cancelled' ? 'bg-red-100 text-red-700' : 
                'bg-yellow-100 text-yellow-700'
              }`}>
                {reservation.status}
              </span>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Full Name</p>
                <p className="text-lg font-bold text-gray-900">{reservation.customerName}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Address</p>
                <p className="text-[#ea580c] font-semibold">{reservation.customerEmail}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Phone Number</p>
                <p className="text-gray-700 font-semibold">{reservation.customerPhone}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Service Level</p>
                <span className="px-3 py-1 bg-gray-900 text-white text-[10px] font-extrabold rounded uppercase tracking-widest">
                  {reservation.serviceLevel}
                </span>
              </div>
            </div>
          </div>

          {/* Flight Details Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-50 bg-gray-50/50">
              <h2 className="font-bold text-gray-900 uppercase tracking-wider text-xs">Flight & Route Details</h2>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Airport</p>
                <p className="text-gray-900 font-bold">{reservation.fromAirport}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Departure Date</p>
                <p className="text-gray-900 font-bold">{new Date(reservation.departureDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Passengers</p>
                <p className="text-gray-900 font-bold text-xl">{reservation.passengers} Adult(s)</p>
              </div>
              <div className="md:col-span-2 p-4 bg-orange-50/50 rounded-xl border border-orange-100">
                <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Flight Manifest Notes</p>
                <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{reservation.notes || "No special requirements listed."}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Payment Summary</h3>
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 text-sm">Total Amount</span>
              <span className="text-2xl font-black text-gray-900">USD ${reservation.totalAmount}</span>
            </div>
            <div className={`w-full py-2 px-3 rounded-lg text-center font-bold text-xs uppercase tracking-widest mb-6 ${
              reservation.paymentStatus === 'Paid' ? 'bg-green-50 text-green-700 ring-1 ring-green-100' : 'bg-red-50 text-red-700 ring-1 ring-red-100'
            }`}>
              {reservation.paymentStatus}
            </div>
            
            <div className="space-y-2">
              <button 
                disabled={updating}
                onClick={() => updateStatus(reservation.status, reservation.paymentStatus === 'Paid' ? 'Unpaid' : 'Paid')}
                className="w-full py-3 bg-gray-50 text-gray-900 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-gray-100 transition-all border border-gray-200"
              >
                Mark as {reservation.paymentStatus === 'Paid' ? 'Unpaid' : 'Paid'}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Admin Actions</h3>
            <div className="space-y-3">
              <button 
                disabled={updating || reservation.status === 'Confirmed'}
                onClick={() => updateStatus('Confirmed')}
                className="w-full py-3 bg-[#ea580c] text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-orange-700 disabled:opacity-50 transition-all shadow-lg shadow-orange-500/20"
              >
                Confirm Booking
              </button>
              <button 
                disabled={updating || reservation.status === 'Cancelled'}
                onClick={() => updateStatus('Cancelled')}
                className="w-full py-3 bg-white text-red-600 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-red-50 disabled:opacity-50 transition-all border border-red-100"
              >
                Cancel Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

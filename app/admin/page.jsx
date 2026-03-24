import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="text-gray-900">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">System Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back, Admin.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-gray-500 font-semibold text-xs uppercase tracking-wider mb-2">Total Reservations</h3>
          <p className="text-4xl font-extrabold text-gray-900">128</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-gray-500 font-semibold text-xs uppercase tracking-wider mb-2">Pending Requests</h3>
          <p className="text-4xl font-extrabold text-[#ea580c]">14</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-gray-500 font-semibold text-xs uppercase tracking-wider mb-2">Active Locations</h3>
          <p className="text-4xl font-extrabold text-blue-600">42</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
          <button className="text-sm font-semibold text-[#ea580c] hover:text-orange-700">View All</button>
        </div>
        
        <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-lg">
          <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
          <p className="text-gray-500 font-medium">No new reservations in the last 24 hours.</p>
        </div>
      </div>
    </div>
  );
}

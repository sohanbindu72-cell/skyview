"use client";

import React, { useState, useEffect } from 'react';
import { Mail, Calendar, User, Search, Filter, Loader2, Info } from 'lucide-react';

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/leads');
      if (res.ok) {
        const data = await res.json();
        setLeads(data);
      }
    } catch (err) {
      console.error('Failed to fetch leads:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredLeads = leads.filter(lead => 
    lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.airport?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leads Management</h1>
          <p className="text-gray-500">Track and follow up with potential customers who checked prices.</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search leads..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#ea580c]"
            />
          </div>
          <button 
            onClick={fetchLeads}
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2"
          >
            Refresh
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="p-12 flex justify-center">
            <Loader2 className="h-8 w-8 text-[#ea580c] animate-spin" />
          </div>
        ) : filteredLeads.length > 0 ? (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center w-20">No.</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Contact / Inquiry</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Airport & Service</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Passengers</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date Captured</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredLeads.map((lead, index) => (
                <tr key={lead._id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4 text-sm text-gray-500 text-center font-medium">{index + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#ea580c]">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="text-sm">
                        <p className="font-bold text-gray-900">{lead.email}</p>
                        <p className="text-gray-500 text-xs">Waiting for action</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <p className="font-bold text-gray-900">{lead.airport || 'N/A'}</p>
                      <p className="text-gray-500 text-xs font-medium">{lead.serviceType || 'Not specified'}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                      {lead.passengers || 1} PAX
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                      lead.status === 'Booked' 
                        ? 'bg-green-50 text-green-700 border-green-100' 
                        : 'bg-orange-50 text-orange-700 border-orange-100'
                    }`}>
                      {lead.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2 font-medium">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Info className="h-8 w-8 text-gray-300" />
            </div>
            <p className="text-gray-500 font-medium">No leads captured yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

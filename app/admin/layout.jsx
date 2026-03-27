"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  
  // The login page does not need protection
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white flex flex-col">
          <div className="p-6 text-xl font-bold border-b border-gray-800">
            SkyLuxe <span className="text-[#ea580c]">VIP</span>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <a 
              href="/admin" 
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                pathname === '/admin' ? 'bg-[#ea580c] text-white' : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              Dashboard
            </a>
            <a 
              href="/admin/locations" 
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                pathname.startsWith('/admin/locations') ? 'bg-[#ea580c] text-white' : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              Locations
            </a>
            <a 
              href="/admin/packages" 
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                pathname.startsWith('/admin/packages') ? 'bg-[#ea580c] text-white' : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              Packages
            </a>
            <a 
              href="/admin/reservations" 
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                pathname.startsWith('/admin/reservations') ? 'bg-[#ea580c] text-white' : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              Reservations
            </a>
            <a 
              href="/admin/customers" 
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                pathname.startsWith('/admin/customers') ? 'bg-[#ea580c] text-white' : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              Customers
            </a>
            <a 
              href="/admin/leads" 
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                pathname.startsWith('/admin/leads') ? 'bg-[#ea580c] text-white' : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              Leads
            </a>
            <a 
              href="#" 
              className="block px-4 py-3 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors"
            >
              Settings
            </a>
          </nav>
          <div className="p-4 border-t border-gray-800">
            <button 
              onClick={async () => {
                await fetch('/api/auth/logout', { method: 'POST' });
                window.location.href = '/admin/login';
              }}
              className="w-full text-left px-4 py-3 text-red-400 hover:bg-gray-800 rounded-lg transition-colors"
            >
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </>
  );
}

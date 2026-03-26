"use client";

import React, { useState, useEffect, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import { Search, Edit, Trash2, ArrowUpDown, Calendar, User, Plane, Wallet } from 'lucide-react';

export default function ReservationsAdmin() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorted] = useState([]);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReservation, setEditingReservation] = useState(null);
  
  // Form state for status updates
  const [formData, setFormData] = useState({
    status: 'Pending',
    paymentStatus: 'Unpaid'
  });

  const fetchReservations = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/reservations');
      if (res.ok) {
        const data = await res.json();
        setReservations(data);
      }
    } catch (error) {
      console.error('Failed to fetch reservations:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const handleOpenModal = (reservation) => {
    setEditingReservation(reservation);
    setFormData({
      status: reservation.status,
      paymentStatus: reservation.paymentStatus
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingReservation(null);
  };

  const handleSubmitStatus = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/reservations/${editingReservation._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        handleCloseModal();
        fetchReservations();
      } else {
        alert('Failed to update reservation');
      }
    } catch (error) {
      console.error('Error updating reservation:', error);
      alert('An error occurred');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this reservation? This cannot be undone.')) return;
    
    try {
      const res = await fetch(`/api/reservations/${id}`, {
        method: 'DELETE'
      });
      
      if (res.ok) {
        fetchReservations();
      } else {
        alert('Failed to delete');
      }
    } catch (error) {
      console.error('Error deleting:', error);
    }
  };

  const columns = useMemo(() => [
    {
      accessorKey: 'customerName',
      header: 'Customer',
      cell: ({ row }) => (
        <div className="flex flex-col">
          <span className="font-semibold text-gray-900">{row.original.customerName}</span>
          <span className="text-xs text-gray-500">{row.original.customerEmail}</span>
        </div>
      )
    },
    {
      accessorKey: 'route',
      header: 'Route',
      cell: ({ row }) => (
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium text-gray-700">{row.original.fromLocation?.countryName}</span>
          <Plane className="h-3 w-3 text-gray-400" />
          <span className="font-medium text-gray-700">{row.original.toLocation?.countryName}</span>
        </div>
      ),
      accessorFn: row => `${row.fromLocation?.countryName} ${row.toLocation?.countryName}`
    },
    {
      accessorKey: 'departureDate',
      header: 'Departure',
      cell: ({ row }) => (
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <Calendar className="h-3.3 w-3.5 text-[#ea580c]" />
          {new Date(row.original.departureDate).toLocaleDateString()}
        </div>
      )
    },
    {
      accessorKey: 'serviceLevel',
      header: 'Service',
      cell: ({ row }) => (
        <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
          row.original.serviceLevel === 'VIP' ? 'bg-purple-100 text-purple-700' :
          row.original.serviceLevel === 'Premium' ? 'bg-blue-100 text-blue-700' :
          'bg-gray-100 text-gray-700'
        }`}>
          {row.getValue('serviceLevel')}
        </span>
      )
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
          row.original.status === 'Confirmed' ? 'bg-green-100 text-green-800 border-green-200' :
          row.original.status === 'Cancelled' ? 'bg-red-100 text-red-800 border-red-200' :
          row.original.status === 'Completed' ? 'bg-blue-100 text-blue-800 border-blue-200' :
          'bg-yellow-100 text-yellow-800 border-yellow-200'
        }`}>
          {row.getValue('status')}
        </span>
      )
    },
    {
      accessorKey: 'paymentStatus',
      header: 'Payment',
      cell: ({ row }) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
          row.original.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800 border-green-200' :
          row.original.paymentStatus === 'Refunded' ? 'bg-orange-100 text-orange-800 border-orange-200' :
          'bg-gray-100 text-gray-800 border-gray-200'
        }`}>
          {row.getValue('paymentStatus')}
        </span>
      )
    },
    {
      id: 'actions',
      header: () => <div className="text-right">Actions</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-end gap-1">
          <button 
            onClick={() => handleOpenModal(row.original)}
            className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
          >
            <Edit className="h-4 w-4" />
          </button>
          <button 
            onClick={() => handleDelete(row.original._id)}
            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      )
    }
  ], []);

  const table = useReactTable({
    data: reservations,
    columns,
    state: { globalFilter, sorting },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorted,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: { pagination: { pageSize: 10 } },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Reservations</h1>
          <p className="text-gray-500 mt-1">Track and manage all flight bookings.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              value={globalFilter ?? ''}
              onChange={e => setGlobalFilter(e.target.value)}
              placeholder="Filter reservations..."
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-[#ea580c] outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50/50 border-b">
              {table.getHeaderGroups().map(group => (
                <tr key={group.id}>
                  {group.headers.map(header => (
                    <th key={header.id} className="h-12 px-4 text-left font-medium text-gray-500">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={columns.length} className="h-32 text-center text-gray-500 italic">Connecting to database...</td></tr>
              ) : table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map(row => (
                  <tr key={row.id} className="border-b transition-colors hover:bg-gray-50/50">
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id} className="p-4">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr><td colSpan={columns.length} className="h-32 text-center text-gray-500 italic">No bookings found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Update Status</h2>
              <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmitStatus} className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Booking Status</label>
                  <select 
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="w-full h-10 px-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#ea580c] outline-none bg-white"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Payment Status</label>
                  <select 
                    value={formData.paymentStatus}
                    onChange={(e) => setFormData({...formData, paymentStatus: e.target.value})}
                    className="w-full h-10 px-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#ea580c] outline-none bg-white"
                  >
                    <option value="Unpaid">Unpaid</option>
                    <option value="Paid">Paid</option>
                    <option value="Refunded">Refunded</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={handleCloseModal} className="px-4 py-2 text-sm border border-gray-200 rounded-md hover:bg-gray-100">Cancel</button>
                <button type="submit" className="px-4 py-2 text-sm bg-[#ea580c] text-white rounded-md hover:bg-orange-700">Update Reservation</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

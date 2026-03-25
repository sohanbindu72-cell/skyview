"use client";

import React, { useState, useEffect } from 'react';

export default function LocationsAdmin() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Helper to extract true URL from Next/Nuxt IPX optimizations
  const getFlagUrl = (iconStr) => {
    if (!iconStr) return '';
    if (iconStr.includes('/http')) {
      return 'http' + iconStr.split('/http')[1];
    }
    return iconStr;
  };
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLocation, setEditingLocation] = useState(null);
  
  // Form state
  const [formData, setFormData] = useState({
    countryName: '',
    flagIcon: '',
    airports: []
  });

  const fetchLocations = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/locations');
      if (res.ok) {
        const data = await res.json();
        setLocations(data);
      }
    } catch (error) {
      console.error('Failed to fetch locations:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const handleOpenModal = (location = null) => {
    if (location) {
      setEditingLocation(location);
      setFormData({
        countryName: location.countryName,
        flagIcon: location.flagIcon,
        airports: location.airports.map(a => ({ name: a.name, link: a.link || '' }))
      });
    } else {
      setEditingLocation(null);
      setFormData({
        countryName: '',
        flagIcon: '',
        airports: [{ name: '', link: '' }]
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingLocation(null);
  };

  const handleAirportChange = (index, field, value) => {
    const newAirports = [...formData.airports];
    newAirports[index][field] = value;
    setFormData({ ...formData, airports: newAirports });
  };

  const addAirportField = () => {
    setFormData({
      ...formData,
      airports: [...formData.airports, { name: '', link: '' }]
    });
  };

  const removeAirportField = (index) => {
    const newAirports = formData.airports.filter((_, i) => i !== index);
    setFormData({ ...formData, airports: newAirports });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isEditing = !!editingLocation;
      const url = isEditing 
        ? `/api/locations/${editingLocation._id || editingLocation.id}` 
        : `/api/locations`;
      
      const method = isEditing ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        handleCloseModal();
        fetchLocations();
      } else {
        alert('Failed to save location');
      }
    } catch (error) {
      console.error('Error saving location:', error);
      alert('An error occurred');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this location?')) return;
    
    try {
      const res = await fetch(`/api/locations/${id}`, {
        method: 'DELETE'
      });
      
      if (res.ok) {
        fetchLocations();
      } else {
        alert('Failed to delete location');
      }
    } catch (error) {
      console.error('Error deleting location:', error);
      alert('An error occurred');
    }
  };

  return (
    <div className="text-gray-900">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Locations</h1>
          <p className="text-gray-500 mt-1">Manage countries and available airports.</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="bg-[#ea580c] hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          + Add Location
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading locations...</div>
        ) : locations.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No locations found. Add one to get started.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 font-semibold text-gray-700">Country</th>
                  <th className="p-4 font-semibold text-gray-700">Airports</th>
                  <th className="p-4 font-semibold text-gray-700 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {locations.map((loc) => (
                  <tr key={loc._id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        {loc.flagIcon?.startsWith('/') || loc.flagIcon?.startsWith('http') || getFlagUrl(loc.flagIcon).startsWith('http') ? (
                          <img src={getFlagUrl(loc.flagIcon)} alt="flag" className="h-6 w-auto object-contain shrink-0" />
                        ) : (
                          <span className="text-xl">{loc.flagIcon}</span>
                        )}
                        <span className="font-medium">{loc.countryName}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      {loc.airports?.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {loc.airports.map((airport, idx) => (
                            <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-md border border-blue-100 font-medium">
                              {airport.name}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-gray-400 text-sm italic">No airports</span>
                      )}
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button 
                        onClick={() => handleOpenModal(loc)}
                        className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(loc._id || loc.id)}
                        className="text-red-600 hover:text-red-900 text-sm font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] flex flex-col">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center shrink-0">
              <h2 className="text-xl font-bold">{editingLocation ? 'Edit Location' : 'Add New Location'}</h2>
              <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.countryName}
                    onChange={(e) => setFormData({...formData, countryName: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea580c] focus:border-[#ea580c] outline-none transition-colors"
                    placeholder="e.g. United Kingdom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Flag Icon (Emoji or Image URL)</label>
                  <input 
                    type="text" 
                    required
                    value={formData.flagIcon}
                    onChange={(e) => setFormData({...formData, flagIcon: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea580c] focus:border-[#ea580c] outline-none transition-colors"
                    placeholder="e.g. 🇬🇧 or /images/flag.png"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">Airports</label>
                  <button 
                    type="button"
                    onClick={addAirportField}
                    className="text-sm text-[#ea580c] hover:text-orange-700 font-medium"
                  >
                    + Add Airport
                  </button>
                </div>
                
                <div className="space-y-3">
                  {formData.airports.map((airport, index) => (
                    <div key={index} className="flex gap-3 items-start bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <div className="flex-1 space-y-3">
                        <input 
                          type="text" 
                          required
                          value={airport.name}
                          onChange={(e) => handleAirportChange(index, 'name', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-[#ea580c] outline-none"
                          placeholder="Airport Name (e.g. Heathrow (LHR))"
                        />
                        <input 
                          type="url" 
                          value={airport.link || ''}
                          onChange={(e) => handleAirportChange(index, 'link', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-[#ea580c] outline-none"
                          placeholder="Optional Booking Link URL"
                        />
                      </div>
                      <button 
                        type="button"
                        onClick={() => removeAirportField(index)}
                        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md shrink-0 mt-1"
                        disabled={formData.airports.length === 1}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button 
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-[#ea580c] hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
                >
                  {editingLocation ? 'Save Changes' : 'Create Location'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

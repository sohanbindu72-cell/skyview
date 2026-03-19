import React from 'react';

const steps = [
  { num: 1, title: 'Select service', status: 'In progress', active: true },
  { num: 2, title: 'Flight information', status: 'Not completed', active: false },
  { num: 3, title: 'Passengers details', status: 'Not completed', active: false },
  { num: 4, title: 'Additional services', status: 'Not completed', active: false },
  { num: 5, title: 'Contact information', status: 'Not completed', active: false },
];

export default function ProgressBar() {
  return (
    <div className="w-full bg-white border-b border-gray-100 py-6 overflow-x-auto shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center min-w-[800px]">
        {steps.map((step, idx) => (
          <React.Fragment key={step.num}>
            <div className="flex flex-col gap-1.5 focus:outline-none cursor-pointer group">
              <span className={`text-sm font-bold transition-colors ${step.active ? 'text-[#0f172a]' : 'text-gray-500 group-hover:text-gray-700'}`}>
                {step.num}. {step.title}
              </span>
              <span className={`text-xs font-semibold flex items-center gap-1.5 transition-colors ${step.active ? 'text-[#ea580c]' : 'text-gray-400'}`}>
                {step.active ? (
                  <span className="w-2 h-2 bg-[#ea580c] rounded-full animate-pulse"></span>
                ) : (
                  <svg className="w-3.5 h-3.5 opacity-60" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.5-12.293a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414l2.293-2.293 2.293 2.293a1 1 0 101.414-1.414l-3-3z" clipRule="evenodd"/></svg>
                )}
                {step.status}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

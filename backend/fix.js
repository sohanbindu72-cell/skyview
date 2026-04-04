const fs = require('fs');
const filePath = 'c:\\Users\\G5-PC-02\\Desktop\\skyview\\frontend\\app\\admin\\locations\\page.jsx';
let content = fs.readFileSync(filePath, 'utf8');

const target = `<div className="flex flex-wrap gap-2 pt-1">
                               {servicePackages.map(pkg => {
                                 const isExcluded = (airport.excludedPackages || []).includes(pkg._id);
                                 return (
                                   <button
                                     key={pkg._id}
                                     type="button"
                                     onClick={() => togglePackage(index, pkg._id)}
                                     className={\`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all border \${
                                       !isExcluded 
                                         ? 'bg-orange-50 border-orange-200 text-[#ea580c]' 
                                         : 'bg-gray-50 border-gray-200 text-gray-400 opacity-60'
                                     }\`}
                                   >
                                     {!isExcluded ? '✓ ' : '+ '} {pkg.name}
                                   </button>
                                 );
                               })}
                               {servicePackages.length === 0 && (
                                 <span className="text-xs text-gray-400 italic">No active packages found</span>
                               )}
                            </div>`;

const replacement = `<div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                               {servicePackages.map(pkg => {
                                 const isExcluded = (airport.excludedPackages || []).includes(pkg._id);
                                 const pricingObj = (airport.customPricing || []).find(p => p.package_id === pkg._id);
                                 const customPrice = pricingObj ? pricingObj.custom_price : '';
                                 
                                 return (
                                   <div key={pkg._id} className={\`flex flex-col gap-1 p-2 rounded-lg border transition-all \${
                                     !isExcluded ? 'bg-orange-50/30 border-orange-200' : 'bg-gray-50 border-gray-200 opacity-60'
                                   }\`}>
                                     <button
                                       type="button"
                                       onClick={() => togglePackage(index, pkg._id)}
                                       className={\`flex items-center text-left gap-2 text-xs font-bold uppercase tracking-wider \${
                                         !isExcluded ? 'text-[#ea580c]' : 'text-gray-400'
                                       }\`}
                                     >
                                       {!isExcluded ? '✓ ' : '+ '} {pkg.name}
                                     </button>
                                     
                                     {!isExcluded && (
                                       <div className="flex items-center gap-2 mt-1">
                                         <label className="text-[10px] text-gray-500 uppercase tracking-widest whitespace-nowrap">Price (USD)</label>
                                         <input 
                                           type="number"
                                           value={customPrice}
                                           onChange={(e) => handleCustomPriceChange(index, pkg._id, e.target.value)}
                                           className="h-7 w-full rounded border border-orange-200 bg-white px-2 text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ea580c]"
                                           placeholder={\`Base: $\${pkg.basePrice}\`}
                                         />
                                       </div>
                                     )}
                                   </div>
                                 );
                               })}
                               {servicePackages.length === 0 && (
                                 <span className="text-xs text-gray-400 italic col-span-2">No active packages found</span>
                               )}
                            </div>`;

if(content.includes(target)) {
   content = content.replace(target, replacement);
   fs.writeFileSync(filePath, content, 'utf8');
   console.log('Success - replaced target string!');
} else {
   console.log('Target string NOT FOUND! Using regex cleanup trick.');
   // Simple manual replace for whitespace agnostic
   let startIdx = content.indexOf('<div className="flex flex-wrap gap-2 pt-1">');
   let endIdx = content.indexOf('</div>\n                           <p className="text-[10px] text-gray-400 mt-1 italic">Click to toggle availability.', startIdx);
   if(startIdx !== -1 && endIdx !== -1) {
       content = content.substring(0, startIdx) + replacement + content.substring(endIdx + 6);
       fs.writeFileSync(filePath, content, 'utf8');
       console.log('Success via indices.');
   } else {
       console.log("Could not find bounds.");
   }
}

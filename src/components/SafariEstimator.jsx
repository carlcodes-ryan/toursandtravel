import { useState, useMemo } from 'react';
import { Calculator, Users, Baby, MapPin, Building, ShieldCheck } from 'lucide-react';

const destinations = [
  { id: 'mara', name: 'Maasai Mara Safari', minPrice: 237, maxPrice: 547 },
  { id: 'amboseli', name: 'Amboseli National Park', minPrice: 250, maxPrice: 580 },
  { id: 'nakuru', name: 'Lake Nakuru Safari', minPrice: 210, maxPrice: 490 },
  { id: 'samburu', name: 'Samburu National Park', minPrice: 240, maxPrice: 560 },
  { id: 'nairobi', name: 'Nairobi National Park', minPrice: 120, maxPrice: 280 },
  { id: 'tsavo', name: 'Tsavo National Park (inc. Snake Safari)', minPrice: 667, maxPrice: 667 },
  { id: 'uganda_5', name: 'Uganda Primate & Gorilla (5-Day)', minPrice: 1198, maxPrice: 3386 },
  { id: 'uganda_6', name: 'Uganda Primate & Gorilla (6-Day)', minPrice: 2416, maxPrice: 4985 },
  { id: 'uganda_8', name: 'Uganda Primate & Gorilla (8-Day)', minPrice: 2156, maxPrice: 5293 },
  { id: 'uganda_9', name: 'Uganda Primate & Gorilla (9-Day)', minPrice: 2152, maxPrice: 5465 },
  { id: 'uganda_11', name: 'Uganda Primate & Gorilla (11-Day)', minPrice: 2841, maxPrice: 7110 },
];

export default function SafariEstimator() {
  const [destinationId, setDestinationId] = useState(destinations[0].id);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [tier, setTier] = useState('mid');

  const selectedDestination = useMemo(() => destinations.find(d => d.id === destinationId), [destinationId]);

  const estimatedTotal = useMemo(() => {
    if (!selectedDestination) return 0;
    
    let baseRate = 0;
    if (tier === 'budget') {
      baseRate = selectedDestination.minPrice;
    } else if (tier === 'luxury') {
      baseRate = selectedDestination.maxPrice;
    } else {
      // Mid-Range
      baseRate = (selectedDestination.minPrice + selectedDestination.maxPrice) / 2;
    }
    
    // Adult rate calculation
    const adultTotal = adults * baseRate;
    // Child rate calculation (50% of adult rate)
    const childTotal = children * (baseRate * 0.5);
    
    return adultTotal + childTotal;
  }, [selectedDestination, adults, children, tier]);

  return (
    <section id="estimator" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-light/40 rounded-3xl p-8 md:p-12 shadow-sm border border-brand/10">
          
          <div className="flex items-center space-x-3 mb-8 border-b border-brand/10 pb-6">
            <div className="w-12 h-12 bg-brand rounded-xl text-white flex items-center justify-center shadow-md">
              <Calculator size={24} />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Live Quote Estimator</h2>
              <p className="text-gray-600 font-medium mt-1">Plan your dream adventure with real-time pricing.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Inputs */}
            <div className="space-y-6">
              
              <div>
                <label className="flex items-center text-sm font-bold text-gray-700 mb-2">
                  <MapPin size={16} className="mr-2 text-brand" /> Destination / Package
                </label>
                <select 
                  value={destinationId} 
                  onChange={(e) => setDestinationId(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all outline-none"
                >
                  {destinations.map(d => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center text-sm font-bold text-gray-700 mb-2">
                    <Users size={16} className="mr-2 text-brand" /> Adults
                  </label>
                  <input 
                    type="number" 
                    min="1" 
                    value={adults}
                    onChange={(e) => setAdults(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="flex items-center text-sm font-bold text-gray-700 mb-2">
                    <Baby size={16} className="mr-2 text-brand" /> Children (50% Off)
                  </label>
                  <input 
                    type="number" 
                    min="0" 
                    value={children}
                    onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center text-sm font-bold text-gray-700 mb-2">
                  <Building size={16} className="mr-2 text-brand" /> Accommodation Tier
                </label>
                <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden p-1">
                  {['budget', 'mid', 'luxury'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTier(t)}
                      className={`flex-1 py-2 text-sm font-semibold rounded-lg capitalize transition-colors ${tier === t ? 'bg-brand text-white shadow-md' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
                    >
                      {t === 'mid' ? 'Mid-Range' : t}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Results */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand to-earth"></div>
              
              <div className="text-center mb-6">
                <span className="text-gray-500 font-medium text-sm uppercase tracking-wider">Estimated Total</span>
                <div className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-2 mb-2 transition-all duration-300 transform group-hover:scale-105 group-hover:text-brand">
                  ${estimatedTotal.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </div>
              </div>
              
              <div className="space-y-3 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="flex justify-between items-center">
                  <span>Destination</span>
                  <span className="font-bold text-gray-900 truncate max-w-[150px]" title={selectedDestination?.name}>{selectedDestination?.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Guests</span>
                  <span className="font-bold text-gray-900">{adults} Adult(s), {children} Child(ren)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tier</span>
                  <span className="font-bold text-gray-900 capitalize">{tier === 'mid' ? 'Mid-Range' : tier}</span>
                </div>
              </div>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-brand/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                Request Detailed Quote
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

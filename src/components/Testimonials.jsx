import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      trip: "Maasai Mara Weekend",
      text: "Janel Tours and Travels made our weekend getaway absolutely seamless. The attention to detail and the warm community vibe was unmatched. Highly recommended!"
    },
    {
      name: "James K.",
      trip: "Corporate Retreat, Naivasha",
      text: "Our company retreat was a huge success thanks to this team. They handled everything perfectly, allowing us to focus on team bonding and relaxation."
    },
    {
      name: "Elena W.",
      trip: "Diani Beach Vacation",
      text: "An unforgettable experience from start to finish. The itinerary was perfectly balanced between adventure and downtime. Can't wait for the next trip!"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-2 block">Reviews</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">What Our Travelers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-50">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 text-lg mb-8 font-medium leading-relaxed italic">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                <span className="text-sm text-brand font-bold uppercase tracking-wide">{t.trip}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

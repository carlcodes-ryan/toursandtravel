import { MapPin } from 'lucide-react';

export default function Services() {
  const packages = [
    {
      title: "Maasai Mara Safari",
      description: "Experience the ultimate wildlife adventure in the world-famous Maasai Mara, home to the Great Migration.",
      priceRange: "$237 - $547 per day",
      image: "/images/gallery/maasai-mara.jpg"
    },
    {
      title: "Amboseli National Park",
      description: "Stunning views of Mount Kilimanjaro and large herds of free-ranging elephants await you.",
      priceRange: "$250 - $580 per day",
      image: "/images/gallery/amboseli.jpg"
    },
    {
      title: "Lake Nakuru Safari",
      description: "A bird watcher's paradise known for its thousands of pink flamingos and rhino sanctuary.",
      priceRange: "$210 - $490 per day",
      image: "/images/gallery/lake-nakuru.jpg"
    },
    {
      title: "Samburu National Park",
      description: "Discover rare northern specialist species like the Grevy's zebra and reticulated giraffe.",
      priceRange: "$240 - $560 per day",
      image: "/images/gallery/samburu.jpg"
    },
    {
      title: "Nairobi National Park",
      description: "The only wildlife capital in the world. Enjoy a quick safari against the city skyline.",
      priceRange: "$120 - $280 per day",
      image: "/images/gallery/nairobi-national-park.jpg"
    },
    {
      title: "Tsavo National Park (inc. Snake Safari)",
      description: "Explore the vast wilderness of Tsavo, featuring red elephants and specialized snake safaris.",
      priceRange: "$667 per day",
      image: "/images/gallery/tsavo.jpg"
    },
    {
      title: "Uganda Primate & Gorilla Circuits",
      description: "Trek through Bwindi, Kibale, and Murchison Falls for an unforgettable gorilla and primate encounter.",
      priceRange: "From $1,198 (5-Day)",
      image: "/images/gallery/uganda-primates.jpg"
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-2 block">Our Destinations</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Explore Our Safari Packages</h2>
          <p className="text-lg text-gray-600 font-medium">
            From the endless plains of the Mara to the dense forests of Uganda, discover our handcrafted safari experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full relative">
              <div className="h-48 overflow-hidden relative">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white text-brand flex items-center justify-center shadow-md">
                  <MapPin size={20} />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{pkg.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {pkg.description}
                </p>
                
                <div className="pt-6 border-t border-gray-100 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">Starting From</span>
                    <span className="text-lg font-extrabold text-gray-900">{pkg.priceRange}</span>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/254753632184?text=Hello%20Janel%20Tours%20and%20Travels,%20I'd%20like%20to%20enquire%20about%20your%20${encodeURIComponent(pkg.title)}%20package!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-brand-light text-brand font-bold py-3 rounded-xl hover:bg-brand hover:text-white transition-colors"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  { src: '/images/gallery/maasai-mara.jpg', alt: 'Maasai Mara Safari', location: 'Maasai Mara, Kenya' },
  { src: '/images/gallery/amboseli.jpg', alt: 'Amboseli National Park', location: 'Amboseli, Kenya' },
  { src: '/images/gallery/lake-nakuru.jpg', alt: 'Lake Nakuru', location: 'Lake Nakuru, Kenya' },
  { src: '/images/gallery/samburu.jpg', alt: 'Samburu National Park', location: 'Samburu, Kenya' },
  { src: '/images/gallery/nairobi-national-park.jpg', alt: 'Nairobi National Park', location: 'Nairobi, Kenya' },
  { src: '/images/gallery/tsavo.jpg', alt: 'Tsavo National Park', location: 'Tsavo, Kenya' },
  { src: '/images/gallery/uganda-primates.jpg', alt: 'Uganda Primates', location: 'Bwindi, Uganda' }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (img) => setSelectedImage(img);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-2 block">Our Memories</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Travel Gallery</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden rounded-2xl group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 ${
                idx === 0 || idx === 3 ? 'md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(img)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className={`w-full h-full object-cover ${
                  idx === 0 || idx === 3 ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-[4/3]'
                } transform group-hover:scale-105 transition-all duration-500`}
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.location}
                </h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Click to expand
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-sm transition-opacity"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-brand transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20"
            onClick={closeLightbox}
            aria-label="Close modal"
          >
            <X size={32} />
          </button>
          
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white font-bold text-2xl">{selectedImage.location}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

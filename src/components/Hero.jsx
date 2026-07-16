import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2000&auto=format&fit=crop" 
          alt="Cinque Terre Travel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/40 to-brand-dark/90 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <span className="inline-block py-1 px-4 rounded-full bg-brand/20 backdrop-blur-md border border-brand/30 text-brand-light text-sm font-bold mb-6 tracking-widest uppercase shadow-sm">
          Discover The World With Us
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight drop-shadow-xl">
          Your Next Great <br className="hidden sm:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-yellow-400">Adventure</span> Awaits.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium drop-shadow-md">
          We organize unforgettable group trips, customized vacation packages, and weekend getaways from Nairobi to the world.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#services" 
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand hover:bg-brand-dark text-white font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-brand/20 flex items-center justify-center gap-2"
          >
            Explore Trips <ArrowRight size={20} />
          </a>
          <a 
            href="https://wa.me/254753632184?text=Hello%20Janel%20Tours%20and%20Travels,%20I'd%20like%20to%20enquire%20about%20a%20trip!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageCircle size={20} /> WhatsApp Us
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center text-white/60">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Scroll</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-white/60 to-transparent rounded-full"></div>
      </div>
    </section>
  );
}

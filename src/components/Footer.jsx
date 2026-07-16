import { Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <h3 className="text-2xl font-black tracking-tighter text-white mb-4">
              <img src="/images/Logo.jpg" alt="Janel Tours and Travels Logo" className="h-10 w-auto rounded" />
            </h3>
            <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
              Crafting unforgettable travel experiences and community adventures, from Nairobi to the world.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-brand transition-colors font-medium block">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-brand transition-colors font-medium block">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand transition-colors font-medium block">Packages</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-brand transition-colors font-medium block">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://instagram.com/janeltours" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-brand hover:text-white transition-all transform hover:scale-110"
              >
                <Camera size={24} />
              </a>
            </div>
            <p className="text-gray-400 font-medium">WhatsApp / Call: <br className="hidden md:block"/><span className="text-white">0753 632 184</span></p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 font-medium text-sm">
          <p>&copy; {new Date().getFullYear()} Janel Tours and Travels. All rights reserved.</p>
          <p>Designed with ❤️ for adventurous souls.</p>
        </div>
      </div>
    </footer>
  );
}

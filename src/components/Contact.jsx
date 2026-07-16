import { Phone, MapPin, Camera, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-light/20 -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-5">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 bg-brand p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold mb-4 text-white">Get In Touch</h3>
                <p className="text-brand-light mb-10 text-lg font-medium leading-relaxed">
                  Ready to start your adventure? Reach out to us today and let's plan your perfect trip.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="mt-1">
                      <h4 className="font-bold text-lg">Call Us</h4>
                      <p className="text-brand-light font-medium mt-1">0753 632 184</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="mt-1">
                      <h4 className="font-bold text-lg">WhatsApp</h4>
                      <a 
                        href="https://wa.me/254753632184" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-light font-medium mt-1 hover:text-white transition-colors block"
                      >
                        +254 753 632 184
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <div className="mt-1">
                      <h4 className="font-bold text-lg">Instagram</h4>
                      <a 
                        href="https://instagram.com/janeltours" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-light font-medium mt-1 hover:text-white transition-colors block"
                      >
                        @janeltours
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="mt-1">
                      <h4 className="font-bold text-lg">Location</h4>
                      <p className="text-brand-light font-medium mt-1">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            </div>

            {/* Direct Links */}
            <div className="lg:col-span-3 p-10 md:p-12 bg-gray-50/50 flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Connect Directly</h3>
              <p className="text-gray-600 mb-10 font-medium text-lg">Skip the form. Reach out to us instantly on your preferred platform to start planning your adventure.</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <a 
                  href="https://wa.me/254753632184" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-8 rounded-2xl shadow-sm border border-green-100 hover:shadow-xl hover:-translate-y-2 transition-all group flex flex-col items-center text-center gap-4"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors shadow-inner">
                    <MessageCircle size={36} />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl text-gray-900">WhatsApp Us</h4>
                    <p className="text-gray-500 font-medium mt-2">Get instant replies</p>
                  </div>
                </a>

                <a 
                  href="https://instagram.com/janeltours" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-8 rounded-2xl shadow-sm border border-pink-100 hover:shadow-xl hover:-translate-y-2 transition-all group flex flex-col items-center text-center gap-4"
                >
                  <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center text-pink-500 group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-pink-500 group-hover:to-purple-500 group-hover:text-white transition-colors shadow-inner">
                    <Camera size={36} />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl text-gray-900">Instagram</h4>
                    <p className="text-gray-500 font-medium mt-2">See our latest trips</p>
                  </div>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

import { Users, Compass, ShieldCheck } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-brand" />,
      title: "Community First",
      description: "We specialize in group and organization travel, fostering deep connections among travelers."
    },
    {
      icon: <Compass className="w-8 h-8 text-brand" />,
      title: "Curated Experiences",
      description: "Every itinerary is thoughtfully crafted to offer authentic and immersive adventures."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand" />,
      title: "Trusted Service",
      description: "Based in Nairobi, Kenya, we handle all the logistics so you can focus on making memories."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="absolute -inset-6 bg-brand-light/70 rounded-[3rem] -z-10 transform -rotate-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800&auto=format&fit=crop" 
              alt="Group of friends traveling" 
              className="w-full h-64 md:h-80 object-cover rounded-3xl shadow-lg mt-12 transform hover:scale-105 transition-transform duration-500"
            />
            <img 
              src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?q=80&w=800&auto=format&fit=crop" 
              alt="Beautiful landscape" 
              className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-xl transform hover:-translate-y-4 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand-dark text-sm font-bold mb-6 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              About Janel Tours and Travels
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Travel together, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-yellow-500">grow together.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
              At Janel Tours and Travels, we believe that the best journeys are the ones shared. 
              Based in Nairobi, Kenya, we are passionate about designing travel experiences 
              that bring people together—whether it's a corporate retreat, a weekend getaway 
              with friends, or a grand vacation.
            </p>

            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-5 items-start group">
                  <div className="flex-shrink-0 p-4 bg-brand-light rounded-2xl group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <div className="group-hover:text-white group-hover:brightness-200 transition-all">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';

const applicationDetails = [
  {
    id: "6g",
    title: "6G Connectivity",
    content: "TeraSi's silicon photonics solutions are critical for building the infrastructure of 6G, enabling ultra-low latency, massive bandwidth, and pervasive connectivity for a truly interconnected world.",
    image: "https://picsum.photos/seed/6g-network/1200/600",
  },
  {
    id: "automotive",
    title: "Automotive Radar",
    content: "Enhancing vehicle safety and autonomous capabilities with high-resolution, solid-state LiDAR and radar systems based on our photonic chips. Experience unmatched precision and reliability in all weather conditions.",
    image: "https://picsum.photos/seed/auto-radar/1200/600",
  },
  {
    id: "defense",
    title: "Defense",
    content: "Providing secure, high-speed optical communication and advanced sensing solutions for defense platforms. Our rugged and compact components are ideal for mission-critical applications where performance and reliability are paramount.",
    image: "https://picsum.photos/seed/defense-tech/1200/600",
  },
  {
    id: "computing",
    title: "Photonic Computing",
    content: "Accelerating the next generation of computing by integrating light-based processors. TeraSi is developing components that enable faster calculations, higher throughput, and energy-efficient data centers for AI, machine learning, and complex simulations.",
    image: "https://picsum.photos/seed/optical-computing/1200/600",
  },
  {
    id: "vlc",
    title: "Visible Light Communications (VLC)",
    content: "Pioneering innovative wireless communication using light. Our VLC solutions offer secure, interference-free, and high-speed data transfer for indoor environments, underwater communication, and sensitive areas.",
    image: "https://picsum.photos/seed/vlc-light/1200/600",
  },
];

export const Applications = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Transforming Industries with Light</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our silicon photonics technology is solving the most complex challenges across a wide range of high-impact sectors.
            </p>
          </div>

          <div className="space-y-32">
            {applicationDetails.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">{app.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {app.content}
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group">
                    View Technical Specs
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

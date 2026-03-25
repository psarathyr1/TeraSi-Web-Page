import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Story & Mission</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded on a vision of transforming technology through light, TeraSi is dedicated to pushing the boundaries of silicon photonics. Our mission is to provide foundational technology that enables faster, more efficient, and more secure systems across diverse sectors.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that the future of computing, communication, and sensing lies in the integration of optical components onto silicon, and we are here to lead that transition.
              </p>
            </motion.div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden">
                <img
                  src="https://picsum.photos/seed/photonics/800/800"
                  alt="Photonics Lab"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm opacity-80">Years of Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Expertise</h2>
              <p className="text-gray-600 leading-relaxed">
                Our team comprises leading experts in photonics, semiconductor design, RF engineering, and advanced manufacturing. We combine deep scientific knowledge with practical engineering to bring revolutionary products to market.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why TeraSi?</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer unparalleled performance, miniaturization, and integration capabilities, leveraging the power of silicon photonics to solve complex challenges in data communication, sensing, and computation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Leadership</h2>
            <p className="text-gray-600 mt-4">The visionary minds behind TeraSi</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={`https://picsum.photos/seed/leader${i}/600/800`}
                    alt="Team member"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Expert Name {i}</h3>
                <p className="text-blue-600 text-sm font-medium">Position Title</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

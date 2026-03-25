import React from 'react';
import { motion } from 'motion/react';
import { Zap, Battery, Maximize, Settings, ShieldCheck } from 'lucide-react';

const advantages = [
  {
    title: "High Bandwidth & Speed",
    description: "Enabling unprecedented data rates for 6G and beyond.",
    icon: Zap,
  },
  {
    title: "Low Power Consumption",
    description: "Reducing operational costs and environmental impact significantly.",
    icon: Battery,
  },
  {
    title: "Compact Size",
    description: "Miniaturized devices for space-constrained applications.",
    icon: Maximize,
  },
  {
    title: "Cost-Effective Manufacturing",
    description: "Leveraging mature silicon fabrication processes for scale.",
    icon: Settings,
  },
  {
    title: "Robustness",
    description: "Inherently stable and reliable for demanding environments.",
    icon: ShieldCheck,
  },
];

export const Technology = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gray-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 50 Q 25 20 50 50 T 100 50" fill="none" stroke="blue" strokeWidth="0.5">
              <animate attributeName="d" values="M0 50 Q 25 20 50 50 T 100 50; M0 50 Q 25 80 50 50 T 100 50; M0 50 Q 25 20 50 50 T 100 50" dur="5s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">The Power of Silicon Photonics</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Integrating optical components onto silicon chips, using light (photons) instead of electrons to transmit data.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Silicon Photonics?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Silicon Photonics integrates optical components onto silicon chips, using light (photons) instead of electrons to transmit data. This allows for significantly higher speeds, lower power consumption, and smaller form factors compared to traditional electronics.
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">TeraSi's Approach</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At TeraSi, we specialize in designing and manufacturing advanced silicon photonic integrated circuits (PICs). Our proprietary designs leverage the unique properties of silicon waveguides to create highly efficient and scalable optical systems.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="aspect-video bg-white rounded-2xl shadow-inner flex items-center justify-center p-12">
                {/* Conceptual Waveguide Diagram */}
                <svg viewBox="0 0 400 200" className="w-full h-auto text-blue-600">
                  <rect x="50" y="80" width="300" height="40" fill="#f3f4f6" stroke="currentColor" strokeWidth="2" />
                  <path d="M50 100 L350 100" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8">
                    <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1s" repeatCount="indefinite" />
                  </path>
                  <text x="50" y="70" className="text-[12px] font-mono fill-gray-500">SILICON SUBSTRATE</text>
                  <text x="50" y="140" className="text-[12px] font-mono fill-blue-600">OPTICAL WAVEGUIDE (PHOTON FLOW)</text>
                </svg>
              </div>
              <p className="mt-6 text-center text-sm text-gray-500 italic">Conceptual illustration of light moving through a silicon circuit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Key Technological Advantages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, index) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <adv.icon className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{adv.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {adv.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

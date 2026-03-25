import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Signal, Car, Shield, Cpu, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const applications = [
  {
    title: "6G Connectivity",
    description: "Unlocking ultra-fast, high-capacity communication for the next era.",
    icon: Signal,
  },
  {
    title: "Automotive Radar",
    description: "Advanced, reliable, and compact radar systems for autonomous driving.",
    icon: Car,
  },
  {
    title: "Defense",
    description: "Robust and secure photonic solutions for critical defense applications.",
    icon: Shield,
  },
  {
    title: "Photonic Computing",
    description: "Revolutionizing data processing with light-speed optical cores.",
    icon: Cpu,
  },
  {
    title: "Visible Light Communications",
    description: "High-speed, secure data transmission using light sources.",
    icon: Lightbulb,
  },
];

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-gray-950">
        {/* Abstract Background Animation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]" />
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Pioneering the Future with <span className="text-blue-500">Silicon Photonics</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Unlocking next-generation technologies across multiple industries with high-performance, compact, and energy-efficient solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/technology"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all group"
              >
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 italic font-serif">Innovation at Light Speed</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                TeraSi is at the forefront of silicon photonics innovation, delivering high-performance, compact, and energy-efficient solutions. Our cutting-edge technology is designed to meet the demands of tomorrow's most critical applications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Applications Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Key Applications</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <app.icon className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {app.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

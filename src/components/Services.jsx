'use client';

import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white font-nunito">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section: Titles Left + Description Right */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-16">
          {/* Left titles */}
          <div className="flex-1">
            <p className="text-sm uppercase tracking-wider text-indigo-600 mb-2">
              Our Services
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your business goals are our priority
            </h2>
          </div>

          {/* Right description */}
          <div className="flex-1">
            <p className="text-gray-700 text-lg leading-relaxed">
              Our chartered accountants combine deep expertise with modern
              financial practices to guide your business. From auditing and
              taxation to financial advisory and compliance, we are dedicated to
              helping you navigate challenges and seize growth opportunities.
            </p>
          </div>
        </div>

        {/* Bottom Section: 3 Images in Horizontal Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop',
              title: 'Tax Planning And Preparation',
            },
            {
              src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
              title: 'Business Advisory Service',
            },
            {
              src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
              title: 'Book Keeping And Accounting',
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative group w-full h-64 rounded-[20px] overflow-hidden shadow-md"
            >
              <img
                src={service.src}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              {/* Black hue gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Title + button container */}
              <motion.div className="absolute bottom-1 left-4 right-4 flex flex-col items-start z-10">
                {/* Service title */}
                <motion.h3
                  variants={{
                    rest: { y: 0, opacity: 1 },
                    hover: { y: -15, opacity: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-lg font-semibold text-white mb-0"
                >
                  {service.title}
                </motion.h3>

                {/* Button appears under title */}
                <motion.div
                  variants={{
                    rest: { opacity: 0, y: 15 },
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <button className="mt-1 px-3 py-1 text-xs bg-white/90 text-gray-900 font-medium rounded-full shadow hover:bg-white transition">
                    All Services
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Centered button below images */}
        <div className="text-center">
          <a
            href="#services"
            className="inline-block px-6 py-2 text-sm font-medium text-white bg-indigo-700 rounded-full shadow hover:bg-indigo-600 transition"
          >
            All Services
          </a>
        </div>
      </div>
    </section>
  );
}

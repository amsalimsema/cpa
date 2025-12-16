'use client';

import { motion } from 'framer-motion';
import {
  Users,
  Target,
  Award,
  BarChart3,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from './CTA';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export default function About() {
  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
      title: 'Integrity',
      desc: 'We uphold the highest standards of integrity in all our actions.',
    },
    {
      icon: <Target className="w-8 h-8 text-indigo-600" />,
      title: 'Excellence',
      desc: 'We strive to excel in everything we do for our clients.',
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-indigo-600" />,
      title: 'Client Focus',
      desc: 'We build lasting relationships based on trust and results.',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
      title: 'Innovation',
      desc: 'We embrace innovative solutions to complex financial challenges.',
    },
  ];

  const stats = [
    { number: '200+', label: 'Satisfied Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Client Retention' },
    { number: '50+', label: 'Financial Experts' },
  ];

  // Function to scroll to values section
  const scrollToValues = () => {
    const valuesSection = document.getElementById('values');
    if (valuesSection) {
      valuesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="bg-white font-nunito">
      {/* Hero section with grid background - removed top padding to eliminate space */}
      <section className="relative bg-white overflow-hidden font-nunito pt-0">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* Soft circular gradients for depth */}
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-100 rounded-full opacity-30 pointer-events-none blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-200 rounded-full opacity-20 pointer-events-none blur-3xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
          {/* Animated Heading - Removed "PRECISION. INTEGRITY. EXCELLENCE." */}
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-transparent stroke-[1.5px] stroke-indigo-700 bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">
              YOUR TRUSTED FINANCIAL PARTNERS
            </div>
          </motion.h2>

          {/* Animated Paragraph - Reimagined for Chartered Accountants */}
          <motion.p
            className="mt-8 text-lg md:text-xl text-gray-700 max-w-3xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            For over a decade, we have been the cornerstone of financial
            excellence for businesses navigating complex economic landscapes.
            Our team of seasoned chartered accountants delivers unparalleled
            expertise that transforms numbers into strategic advantages.
          </motion.p>

          {/* Animated Buttons - Made smaller and more subtle */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.button
              onClick={scrollToValues}
              className="bg-indigo-50 text-indigo-700 px-5 py-2 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Our Core Values
            </motion.button>
            <motion.button
              className="border border-indigo-600 text-indigo-600 px-5 py-2 rounded-full hover:bg-indigo-50 transition-colors font-medium text-sm"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link to="/team">Meet Our Experts</Link>
            </motion.button>
          </motion.div>
        </div>
      </section>

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
      </div>
      <CTA />
    </section>
  );
}

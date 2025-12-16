'use client';

import { BookOpenCheck, Nfc, Expand } from 'lucide-react';
import { motion } from 'framer-motion';

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

const scaleVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <BookOpenCheck className="w-10 h-10 text-indigo-600 group-hover:text-white transition" />
      ),
      title: 'Expertise You Can Trust',
      desc: 'Comprehensive auditing solutions ensuring compliance and accuracy.',
    },
    {
      icon: (
        <Nfc className="w-10 h-10 text-indigo-600 group-hover:text-white transition" />
      ),
      title: 'Transparent Communication',
      desc: 'End-to-end tax planning and filing to minimize liabilities.',
    },
    {
      icon: (
        <Expand className="w-10 h-10 text-indigo-600 group-hover:text-white transition" />
      ),
      title: 'Client Satisfaction',
      desc: 'Strategic advice to guide your business growth and investments.',
    },
  ];

  return (
    <section className="py-20 bg-white font-nunito">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
        {/* Top Section: Titles Left + Description Right */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Left titles */}
          <motion.div className="flex-1" variants={itemVariants}>
            <p className="text-sm uppercase tracking-wider text-indigo-600 mb-2">
              Why choose us
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Why choose us as your trusted financial partner?
            </h2>
          </motion.div>

          {/* Right description */}
          <motion.div className="flex-1" variants={itemVariants}>
            <p className="text-gray-700 text-lg leading-relaxed">
              With a team of experienced chartered accountants, we bring
              together deep financial expertise and modern practices to deliver
              trusted results. From precise auditing and tax management to
              proactive financial advisory and regulatory compliance, we focus
              on building long-term value for your business.
            </p>
          </motion.div>
        </motion.div>

        {/* Dark banner */}
        <motion.div
          className="w-full bg-gray-900 rounded-[20px] p-12 flex flex-col md:flex-row items-center justify-between text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={scaleVariants}
        >
          <h2 className="text-2xl md:text-4xl font-bold md:w-3/5 leading-snug mb-4 md:mb-0">
            Experience seamless, secure, and efficient account management
          </h2>
          <div className="md:w-2/5 flex justify-start md:justify-end">
            <motion.div
              className="text-right"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="text-4xl md:text-6xl font-extrabold block">
                12 Years
              </span>
              <span className="text-base md:text-lg">
                of accounting service
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="group bg-indigo-50 rounded-[20px] p-6 flex flex-col gap-4 hover:bg-gray-900 transition"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 group-hover:text-white transition">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-action div */}
        <motion.div
          className="w-full bg-indigo-700 rounded-[20px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-4 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInVariants}
        >
          {/* Copy takes 60% */}
          <h3 className="text-2xl md:text-4xl font-bold leading-snug md:w-3/5">
            Looking for a premium accounting for your business?
          </h3>

          {/* Button takes remaining 40% */}
          <div className="md:w-2/5 flex justify-start md:justify-end">
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full hover:bg-gray-100 transition text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

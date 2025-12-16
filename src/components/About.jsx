'use client';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Target,
  Award,
  BarChart3,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react';

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

      <div className="max-w-6xl mx-auto px-6 pb-20 flex flex-col gap-16">
        {/* Header Section */}
        <motion.div
          className="flex flex-col md:flex-row items-start justify-between gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Left side */}
          <motion.div className="flex-1" variants={itemVariants}>
            <p className="text-sm uppercase tracking-wider text-indigo-600 mb-2">
              Our story
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Building financial futures since 2008
            </h2>
          </motion.div>

          {/* Right side */}
          <motion.div className="flex-1" variants={itemVariants}>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Founded with a vision to transform how businesses approach their
              finances, our firm has grown into a comprehensive financial
              partner for clients across diverse industries. What began as a
              small practice has flourished into a team of dedicated
              professionals united by a common purpose.
            </p>
            {/* <p className="text-gray-700 text-lg leading-relaxed">
              We've maintained our commitment to personalized service while
              embracing innovative technologies that enhance our ability to
              deliver exceptional results. Our journey has been shaped by the
              success of our clients and the trust they've placed in our
              expertise.
            </p> */}
          </motion.div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          className="w-full bg-indigo-50 rounded-[20px] p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              variants={itemVariants}
            >
              <motion.p
                className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-2"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
              >
                {stat.number}
              </motion.p>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          className="grid md:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          <motion.div
            className="bg-gray-50 rounded-[20px] p-8"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-10 h-10 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To provide exceptional, personalized financial services that
              empower our clients to make informed decisions, optimize their
              financial performance, and achieve sustainable growth in an
              ever-changing business environment.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-[20px] p-8"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4 mb-6">
              <Award className="w-10 h-10 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted and innovative accounting firm, recognized
              for our unwavering commitment to excellence, integrity, and client
              success in the financial services industry.
            </p>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          id="values"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInVariants}
        >
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-indigo-600 mb-2">
              Our values
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              The principles that guide everything we do
            </h2>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-gray-200 rounded-[20px] p-6 text-center flex flex-col items-center hover:shadow-lg transition"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="bg-indigo-50 p-3 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Team CTA */}
        <motion.div
          className="w-full bg-gray-900 rounded-[20px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInVariants}
        >
          <div className="md:w-3/5 mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Meet our team of certified professionals
            </h2>
            <p className="text-gray-300">
              Our diverse team brings together expertise from various financial
              disciplines to provide comprehensive solutions tailored to your
              specific needs.
            </p>
          </div>
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <Link
              to="/team"
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Team
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

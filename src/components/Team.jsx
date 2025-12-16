'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, Twitter } from 'lucide-react';

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

export default function Team() {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Senior Partner & Founder',
      expertise: 'Tax Strategy & Compliance',
      experience: '22 years',
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      linkedin: '#',
      email: '#',
      twitter: '#',
    },
    {
      name: 'Priya Sharma',
      role: 'Managing Partner',
      expertise: 'Audit & Assurance',
      experience: '18 years',
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      linkedin: '#',
      email: '#',
      twitter: '#',
    },
    {
      name: 'Arun Mehta',
      role: 'Tax Director',
      expertise: 'International Taxation',
      experience: '15 years',
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      linkedin: '#',
      email: '#',
      twitter: '#',
    },
    {
      name: 'Neha Patel',
      role: 'Audit Director',
      expertise: 'Financial Reporting',
      experience: '14 years',
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      linkedin: '#',
      email: '#',
      twitter: '#',
    },
    {
      name: 'Vikram Singh',
      role: 'Advisory Partner',
      expertise: 'Business Consulting',
      experience: '16 years',
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      linkedin: '#',
      email: '#',
      twitter: '#',
    },
    {
      name: 'Ananya Reddy',
      role: 'Senior Manager',
      expertise: 'Risk Advisory',
      experience: '12 years',
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      linkedin: '#',
      email: '#',
      twitter: '#',
    },
  ];

  const specialties = [
    {
      title: 'Tax Advisory',
      description:
        'Strategic tax planning and compliance services for businesses and individuals.',
      icon: '📊',
    },
    {
      title: 'Audit & Assurance',
      description:
        'Comprehensive auditing services ensuring financial integrity and compliance.',
      icon: '🔍',
    },
    {
      title: 'Financial Consulting',
      description:
        'Expert guidance for business growth, mergers, and financial strategy.',
      icon: '💼',
    },
    {
      title: 'Risk Management',
      description:
        'Identifying and mitigating financial risks to protect your assets.',
      icon: '🛡️',
    },
  ];

  return (
    <section id="team" className="py-20 bg-white font-nunito">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
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
              Our Experts
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Meet our team of financial specialists
            </h2>
          </motion.div>

          {/* Right side */}
          <motion.div className="flex-1" variants={itemVariants}>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our team comprises seasoned chartered accountants, tax
              specialists, and financial advisors with decades of combined
              experience. We bring diverse expertise to provide comprehensive
              solutions tailored to your unique financial needs.
            </p>
          </motion.div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-200 rounded-[20px] p-6 flex flex-col items-center text-center hover:shadow-lg transition"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-32 h-32 bg-indigo-100 rounded-full mb-6 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-indigo-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm mb-3">{member.expertise}</p>
              <p className="text-gray-500 text-xs mb-4">
                {member.experience} of experience
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href={member.linkedin}
                  className="p-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.email}
                  className="p-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={member.twitter}
                  className="p-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Specialties Section */}
        <motion.div
          className="w-full bg-indigo-50 rounded-[20px] p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInVariants}
        >
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-indigo-600 mb-2">
              Our Specialties
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Comprehensive financial expertise
            </h2>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {specialties.map((specialty, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-[16px] p-6 text-center flex flex-col items-center hover:shadow-md transition"
                variants={itemVariants}
              >
                <div className="text-3xl mb-4">{specialty.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {specialty.title}
                </h3>
                <p className="text-gray-600 text-sm">{specialty.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="w-full bg-gray-900 rounded-[20px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInVariants}
        >
          <div className="md:w-3/5 mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to work with our experts?
            </h2>
            <p className="text-gray-300">
              Schedule a consultation with one of our specialists to discuss how
              we can help achieve your financial goals with tailored solutions.
            </p>
          </div>
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

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

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-indigo-600" />,
      title: 'Visit Our Office',
      details: ['Nariman Point', 'Mumbai, Maharashtra 400021', 'India'],
    },
    {
      icon: <Phone className="w-6 h-6 text-indigo-600" />,
      title: 'Call Us',
      details: ['+91 22 1234 5678', '+91 98765 43210'],
    },
    {
      icon: <Mail className="w-6 h-6 text-indigo-600" />,
      title: 'Email Us',
      details: ['info@cafirm.com', 'support@cafirm.com'],
    },
    {
      icon: <Clock className="w-6 h-6 text-indigo-600" />,
      title: 'Office Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM'],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white font-nunito">
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
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Let's discuss your financial needs
            </h2>
          </motion.div>

          {/* Right side */}
          <motion.div className="flex-1" variants={itemVariants}>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our team of chartered accountants is ready to provide personalized
              financial solutions for your business. Reach out to us through any
              of the following channels or fill out the form for a prompt
              response.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
          >
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <div className="bg-indigo-50 p-3 rounded-full flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 mb-1">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <motion.div
              className="bg-indigo-50 rounded-[20px] overflow-hidden h-64 mt-4"
              variants={itemVariants}
            >
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-200">
                <div className="text-center p-6">
                  <MapPin className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <p className="text-indigo-800 font-semibold">
                    Nariman Point Office
                  </p>
                  <p className="text-indigo-700 text-sm">Mumbai, Maharashtra</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-50 rounded-[20px] p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInVariants}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  placeholder="+91 12345 67890"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                  <option value="">Select a service</option>
                  <option value="tax">Tax Advisory</option>
                  <option value="audit">Audit & Assurance</option>
                  <option value="accounting">Accounting Services</option>
                  <option value="consulting">Business Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="w-full bg-indigo-50 rounded-[20px] p-8 md:p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInVariants}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Schedule a Free Consultation
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Book a complimentary 30-minute consultation with one of our senior
            accountants to discuss your financial needs and how we can help your
            business thrive.
          </p>
          <motion.a
            href="#"
            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

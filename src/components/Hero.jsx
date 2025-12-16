import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden font-nunito">
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

      <div className="relative max-w-6xl mx-auto px-6 py-32 flex flex-col items-center text-center">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold leading-tight space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>TAILOR-MADE</div>
          <div className="text-transparent stroke-[1.5px] stroke-indigo-700 bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">
            FINANCIAL
          </div>
          <div>ADVISORY</div>
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          className="mt-8 text-sm md:text-base text-gray-700 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We help businesses, entrepreneurs, and organizations manage finances,
          stay compliant, and unlock growth opportunities with expert financial
          advice.
        </motion.p>

        {/* Animated Buttons */}
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
          <motion.a
            href="#services"
            className="bg-indigo-50 text-indigo-700 px-6 py-2.5 rounded-full hover:bg-indigo-100 transition-transform transform hover:scale-105 font-semibold text-sm md:text-base"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Explore Services
          </motion.a>
          <motion.a
            href="#contact"
            className="border border-indigo-700 text-indigo-700 px-6 py-2.5 rounded-full hover:bg-indigo-50 transition-transform transform hover:scale-105 font-semibold text-sm md:text-base"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

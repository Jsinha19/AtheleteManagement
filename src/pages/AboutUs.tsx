import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import type { Variants } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};


const gradientVariants:Variants = {
  hidden: { backgroundPosition: '0% 50%', opacity: 0, y: -30 },
  visible: {
    backgroundPosition: '100% 50%',
    opacity: 1, y: 0,
    transition: {
      backgroundPosition: { duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'linear' },
      opacity: { duration: 0.8, ease: 'easeOut' },
      y: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    }
  }
};

const octagonTextVariants:Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.93 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
  }
};

// New image animation
const imageVariants:Variants = {
  hidden: {
    opacity: 0,
    x: -120,
    scale: 0.94,
    filter: 'blur(8px) brightness(60%)'
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px) brightness(100%)',
    transition: {
      duration: 2.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const AboutUs: React.FC = () => {
  const title = 'ABOUT US';
  const letters = title.split('');

  const introParagraph =
    "At ARA Sports Management, we are athletes first. Founded in Saudi Arabia, we created ARA to help athletes pursue their dreams and reach their full potential. We saw a major gap for many talented athletes who are underpaid, less represented and are unfortunately unable to train full time. With Saudi's Vision 2030 pushing for growth in health, wellness, and sports, we see a clear opportunity to change that.";

  const missionTexts = [
    '• Empowering Athletes: We give athletes the support, resources, and sponsorships they need to succeed locally and internationally. Our goal is to help build a stronger sports culture in Saudi Arabia.',
    '• Delivering Value to Businesses: We connect companies with a fast-growing market of athletes who have loyal fans. Sponsoring athletes is not just support, it is smart marketing that boosts brand visibility and builds real connections with communities.',
    '• Unique relationship: partnering with our athletes builds authentic trust with audiences. We bring credibility, discipline and integrity that deeply resonate trust with consumers. Our athlete’s inspiring stories will strengthen our partners reputation and long term trust with customers.',
    'At ARA Sports Management, we believe athletes’ success and business growth go hand in hand. Together, we can build a thriving sports future, fueled by passion, purpose, and partnerships.',
  ];

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/5.mp4"
          autoPlay loop muted playsInline
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 w-full flex justify-center items-center h-full">
          <motion.h1
            className="text-white font-extrabold text-[12vw] leading-none tracking-tight text-center select-none"
            style={{
              textShadow: '0 4px 32px rgba(0,0,0,0.7), 0 0px 0px rgba(0,0,0,1)',
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
          >
            {letters.map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </div>

      {/* Introduction Section */}
      <motion.div
        className="relative w-full bg-white z-10 overflow-hidden py-12 mt-10 sm:mt-16"
        // <--- Add margin-top here for clear separation!
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        />
        <div className="container mx-auto px-6 max-w-4xl flex flex-col justify-center">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-[length:200%_auto]"
            variants={gradientVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            Introduction
          </motion.h2>
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            <p>{introParagraph}</p>
            <motion.div
              className="mt-8 mx-auto w-24 h-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* IMAGE SECTION (More transition/effects) */}
      <motion.div
        className="relative w-full py-8 md:py-12 bg-gray-50 flex justify-center"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.55 }}
      >
        <motion.div
          className="w-full max-w-4xl h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl relative"
          initial={{ boxShadow: "0 4px 48px 0 rgba(80,0,110,0.05)" }}
          animate={{ boxShadow: "0 8px 40px 0 rgba(80,0,110,0.17)" }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/about/ab00.jpg"
            alt="Featured"
            className="w-full h-full object-cover transition-all duration-700"
            style={{ willChange: 'transform, filter' }}
          />
        </motion.div>
      </motion.div>

      {/* OCTAGON / MISSION BLOCK */}
      <motion.div
        className="relative w-full py-16 md:py-20 bg-gradient-to-r from-purple-600 to-pink-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-white/20 shadow-xl"
            variants={octagonTextVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our mission is simple:</h2>
            {missionTexts.map((text, idx) => (
              <p
                key={idx}
                className={`text-white text-lg md:text-xl mb-4 ${idx === missionTexts.length - 1 ? 'mb-0' : ''}`}
              >
                {text}
              </p>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Spacer */}
      <div className="h-12"></div>
    </div>
  );
};

export default AboutUs;

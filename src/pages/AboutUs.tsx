import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import type { Variants } from "framer-motion";

// --- Animation Variants ---

const containerVariants: Variants = {
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

const gradientVariants: Variants = {
  hidden: { backgroundPosition: '0% 50%', opacity: 0, y: -30 },
  visible: {
    backgroundPosition: '100% 50%',
    opacity: 1,
    y: 0,
    transition: {
      backgroundPosition: { duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'linear' },
      opacity: { duration: 0.8, ease: 'easeOut' },
      y: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    }
  }
};

const missionContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.4 }
  }
};

const missionItemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  }
};

const missionHeadingVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const imageVariants: Variants = {
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

const teamCardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

// --- Data ---

const teamData = [
  {
    name: "Rakan Alireza",
    image: "/Person/1.jpg",
    roles: [
      "PwC Consulting",
      "Athlete for Saudi Rowing Federation and Skiing Federation",
      "Operations, Business Development Director Kona"
    ]
  },
  {
    name: "Abdullah Elkhereiji",
    image: "/Person/2.jpg",
    roles: [
      "Director of Business Development & Public Relations",
      "Maydan Advanced Construction CO.",
      "National and International Professional Racing Driver"
    ]
  },
  {
    name: "Abdulmohsen Bakhwain",
    image: "/Person/3.jpg",
    roles: [
      "AMB Ventures - Founder & CEO",
      "Built In Market Food Tech Solutions",
      "Value Chain Management Solutions - Operational and Tech",
      "International Showjumping Athlete",
      "Certified Six Sigma Green Belt",
      "SCMC (Supply Chain Mgmt)"
    ]
  },
  {
    name: "Abdulrahman Garoub",
    image: "/Person/4.jpg",
    roles: [
      "Sports & Entertainment Consultant",
      "Professional Racer",
      "Sports Enthusiast"
    ]
  }
];

// const decorativeBgPattern = "data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L80 25 L80 55 L50 70 L20 55 L20 25 Z' stroke='%23EF4444' stroke-width='2' fill='none' transform='rotate(15 50 40)'/%3E%3Cpath d='M120 80 L160 70 L170 110 L130 120 Z' fill='%23EF4444'/%3E%3Cpath d='M150 140 L180 155 L180 185 L150 200 L120 185 L120 155 Z' stroke='%23EF4444' stroke-width='2' fill='none' transform='rotate(-10 150 170)'/%3E%3Cpath d='M10 150 L50 140 L60 180 L20 190 Z' fill='%23EF4444'/%3E%3C/svg%3E";

// --- Main Component ---

const AboutUs: React.FC = () => {
  const title = 'ABOUT US';
  const letters = title.split('');

  const introParagraph =
    "At ARA Sports Management, we are athletes first. Founded in Saudi Arabia, we created ARA to help athletes pursue their dreams and reach their full potential. We saw a major gap for many talented athletes who are underpaid, less represented and are unfortunately unable to train full time. With Saudi's Vision 2030 pushing for growth in health, wellness, and sports, we see a clear opportunity to change that.";

  const missionPoints = [
    {
      heading: 'Empowering Athletes',
      text: 'We give athletes the support, resources, and sponsorships they need to succeed locally and internationally. Our goal is to help build a stronger sports culture in Saudi Arabia.',
    },
    {
      heading: 'Delivering Value to Businesses',
      text: 'We connect companies with a fast-growing market of athletes who have loyal fans. Sponsoring athletes is not just support, it is smart marketing that boosts brand visibility and builds real connections with communities.',
    },
    {
      heading: 'Unique relationship',
      text: 'partnering with our athletes builds authentic trust with audiences. We bring credibility, discipline and integrity that deeply resonate trust with consumers. Our athlete’s inspiring stories will strengthen our partners reputation and long term trust with customers.',
    },
  ];

  const finalMissionParagraph = 'At ARA Sports Management, we believe athletes’ success and business growth go hand in hand. Together, we can build a thriving sports future, fueled by passion, purpose, and partnerships.';

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
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.4)' }}
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
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

      {/* IMAGE SECTION */}
      <motion.div
        className="relative w-full py-8 md:py-12 bg-gray-50 flex justify-center"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.55 }}
      >
        <motion.div
          className="w-full max-w-2xl h-48 md:h-[250px] rounded-xl overflow-hidden shadow-2xl relative"
          initial={{ boxShadow: "0 4px 48px 0 rgba(80,0,110,0.05)" }}
          animate={{ boxShadow: "0 8px 40px 0 rgba(80,0,110,0.17)" }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/about/ab00.jpg"
            alt="Featured"
            className="w-full h-full object-cover transition-all duration-700"
          />
        </motion.div>
      </motion.div>

      {/* --- OUR MISSION SECTION --- */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#423b88] via-purple-500 to-pink-500 bg-[length:200%_auto]"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ backgroundPosition: ['0% 50%', '200% 50%', '0% 50%'] }}
            transition={{
              opacity: { duration: 0.8, ease: 'easeOut' },
              y: { duration: 0.8, ease: 'easeOut' },
              backgroundPosition: { duration: 10, repeat: Infinity, ease: 'linear' },
            }}
            viewport={{ once: true }}
          >
            Our Mission is simple 
          </motion.h2>

          {/* MISSION BLOCK */}
          <motion.div
            className="relative w-full py-16 md:py-20 bg-gradient-to-r from-[#e95961] to-[#f18e93] rounded-xl shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="container mx-auto px-6 max-w-4xl">
              <motion.div variants={missionContainerVariants}>
                <div className="space-y-12">
                  {missionPoints.map((point, idx) => (
                    <motion.div key={idx} variants={missionItemVariants}>
                      <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-left">
                        <motion.strong
                          className="font-semibold block mb-3 text-2xl md:text-5xl bg-clip-text text-[#423b88] "
                          variants={missionHeadingVariants}
                        >
                          {point.heading}
                        </motion.strong>
                        {point.text}
                      </p>
                    </motion.div>
                  ))}
                  <motion.p
                    className="text-lg md:text-xl text-white/90 pt-8 border-t border-white/20 leading-relaxed"
                    variants={missionItemVariants}
                  >
                    {finalMissionParagraph}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- OUR TEAM SECTION (UPDATED) --- */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-24 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-[length:200%_auto]"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ backgroundPosition: ['0% 50%', '200% 50%', '0% 50%'] }}
            transition={{
              opacity: { duration: 0.8, ease: 'easeOut' },
              y: { duration: 0.8, ease: 'easeOut' },
              backgroundPosition: { duration: 10, repeat: Infinity, ease: 'linear' },
            }}
            viewport={{ once: true }}
          >
            Our Team
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-32"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {teamData.map((member) => (
              <motion.div
                key={member.name}
                className="group"
                variants={teamCardVariants}
              >
                {/* Container for image and the banner that hangs off it */}
                <div className="relative mb-4 h-96">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    
                    {/* Name Banner - Smaller and positioned from the left */}
                    <div 
                        className="absolute bottom-[-30px] -left-6 h-24 w-5/6 bg-[#423b88] flex flex-col justify-center rounded-lg shadow-2xl text-white px-6 text-left"
                        style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)' }}
                    >
                        {member.name.split(' ').map((word, i) => (
                            <span key={i} className="block font-semibold text-xl leading-tight">{word}</span>
                        ))}
                    </div>
                </div>

                {/* Roles list positioned below the image/banner combo */}
                <div className="pt-16">
                    <ul className="text-gray-600 text-sm space-y-1.5 list-disc list-inside">
                        {member.roles.map((role, i) => <li key={i}>{role}</li>)}
                    </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-12 bg-white"></div>
    </div>
  );
};

export default AboutUs;
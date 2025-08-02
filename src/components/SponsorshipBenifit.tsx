import React from 'react';
import { motion, type Variants } from 'framer-motion';

// The data for the four benefit cards, extracted from your original code.
const benefitsData = [
  {
    id: 1,
    title: 'Brand Visibility',
    description: 'Logo placement on gear, branding adaptation, and sponsor announcements.',
  },
  {
    id: 2,
    title: 'Digital Presence',
    description: 'Social media tagging, influencer shoutouts, and boosted content across platforms.',
  },
  {
    id: 3,
    title: 'Exclusive Access',
    description: 'Event tickets, promotional material, and team visits for sponsors.',
  },
  {
    id: 4,
    title: 'Media Coverage',
    description: 'Press releases, professional videography, and photography featuring sponsor logos.',
  }
];

// --- Animation Variants for a staggered fade-in effect ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// --- The Main Sponsorship Benefits Component ---
export const SponsorshipBenefits: React.FC = () => {
  return (
    // Main section with the dark purple background
    <section className="relative w-full bg-indigo-900 text-white py-20 md:py-28 overflow-hidden font-sans">
      
      {/* Decorative Background Elements */}
      <div className="absolute -top-10 -right-10 w-48 h-48 opacity-10">
        <div className="w-full h-full border-2 border-red-400 transform rotate-45" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
      </div>
      <div className="absolute top-1/2 left-10 w-32 h-32 opacity-10">
        <div className="w-full h-full border-2 border-red-400 transform -rotate-12" style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}></div>
      </div>
       <div className="absolute bottom-10 right-1/3 w-40 h-40 opacity-5">
        <div className="w-full h-full border border-red-400 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 md:mb-20 text-left"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Sponsorship Benefits
        </motion.h2>

        {/* Grid layout for the benefit cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {benefitsData.map((benefit) => (
            <motion.div 
              key={benefit.id} 
              className="flex items-start gap-6"
              variants={itemVariants}
            >
              {/* The red angled shape */}
              <div className="flex-shrink-0 mt-1">
                <div 
                  className="w-20 h-20 bg-red-500" 
                  style={{ clipPath: 'polygon(0 0, 100% 20%, 100% 80%, 0 100%)' }}
                ></div>
              </div>
              
              {/* Text Content */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-base text-indigo-200 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorshipBenefits;
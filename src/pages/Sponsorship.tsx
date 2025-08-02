import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

// --- Animation Variants ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

// --- NEW IMAGE ANIMATIONS ---
const scaleInFadeUpVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};

const flipInVariants = {
  hidden: { opacity: 0, rotateX: -90, scale: 0.9 },
  visible: {
    opacity: 1,
    rotateX: 0,
    scale: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};

const nameSponsorVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            staggerChildren: 0.2
        }
    }
};

const cardFromLeftVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const cardFromRightVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const tierCardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};


// --- Sponsorship Data ---
const araNameSponsor = {
  title: 'ARA Name Sponsor',
  price: '500,000 SAR',
  color: '#F56565', // A vibrant red
  benefits: [
    'Name - ARA Management powered by (Your Brand)',
    'Logo placement on athlete’s jersey, caps, and equipment.',
    'Custom Welcome Package branding and item provision.',
    'Premier branding on website, press releases, and all digital platforms.',
    'VIP access to all sporting events, training camps, and media days.',
    'ARA Sketched Reels featuring prominent Product Placement.',
    'Dedicated social media campaigns with product exclusivity.',
    'Guaranteed meet & greet opportunities with athletes.',
  ],
  note: '**Any official events dependent on uniform provided by governing body.**'
};

const otherTiers = [
  {
    title: 'Golden Sponsor',
    price: '100,000 SAR',
    color: '#D69E2E', // Gold
    benefits: [
      'Brand ambassadorship (social media, interviews)',
      'ARA Approved Sketches and Reels with Product Placement',
      'Usage of Products in public settings & events.',
      'Logo on training apparel and social media assets.',
      'Regular social media mentions & brand integrations.',
      'Boosted posts & Collaborations (by sponsor)',
      'Access to exclusive networking events.',
    ],
  },
  {
    title: 'Silver Sponsor',
    price: '50,000 SAR',
    color: '#A0AEC0', // Silver
    benefits: [
        'Brand ambassadorship (social media, product placement)',
        'ARA Approved Sketches and Reels with Product Placement',
        'Usage of Products in public settings & events.',
        'Logo on training apparel and social media assets.',
        'Regular social media mentions & brand integrations.',
        'Boosted posts & Collaborations (by sponsor)',
        'Athlete Visit (Subject to availability)',
    ],
  }
];

const inKindSponsor = {
    title: 'In Kind Sponsor',
    color: '#38B2AC', // Teal
    benefits: [
        'Media Production', 'Shoots & Reels', 'Reality TV Show', 'Vlogs',
        'Nutrition & Food', 'Training Regimen Plan', 'Training Space & Program',
    ],
};


// --- Main Sponsorship Page Component ---
const Sponsorship: React.FC = () => {
  const title = 'SPONSORSHIP';
  const letters = title.split('');
  
  return (
    <div className="relative bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <video className="absolute inset-0 w-full h-full object-cover" src="/videos/5.mp4" autoPlay loop muted playsInline />
        <div className="absolute inset-0 bg-black/40" />
        <motion.h1 className="relative z-10 text-white font-extrabold text-[12vw] leading-none tracking-tight text-center select-none" style={{ textShadow: '0 4px 32px rgba(0,0,0,0.7)' }} variants={containerVariants} initial="hidden" animate="visible" >
            {letters.map((letter, i) => (
              <motion.span key={i} variants={letterVariants}>{letter === ' ' ? '\u00A0' : letter}</motion.span>
            ))}
        </motion.h1>
      </div>
      
      {/* --- NEW IMAGE 1 (Scale & Fade) --- */}
      <div className="py-20 md:py-28 flex justify-center items-center bg-white">
        <motion.div 
          className="w-full max-w-3xl px-4" 
          variants={scaleInFadeUpVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.4 }}
        >
            <img src="/Sponsorship/sponsor2.jpg" alt="Athlete preparing" className="rounded-xl shadow-2xl"/>
        </motion.div>
      </div>

      {/* ARA Name Sponsor Section */}
      <div className="relative py-20 md:py-28 overflow-hidden bg-slate-900">
        <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
            style={{ backgroundSize: '400% 400%' }}
        />
        <motion.div className="relative container mx-auto px-6 max-w-4xl text-center text-white" variants={nameSponsorVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <motion.h2 className="text-5xl md:text-6xl font-extrabold" style={{ textShadow: `0 0 20px ${araNameSponsor.color}` }} variants={listItemVariants}>{araNameSponsor.title}</motion.h2>
            <motion.p className="text-3xl font-bold mt-2 mb-10" style={{ color: araNameSponsor.color }} variants={listItemVariants}>{araNameSponsor.price}</motion.p>
            <motion.ul className="text-lg md:text-xl text-left list-disc list-inside space-y-4" variants={containerVariants}>
                {araNameSponsor.benefits.map((benefit, i) => <motion.li key={i} variants={listItemVariants}>{benefit}</motion.li>)}
            </motion.ul>
            <motion.p className="text-xs text-gray-400 mt-8 pt-4 border-t border-white/20" variants={listItemVariants}>{araNameSponsor.note}</motion.p>
        </motion.div>
      </div>
      
      {/* --- NEW IMAGE 2 (3D Flip) --- */}
      <div className="py-20 md:py-28 flex justify-center items-center bg-gray-100 perspective-1000">
        <motion.div 
          className="w-full max-w-4xl px-4" 
          variants={flipInVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.5 }}
        >
            <img src="/Sponsorship/sponsor1.webp" alt="Athlete in action" className="rounded-xl shadow-2xl"/>
        </motion.div>
      </div>
      
      {/* Golden & Silver Tiers */}
      <div className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-16">Sponsorship Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {otherTiers.map((tier, index) => (
                <motion.div 
                    key={tier.title} 
                    className="bg-gray-50 rounded-xl p-8 shadow-lg flex flex-col border border-gray-200"
                    variants={index === 0 ? cardFromLeftVariant : cardFromRightVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                  <h3 className="text-3xl font-bold" style={{ color: tier.color }}>{tier.title}</h3>
                  <p className="text-xl font-semibold text-gray-600 mb-6">{tier.price}</p>
                  <motion.ul className="space-y-3 text-gray-700 list-disc list-inside flex-grow" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {tier.benefits.map((benefit, i) => <motion.li key={i} variants={listItemVariants}>{benefit}</motion.li>)}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
        </div>
      </div>

      {/* In-Kind Tier */}
      <div className="py-20 md:py-28" style={{ backgroundColor: '#2B2A4C' }}>
        <div className="container mx-auto px-4 text-center">
            <motion.div className="max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={tierCardVariants}>
                <h3 className="text-4xl md:text-5xl font-bold" style={{ color: inKindSponsor.color }}>{inKindSponsor.title}</h3>
                <p className="text-white mt-4 mb-8 text-lg">Provide value through services and products.</p>
                <motion.div className="flex flex-wrap justify-center gap-4 text-lg" variants={containerVariants}>
                    {inKindSponsor.benefits.map((benefit, i) => (
                        <motion.span key={i} className="bg-white/10 text-white rounded-full px-5 py-2" variants={listItemVariants}>
                            {benefit}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Sponsorship;
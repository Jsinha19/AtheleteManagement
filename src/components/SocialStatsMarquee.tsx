import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import type { Variants } from "framer-motion";

// --- Partner logos data ---
// Ensure these logo paths are correct in your `public` folder
const partners = [
    { id: 'cross-country', logo: '/Marquee/1.png' },
    { id: 'saudi-club', logo: '/Marquee/5.png' },
    { id: 'jameel', logo: '/Marquee/6.png' },
    { id: 'fia', logo: '/Marquee/5.png' },
    { id: 'lexus', logo: '/Marquee/2.jpg' },
    { id: 'saudi-ski', logo: '/Marquee/2.jpg' },
    { id: 'kona', logo: '/Marquee/2.jpg' },
    { id: 'saudi-games', logo: '/Marquee/3.jpg' },
    { id: 'saef', logo: '/Marquee/2.jpg' },
    { id: 'saudi-rowing', logo: '/Marquee/4.jpg' },
];

// --- Animation Variants ---
// Marquee scrolling from right to left
const marqueeVariants_RTL: Variants = {
    animate: {
        x: [0, -1920],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
            },
        },
    },
};

const marqueeVariants_LTR: Variants = {
    animate: {
        x: [-1920, 0],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
            },
        },
    },
};



// --- Reusable Marquee Track Component ---
interface MarqueeTrackProps {
    direction: 'left-to-right' | 'right-to-left';
}

const MarqueeTrack: React.FC<MarqueeTrackProps> = ({ direction }) => {
    const variants = direction === 'right-to-left' ? marqueeVariants_RTL : marqueeVariants_LTR;
    return (
        <motion.div
            className="flex gap-16"
            variants={variants}
            animate="animate"
        >
            {[...partners, ...partners].map((partner, index) => (
                <div key={`${partner.id}-${index}`} className="flex-shrink-0 w-32 h-20">
                    <img
                        src={partner.logo}
                        alt={`${partner.id} logo`}
                        className="w-full h-full object-contain"
                    />
                </div>
            ))}
        </motion.div>
    );
};


// --- Main Social Stats Component ---
export const SocialStatsMarquee: React.FC = () => {
    return (
        // Height decreased with less vertical padding (py-16)
        // Static background image added from the public folder
        <section
            className="relative w-full py-16 overflow-hidden font-sans bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/marqueeBg.jpg')" }}
        >
            {/* Optional: Add a dark overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-black/30 z-0"></div>

            {/* Content container with reduced vertical spacing (space-y-12) */}
            <div className="relative z-10 w-full flex flex-col items-center space-y-12">

                {/* --- Followers Section (Top Marquee) --- */}
                <div className="w-full flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                        Followers <FaInstagram />
                    </h2>
                    {/* Reduced margin-top for tighter spacing */}
                    <div className="relative mt-8 w-full max-w-7xl overflow-hidden">
                        <MarqueeTrack direction="right-to-left" />
                    </div>
                    <motion.p
                        className="mt-1 text-4xl md:text-5xl font-extrabold text-white tracking-tight"
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        Total Followers{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                            10.2M
                        </span>
                    </motion.p>
                </div>

                {/* --- Viewership Section (Bottom Marquee) --- */}
                <div className="w-full flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3 mt-4">
                        Viewership on <FaTwitter />
                    </h2>
                    {/* Reduced margin-top for tighter spacing */}
                    <div className="relative mt-8 w-full max-w-7xl overflow-hidden">
                        <MarqueeTrack direction="left-to-right" />
                    </div>
                    <motion.p
                        className="mt-8 text-4xl md:text-5xl font-extrabold text-white tracking-tight"
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        Total Followers{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            6.4M
                        </span>
                    </motion.p>
                </div>

            </div>
        </section>
    );
};

export default SocialStatsMarquee;
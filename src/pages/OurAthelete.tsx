import React from 'react';
import Navbar from '../components/Navbar';
import { motion,type Variants } from 'framer-motion';

// --- Animation Variants (No changes here) ---

const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const letterVariants :Variants= {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

const galleryCardVariants:Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const profileImageVariants :Variants= {
  hidden: { opacity: 0, x: -80, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  }
};

const textContentVariants :Variants= {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const listItemVariants :Variants= {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};


// --- Athletes Data (No changes here) ---

const athletesData = [
  {
    id: "saud-al-hogbani",
    name: "Saud Al Hogbani",
    sport: "Tennis",
    galleryImage: "/Person/1.jpg",
    profileImage: "/Person/1.jpg",
    logos: ["/logos/saudi-tennis.png"],
    competitions: [
      {
        category: "International",
        list: [
          "Youngest player in Saudi & the GCC to win a Davis cup match at 15 years old.",
          "Only player ever to win 4 Arab championships in a row under 12,13...18.",
          "Only GCC country to win the Arab championships team under 12.",
          "Led Saudi Arabia to group 2 in Davis cup for the first time ever.",
          "Won the GCC championships 10 times.",
          "Record for most consecutive singles wins in Davis cup history in Saudi Arabia 8 wins in a row."
        ]
      },
      {
        category: "National",
        list: [
          "First person to win Saudi games in tennis.",
          "The youngest player ever to be ranked number 1 in the rankings in Saudi Arabia at 14 years old."
        ]
      }
    ]
  },
  {
    id: "rakan-alireza",
    name: "Rakan Alireza",
    sport: "Rowing & Cross Country Skiing",
    galleryImage: "/Person/2.jpg",
    profileImage: "/Person/2.jpg",
    logos: ["/logos/saudi-rowing.png", "/logos/kona.png", "/logos/milan-cortina.png"],
    competitions: [
      {
        category: "Past",
        list: [
          "Asian Olympic Qualifiers - Korea",
          "Asian Games - China",
          "Cross Country Skiing - Sweden, Finland Iceland",
          "Worlds Championships XC Skiing - Slovenia"
        ]
      },
      {
        category: "2025",
        list: [
          "10 x XC Season - Europe",
          "World Champs - Norway",
          "National Coastal Sprints - Saudi",
          "Rowing Asian Competitions - TBC"
        ]
      }
    ]
  },
  {
    id: "abdullah-elkhereiji",
    name: "Abdullah Elkhereiji",
    sport: "Motor Racing",
    galleryImage: "/Person/3.jpg",
    profileImage: "/Person/3.jpg",
    logos: ["/logos/fia.png", "/logos/jameel.png", "/logos/lexus.png"],
    competitions: [
        {
            category: "Accomplishments",
            list: [
              "Karting (OKC Honda) Cadet Champion South of France 2010",
              "Karting Motori seven Junior Champion Lebanon 2011",
              "Formula Gulf 1000 (Formula 4) 4 podiums 2 wins UAE 2013",
              "First Saudi to represent in the kingdom in the Iame X30 world finals in Portugal 2023/2022",
              "Iame x30 senior champion 2023/2022"
            ]
        }
    ]
  },
  {
    id: "abdulmohsen-bakhwain",
    name: "Abdulmohsen Bakhwain",
    sport: "Show Jumping",
    galleryImage: "/Person/4.jpg",
    profileImage: "/Person/4.jpg",
    logos: ["/logos/saef.png"],
    competitions: [
      {
        category: "International",
        list: [
          "Bolesworth International 1* Clear & top 10, UK",
          "Coombeilands 1* Cleared in 2 shows",
          "Qualifying LGCT 2* St. Tropez 2025"
        ]
      },
      {
        category: "National",
        list: [
          "SAEF Federation Shows 2 x '1*' Qualifier",
          "Jump Saudi 2 x '1*' Qualifier"
        ]
      }
    ]
  }
];


// --- Main OurAthlete Page Component ---
const OurAthlete: React.FC = () => {
  const title = 'OUR ATHLETES';
  const letters = title.split('');

  return (
    <div className="relative bg-white">
      <Navbar />

      {/* Hero Section (Unchanged) */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <video className="absolute inset-0 w-full h-full object-cover" src="/videos/5.mp4" autoPlay loop muted playsInline />
        <div className="absolute inset-0 bg-black/40" />
        <motion.h1 className="relative z-10 text-white font-extrabold text-[12vw] leading-none tracking-tight text-center select-none" style={{ textShadow: '0 4px 32px rgba(0,0,0,0.7)' }} variants={containerVariants} initial="hidden" animate="visible">
          {letters.map((letter, i) => (
            <motion.span key={i} variants={letterVariants}>{letter === ' ' ? '\u00A0' : letter}</motion.span>
          ))}
        </motion.h1>
      </div>
      
      {/* Athletes Gallery Section (REDESIGNED) */}
      <div className="bg-gray-100 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-[#e95961] mb-16">Our Athletes</h2>

          <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-24"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
          >
              {athletesData.map(athlete => (
              <motion.div 
                  key={athlete.id} 
                  className="relative group cursor-pointer"
                  variants={galleryCardVariants}
              >
                  {/* The relative container for positioning */}
                  <div className="relative h-96">
                      <img 
                          src={athlete.galleryImage} 
                          alt={athlete.name} 
                          className="w-full h-full object-cover grayscale rounded-lg shadow-xl transition-all duration-300 transform group-hover:scale-105" 
                      />
                      {/* Name Banner - Repositioned to the bottom and shifted down */}
                      <div 
                          className="absolute bottom-[-60px] left-4 h-28 w-4/5 bg-[#423b88] flex flex-col justify-center rounded-lg shadow-2xl text-white pl-6 text-c"
                          style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
                      >
                          {athlete.name.split(' ').map((word, i) => (
                              <span key={i} className="block font-bold text-2xl leading-tight">{word}</span>
                          ))}
                      </div>
                  </div>
              </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
      
      {/* Detailed Athlete Profiles (Unchanged) */}
      <div className="bg-white py-24 flex flex-col gap-24 md:gap-32">
        {athletesData.map((athlete, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <motion.div 
                key={athlete.id} 
                className={`relative container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isReversed ? 'md:flex-row-reverse' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
            >
              <div className={`absolute top-1/2 -translate-y-1/2 h-[120%] w-full md:w-8/12 bg-red-200/50 blur-3xl ${isReversed ? 'right-0' : 'left-0'}`}
                   style={{ clipPath: 'polygon(0 0, 80% 0, 100% 100%, 20% 100%)' }} />
              <motion.div className="w-full md:w-5/12 z-10" variants={profileImageVariants}>
                <img src={athlete.profileImage} alt={athlete.name} className="w-full shadow-lg rounded-md" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }}/>
              </motion.div>
              <motion.div className="w-full md:w-7/12 z-10" variants={textContentVariants}>
                <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900">{athlete.name}</h3>
                <p className="text-xl  lg:text-2xl font-semibold text-[#eb5b64] mt-1 mb-8">{athlete.sport}</p>
                <div className="space-y-6">
                    {athlete.competitions.map(comp => (
                        <motion.div key={comp.category} variants={containerVariants}>
                            <motion.h4 className="text-lg font-bold text-gray-800 border-b-2 border-red-200 pb-2 mb-3" variants={listItemVariants}>
                                {comp.category}
                            </motion.h4>
                            <ul className="space-y-2 text-gray-600 list-disc list-inside">
                                {comp.list.map((item, i) => <motion.li key={i} variants={listItemVariants}>{item}</motion.li>)}
                            </ul>
                        </motion.div>
                    ))}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default OurAthlete;
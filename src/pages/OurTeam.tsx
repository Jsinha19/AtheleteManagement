// import React from 'react';
// import Navbar from '../components/Navbar';
// import { motion } from 'framer-motion';

// // --- Animation Variants ---

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15, delayChildren: 0.3 }
//   }
// };

// const letterVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
//   }
// };

// const sectionVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//       staggerChildren: 0.2,
//       delayChildren: 0.2
//     }
//   }
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 50, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
//   }
// };

// const listItemVariants = {
//   hidden: { opacity: 0, x: -15 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.5, ease: 'easeOut' }
//   }
// };


// // --- Team Member Data ---

// const teamMembers = [
//   {
//     name: 'Rakan Alireza',
//     image: '/team/rakan.png', // NOTE: Replace with your actual image paths
//     details: [
//       'PwC Consulting',
//       'Athlete for Saudi Rowing Federation and Skiing Federation',
//       'Operations, Business Development Director Kona',
//     ]
//   },
//   {
//     name: 'Abdullah Elkhereiji',
//     image: '/team/abdullah.png',
//     details: [
//       'Director of Business Development & Public Relations - Maydan Advanced Construction Co',
//       'National and International Professional Racing Driver',
//     ]
//   },
//   {
//     name: 'Abdulmohsen Bakhwain',
//     image: '/team/abdulmohsen.png',
//     details: [
//       'AMB Ventures - Founder & CEO',
//       'Built in Market Food Tech Solutions',
//       'Value Chain Management Solutions',
//       'International Showjumping Athlete',
//       'Certified Six Sigma Green Belt',
//     ]
//   },
//   {
//     name: 'Abdulrahman Garoub',
//     image: '/team/abdulrahman.png',
//     details: [
//       'Sports & Entertainment Consultant',
//       'Professional Racer',
//       'Sports Enthusiast',
//     ]
//   }
// ];


// // --- Main OurTeam Page Component ---
// const OurTeam: React.FC = () => {
//   const title = 'OUR TEAM';
//   const letters = title.split('');

//   return (
//     <div className="relative bg-gray-100">
//       <Navbar />

//       {/* Hero Section */}
//       <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
//         <video className="absolute inset-0 w-full h-full object-cover" src="/videos/5.mp4" autoPlay loop muted playsInline />
//         <div className="absolute inset-0 bg-black/40" />
//         <motion.h1 className="relative z-10 text-white font-extrabold text-[12vw] leading-none tracking-tight text-center select-none" style={{ textShadow: '0 4px 32px rgba(0,0,0,0.7)' }} variants={containerVariants} initial="hidden" animate="visible">
//             {letters.map((letter, i) => (
//               <motion.span key={i} variants={letterVariants}>{letter === ' ' ? '\u00A0' : letter}</motion.span>
//             ))}
//         </motion.h1>
//       </div>

//       {/* Team Section */}
//       <div className="relative w-full py-20 md:py-28 overflow-hidden" style={{ backgroundColor: '#2B2A4C' }}>
//         {/* Decorative Shapes */}
//         <div className="absolute top-0 left-0 w-full h-full opacity-30">
//             <div className="absolute top-[10%] left-[5%] w-48 h-24 border-4 border-red-400" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)' }}/>
//             <div className="absolute top-[5%] right-[10%] w-64 h-32 bg-red-500" style={{ clipPath: 'polygon(100% 0, 100% 100%, 20% 100%, 0 50%)' }}/>
//             <div className="absolute bottom-[5%] left-[20%] w-40 h-40 bg-red-500" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}/>
//         </div>

//         <motion.div 
//           className="relative container mx-auto px-4"
//           variants={sectionVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-16">Meet The Visionaries</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
//             {teamMembers.map((member) => (
//               <motion.div key={member.name} className="text-white text-center" variants={cardVariants}>
//                 {/* Image container with clip-path */}
//                 <div className="relative mb-6">
//                   {/* Red background shape */}
//                   <div 
//                     className="absolute inset-0 bg-red-500" 
//                     style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
//                   />
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="relative w-full h-auto"
//                     style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
//                   />
//                 </div>

//                 {/* Text Content */}
//                 <motion.div variants={containerVariants}>
//                     <motion.h3 className="text-2xl font-bold" variants={listItemVariants}>
//                       {member.name}
//                     </motion.h3>
//                     <motion.ul className="mt-4 space-y-2 text-gray-300 text-sm" variants={containerVariants}>
//                         {member.details.map((detail, i) => (
//                           <motion.li key={i} variants={listItemVariants}>
//                             • {detail}
//                           </motion.li>
//                         ))}
//                     </motion.ul>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default OurTeam;



import React from 'react';
import Navbar from '../components/Navbar';
import { motion, type Variants } from 'framer-motion';

// --- Animation Variants ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
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

// --- NEW ANIMATIONS for the column layout ---

// For the image sliding in from the left
const imageFromLeft: Variants = {
  hidden: { opacity: 0, x: -100, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  }
};

// For the image sliding in from the right
const imageFromRight: Variants = {
  hidden: { opacity: 0, x: 100, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  }
};

// For the text content container
const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.4 }
  }
};

// For the name and line drawing
const nameAndLineVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

// For the line drawing itself
const lineDrawVariant: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }
  }
};

// For individual list items fading in
const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Add this interface near the top of the file, after the animation variants
interface TeamMember {
  name: string;
  image: string;
  details: string[];
}

// Then modify the teamMembers array to use the interface
const teamMembers: TeamMember[] = [
  {
    name: 'Rakan Alireza',
    image: '/team/rakan.png',
    details: [
      'PwC Consulting',
      'Athlete for Saudi Rowing & Skiing Federations',
      'Operations & Business Development Director, Kona',
    ]
  },
  {
    name: 'Abdullah Elkhereiji',
    image: '/team/abdullah.png',
    details: [
      'Director of Business Development & PR',
      'National & International Pro Racing Driver',
    ]
  },
  {
    name: 'Abdulmohsen Bakhwain',
    image: '/team/abdulmohsen.png',
    details: [
      'Founder & CEO, AMB Ventures',
      'International Showjumping Athlete',
      'Certified Six Sigma Green Belt',
    ]
  },
  {
    name: 'Abdulrahman Garoub',
    image: '/team/abdulrahman.png',
    details: [
      'Sports & Entertainment Consultant',
      'Professional Racer',
      'Sports Enthusiast',
    ]
  }
];


// --- Main OurTeam Page Component ---
const OurTeam: React.FC = () => {
  const title = 'OUR TEAM';
  const letters = title.split('');

  return (
    <div className="relative bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <video className="absolute inset-0 w-full h-full object-cover" src="/videos/5.mp4" autoPlay loop muted playsInline />
        <div className="absolute inset-0 bg-black/40" />
        <motion.h1 className="relative z-10 text-white font-extrabold text-[12vw] leading-none tracking-tight text-center select-none" style={{ textShadow: '0 4px 32px rgba(0,0,0,0.7)' }} variants={containerVariants} initial="hidden" animate="visible">
          {letters.map((letter, i) => (
            <motion.span key={i} variants={letterVariants}>{letter === ' ' ? '\u00A0' : letter}</motion.span>
          ))}
        </motion.h1>
      </div>

      {/* Team Section */}
      <div className="relative w-full py-20 md:py-28 overflow-hidden" style={{ backgroundColor: '#2B2A4C' }}>
        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-[10%] left-[5%] w-48 h-24 border-4 border-red-400" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)' }} />
          <div className="absolute top-[5%] right-[10%] w-64 h-32 bg-red-500" style={{ clipPath: 'polygon(100% 0, 100% 100%, 20% 100%, 0 50%)' }} />
          <div className="absolute bottom-[5%] left-[20%] w-40 h-40 bg-red-500" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
          <div className="absolute bottom-[15%] right-[5%] w-56 h-28 border-4 border-red-400" style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0% 100%)' }} />
        </div>

        <div className="relative container mx-auto px-4">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-24">Meet The Visionaries</h2>

          {/* Column Layout Container */}
          <div className="flex flex-col gap-24 md:gap-32">
            {teamMembers.map((member, index) => {
              const isReversed = index % 2 !== 0;
              return (
                <div
                  key={member.name}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isReversed ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Image */}
                  <motion.div
                    className="w-full md:w-5/12"
                    variants={isReversed ? imageFromRight : imageFromLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-lg shadow-2xl object-cover"
                    />
                  </motion.div>

                  {/* Text Content */}
                  <motion.div
                    className="w-full md:w-7/12 text-white"
                    variants={textContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.h3 className="text-4xl lg:text-5xl font-bold" variants={nameAndLineVariants}>
                      {member.name}
                    </motion.h3>

                    <motion.div
                      className="h-1 w-24 bg-red-500 mt-4 mb-8"
                      variants={lineDrawVariant}
                    />

                    <motion.ul className="space-y-4 text-gray-300 text-lg lg:text-xl list-none" variants={containerVariants}>
                      {member.details.map((detail, i) => (
                        <motion.li key={i} className="flex items-start" variants={listItemVariants}>
                          <span className="text-red-500 mr-3 mt-1">➤</span>
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
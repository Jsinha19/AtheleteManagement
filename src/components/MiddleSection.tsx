// import React from "react";
// import { motion } from "framer-motion";

// // The sectionData remains the same as you provided
// const sectionData = [
//     {
//     title: "Mission",
//     img: "/homepage/3.jpg",
//     description: [
//       "Empowering Athletes: We give athletes the support, resources, and sponsorships they need to succeed locally and internationally. Our goal is to help build a stronger sports culture in Saudi Arabia.",
//       "Delivering Value to Businesses: We connect companies with a fast-growing market of athletes who have loyal fans. Sponsoring athletes is not just support, it is smart marketing that boosts brand visibility and builds real connections with communities.",
//       " Unique relationship: partnering with our athletes builds authentic trust with audiences. We bring credibility, discipline and integrity that deeply resonate trust with consumers. Our athlete’s inspiring stories will strengthen our partners reputation and long term trust with customers. "
//     ],
//   },
//   {
//     title: "Vision & Goal",
//     img: "/homepage/1.jpg",
//     description: [
//       " Vision-To empower athletes in Saudi Arabia by creating a sustainable ecosystem where they can thrive and inspire through their passion, while bridging the gap between sports and strategic corporate investments.",
//       " To support athletes in achieving their fullest potential while providing businesses with targeted, high-impact marketing opportunities in the rapidly growing Saudi sports industry.",
//       "To become the leading sports management company in the region, driving athlete success and maximizing returns for investors through strategic partnerships and innovative initiatives aligned with Saudi Vision 2030."
//     ],
//   },
//   {
//     title: "Current Market",
//     img: "/homepage/2.jpg",
//     description: [
//       "Market Growth-Saudi Arabia’s sports industry is set to grow from $8 billion to $22.4 billion by 2030. This will add $16.5 billion to the country’s GDP each year and create over 100,000 jobs, making sports a key part of economic growth and job creation.",
//       "Audience Engagement and Participation-More people in Saudi Arabia are getting involved in sports. A recent survey showed that 48.2% of the population now exercises for at least 30 minutes a week—a big increase compared to previous years. This rise supports Vision 2030’s goal to have 40% of people actively participating in sports by 2030.",
//       "Professional Athletes and International Event -Saudi Arabia is investing heavily to build its global sports reputation. It has secured major events like the Formula 1 Grand Prix, Diriyah Formula E, Dakar Rally, WTA Finals, Next Gen Tennis, the 2027 Asian Cup, the 2029 Asian Winter Games, and the 2034 FIFA World Cup, positioning the Kingdom as a major international sports hub.",
//     ],
//   },
//   {
//     title: "Corporate Investment",
//     img: "/homepage/4.jpg",
//     description: [
//       "The rapid growth of Saudi Arabia’s sports sector has attracted major corporate investments. The Kingdom has signed over 900 sponsorship deals, including 194 in football alone, showing a clear strategy to use sports for economic and global influence. ",
//       "These partnerships give companies valuable opportunities to connect with a fast-growing and passionate sports audience.",
//       "In summary, Saudi Arabia's sports sector is undergoing transformative growth,marked by increased public participation, substantial economic contributions,the attraction of top-tier professional athletes, and significant corporate investments. These developments highlight the Kingdom's strategic commitment to establishing a dynamic and sustainable sports ecosystem."
//     ],
//   },

// ];

// // Helper function to split title into two lines
// const getTitleParts = (title: string): string[] => {
//     const words = title.split(' ');
//     if (words.length <= 1) return [title];
//     const lastWord = words.pop();
//     const firstPart = words.join(' ');
//     return [firstPart, lastWord as string];
// };


// const MiddleSection: React.FC = () => {
//   return (
//     <div className="relative overflow-hidden">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="fixed inset-0 w-full h-full object-cover z-[-2]"
//         src="/videos/6.mp4"
//       />
//       <div className="absolute inset-0 " />

//       {/* Main Content Container */}
//       <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
//         {sectionData.map((section, index) => (
//           <motion.section
//             key={index}
//             className={`relative flex flex-col ${
//               index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//             } md:items-end gap-x-12 mb-32`} // Use items-end on desktop to align bottom edges
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-150px" }}
//             transition={{ duration: 0.8 }}
//           >
//             {/* --- Overlapping Title --- */}
//             <motion.h2
//               className={`absolute z-20 font-serif font-extrabold leading-none text-white
//                 text-5xl sm:text-6xl md:text-7xl 
//                 ${
//                   index % 2 === 0
//                     ? "top-8 left-0 md:-ml-10" 
//                     : "top-8 right-0 md:-mr-10 text-right"
//                 }`}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               {getTitleParts(section.title).map((part, i) => (
//                   <span key={i} className="block">{part}</span>
//               ))}
//             </motion.h2>

//             {/* Image Block */}
//             <div className="relative w-full md:w-1/2 h-96 rounded-2xl overflow-hidden shadow-2xl z-10 mt-20">
//               <img
//                 src={section.img}
//                 alt={section.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Text Block */}
//             <div className="w-full md:w-1/2 z-10">
//               <motion.div
//                 className="p-6 md:p-0 md:pb-8" // Add padding-bottom on desktop for alignment
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 <div className="space-y-4 mt-4 md:mt-0"> {/* Add margin-top on mobile */}
//                     <p className="text-sm text-gray-200 leading-relaxed">
//                         {section.description[0]}
//                     </p>
//                     <p className="text-sm text-gray-200 leading-relaxed">
//                         {section.description[1]}
//                     </p>
//                     {section.description[2] && (
//                         <p className="text-sm text-gray-200 leading-relaxed">
//                             {section.description[2]}
//                         </p>
//                     )}
//                 </div>
//                 <a
//                   href="#"
//                   className="inline-flex items-center text-white font-semibold mt-6 group"
//                 >
//                   Learn more
//                   <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
//                 </a>
//               </motion.div>
//             </div>
//           </motion.section>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MiddleSection;


import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// --- START: Interactive Background Component ---
// This new component contains all the logic for the "gooey" background effect.

const InteractiveGradient: React.FC = () => {
  const interBubbleRef = useRef<HTMLDivElement>(null);

  // All CSS is injected via this style tag
  const gradientStyles = `
    :root {
      --color-bg1: rgb(49, 43, 102);
      --color-bg2: rgb(66, 59, 136);
      --color1: 233, 89, 97;
      --color2: 142, 136, 197;
      --color3: 238, 147, 153; /* Richer pink */
      --color4: 199, 66, 75;
      --color5: 110, 104, 180;
      --color-interactive: 233, 89, 97;
      --circle-size: 150%;
      --blending: hard-light;
    }

    @keyframes moveInCircle { 
      0% { transform: rotate(0deg); }
      50% { transform: rotate(180deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes moveVertical {
      0% { transform: translateY(-50%); }
      50% { transform: translateY(50%); }
      100% { transform: translateY(-50%); }
    }

    @keyframes moveHorizontal {
      0% { transform: translateX(-50%) translateY(-10%); }
      50% { transform: translateX(50%) translateY(10%); }
      100% { transform: translateX(-50%) translateY(-10%); }
    }

    .gradient-bg {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: linear-gradient(40deg, var(--color-bg1), var(--color-bg2));
      z-index: -2; /* Sits behind all content */
    }
    
    .gradients-container {
      filter: url(#goo) blur(70px);
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
    }

    .g1, .g2, .g3, .g4, .g5, .interactive {
      position: absolute;
      mix-blend-mode: var(--blending);
      opacity: 1;
      border-radius: 50%;
    }

    .g1 {
      background: radial-gradient(circle at center, rgba(var(--color1), 0.8) 0, rgba(var(--color1), 0) 50%) no-repeat;
      width: var(--circle-size);
      height: var(--circle-size);
      top: calc(50% - var(--circle-size) / 2);
      left: calc(50% - var(--circle-size) / 2);
      transform-origin: center center;
      animation: moveVertical 8s ease infinite;
    }

    .g2 {
      background: radial-gradient(circle at center, rgba(var(--color2), 0.8) 0, rgba(var(--color2), 0) 50%) no-repeat;
      width: var(--circle-size);
      height: var(--circle-size);
      top: calc(50% - var(--circle-size) / 2);
      left: calc(50% - var(--circle-size) / 2);
      transform-origin: calc(50% - 400px);
      animation: moveInCircle 6s reverse infinite;
    }

    .g3 {
      background: radial-gradient(circle at center, rgba(var(--color3), 0.8) 0, rgba(var(--color3), 0) 50%) no-repeat;
      width: var(--circle-size);
      height: var(--circle-size);
      top: calc(50% - var(--circle-size) / 2 + 200px);
      left: calc(50% - var(--circle-size) / 2 - 500px);
      transform-origin: calc(50% + 400px);
      animation: moveInCircle 10s linear infinite;
    }

    .g4 {
      background: radial-gradient(circle at center, rgba(var(--color4), 0.8) 0, rgba(var(--color4), 0) 50%) no-repeat;
      width: var(--circle-size);
      height: var(--circle-size);
      top: calc(50% - var(--circle-size) / 2);
      left: calc(50% - var(--circle-size) / 2);
      transform-origin: calc(50% - 200px);
      animation: moveHorizontal 9s ease infinite;
      opacity: 0.7;
    }

    .g5 {
      background: radial-gradient(circle at center, rgba(var(--color5), 0.8) 0, rgba(var(--color5), 0) 50%) no-repeat;
      width: calc(var(--circle-size) * 2);
      height: calc(var(--circle-size) * 2);
      top: calc(50% - var(--circle-size));
      left: calc(50% - var(--circle-size));
      transform-origin: calc(50% - 800px) calc(50% + 200px);
      animation: moveInCircle 7s ease infinite;
    }

    .interactive {
      background: radial-gradient(circle at center, rgba(var(--color-interactive), 0.8) 0, rgba(var(--color-interactive), 0) 50%) no-repeat;
      width: 100%;
      height: 100%;
      top: -50%;
      left: -50%;
    }
  `;

  // useEffect handles the mouse movement logic
  useEffect(() => {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      if (!interBubbleRef.current) return;
      
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      
      interBubbleRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animationFrameId = requestAnimationFrame(move);

    // Cleanup function to remove event listener and animation frame
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <style>{gradientStyles}</style>
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -9" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div ref={interBubbleRef} className="interactive"></div>
        </div>
      </div>
    </>
  );
};
// --- END: Interactive Background Component ---


// The sectionData remains the same as you provided
const sectionData = [
    {
    title: "Mission",
    img: "/homepage/1.png",
    description: [
      "Empowering Athletes: We give athletes the support, resources, and sponsorships they need to succeed locally and internationally. Our goal is to help build a stronger sports culture in Saudi Arabia.",
      "Delivering Value to Businesses: We connect companies with a fast-growing market of athletes who have loyal fans. Sponsoring athletes is not just support, it is smart marketing that boosts brand visibility and builds real connections with communities.",
      " Unique relationship: partnering with our athletes builds authentic trust with audiences. We bring credibility, discipline and integrity that deeply resonate trust with consumers. Our athlete’s inspiring stories will strengthen our partners reputation and long term trust with customers. "
    ],
  },
  {
    title: "Vision & Goal",
    img: "/homepage/2.png",
    description: [
      " Vision-To empower athletes in Saudi Arabia by creating a sustainable ecosystem where they can thrive and inspire through their passion, while bridging the gap between sports and strategic corporate investments.",
      " To support athletes in achieving their fullest potential while providing businesses with targeted, high-impact marketing opportunities in the rapidly growing Saudi sports industry.",
      "To become the leading sports management company in the region, driving athlete success and maximizing returns for investors through strategic partnerships and innovative initiatives aligned with Saudi Vision 2030."
    ],
  },
  {
    title: "Current Market",
    img: "/homepage/3.png",
    description: [
      "Market Growth-Saudi Arabia’s sports industry is set to grow from $8 billion to $22.4 billion by 2030. This will add $16.5 billion to the country’s GDP each year and create over 100,000 jobs, making sports a key part of economic growth and job creation.",
      "Audience Engagement and Participation-More people in Saudi Arabia are getting involved in sports. A recent survey showed that 48.2% of the population now exercises for at least 30 minutes a week—a big increase compared to previous years. This rise supports Vision 2030’s goal to have 40% of people actively participating in sports by 2030.",
      "Professional Athletes and International Event -Saudi Arabia is investing heavily to build its global sports reputation. It has secured major events like the Formula 1 Grand Prix, Diriyah Formula E, Dakar Rally, WTA Finals, Next Gen Tennis, the 2027 Asian Cup, the 2029 Asian Winter Games, and the 2034 FIFA World Cup, positioning the Kingdom as a major international sports hub.",
    ],
  },
  {
    title: "Corporate Investment",
    img: "/homepage/4.png",
    description: [
      "The rapid growth of Saudi Arabia’s sports sector has attracted major corporate investments. The Kingdom has signed over 900 sponsorship deals, including 194 in football alone, showing a clear strategy to use sports for economic and global influence. ",
      "These partnerships give companies valuable opportunities to connect with a fast-growing and passionate sports audience.",
      "In summary, Saudi Arabia's sports sector is undergoing transformative growth,marked by increased public participation, substantial economic contributions,the attraction of top-tier professional athletes, and significant corporate investments. These developments highlight the Kingdom's strategic commitment to establishing a dynamic and sustainable sports ecosystem."
    ],
  },

];

// Helper function to split title into two lines
const getTitleParts = (title: string): string[] => {
    const words = title.split(' ');
    if (words.length <= 1) return [title];
    const lastWord = words.pop();
    const firstPart = words.join(' ');
    return [firstPart, lastWord as string];
};


const MiddleSection: React.FC = () => {
  return (
    // The main container needs `position: relative` for z-index stacking
    <div className="relative overflow-hidden">
      {/* The interactive gradient is now the background */}
      <InteractiveGradient />

      {/* Main Content Container */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
        {sectionData.map((section, index) => (
          <motion.section
            key={index}
            className={`relative flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } md:items-end gap-x-12 mb-32`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.8 }}
          >
            {/* --- Overlapping Title --- */}
            <motion.h2
              className={`absolute z-20 font-serif font-extrabold leading-none text-white
                text-5xl sm:text-6xl md:text-7xl 
                ${
                  index % 2 === 0
                    ? "top-8 left-0 md:-ml-10" 
                    : "top-8 right-0 md:-mr-10 text-right"
                }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {getTitleParts(section.title).map((part, i) => (
                  <span key={i} className="block">{part}</span>
              ))}
            </motion.h2>

            {/* Image Block */}
            <div className="relative w-full md:w-1/2 h-96 rounded-2xl overflow-hidden shadow-2xl z-10 mt-20">
              <img
                src={section.img}
                alt={section.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Block */}
            <div className="w-full md:w-1/2 z-10">
              <motion.div
                className="p-6 md:p-0 md:pb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-4 mt-4 md:mt-0">
                    <p className="text-sm text-gray-200 leading-relaxed">
                        {section.description[0]}
                    </p>
                    <p className="text-sm text-gray-200 leading-relaxed">
                        {section.description[1]}
                    </p>
                    {section.description[2] && (
                        <p className="text-sm text-gray-200 leading-relaxed">
                            {section.description[2]}
                        </p>
                    )}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-white font-semibold mt-6 group"
                >
                  Learn more
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </a>
              </motion.div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default MiddleSection;
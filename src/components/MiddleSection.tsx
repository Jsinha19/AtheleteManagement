// import React from "react";
// import { motion } from "framer-motion";

// const sectionData = [
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
//       "Audience Engagement and Participation-More people in Saudi Arabia are getting involved in sports. A recent survey showed that %48.2 of the population now exercises for at least 30 minutes a week—a big increase compared to previous years. This rise supports Vision 2030’s goal to have %40 of people actively participating in sports by 2030.",
//       "Professional Athletes and International Event -Saudi Arabia is investing heavily to build its global sports reputation. It has secured major events like the Formula 1 Grand Prix, Diriyah Formula E, Dakar Rally, WTA Finals, Next Gen Tennis, the 2027 Asian Cup, the 2029 Asian Winter Games, and the 2034 FIFA World Cup, positioning the Kingdom as a major international sports hub.",
//     ],
//   },
//   {
//     title: "Corporate Investment",
//     img: "/homepage/4.jpg",
//     description: [
//       "The rapid growth of Saudi Arabia’s sports sector has attracted major corporate investments. The Kingdom has signed over 900 sponsorship deals, including 194 in football alone, showing a clear strategy to use sports for economic and global influence. ",
//       "TThese partnerships give companies valuable opportunities to connect with a fast-growing and passionate sports audience.",
//       "In summary, Saudi Arabia's sports sector is undergoing transformative growth,marked by increased public participation, substantial economic contributions,the attraction of top-tier professional athletes, and significant corporate investments. These developments highlight the Kingdom's strategic commitment to establishing a dynamic and sustainable sports ecosystem."
//     ],
//   },
//   {
//     title: "Mission",
//     img: "/homepage/3.jpg",
//     description: [
//       "Empowering Athletes: We give athletes the support, resources, and sponsorships they need to succeed locally and internationally. Our goal is to help build a stronger sports culture in Saudi Arabia.",
//       "Delivering Value to Businesses: We connect companies with a fast-growing market of athletes who haveloyal fans. Sponsoring athletes is not just support, it is smart marketing that boosts brand visibility and builds real connections with communities.",
//       " Unique relationship: partnering with our athletes builds authentic trust with audiences. We bring credibility, discipline and integrity that deeply resonate trust with consumers. Our athlete’s inspiring stories will strengthen our partners reputation and long term trust with customers. "
//     ],
//   },
// ];

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
//         src="/videos/4.mp4"
//       />
//       <div className="absolute inset-0 bg-black/50 z-[-1]" />

//       {/* Main Content */}
//       <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
//         {sectionData.map((section, index) => (
//           <motion.section
//             key={index}
//             className={`relative flex flex-col ${
//               index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//             } items-center gap-10 mb-36`}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//           >
//             {/* Title */}
//             <motion.h2
//               className={`absolute -top-14 z-20 font-extrabold drop-shadow-2xl leading-tight text-white tracking-tight 
//                 text-3xl sm:text-4xl md:text-5xl lg:text-6xl break-words max-w-xs
//                 ${
//                   index % 2 === 0
//                     ? "left-6 sm:left-12 md:left-20 text-left"
//                     : "right-6 sm:right-12 md:right-20 text-right"
//                 }`}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               {section.title}
//             </motion.h2>

//             {/* Image Block */}
//             <div className="relative w-full md:w-1/2 h-96 rounded-2xl overflow-hidden shadow-2xl z-10">
//               <img
//                 src={section.img}
//                 alt={section.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 " />
//             </div>

//             {/* Text Block */}
//             <div className="w-full md:w-1/2 z-10">
//               <motion.div
//                 className="p-8 "
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 <p className="text-base md:text-lg text-black mb-2">
//                   {section.description[0]}
//                 </p>
//                 <p className="text-base md:text-lg text-black mb-6">
//                   {section.description[1]}
//                 </p>
//                  <p className="text-base md:text-lg text-black mb-6">
//                   {section.description[2]}
//                 </p>
//                 <a
//                   href="#"
//                   className="inline-flex items-center text-black font-semibold hover:underline"
//                 >
//                   Learn more →
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

import React from "react";
import { motion } from "framer-motion";

// The sectionData remains the same as you provided
const sectionData = [
  {
    title: "Vision & Goal",
    img: "/homepage/1.jpg",
    description: [
      " Vision-To empower athletes in Saudi Arabia by creating a sustainable ecosystem where they can thrive and inspire through their passion, while bridging the gap between sports and strategic corporate investments.",
      " To support athletes in achieving their fullest potential while providing businesses with targeted, high-impact marketing opportunities in the rapidly growing Saudi sports industry.",
      "To become the leading sports management company in the region, driving athlete success and maximizing returns for investors through strategic partnerships and innovative initiatives aligned with Saudi Vision 2030."
    ],
  },
  {
    title: "Current Market",
    img: "/homepage/2.jpg",
    description: [
      "Market Growth-Saudi Arabia’s sports industry is set to grow from $8 billion to $22.4 billion by 2030. This will add $16.5 billion to the country’s GDP each year and create over 100,000 jobs, making sports a key part of economic growth and job creation.",
      "Audience Engagement and Participation-More people in Saudi Arabia are getting involved in sports. A recent survey showed that 48.2% of the population now exercises for at least 30 minutes a week—a big increase compared to previous years. This rise supports Vision 2030’s goal to have 40% of people actively participating in sports by 2030.",
      "Professional Athletes and International Event -Saudi Arabia is investing heavily to build its global sports reputation. It has secured major events like the Formula 1 Grand Prix, Diriyah Formula E, Dakar Rally, WTA Finals, Next Gen Tennis, the 2027 Asian Cup, the 2029 Asian Winter Games, and the 2034 FIFA World Cup, positioning the Kingdom as a major international sports hub.",
    ],
  },
  {
    title: "Corporate Investment",
    img: "/homepage/4.jpg",
    description: [
      "The rapid growth of Saudi Arabia’s sports sector has attracted major corporate investments. The Kingdom has signed over 900 sponsorship deals, including 194 in football alone, showing a clear strategy to use sports for economic and global influence. ",
      "These partnerships give companies valuable opportunities to connect with a fast-growing and passionate sports audience.",
      "In summary, Saudi Arabia's sports sector is undergoing transformative growth,marked by increased public participation, substantial economic contributions,the attraction of top-tier professional athletes, and significant corporate investments. These developments highlight the Kingdom's strategic commitment to establishing a dynamic and sustainable sports ecosystem."
    ],
  },
  {
    title: "Mission",
    img: "/homepage/3.jpg",
    description: [
      "Empowering Athletes: We give athletes the support, resources, and sponsorships they need to succeed locally and internationally. Our goal is to help build a stronger sports culture in Saudi Arabia.",
      "Delivering Value to Businesses: We connect companies with a fast-growing market of athletes who have loyal fans. Sponsoring athletes is not just support, it is smart marketing that boosts brand visibility and builds real connections with communities.",
      " Unique relationship: partnering with our athletes builds authentic trust with audiences. We bring credibility, discipline and integrity that deeply resonate trust with consumers. Our athlete’s inspiring stories will strengthen our partners reputation and long term trust with customers. "
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
    <div className="relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-[-2]"
        src="/videos/4.mp4"
      />
      <div className="absolute inset-0 " />

      {/* Main Content Container */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
        {sectionData.map((section, index) => (
          <motion.section
            key={index}
            className={`relative flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-x-8 mb-32`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.8 }}
          >
            {/* --- Overlapping Title --- */}
            <motion.h2
              // The title is now positioned down from the top to create the partial overlap
              className={`absolute z-20 font-serif font-extrabold leading-none text-white
                text-5xl sm:text-6xl md:text-7xl 
                ${
                  index % 2 === 0
                    ? "top-8 left-0 md:-ml-8" // Positive top value moves it down
                    : "top-8 right-0 md:-mr-8 text-right" // Positive top value moves it down
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

            {/* Image Block - Top margin re-introduced to make space for the overlapping title */}
            <div className="relative w-full md:w-7/12 h-80 rounded-2xl overflow-hidden shadow-2xl z-10 mt-20">
              <img
                src={section.img}
                alt={section.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Block */}
            <div className="w-full md:w-5/12 z-10">
              <motion.div
                className="p-6 md:p-0 md:pl-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-4">
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
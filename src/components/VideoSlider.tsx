// import React, { useEffect, useRef, useState } from 'react';
// import Navbar from './Navbar';

// interface SlideData {
//   src: string;
//   bottomLeftText: string;
//   learnMoreLink: string;
// }

// const slides: SlideData[] = [
//   {
//     src: "/videos/1.mp4",
//     bottomLeftText: "Simone Biles: \"Simone Biles Rising\"",
//     learnMoreLink: "#",
//   },
//   {
//     src: "/videos/2.mp4",
//     bottomLeftText: "Discover the power of success",
//     learnMoreLink: "#",
//   },
//   {
//     src: "/videos/3.mp4",
//     bottomLeftText: "Explore new horizons",
//     learnMoreLink: "#",
//   },
// ];

// const AUTO_SLIDE_INTERVAL = 5000;

// const VideoSlider: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slideCount = slides.length;
//   const timerRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     timerRef.current = setInterval(() => {
//       nextSlide();
//     }, AUTO_SLIDE_INTERVAL);

//     return () => {
//       if (timerRef.current) clearInterval(timerRef.current);
//     };
//   }, []);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % slideCount);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount);
//   };

//   return (
//     <div className="relative w-full h-[500px] overflow-hidden bg-black">
//       {/* Navbar on top */}
//       <div className="absolute top-0 left-0 w-full z-20">
//         <Navbar />
//       </div>

//       {/* Slides container */}
//       <div
//         className="flex transition-transform duration-700 ease-in-out h-full"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="min-w-full h-full relative">
//             <video
//               className="w-full h-full object-cover"
//               src={slide.src}
//               autoPlay
//               muted
//               loop
//               playsInline
//             />

//             {/* Text Overlay */}
//             <div className="absolute bottom-8 left-8 max-w-xl z-10 animate-fade-in-up">
//               <p className="text-white text-2xl md:text-4xl font-semibold drop-shadow-lg mb-2">
//                 {slide.bottomLeftText}
//               </p>
//               <a
//                 href={slide.learnMoreLink}
//                 className="text-white text-lg md:text-xl hover:text-primary transition-all"
//               >
//                 Learn More →
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Octagon-style arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute z-30 left-4 top-1/2 -translate-y-1/2 bg-transparent text-white p-2 "
//         aria-label="Previous slide"
//       >
//         <svg width="24" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute z-30 right-4 top-1/2 -translate-y-1/2 bg-transparent text-white p-2 "
//         aria-label="Next slide"
//       >
//         <svg width="24" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default VideoSlider;


import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';

interface SlideData {
  src: string;
  bottomLeftText: string;
  learnMoreLink: string;
}

const slides: SlideData[] = [
  {
    src: "/videos/1.mp4",
    bottomLeftText: "Simone Biles: \"Simone Biles Rising\"",
    learnMoreLink: "#",
  },
  {
    src: "/videos/2.mp4",
    bottomLeftText: "Discover the power of success",
    learnMoreLink: "#",
  },
  {
    src: "/videos/3.mp4",
    bottomLeftText: "Explore new horizons",
    learnMoreLink: "#",
  },
];

const AUTO_SLIDE_INTERVAL = 5000;
const TRANSITION_DURATION = 700;

const VideoSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [, setDirection] = useState<'right' | 'left'>('right');
  const slideCount = slides.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transitionRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleSlide('right');
    }, AUTO_SLIDE_INTERVAL);
  };

  const handleSlide = (dir: 'right' | 'left') => {
    if (isTransitioning) return;
    
    setDirection(dir);
    setIsTransitioning(true);
    
    if (dir === 'right') {
      setCurrentIndex((prev) => (prev + 1) % slideCount);
    } else {
      setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount);
    }

    transitionRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, TRANSITION_DURATION);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (transitionRef.current) clearTimeout(transitionRef.current);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Navbar on top */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div> 

      {/* Slides container */}
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: `transform ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative flex-shrink-0">
            <video
              className="w-full h-full object-cover"
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Text Overlay */}
            <div className="absolute bottom-8 left-8 max-w-xl z-10">
              <p className="text-white text-2xl md:text-4xl font-semibold drop-shadow-lg mb-2">
                {slide.bottomLeftText}
              </p>
              <a
                href={slide.learnMoreLink}
                className="text-white text-lg md:text-xl hover:text-primary transition-all"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Octagon-style arrows */}
      <button
        onClick={() => {
          handleSlide('left');
          resetTimer();
        }}
        className="absolute z-30 left-4 top-1/2 -translate-y-1/2 bg-transparent text-white p-3  transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        onClick={() => {
          handleSlide('right');
          resetTimer();
        }}
        className="absolute z-30 right-4 top-1/2 -translate-y-1/2 bg-transparent text-white p-3 transition-all duration-300"
        aria-label="Next slide"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default VideoSlider;
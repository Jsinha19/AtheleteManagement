// import React, { useEffect, useState } from "react";

// const Loader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
//   const [showPrimary, setShowPrimary] = useState(true);
//   const [showSecondary, setShowSecondary] = useState(false);

//   useEffect(() => {
//     const t1 = setTimeout(() => setShowPrimary(false), 2500); // Primary fades out
//     const t2 = setTimeout(() => setShowSecondary(true), 2600); // Secondary appears right after
//     const t3 = setTimeout(() => onFinish(), 5500); // Loader ends

//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//       clearTimeout(t3);
//     };
//   }, [onFinish]);

//   const secondaryText = "Elevating athletes through data-driven excellence.";

//   return (
//     <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
//       {/* Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="/videos/5.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay content */}
//       <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center">
//         {showPrimary && (
//           <h1 className="text-white text-4xl md:text-6xl font-extrabold opacity-0 animate-fade-in-out text-center px-4">
//             Athlete Management
//           </h1>
//         )}
//         {showSecondary && (
//           <h2 className="text-white text-2xl md:text-5xl font-semibold opacity-0 animate-fade-in-out mt-4 text-center px-4">
//             {secondaryText}
//           </h2>
//         )}
//       </div>

//       {/* Tailwind animation styles */}
//       <style>{`
//         @keyframes fadeInOut {
//           0% { opacity: 0; transform: scale(0.95); }
//           30% { opacity: 1; transform: scale(1); }
//           100% { opacity: 0; transform: scale(1.05); }
//         }

//         .animate-fade-in-out {
//           animation: fadeInOut 2.5s ease-in-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Loader;

import React, { useEffect, useState, useRef } from "react";

// --- START: Interactive Background Component ---
// This is the same reusable gradient component from the MiddleSection.

const InteractiveGradient: React.FC = () => {
  const interBubbleRef = useRef<HTMLDivElement>(null);

  // All CSS for the gradient is injected via this style tag
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

    .gradient-bg-loader {
      position: absolute; /* Changed to absolute to fit within the loader container */
      inset: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: linear-gradient(40deg, var(--color-bg1), var(--color-bg2));
      z-index: 0; /* Sits behind the overlay */
    }
    
    .gradients-container-loader {
      filter: url(#goo) blur(70px);
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
    }

    /* Unique class names to avoid conflicts if used elsewhere */
    .g-loader {
      position: absolute;
      mix-blend-mode: var(--blending);
      opacity: 1;
      border-radius: 50%;
    }

    .g1-loader { animation: moveVertical 8s ease infinite; }
    .g2-loader { animation: moveInCircle 6s reverse infinite; }
    .g3-loader { animation: moveInCircle 10s linear infinite; }
    .g4-loader { animation: moveHorizontal 9s ease infinite; opacity: 0.7; }
    .g5-loader { animation: moveInCircle 7s ease infinite; }

    /* Common blob styles */
    .g1-loader, .g2-loader, .g3-loader, .g4-loader {
      background: radial-gradient(circle at center, rgba(var(--color1), 0.8) 0, rgba(var(--color1), 0) 50%) no-repeat;
      width: var(--circle-size);
      height: var(--circle-size);
      top: calc(50% - var(--circle-size) / 2);
      left: calc(50% - var(--circle-size) / 2);
    }
    .g2-loader { background-image: radial-gradient(circle at center, rgba(var(--color2), 0.8) 0, rgba(var(--color2), 0) 50%); transform-origin: calc(50% - 400px); }
    .g3-loader { background-image: radial-gradient(circle at center, rgba(var(--color3), 0.8) 0, rgba(var(--color3), 0) 50%); transform-origin: calc(50% + 400px); }
    .g4-loader { background-image: radial-gradient(circle at center, rgba(var(--color4), 0.8) 0, rgba(var(--color4), 0) 50%); transform-origin: calc(50% - 200px); }
    .g5-loader {
      background: radial-gradient(circle at center, rgba(var(--color5), 0.8) 0, rgba(var(--color5), 0) 50%) no-repeat;
      width: calc(var(--circle-size) * 2);
      height: calc(var(--circle-size) * 2);
      top: calc(50% - var(--circle-size));
      left: calc(50% - var(--circle-size));
      transform-origin: calc(50% - 800px) calc(50% + 200px);
    }
    .interactive-loader {
      background: radial-gradient(circle at center, rgba(var(--color-interactive), 0.8) 0, rgba(var(--color-interactive), 0) 50%) no-repeat;
      width: 100%;
      height: 100%;
      top: -50%;
      left: -50%;
    }
  `;

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
    const animFrame = requestAnimationFrame(move);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      <style>{gradientStyles}</style>
      <div className="gradient-bg-loader">
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -9" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container-loader">
          <div className="g-loader g1-loader"></div>
          <div className="g-loader g2-loader"></div>
          <div className="g-loader g3-loader"></div>
          <div className="g-loader g4-loader"></div>
          <div className="g-loader g5-loader"></div>
          <div ref={interBubbleRef} className="g-loader interactive-loader"></div>
        </div>
      </div>
    </>
  );
};
// --- END: Interactive Background Component ---


// --- Main Loader Component ---
const Loader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [showPrimary, setShowPrimary] = useState(true);
  const [showSecondary, setShowSecondary] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowPrimary(false), 2500);
    const t2 = setTimeout(() => setShowSecondary(true), 2600);
    const t3 = setTimeout(() => onFinish(), 5500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onFinish]);

  const secondaryText = "Elevating athletes through data-driven excellence.";

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* The Interactive Gradient is now the background */}
      <InteractiveGradient />

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center">
        {showPrimary && (
          <h1 className="text-white text-4xl md:text-6xl font-extrabold opacity-0 animate-fade-in-out text-center px-4">
            Athlete Management
          </h1>
        )}
        {showSecondary && (
          <h2 className="text-white text-2xl md:text-5xl font-semibold opacity-0 animate-fade-in-out mt-4 text-center px-4">
            {secondaryText}
          </h2>
        )}
      </div>

      {/* Tailwind animation styles for the text */}
      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: scale(0.95); }
          30% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.05); }
        }

        .animate-fade-in-out {
          animation: fadeInOut 2.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};
 
export default Loader; 
import React, { useEffect, useState } from "react";

const Loader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [showPrimary, setShowPrimary] = useState(true);
  const [showSecondary, setShowSecondary] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowPrimary(false), 2500); // Primary fades out
    const t2 = setTimeout(() => setShowSecondary(true), 2600); // Secondary appears right after
    const t3 = setTimeout(() => onFinish(), 5500); // Loader ends

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onFinish]);

  const secondaryText = "Elevating athletes through data-driven excellence.";

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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

      {/* Tailwind animation styles */}
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

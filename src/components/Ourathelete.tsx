import React from 'react';

// Athlete data updated with new color schemes using your provided hex codes
const athletes = [
  {
    name: 'Saud Al-Hoghani',
    image: '/Person/1.jpg',
    // Using the dark blue/purple gradient
    color: 'from-[#e95961] to-[#d04a51]' 
  },
  {
    name: 'Rakan Almaro',
    image: '/Person/2.jpg',
    // Using the reddish-pink gradient
    color: 'from-[#e95961] to-[#d04a51]'
  },
  {
    name: 'Abdulaziz Elkhonery',
    image: '/Person/3.jpg',
    // Alternating back to the dark blue/purple gradient
    color: 'from-[#e95961] to-[#d04a51]'
  },
  {
    name: 'Abdalrahman Bakhrman',
    image: '/Person/4.jpg',
    // Alternating back to the reddish-pink gradient
    color: 'from-[#e95961] to-[#d04a51]'
  },
];

/**
* OurAthlete Component
* Modern card design with diagonal color blocks and artistic layout.
* Color palette has been updated as per your request.
*/
const OurAthlete: React.FC = () => {
  return (
    <section className="mt-32 py-20 px-4 sm:px-6 lg:px-8 font-['Inter'] bg-gray-50 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-4xl sm:text-6xl font-bold text-[#423b88] mb-4 text-center">
          Our Athletes
        </h2>
        <p className="text-lg text-gray-600 mb-48 text-center max-w-2xl mx-auto">
          Meet our talented team of athletes who bring expertise and passion to excel in their sport
        </p>

        {/* Grid layout for the athlete cards (Layout and sizing remain unchanged) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-32 mt-28">
          {athletes.map((athlete, index) => (
            <div
              key={index}
              className="group relative h-[280px] bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
            >
              {/* Athlete image (Styling remains unchanged) */}
              <div className="absolute -top-24 right-[-26px] z-20">
                <div className="relative">
                  <img
                    src={athlete.image}
                    alt={athlete.name}
                    className="w-60 h-72 object-cover shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              </div>

              {/* Main card container */}
              <div className="relative h-full overflow-hidden rounded-2xl">
                {/* Background color sections updated to new palette */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#423b88] to-[#2e286e]"></div>
                <div className={`absolute top-0 right-0 w-2/3 h-full bg-gradient-to-br ${athlete.color} transform skew-x-12 origin-top-right transition-all duration-500 group-hover:skew-x-6 group-hover:scale-110`}></div>
                <div className="absolute top-0 left-0 w-4/5 h-full bg-gradient-to-br from-[#423b88] to-[#2e286e] transform -skew-x-12 origin-top-left transition-all duration-500 group-hover:-skew-x-6 group-hover:scale-105"></div>
                
                {/* Permanent details block (Styling remains unchanged) */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <div className="text-white">
                    <p className="text-xs font-medium mb-1 opacity-80">Professional Athlete</p>
                    <div className="flex items-center space-x-3 text-[12px] opacity-70">
                      <span>📍 Saudi Arabia</span>
                      <span className=''>🏆 Champion</span>
                    </div>
                  </div>
                </div>
                
                {/* Athlete's name (Styling remains unchanged) */}
                <h3 className="absolute bottom-16 left-5 z-30 text-4xl text-white font-bold leading-tight transform transition-transform duration-300 group-hover:scale-105 [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]">
                  {athlete.name.split(' ').map((word, i) => (
                    <div key={i} className="block">
                      {word}
                    </div>
                  ))}
                </h3>
                
                {/* Decorative and interactive elements (Styling remains unchanged) */}
                <div className="absolute top-4 left-4 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* "View more" link with updated colors */}
        <div className="text-center mt-24">
          <a
            href="/our-athlete"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#423b88] to-[#5951a8] text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group"
          >
            <span className="mr-3">View All Athletes</span>
            <svg
              className="w-5 h-5 transform transition-all duration-300 group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurAthlete;
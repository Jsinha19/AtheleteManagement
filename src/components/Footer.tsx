import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 px-6 md:px-20 pb-8 text-sm">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-6xl font-serif font-bold text-left mb-10">
          <span className="text-red-600 italic">A</span>
          <span className="text-orange-500">ll</span>
          <span className="text-pink-500"> in</span>
        </div>

        {/* Contact Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-t border-gray-700 pt-10 text-left">
          <div>
            <h3 className="text-base font-semibold mb-2">New Business</h3>
            <p className="text-gray-400">newbusiness@ARA.com</p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2">Talent Representation</h3>
            <p className="text-gray-400">talentrep@ARA.com</p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2">Press & Media</h3>
            <p className="text-gray-400">Alex Rozis:</p>
            <p className="text-gray-400">alex.rozis@ARA.com</p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2">Careers</h3>
            <p className="text-gray-400 underline hover:text-white cursor-pointer">View our open positions</p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2">Regional Offices</h3>
            <p className="text-gray-400 underline hover:text-white cursor-pointer">Visit our local offices</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 ARA.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-white">Privacy Notice</a>
            <a href="#" className="hover:text-white">Cookie Notice</a>
            <a href="#" className="hover:text-white">California Privacy Notice</a>
            <a href="#" className="hover:text-white">Terms and Conditions</a>
            <a href="#" className="hover:text-white">Modern Slavery Act Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

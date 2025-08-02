import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// --- Reusable Navigation Link Data ---
const navLinks = [
  { name: 'About Us', path: '/about-us' },
  { name: 'Our Team', path: '/our-team' },
  { name: 'Sponsorship', path: '/sponsorship' },
  { name: 'Our Athlete', path: '/our-athlete' },
];

// --- Framer Motion Variants ---
const mobileMenuVariants = {
  hidden: { opacity: 0, y: '-100%' },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } }, // cubic-bezier for easeInOut
  exit: { opacity: 0, y: '-100%', transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] } }
};

// CORRECTED: This container's variants are now empty. Its only job is to orchestrate its children via the transition property.
const mobileLinkContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3
    }
  }
};

// The variants for the individual links remain the same.
const mobileLinkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0, 0, 0.58, 1] } } // cubic-bezier for easeOut
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location.pathname]);

  const navbarClasses = isMenuOpen || isScrolled
    ? 'bg-white text-black shadow-md'
    : 'bg-transparent text-white';
  
  const hamburgerIconColor = isMenuOpen || isScrolled ? 'bg-black' : 'bg-white';

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${navbarClasses}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link to="/">Athlete Management</Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="relative text-sm font-medium group">
                <span>{link.name}</span>
                <span className={`absolute bottom-[-4px] left-0 w-full h-0.5 ${isMenuOpen || isScrolled ? 'bg-black' : 'bg-white'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out`} />
              </Link>
            ))}
          </div>
          <div className="md:hidden z-50">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-6 h-6 flex flex-col justify-around items-center" aria-label="Open menu">
              <motion.span animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 5.5 : 0 }} className={`w-full h-0.5 ${hamburgerIconColor}`} />
              <motion.span animate={{ opacity: isMenuOpen ? 0 : 1 }} className={`w-full h-0.5 ${hamburgerIconColor}`} />
              <motion.span animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -5.5 : 0 }} className={`w-full h-0.5 ${hamburgerIconColor}`} />
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <motion.div 
              className="h-full flex flex-col justify-center items-center gap-8"
              variants={mobileLinkContainerVariants}
              initial="hidden" 
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={mobileLinkVariants}>
                  <Link to={link.path} className="text-black text-3xl font-bold">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
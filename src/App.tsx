import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import OurTeam from './pages/OurTeam';
import Sponsorship from './pages/Sponsorship';
import OurAthelete from './pages/OurAthelete';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import Loader from './components/Loader';

const AppContent: React.FC = () => {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(location.pathname === '/');

  useEffect(() => {
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 4500); // Loader shows for 2.5 seconds
      return () => clearTimeout(timer);
    } else {
      setShowLoader(false); // All other pages: no loader
    }
  }, [location.pathname]);

  if (showLoader) return <Loader onFinish={function (): void {
    throw new Error('Function not implemented.');
  } }/>; // No navbar/footer while loader

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/our-athlete" element={<OurAthelete />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
};

const App: React.FC = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;

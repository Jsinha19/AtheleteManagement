import React from 'react';
import VideoSlider from '../components/VideoSlider';
import MiddleSection from '../components/MiddleSection';
import Ourathelete from '../components/Ourathelete';
import SponsorshipBenifit from '../components/SponsorshipBenifit';
import SocialStatsMarquee from '../components/SocialStatsMarquee';
// import Marquee from '../components/Marquee';




const HomePage: React.FC = () => {
  return (
    <>
      <VideoSlider />
      <MiddleSection />
      <Ourathelete/>
      <SocialStatsMarquee/>
      <SponsorshipBenifit/>
 
    </>
  );
};

export default HomePage;

import React from 'react';
import LogoCircle from '../components/opening/LogoCircle';
import SocialIcons from '../components/home/SocialIcons';
import ShareButton from '../components/home/ShareButton';
import AboutText from '../components/home/AboutText';
import '../css/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <LogoCircle />
      <SocialIcons />
      <ShareButton />
      <AboutText />
    </div>
  );
}

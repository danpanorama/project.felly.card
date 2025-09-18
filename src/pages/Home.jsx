import React from 'react';
import LogoCircle from '../components/opening/LogoCircle';
import SocialIcons from '../components/home/SocialIcons';
import ShareButton from '../components/home/ShareButton';
import AboutText from '../components/home/AboutText';
import '../css/Home.css';
import ProductsList from '../components/store/ProductList';

export default function Home() {
  return (
 <div>
     <div className="home-container">
      <LogoCircle />
      <SocialIcons />
      <ShareButton />
      <AboutText />
    </div>

 <br />
    <div className="home-container2">
     
      <LogoCircle />
      <ProductsList/>
    
    </div>
 </div>
  );
}

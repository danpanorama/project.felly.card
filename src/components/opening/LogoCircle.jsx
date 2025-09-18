import React, { useState } from 'react';
import '../../css/opening.css';
import FellyLogo from '../../assets/fellyLogo.jpeg';
import FellyQR from '../../assets/FELLY.png';

export default function LogoCircle() {
  const [rotate, setRotate] = useState(false);

  return (
    <div 
      className={`logoCircleContainer ${rotate ? 'rotate' : ''}`} 
      onClick={() => setRotate(!rotate)}
    >
      <div className="circle-front">
        <img src={FellyLogo} alt="" className="img" /> 
      </div>
      <div className="circle-back">
             <img src={FellyQR} alt="" className="img" /> 

      </div>
    </div>
  );
}

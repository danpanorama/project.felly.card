import React, { useState } from 'react';
import '../../css/opening.css';
import FellyLogo from '../../assets/fellyLogo.jpeg';

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
        <p>היי 👋</p>
      </div>
    </div>
  );
}

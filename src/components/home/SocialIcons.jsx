import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../../css/Home.css';

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="#" aria-label="Facebook"><FaFacebookF /></a>
      <a href="#" aria-label="Instagram"><FaInstagram /></a>
      <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
    </div>
  );
}

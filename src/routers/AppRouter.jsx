import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NavBar from '../components/nav/NavBar';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

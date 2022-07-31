import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Profile from './pages/Profile';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import './paskaita6.scss';

const Paskaita6 = () => {
  return (
    <div className="container">
      <Navigation />
      <div className="page_container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Paskaita6;

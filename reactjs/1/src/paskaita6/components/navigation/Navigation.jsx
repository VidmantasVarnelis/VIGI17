import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        Navigation
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navigation;

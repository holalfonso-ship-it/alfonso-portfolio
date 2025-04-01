
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link 
      to="/" 
      className="text-xl font-display font-bold relative z-10 transition-colors duration-300"
    >
      azportolio<span className="text-primary">.net</span>
    </Link>
  );
};

export default Logo;

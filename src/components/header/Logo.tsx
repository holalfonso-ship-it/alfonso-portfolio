
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link 
      to="/" 
      className="text-xl font-display font-bold relative z-10 transition-colors duration-300"
    >
      Portfolio<span className="text-primary">.</span>
    </Link>
  );
};

export default Logo;

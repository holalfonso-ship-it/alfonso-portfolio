
import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => {
  return (
    <Link
      to={href}
      className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default NavLink;

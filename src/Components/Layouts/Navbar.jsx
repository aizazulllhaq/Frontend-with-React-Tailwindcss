import React from 'react';
import { Link } from 'react-scroll';
import "../../App.css";

const Navbar = () => {
  return (
    <nav className='bg-transparent absolute top-0 left-0 z-10 w-full'>
      <div className="flex justify-between p-10"> 
        <div>
          <a href="/" className="text-white text-xl font-bold">Frame</a>
        </div>
        <div>
          <ul className='flex space-x-10'>
            <li><Link to="mainSection" smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer">Home</Link></li>
            <li><Link to="featuresSection" smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer">Features</Link></li>
            <li><Link to="reviewsSection" smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer">Reviews</Link></li>
            <li><Link to="pricingSection" smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer">Pricing</Link></li>
            <li><Link to="contactSection" smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer">Contact</Link></li>
            <li><Link to="servicesSection" smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer">Services</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

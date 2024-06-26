import React from 'react';
import { Link } from 'react-router-dom';
import "../../App"

const Navbar = () => {
  return (
    <nav className='bg-transparent absolute top-0 left-0 z-10 w-full'>
      <div className="flex justify-between p-10">
        <div>
            <Link to={"/"} className="text-white text-xl font-bold">Frame</Link>
        </div>
        <div>
            <ul className='flex space-x-10'>
                <li><Link to={"/"} className="text-white hover:bg-red-50">Home</Link></li>
                <li><Link to={"/features"} className="text-white hover:text-gray-300 cursor-pointer">Features</Link></li>
                <li><Link to={"/reviews"} className="text-white hover:text-gray-300">Reviews</Link></li>
                <li><Link to={"/pricing"} className="text-white hover:text-gray-300">Pricing</Link></li>
                <li><Link to={"/contact"} className="text-white hover:text-gray-300">Contact</Link></li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

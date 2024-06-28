import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center py-14 bg-indigo-700">
      <div className="icons flex text-gray-300 space-x-5 opacity-50">
        <FaFacebookF size={34} />
        <FaTwitter size={34} />
        <FaInstagram size={34} />
        <FaLinkedinIn size={34} />
      </div>
      <div className="content text-center py-5 text-white font-semibold">
        <p>© 2019 Frame. All Rights Reserved.</p>
        <p>Designed & <Link to={"/"} className="text-gray-400 hover:text-white transition translate-x-6">Bootstrap templates</Link> by uiCookies</p>
        <p>Demo Images by <Link to={"/"} className="text-gray-400 hover:text-white transition translate-x-6">Unsplash</Link></p>
      </div>
    </footer>
  );
};

export default Footer;

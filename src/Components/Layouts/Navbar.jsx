import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const LINKS = [
    {
      name: "SERVICES",
      to: "servicesSection",
    },
    {
      name: "FEATURES",
      to: "featuresSection",
    },
    {
      name: "PLAN",
      to: "planSection",
    },
    {
      name: "REVIEW",
      to: "reviewsSection",
    },
    {
      name: "FREE TRIAL",
      to: "freeTrialSection",
    },
    {
      name: "Join Us",
      to: "joinUsSection",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <section className="w-full sm:bg-transparent bg-white">
      <div className="px-8 pt-5 items-center md:flex justify-between">
        <div className="logo">
          <h1 className="font-bold sm:text-white text-indigo-700 sm:text-4xl text-2xl md:pb-0 pb-[10px]">
            Frame
          </h1>
        </div>

        <div className="nav-links">
          <button
            onClick={() => setOpen(!open)}
            className="text-xl sm:text-white text-black absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <FontAwesomeIcon icon={open ? faTimes : faBars} size="lg" />
          </button>
          <ul
            className={`md:flex gap-5 justify-end text-xl absolute md:static  ${
              open
                ? "top-15 left-0 right-0 bg-white text-black pl-[60px]"
                : "top-[-490px] text-white"
            }`}
          >
            {LINKS.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 md:text-xl text-md md:my-0 my-5"
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-400 cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

import {  faLightbulb, faPhone, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ServicesSection = () => {
  return (
    <section className="w-[100%]">
    <div className="max-w-[1370px] mx-auto bg-white">
      <div className="cards max-w-[1170px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-[20px] px-[60px] py-[100px]">
        <div className="p-[30px]">
        <FontAwesomeIcon icon={faPhone} size="2x" className="text-indigo-700 sm:pb-[50px] pb-[30px] sm:text-[70px] text-[40px]" />
          <h1 className="text-3xl text-indigo-700 pb-[20px]">Mobile Optimize</h1>
          <p className="text-md">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean
          </p>
          <a className="text-indigo-700 text-xl pt-[20px]">{"Learn More > "}</a>
        </div>

        <div className="p-[30px]">
        <FontAwesomeIcon icon={faWallet} size="2x" className="text-indigo-700 sm:pb-[50px] pb-[30px] sm:text-[70px] text-[40px]" />
          <h1 className="text-3xl text-indigo-700 pb-[20px]">Mobile Optimize</h1>
          <p className="text-md">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean
          </p>
          <a className="text-indigo-700 text-xl pt-[20px]">{"Learn More > "}</a>
        </div>

        <div className="p-[30px]">
        <FontAwesomeIcon icon={faLightbulb} size="2x" className="text-indigo-700 sm:pb-[50px] pb-[30px] sm:text-[70px] text-[40px]" />
          <h1 className="text-3xl text-indigo-700 pb-[20px]">Mobile Optimize</h1>
          <p className="text-md">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean
          </p>
          <a className="text-indigo-700 text-xl pt-[20px]">{"Learn More > "}</a>
        </div>

      
      </div>
    </div>
    </section>
  );
};

export default ServicesSection;

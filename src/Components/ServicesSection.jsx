import React from "react";
import { Link } from "react-router-dom";

const LearnMore = ({ to }) => {
  const anchorText = "Learn More >";
  return (
    <div className="mt-5">
     <Link to={to} className="text-xl text-blue-900">
        {anchorText}
      </Link>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="h-screen bg-white">
      <div className="parent flex p-5 mt-20">
        <div className="first p-20">
          <img src={""} alt="" />
          <h1 className="text-3xl text-blue-900 mb-7">Mobile Optimize</h1>
          <p className="text-base opacity-60 font-serif w-72">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean
            <LearnMore to={"/"} />
          </p>
        </div>
        <div className="second p-20">
          <img src="" alt="" />
          <h1 className="text-3xl text-blue-900 mb-7">Increase Revenue</h1>
          <p className="text-base opacity-60 font-serif w-72">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean
            <LearnMore to={"/"} />
          </p>
        </div>
        <div className="third p-20">
          <img src="" alt="" />
          <h1 className="text-3xl text-blue-900 mb-7">Smart Idea</h1>
          <p className="text-base opacity-60 font-serif w-72">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean
            <LearnMore to={"/"} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import React from "react";
import Button from "./Button";
import avatar from "../asd.png";

const ReviewsSection = () => {
  return (
    <section className="bg-blue-100 pb-20">
      <div className="content text-center mt-20">
        <h1 className="text-5xl pt-20">That’s why 100,000+ Love Frame</h1>
        <p className="text-base mt-10">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic <br /> life One day however a small line
          of blind text by the name of Lorem Ipsum decided to <br />
          leave for the far World of Grammar.
        </p>
      </div>
      <div className="first-3-cards flex">
        <div className="first my-40 ml-40 w-1/2 px-2 shadow-sm shadow-gray-500 bg-white rounded-md">
          <img src={avatar} alt="" className="rounded-full w-20 ml-5 mt-5" />
          <p className="pt-10 pl-5">⭐⭐⭐⭐⭐</p>
          <p className="text-md font-semibold pl-5 pt-5">
            Even the all-powerful Pointing has no <br /> control about the blind
            texts it is an <br /> almost unorthographic life One day <br />
            however a small line of blind text by <br />
            the name of Lorem Ipsum decided to <br /> leave for the far World of
            Grammar.
          </p>
          <h1 className="opacity-50 pl-5 mt-10 mb-5">-- Aizaz Ul Haq</h1>
        </div>

        <div className="second my-40 ml-20 shadow-sm shadow-gray-500 w-1/2 px-2 bg-white rounded-md">
          <img src={avatar} alt="" className="rounded-full w-20 ml-5 mt-5" />
          <p className="pt-10 pl-5">⭐⭐⭐⭐⭐</p>
          <p className="text-md font-semibold pl-5 pt-5">
            Even the all-powerful Pointing has no <br /> control about the blind
            texts it is an <br /> almost unorthographic life One day <br />
            however a small line of blind text by <br />
            the name of Lorem Ipsum decided to <br /> leave for the far World of
            Grammar.
          </p>
          <h1 className="opacity-50 pl-5 mt-10">-- Aizaz Ul Haq</h1>
        </div>

        <div className="third my-40 mx-20 shadow-sm shadow-gray-500 w-1/2 px-2 bg-white rounded-md">
          <img src={avatar} alt="" className="rounded-full w-20 ml-5 mt-5" />
          <p className="pt-10 pl-5">⭐⭐⭐⭐⭐</p>
          <p className="text-md font-semibold pl-5 pt-5">
            Even the all-powerful Pointing has no <br /> control about the blind
            texts it is an <br /> almost unorthographic life One day <br />
            however a small line of blind text by <br />
            the name of Lorem Ipsum decided to <br /> leave for the far World of
            Grammar.
          </p>
          <h1 className="opacity-50 pl-5 mt-10">-- Aizaz Ul Haq</h1>
        </div>
      </div>

      <div className="last-3-cards flex">
        <div className="first ml-40  w-1/2 px-2 shadow-sm shadow-gray-500 bg-white rounded-md">
          <img src={avatar} alt="" className="rounded-full w-20 ml-5 mt-5" />
          <p className="pt-10 pl-5">⭐⭐⭐⭐⭐</p>
          <p className="text-md font-semibold pl-5 pt-5">
            Even the all-powerful Pointing has no <br /> control about the blind
            texts it is an <br /> almost unorthographic life One day <br />
            however a small line of blind text by <br />
            the name of Lorem Ipsum decided to <br /> leave for the far World of
            Grammar.
          </p>
          <h1 className="opacity-50 pl-5 mt-10 pb-5">-- Aizaz Ul Haq</h1>
        </div>

        <div className="second  ml-20 shadow-sm shadow-gray-500 w-1/2 px-2 bg-white rounded-md">
          <img src={avatar} alt="" className="rounded-full w-20 ml-5 mt-5" />
          <p className="pt-10 pl-5">⭐⭐⭐⭐⭐</p>
          <p className="text-md font-semibold pl-5 pt-5">
            Even the all-powerful Pointing has no <br /> control about the blind
            texts it is an <br /> almost unorthographic life One day <br />
            however a small line of blind text by <br />
            the name of Lorem Ipsum decided to <br /> leave for the far World of
            Grammar.
          </p>
          <h1 className="opacity-50 pl-5 mt-10">-- Aizaz Ul Haq</h1>
        </div>

        <div className="third mx-20 shadow-sm shadow-gray-500 w-1/2 px-2 bg-white rounded-md">
          <img src={avatar} alt="" className="rounded-full w-20 ml-5 mt-5" />
          <p className="pt-10 pl-5">⭐⭐⭐⭐⭐</p>
          <p className="text-md font-semibold pl-5 pt-5">
            Even the all-powerful Pointing has no <br /> control about the blind
            texts it is an <br /> almost unorthographic life One day <br />
            however a small line of blind text by <br />
            the name of Lorem Ipsum decided to <br /> leave for the far World of
            Grammar.
          </p>
          <h1 className="opacity-50 pl-5 mt-10">-- Aizaz Ul Haq</h1>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

import React from "react";
import Button from "./Button";

const PlanSection = () => {
  return (
    <section>
      <div className="content text-center mt-20">
        <h1 className="text-5xl">
          Choose the plan that’s right for <br /> your business
        </h1>
        <p className="text-base mt-10">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life <br />
          One day however a small line of blind text by the name of Lorem Ipsum
          decided to leave for <br />
          the far World of Grammar.
        </p>
      </div>
      <div className="cards flex">
        <div className="first my-40 ml-40  w-1/2 px-2 shadow-sm shadow-gray-500">
          <h2 className="text-center p-5">STARTER</h2>
          <h2 className="text-center  text-6xl text-blue-800">$22.99</h2>
          <p className="text-center text-xs mt-10 opacity-40">
            This is a monthly recurring payment
          </p>
          <ul className="py-10 mx-10 text-md">
            <li className="text-sm opacity-80 "> ✔ Pointing has no control</li>
            <li className="text-sm pt-3 opacity-80">
              {" "}
              ✔ A small river named Duden flows
            </li>
            <li className="text-sm pt-3 opacity-80">
              {" "}
              ✔ Roasted parts of sentences fly into your mouth
            </li>
          </ul>
          <div className="flex justify-center items-center mb-5">
            <Button isBorder={false} color="bg-black" text="white">
              Get Started
            </Button>
          </div>
        </div>

        <div className="second my-40 ml-20 shadow-xl shadow-gray-500 w-1/2 px-2">
          <h2 className="text-center p-5">STARTER</h2>
          <h2 className="text-center  text-6xl text-blue-800">$22.99</h2>
          <p className="text-center text-xs mt-10 opacity-40">
            This is a monthly recurring payment
          </p>
          <ul className="py-10 mx-10 text-md">
            <li className="text-sm opacity-80 "> ✔ Pointing has no control</li>
            <li className="text-sm pt-3 opacity-80">
              {" "}
              ✔ A small river named Duden flows
            </li>
            <li className="text-sm pt-3 opacity-80">
              {" "}
              ✔ Roasted parts of sentences fly into your mouth
            </li>
          </ul>
          <div className="flex justify-center items-center mb-5">
            <Button isBorder={false} color="bg-blue-700" text="white">
              Get Started
            </Button>
          </div>
        </div>

        <div className="third my-40 mx-20 shadow-sm shadow-gray-500 w-1/2 px-2">
          <h2 className="text-center p-5">STARTER</h2>
          <h2 className="text-center  text-6xl text-blue-800">$22.99</h2>
          <p className="text-center text-xs mt-10 opacity-40">
            This is a monthly recurring payment
          </p>
          <ul className="py-10 mx-10 text-md">
            <li className="text-sm opacity-80 "> ✔ Pointing has no control</li>
            <li className="text-sm pt-3 opacity-80">
              {" "}
              ✔ A small river named Duden flows
            </li>
            <li className="text-sm pt-3 opacity-80">
              {" "}
              ✔ Roasted parts of sentences fly into your mouth
            </li>
          </ul>
          <div className="flex justify-center items-center mb-5">
            <Button isBorder={false} color="bg-gray-800" text="white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;

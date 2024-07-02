import React from "react";

const PlanSection = () => {
  return (
    <section className="w-[100%] bg-white my-[40px]">
      <div className="max-w-[1370px] mx-auto">
        <div className="heading text-center">
          <h1 className="sm:text-5xl text-2xl px-[22px] sm:py-[80px] py-[50px]">
            Choose the plan that’s right for <br /> your business
          </h1>
          <p className="sm:text-xl text-[17px] px-[20px]">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life <br /> One day however a small
            line of blind text by the name of Lorem Ipsum decided to leave for{" "}
            <br /> the far World of Grammar.
          </p>
        </div>

        <div className="cards pt-[80px] grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 ">
          <div className="first shadow-md mx-auto my-[40px] shadow-gray-300 w-[80%] items-center rounded-[20px]">
            <h3 className="text-2xl p-[20px] text-center">STARTER</h3>
            <h1 className="text-6xl py-[20px] text-indigo-800 text-center">
              $22.99
            </h1>
            <p className="opacity-50 text-sm py-[10px] text-center">
              This is a monthly recurring payment
1            </p>
            <ul className="py-[20px] pl-[50px] pr-[28px]">
              <li className="text-[15px] py-[5px] opacity-80">
                ✔ Pointing has no control
              </li>
              <li className="text-[15px] py-[5px] opacity-80">
                ✔ A small river named Duden flows
              </li>
              <li className="text-[15px] py-[5px] opacity-80">
                ✔ Roasted parts of sentences fly into your mouth
              </li>
            </ul>
            <div className="m-[20px] text-center">
              <button className="px-[15px] py-[10px] bg-black text-white rounded-[5px]">
                Get Started
              </button>
            </div>
          </div>

          <div className="second shadow-2xl mx-auto my-[40px] shadow-gray-300 w-[80%] items-center rounded-[20px]">
            <h3 className="text-2xl p-[20px] text-center">STARTER</h3>
            <h1 className="text-6xl py-[20px] text-indigo-800 text-center">
              $22.99
            </h1>
            <p className="opacity-50 text-sm py-[10px] text-center">
              This is a monthly recurring payment
            </p>
            <ul className="py-[20px] pl-[50px] pr-[28px]">
              <li className="text-[15px] py-[5px] opacity-80">
                ✔ Pointing has no control
              </li>
              <li className="text-[15px] py-[5px] opacity-80">
                ✔ A small river named Duden flows
              </li>
              <li className="text-[15px] py-[5px] opacity-80">
                ✔ Roasted parts of sentences fly into your mouth
              </li>
            </ul>
            <div className="m-[20px] text-center">
              <button className="px-[15px] py-[10px] bg-black text-white rounded-[5px]">
                Get Started
              </button>
            </div>
          </div>
          <div className="third shadow-md mx-auto my-[40px] shadow-gray-300 w-[80%] items-center rounded-[20px]">
            <h3 className="text-2xl p-[20px] text-center">STARTER</h3>
            <h1 className="text-6xl py-[20px] text-indigo-800 text-center">
              $22.99
            </h1>
            <p className="opacity-50 text-sm py-[10px] text-center">
              This is a monthly recurring payment
            </p>
            <ul className="py-[20px] pl-[50px] pr-[28px]">
              <li className="text-[15px] py-[5px] opacity-80">
                ✔ Pointing has no control
              </li>
              <li className="text-[15px] py-[5px] opacity-80">
                ✔ A small river named Duden flows
              </li>
              <li className="text-[15px] py-[5px] opacity-80">
                ✔ Roasted parts of sentences fly into your mouth
              </li>
            </ul>
            <div className="m-[20px] text-center">
              <button className="px-[15px] py-[10px] bg-black text-white rounded-[5px]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;

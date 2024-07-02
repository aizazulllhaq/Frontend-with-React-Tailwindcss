import React from "react";

const FeaturesSection = () => {
  return (
    <section className="w-[100%] bg-blue-100">
      <div className="max-w-[1370px] mx-auto flex flex-col">
        <div className="heading text-center">
          <h1 className="sm:text-5xl text-2xl py-[40px] sm:py-[50px] px-[20px]">
            Features
          </h1>
          <p className="sm:text-xl text-[16px] px-[20px]">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One <br /> day however a small
            line of blind text by the name of Lorem Ipsum decided <br />
            to leave for the far World of Grammar.
          </p>
        </div>

        <div className="cards-content sm:pt-[50px] pt-[30px] px-[20px]">
          <div className="first grid md:grid-cols-2 grid-cols-1 gap-[60px] pt-[100px]">
            <div className="content">
              <h1 className="sm:text-3xl text-xl sm:py-[15px] py-[10px] text-indigo-700">
                Big Benefits for Small Business
              </h1>
              <p className="sm:text-[20px] text-[15px] py-[10px]">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <ul className="sm:py-[20px] py-[10px]">
                <li>✔ Pointing has no control</li>
                <li>✔ A Small River name Duden flows</li>
                <li>✔ Roasted partsof sentences fly into your mouth</li>
              </ul>
            </div>
            <div className="img animate-moveUp">
              <img
                src="https://uicookies.com/demo/theme/frame/img/img_showcase_1.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="second grid md:grid-cols-2 grid-cols-1 gap-[60px] my-[20px] pt-[100px]">
            <div className="img md:order-1 order-2 animate-moveUp">
              <img
                src="https://uicookies.com/demo/theme/frame/img/img_showcase_1.jpg"
                alt=""
              />
            </div>
            <div className="content md:order-2 order-1">
              <h1 className="sm:text-3xl text-xl sm:py-[15px] py-[10px] text-indigo-700">
                Big Benefits for Small Business
              </h1>
              <p className="sm:text-[20px] text-[15px] py-[10px]">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <ul className="sm:py-[20px] py-[10px]">
                <li>✔ Pointing has no control</li>
                <li>✔ A Small River name Duden flows</li>
                <li>✔ Roasted partsof sentences fly into your mouth</li>
              </ul>
            </div>
          </div>

          <div className="third grid md:grid-cols-2 grid-cols-1 gap-[60px] my-[20px] py-[100px]">
            <div className="content">
              <h1 className="sm:text-3xl text-xl sm:py-[15px] py-[10px] text-indigo-700">
                Big Benefits for Small Business
              </h1>
              <p className="sm:text-[20px] text-[15px] py-[10px]">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <ul className="sm:py-[20px] py-[10px]">
                <li>✔ Pointing has no control</li>
                <li>✔ A Small River name Duden flows</li>
                <li>✔ Roasted partsof sentences fly into your mouth</li>
              </ul>
            </div>
            <div className="img animate-moveUp">
              <img
                src="https://uicookies.com/demo/theme/frame/img/img_showcase_1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

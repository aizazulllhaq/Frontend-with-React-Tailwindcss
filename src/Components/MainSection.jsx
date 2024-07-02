import React from "react";
import Button from "./Button";

const MainSection = () => {
  return (
    <section className="w-[100%]">
      <div className="max-w-[1170px] mx-auto">
        <div className="py-[150px] text-center animate-moveUp">
          <h1 className="sm:text-4xl md:text-5xl text-[27px] px-[10px] text-white">
            uicookies.com Creates High <br /> Quality Bootstrap Template For{" "}
            <br /> Free
          </h1>
          <div className="btns pt-[30px] flex justify-center md:flex-row flex-col">
            <div className="px-[20px] md:py-0 my-[10px]">
              <Button isBorder={false} color="bg-indigo-700" text="white" hover="bg-indigo-800">
                Get Them Now
              </Button>
            </div>
            <div className="px-[20px] md:py-0 my-[10px]">
              <Button isBorder={true} text="white" hover="bg-gray-50">
                See Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;

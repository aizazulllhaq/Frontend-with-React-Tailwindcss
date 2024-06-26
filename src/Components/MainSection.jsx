import React from "react";
import Button from "./Button";

const MainSection = () => {
  return (
    <div
      className="relative bg-cover bg-top h-screen"
      style={{
        backgroundImage:
          "url(https://othello-leather.myshopify.com/cdn/shop/products/olu-eletu-134760.jpg?v=1680802581)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex items-center relative justify-center h-full z-10">
        <div className="text-center text-white animate-moveUp pt-32">
          <h1 className="text-4xl md:text-6xl  mb-4 py-10">
            uicookies.com Creates High <br /> Quality Bootstrap Template For{" "}
            <br />
            Free
          </h1>
          <div className="space-x-4">
            <Button isBorder={false} color={"bg-blue-700"}>
              Get Them Now
            </Button>
            <Button>See Features</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;

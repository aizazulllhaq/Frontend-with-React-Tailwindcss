import React from "react";

const Button = ({ isBorder=true,color="", text="white",children ,hover=""}) => {
  return (
    <button className={`px-4 py-4 text-xl ${isBorder && "border-[1px]"} ${color} text-${text}  hover:${hover}`}>
      {children}
    </button>
  );
};

export default Button;

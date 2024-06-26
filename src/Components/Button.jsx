import React from "react";

const Button = ({ isBorder=true,color="", text="white",children }) => {
  return (
    <button className={`px-4 py-4 text-xl ${isBorder && "border-2"} ${color} text-${text}`}>
      {children}
    </button>
  );
};

export default Button;

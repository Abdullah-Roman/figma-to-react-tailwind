import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const Button = ({ children, className }) => {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center gap-x-2 bg-[#FCD980] text-primary py-3 px-14 rounded-full mt-8 hover:text-white hover:bg-primary hover:border hover:border-white",
        className
      )}
    >
      {children}
      <span>
        <FaArrowRight />
      </span>{" "}
    </button>
  );
};

export default Button;

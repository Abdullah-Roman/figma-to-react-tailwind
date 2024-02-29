import React from "react";
import Accordians from "../Accodians/Accordians";

const Questions = () => {
  return (
    <div className="container pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-[2fr,3fr]">
        <div className="h-full flex flex-col justify-center px-4 sm:px-0 mx-auto ">
          <h2 className="text-2xl font-semibold w-72">
            Frequently asked questions
          </h2>
          <p className="text-xl text-blue-500 pt-2">Contact us for more info</p>
        </div>
        <div className="px-4 sm:px-0">
          <Accordians />
        </div>
      </div>
    </div>
  );
};

export default Questions;

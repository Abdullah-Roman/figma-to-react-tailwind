import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-primary">
      <div className="container pt-48 pb-48">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
          <div className="right order-2 sm:order-1 grid place-items-center ">
            <h2 className="text-5xl font-semibold text-white w-[30rem] leading-[3.5rem]">
              Building stellar websites for early startups
            </h2>
            <p className="text-white/70 w-[30rem] pt-5">
              Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
              ultricies nec dolor sit amet, scelerisque cursus purus.
            </p>
            <div className=" sm:flex gap-x-5">
              <button className="bg-[#FCD980] text-primary py-3 px-14 rounded-full mt-8 hover:text-white hover:bg-primary hover:border hover:border-white">
                View Our Work
              </button>
              <button className="flex items-center gap-x-2 bg-[#FCD980] text-primary py-3 px-14 rounded-full mt-8 hover:text-white hover:bg-primary hover:border hover:border-white">
                View Pricing{" "}
                <span>
                  <FaArrowRight />
                </span>{" "}
              </button>
            </div>
          </div>
          <div className="left order-1 sm:order-2">
            <div className="flex justify-end">
              <img src="./banner.png" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

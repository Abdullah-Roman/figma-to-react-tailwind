import React from "react";
import Bannerr from "../../assets/writing.jpg";
import Button from "../Button/Button.jsx";

const BackgroundImage = {
  backgroundImage: `url(${Bannerr})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundReapeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const Form = () => {
  return (
    <div className="container grid  grid-cols-1 sm:grid-cols-2  h-[700px] mt-10">
      <div
        style={BackgroundImage}
        className="left relative -z-50 flex flex-col items-center justify-center"
      >
        <div>
          <h2 className="text-white text-3xl font-bold w-[300px] mx-auto  z-[999]">
            Building stellar websites for early startups
          </h2>
          <p className="text-white text-xl w-[300px] mx-auto pt-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[#1C1E53] bg-opacity-30 -z-10 "></div>
      </div>
      <div className="right bg-[#1C1E53]">
        <div className="max-w-[400px] mx-auto">
          <h2 className="text-white text-2xl font-semibold pt-24">
            Send inquiry
          </h2>
          <p className="text-white text-xl py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <form action="">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-white/5 bg-[#1C1E53] my-4 px-4 py-4 w-full placeholder:text-white/50 rounded-md"
            />
            <input
              type="text"
              placeholder="Email"
              className="border border-white/5 bg-[#1C1E53] my-4 px-4 py-4 w-full placeholder:text-white/50 rounded-md"
            />
            <input
              type="text"
              placeholder="Paste Your Figma Design URLs"
              className="border border-white/5 bg-[#1C1E53] my-4 px-4 py-4 w-full placeholder:text-white/50 rounded-md"
            />
          </form>
          <Button className="w-full px-auto">Send Inquiry</Button>
        </div>
      </div>
    </div>
  );
};

export default Form;

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Card from "../Card/Card";

const Work = () => {
  return (
    <div className="container pt-32 grid gap-2 grid-cols-1 sm:grid-cols-2 place-items-center pb-20">
      <div className="left">
        <h2 className="font-semibold text-4xl">How we work</h2>
        <p className="py-4 text-[#282938] w-[25rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <button className="text-blue-500 flex gap-x-2 items-center ">
          Get in touch with us{" "}
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
      <div className="right grid gap-y-4 grid-cols-1 sm:grid-cols-2">
        <Card
          src="./one.png"
          title="Strategy"
          para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."
        />
        <Card
          src="./two.png"
          title="Wireframing"
          para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."
        />
        <Card
          src="./three.png"
          title="Design"
          para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."
        />
        <Card
          src="./four.png"
          title="Development"
          para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."
        />
      </div>
    </div>
  );
};

export default Work;

import React from "react";
import Button from "../Button/Button";

const Projects = () => {
  return (
    <div className="container grid grid-cols-1  sm:grid-cols-[3fr,1fr] gap-4 overflow-hidden">
      <div className="h-[30rem] relative group overflow-hidden">
        <img src="./card.jpg" alt="" className="w-full h-full object-cover" />
        <div className="overlay flex flex-col items-center justify-center absolute top-0 left-0 w-1/2 h-full transition-all duration-200 -translate-x-full group-hover:-translate-x-0">
          <h2 className="text-white text-2xl font-semibold w-2/3">
            Workhub office Webflow Webflow Design
          </h2>
          <p className="text-white/75 text-xl w-2/3 py-3">
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam{" "}
          </p>
          <Button className="text-yellow-600 bg-transparent">
            View Projects
          </Button>
        </div>
      </div>
      <div className="h-[30rem] flex flex-col gap-y-4 overflow-hidden">
        <div className="h-1/2 relative group">
          <img
            src="./card2.png"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="overlay flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full transition-all duration-200 -translate-x-full group-hover:-translate-x-0">
            <h2 className="text-white text-2xl font-semibold w-2/3">
              Website Design
            </h2>
            <p className="text-white/75 text-xl w-2/3 py-3">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam{" "}
            </p>
            <Button className="text-yellow-600 bg-transparent">
              View Portfolio
            </Button>
          </div>
        </div>
        <div className="h-1/2 group relative">
          <img
            src="./card3.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="overlay flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full transition-all duration-200 -translate-x-full group-hover:-translate-x-0">
            <h2 className="text-white text-2xl font-semibold w-2/3">
              Website Design
            </h2>
            <p className="text-white/75 text-xl w-2/3 py-3">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam{" "}
            </p>
            <Button className="text-yellow-600 bg-transparent">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

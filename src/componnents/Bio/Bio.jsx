import React from "react";

const Bio = () => {
  return (
    <div className="border border-gray-600">
      <div className="container pb-32  pt-32">
        <div className=" sm:pl-24 grid grid-cols-1 sm:grid-cols-[2fr,3fr] gap-x-36 gap-y-4 place-items-center">
          <div className="w-[20rem] mx-auto ">
            <h2 className="text-3xl font-semibold ">
              What our clients say about us
            </h2>
            <p className="text-black/70 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit sed.
            </p>
          </div>
          <div className="w-[20rem] sm:w-[60rem] mx-auto">
            <h2 className="text-xl font-semibold pt-30 w-2/3">
              &quot;The best agency we’ve worked with so far. They understand
              our product and are able to add new features with a great focus.
              &quot;
            </h2>
            <div className="flex items-center gap-x-2 pt-6 ">
              <img src="./profile.png" alt="" />
              <div className="">
                <h2 className="font-medium text-xl">Jenny Wilson</h2>
                <p className="">Vice President</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;

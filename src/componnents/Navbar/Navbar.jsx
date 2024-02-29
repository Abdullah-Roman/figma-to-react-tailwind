import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";

const menu = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "About Us",
  },
  {
    id: 3,
    title: "Features",
  },
  {
    id: 4,
    title: "Pricing",
  },
  {
    id: 5,
    title: "Faq",
  },
  {
    id: 6,
    title: "Blog",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-primary   relative shadow-lg">
      <div className="container  flex py-4 justify-between items-center ">
        <div className="ms-3 md:ms-0">
          <img src="./logo.png" alt="" />
        </div>
        <div
          className={`right flex-col py-4 md:py-0 z-[999] ${
            show ? "" : "hidden"
          }  md:flex  md:flex-row md:items-center gap-x-12 absolute top-full w-full md:w-auto bg-primary shadow-2xl md:shadow-none md:bg-transparent md:static`}
        >
          <ul className="flex flex-col items-center gap-y-1 mb-2 md:mb-0 md:flex md:flex-row gap-x-8 ">
            {menu.map((data) => (
              <li
                className="text-[#BBBBCB] hover:text-white font-bold"
                key={data.id}
              >
                {data.title}
              </li>
            ))}
          </ul>
          <button className="text-[#BBBBCB] block mx-auto md:mx-0 font-bold border border-[#BBBBCB] py-2 px-6 md:py-4 md:px-12 rounded-full ">
            Contact Us
          </button>
        </div>
        <div className="sm:hidden me-3 md:me-0" onClick={() => setShow(!show)}>
          <span>
            <AiOutlineBars className="text-white text-2xl " />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

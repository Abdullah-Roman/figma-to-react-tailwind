import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

const items = [
  {
    question: "How much time does it take?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is your class naming convention?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML.",
  },
  {
    question: "How do you communicate?",
    answer:
      "You can install React using npm or yarn. For example, you can run `npm install react react-dom`.",
  },
  {
    question: "I have a bigger project. Can you handle it?",
    answer:
      "You can install Tailwind CSS via npm or yarn. First, install it using `npm install tailwindcss` or `yarn add tailwindcss`, then create a configuration file and add Tailwind to your CSS.",
  },
];

const Accordians = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div>
      {items.map((data, index) => (
        <div
          key={index}
          className="border-b border-gray-400 py-6"
          onClick={() => handleClick(index)}
        >
          <div className=" mx-auto w-full flex justify-between ">
            <div className="text-blue-500 text-xl font-bold">0{index + 1}</div>
            <div className="text-xl font-semibold">{data.question}</div>
            <div className="text-xl">
              {activeIndex === index ? (
                <IoIosClose className="text-2xl" />
              ) : (
                "+"
              )}
            </div>
          </div>
          {activeIndex === index && (
            <div className="py-4 w-80 mx-auto">{data.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordians;

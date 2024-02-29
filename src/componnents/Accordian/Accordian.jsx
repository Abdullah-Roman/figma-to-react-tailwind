import React, { useState } from "react";

const items = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is Tailwind CSS?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML.",
  },
  {
    question: "How can I install React?",
    answer:
      "You can install React using npm or yarn. For example, you can run `npm install react react-dom`.",
  },
  {
    question: "How can I install Tailwind CSS?",
    answer:
      "You can install Tailwind CSS via npm or yarn. First, install it using `npm install tailwindcss` or `yarn add tailwindcss`, then create a configuration file and add Tailwind to your CSS.",
  },
];

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null); //0 instead of null for first question open

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); //-1 istead of null
  };
  return (
    <div>
      <div className="w-full max-w-md mx-auto">
        {items.map((item, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center bg-gray-200 p-4 cursor-pointer"
              onClick={() => handleClick(index)}
            >
              {" "}
              <div>0{index + 1}</div>
              <div className="font-semibold">{item.question}</div>
              <div>{activeIndex === index ? "-" : "+"}</div>
            </div>
            {activeIndex === index && (
              <div className="p-4 bg-white">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;

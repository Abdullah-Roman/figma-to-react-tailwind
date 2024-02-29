import React from "react";

const Card = ({ src, title, para, className }) => {
  return (
    <div className={`${className}`}>
      <img src={src} alt="" />
      <h2 className="font-semibold text-2xl py-4">{title}</h2>
      <p className="text-black/70 w-80">{para}</p>
    </div>
  );
};

export default Card;

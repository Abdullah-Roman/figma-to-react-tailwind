import React from "react";
import Card from "../Card/Card";

const Portfolio = () => {
  return (
    <div className="bg-blue-300/70">
      <div className="container">
        <div className="w-[400px] mx-auto">
          <p className="text-center pt-32 text-xl">Features</p>
          <h2 className="text-3xl text-center pt-4 font-bold">
            Design that solves problems, one product at a time
          </h2>
        </div>
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-[1fr,1fr,1fr] gap-4 pt-10 pb-32">
          <Card
            className="bg-white p-8"
            src="./ek.png"
            title="Uses Client First"
            para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
          />
          <Card
            className="bg-white p-8"
            src="./dui.png"
            title="Two Free Revision Round"
            para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
          />
          <Card
            className="bg-white p-8"
            src="./tin.png"
            title="Template Customization"
            para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
          />
          <Card
            className="bg-white p-8"
            src="./char.png"
            title="24/7 Support"
            para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
          />
          <Card
            className="bg-white p-8"
            src="./pach.png"
            title="Quick Delivery"
            para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
          />
          <Card
            className="bg-white p-8"
            src="./soy.png"
            title="Hands-on approach"
            para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import React from "react";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 flex flex-col p-4 rounded-md">
      <h2 className="text-center">
        <span className="text-7xl">{price}</span>
        <span className="text-2xl">/mo</span>
      </h2>
      <h4 className="text-3xl text-center">{name}</h4>
      <div className="my-4 ml-4 flex-grow">
        {features.map((features, index) => (
          <Feature key={index} feature={features}></Feature>
        ))}
      </div>
      <button className="bg-blue-600 p-4 w-full rounded-xl hover:bg-blue-900 ">
        Buy now
      </button>
    </div>
  );
};

export default PriceOption;

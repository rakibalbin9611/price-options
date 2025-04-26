import React from "react";
import { FaCheck } from "react-icons/fa6";
const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center">
        <FaCheck className=" text-green-500 mr-2" />
        {feature}
      </p>
    </div>
  );
};

export default Feature;

import React from "react";

const Link = ({ route }) => {
  // console.log(route);
  return (
    <div className="mr-8 hover:bg-yellow-500 px-4 rounded">
      <li>
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;

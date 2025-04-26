import React, { useState } from "react";
import Link from "../Link/Link";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav>
      <div
        className="md:hidden p-2 bg-yellow-300 text-black"
        onClick={() => setOpen(!open)}
      >
        {open === true ? <IoMdClose /> : <RiMenu3Line></RiMenu3Line>}
      </div>
      <ul
        className={`md:flex duration-1000 justify-center items-center absolute md:static
          ${open ? "top-15" : "-top-60"}
           bg-yellow-300 text-black p-2 rounded`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

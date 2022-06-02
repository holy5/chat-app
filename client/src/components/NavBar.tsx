import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="w-full h-[50px] bg-lightBlue text-white absolute top-0 left-0 right-0">
      <div className="flex items-center justify-between h-full px-5">
        <Link to="/" className="text-2xl font-medium">
          Fakebook
        </Link>
        <SearchBar />
        <Link to="/" className="">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

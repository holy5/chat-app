import React from "react";
import Person from "./Person";

const Sidebar = () => {
  return (
    <div className="text-white w-[200px] h-[calc(100%-50px)] bg-sideBar px-2 py-4 absolute bottom-0 left-0 overflow-auto">
      <div className="flex flex-col items-start gap-1 ">
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";

const SearchBar = () => {
  return (
    <input
      type="text"
      className="py-1 rounded-full input-css placeholder:text-sm w-[500px]"
      placeholder="Search for something"
    />
  );
};

export default SearchBar;

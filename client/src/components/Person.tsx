import React from "react";

const Person = () => {
  return (
    <div className="flex items-center w-full px-2 py-2 font-medium rounded-md hover:bg-slate-600 gap-x-2 ">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flongwoodgardens.org%2Fsites%2Fdefault%2Ffiles%2Fhighlight_images%2F77065.jpg&f=1&nofb=1"
        alt=""
        className="w-[35px] rounded-full aspect-square"
      />
      <div className="text-sm break-normal line-clamp-2">
        Le Vinh Quang Le Vinh Quang Le Vinh Quang
      </div>
      <div className="text-sm font-bold text-red-500">5</div>
    </div>
  );
};

export default Person;

import React from "react";

const NavIcon = ({ ICon, active }) => {
  return (
    <div className="flex active:border-b-2  active:border-blue-500 rounded-xl items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100">
      <ICon className={`h-5 text-gray-500 sm:h-7 mx-auto text-center group-hover:text-blue-400 ${active && "text-blue-500"}`} />
    </div>
  );
};

export default NavIcon;

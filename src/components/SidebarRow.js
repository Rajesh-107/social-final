import React from "react";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="flex items-center space-x-2 p-4  hover:bg-gray-300 cursor-pointer rounded-full  ">
      {/* {
                src && (
                    <img src={src} alt={title} />
                )
            } */}

      {Icon && <Icon className="h-6 w-6 text-blue-500" />}
      <p className="hidden sm:inline-flex sm:font-medium">{title}</p>
    </div>
  );
};

export default SidebarRow;

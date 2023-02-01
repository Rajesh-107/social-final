import React from "react";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-300 cursor-pointer rounded-full  ">
      {/* {
                src && (
                    <img src={src} alt={title} />
                )
            } */}

      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};

export default SidebarRow;

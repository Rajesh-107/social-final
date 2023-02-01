import { VideoCameraIcon,EyeIcon, CameraIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
// import InputModal from "./InputModal";

const InputBox = () => {
  const sendpost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white p-6 mb-3 rounded-2xl shadow-md text-gray-500 font-medium">
      <div className="flex space-x-4 items-center">
        <Image
          src="https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg"
          alt=""
          width={40}
          height={40}
          layout="fixed"
          className="rounded-full"
        />
        <form className="flex flex-1">
          {/* <InputModal/> */}
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder="Post your Item"
          />
          <button className="" onClick={sendpost} type="submit">
            Post
          </button>
        </form>
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
            <VideoCameraIcon className="h-7 text-red-400" />
            <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div className="inputIcon">
        <CameraIcon className="h-7 text-blue-200"/>
            <p className="text-xs sm:text-sm xl:text-base">Images</p>
        </div>

        <div className="inputIcon">
            <EyeIcon className="h-7 text-yellow-200"/>
            <p className="text-xs sm:text-sm xl:text-base">Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;

import { VideoCameraIcon,EyeIcon, CameraIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";
// import InputModal from "./InputModal";

const InputBox = () => {
    const [imagepost, setImagepost] = useState(null)

  const sendpost = (e) => {
    e.preventDefault();
  };
  const handleFile = () => {

  }
  return (
    <div className="bg-white p-2  rounded-2xl shadow-md text-gray-500 font-medium">
      <div className="flex space-x-3 p-4 items-center">
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
          <button className="" onClick={sendpost} hidden type="submit">
            Post
          </button>
        </form>
        {imagepost && (
            <div className="flex flex-col transform hover:scale-105 cursor-pointer filter hover:brightness-110 transition duration-100">
                <img className="h-10 object-contain" src="https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg" alt=""/>
                <p className="text-xs text-red-400 text-center">Remove</p>
            </div>
        )}
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
            <VideoCameraIcon className="h-7 text-red-400" />
            <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div className="inputIcon">
        <CameraIcon className="h-7 text-blue-200"/>
            <p className="text-xs sm:text-sm xl:text-base">Images</p>
            <input onChange={handleFile} type="file"  hidden />
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

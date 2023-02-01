import Image from "next/image";
import React from "react";
import { HomeIcon, FlagIcon, UserGroupIcon,ShoppingCartIcon,PlayIcon, ChatBubbleBottomCenterIcon, BellAlertIcon, ChevronDoubleDownIcon, ViewColumnsIcon } from '@heroicons/react/24/solid'
import NavIcon from "./NavIcon";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession()
  return (
    <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* right sidebar?\ */}
      <div className="flex items-center">
        <Image
          src="https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg"
          width={40}
          height={40}
          layout="fixed"
          alt="logo"
        />

        <div className="flex ml-2 bg-gray-100 items-center rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" h-6   rounded-full cursor-pointer text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            className="hidden md:inline-flex flex-shrink text-sm outline-none text-gray-400  ml-4 bg-transparent"
            type="text"
            placeholder="search your item"
          />
        </div>
      </div>

      {/* middel part */}
          <div className="flex justify-center flex-grow">
            <div className="flex space-x-6 md:space-x-2 ">
              <NavIcon active ICon={HomeIcon} />
              <NavIcon ICon={FlagIcon} />
              <NavIcon ICon={PlayIcon} />
              <NavIcon ICon={ShoppingCartIcon} />
              <NavIcon ICon={UserGroupIcon} />
            
            </div>
          </div>
      {/* left sidebar */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
        className="rounded-full cursor-pointer"
        onClick={signOut}
        src={session?.user?.image}
        width={40}
        height={40}
        layout="fixed"
        alt="profile"
        />
        <p className="hidden lg:inline-flex text-sm whitespace-nowrap font-semibold pr-3">User</p>
        <ViewColumnsIcon className="icon" />
        <ChatBubbleBottomCenterIcon className="icon" />
        <BellAlertIcon className="icon" />
        <ChevronDoubleDownIcon className="icon" />
       
        
        
      </div>
    </header>
  );
};

export default Navbar;

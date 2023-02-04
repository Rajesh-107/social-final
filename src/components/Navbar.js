import Image from "next/image";
import React from "react";
import {
  HomeIcon,
  FlagIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  PlayIcon,
  ChatBubbleBottomCenterIcon,
  BellAlertIcon,
  ChevronDoubleDownIcon,
  ViewColumnsIcon,
  SpeakerWaveIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import NavIcon from "./NavIcon";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <header className="stickys z-50 bg-white flex items-center p-2 shadow-md">
      {/* right sidebar?\ */}
      <div className="flex items-center">
        <Image
          src="https://i.pinimg.com/originals/a4/9f/36/a49f360a6a2ed73a7d80e0d5f37dcf60.jpg"
          width={40}
          height={40}
          layout="fixed"
          alt="logo"
        />

        <div className="hidden md:inline-flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-6 text-gray-600" />
          <input
            className="hidden lg:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="search your item"
          />
        </div>
      </div>

      {/* middel part */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <NavIcon active ICon={HomeIcon} />
          <NavIcon ICon={FlagIcon} />
          <NavIcon ICon={PlayIcon} />
          <NavIcon ICon={ShoppingCartIcon} />
          <NavIcon ICon={UserGroupIcon} />
        </div>
      </div>
      {/* left sidebar */}
      <div className="flex items-center md:space-x-2 justify-end">
        <Image
          className="rounded-full cursor-pointer"
          onClick={signOut}
          src={session?.user?.image}
          width={40}
          height={40}
          layout="fixed"
          alt="profile"
        />
        <p className="hidden lg:inline-flex text-sm whitespace-nowrap font-semibold pr-3">
          User
        </p>
        <ViewColumnsIcon className="icon" />
        <ChatBubbleBottomCenterIcon className="icon" />
        <BellAlertIcon className="icon" />
        <ChevronDoubleDownIcon className="icon" />
      </div>
    </header>
  );
};

export default Navbar;

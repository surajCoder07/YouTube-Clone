import React from "react";
import { RxHamburgerMenu, RxAvatar } from "react-icons/rx";
import { GoSearch, GoBell } from "react-icons/go";
import { FaMicrophone } from "react-icons/fa";
import Logo from "../assets/YouTube.png";
import { useDispatch } from "react-redux";
import { toggleSlidebar } from "../utils/SlidebarSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center  justify-center gap-5 sm:justify-between  px-5 shadow-md py-1 sticky top-0 z-50 bg-white">
      <div className="flex items-center gap-5">
        <RxHamburgerMenu onClick={() => dispatch(toggleSlidebar())} />

        <div className="hidden md:flex">
          <img src={Logo} alt="youtube-logo" className=" w-24 object-cover" />
        </div>
      </div>
      <div className=" flex items-center md:w-[490px] sm:w-[300px] ">
        <input
          className="w-[90%] rounded-l-full p-1 h-9 pl-4 border border-gray-500 focus:border-blue-500 focus:outline-none "
          type="text"
          placeholder="Search..."
        />
        <div className="rounded-r-full  h-9 w-10 border border-gray-500 flex items-center justify-center hover:bg-gray-200">
          <button>
            <GoSearch />
          </button>
        </div>
        <div className="bg-gray-100 mx-2 h-9 w-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200">
          <FaMicrophone size={"1em"} />
        </div>
      </div>
      <div className=" gap-5 hidden lg:flex">
        <GoBell />
        <RxAvatar />
      </div>
    </div>
  );
};
export default Header;

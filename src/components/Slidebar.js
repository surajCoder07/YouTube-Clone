import React from "react";
import { GoHome, GoHistory } from "react-icons/go";
import { MdSubscriptions } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineVideoLibrary, MdOutlineMovie } from "react-icons/md";
import { PiClockClockwise } from "react-icons/pi";
import { useSelector } from "react-redux/";

const Slidebar = () => {
  const isSlidebarOpen = useSelector((store) => store.Slidebar.isSlidebarOpen);

  return (
    <div
      className={
        (isSlidebarOpen ? "flex-[0.4] " : "flex-0 w-0") +
        " duration-200  border  shadow-lg py-2 h-[100vh] sticky top-0   overflow-hidden  "
      }
    >
      <div className="px-4">
        <ul>
          <li className="flex items-center gap-4 my-2 px-4 py-2 cursor-default rounded-md hover:bg-gray-200">
            <GoHome />
            <span>Home</span>
          </li>
          <li className="flex items-center gap-4 my-2 px-4 py-2 cursor-default rounded-md hover:bg-gray-200">
            <AiOutlineYoutube />
            <span>Shorts</span>
          </li>
          <li className="flex items-center gap-4 my-2 px-4 py-2 cursor-default rounded-md hover:bg-gray-200">
            <MdSubscriptions />
            <span>Subscriptions</span>
          </li>
        </ul>
        <hr className="border-gray-200" />
      </div>
      <div className="px-4">
        <ul>
          <li className="flex items-center gap-4 my-2 px-4 py-2 cursor-default rounded-md hover:bg-gray-200">
            <MdOutlineVideoLibrary />
            <span>Library</span>
          </li>
          <li className="flex items-center gap-4 my-2 px-4 py-2 cursor-default rounded-md hover:bg-gray-200">
            <GoHistory />
            <span>History</span>
          </li>
          <li className="flex items-center gap-4 my-2 px-4 py-2 cursor-default rounded-md hover:bg-gray-200">
            <MdOutlineMovie />
            <span>Your Movies</span>
          </li>
          <li className="flex items-center gap-4 my-2 px-4 py-2 cursor-default rounded-md hover:bg-gray-200">
            <PiClockClockwise />
            <span>Watch later</span>
          </li>
        </ul>
      </div>
      <hr className="border-gray-200" />
    </div>
  );
};

export default Slidebar;

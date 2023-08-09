import React, { useEffect} from "react";
import { GoHome, GoHistory } from "react-icons/go";
import { MdSubscriptions } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineVideoLibrary, MdOutlineMovie } from "react-icons/md";
import { PiClockClockwise } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux/";
import { Link } from "react-router-dom//";
import { offSlidebar, onSlidebar } from "../utils/SlidebarSlice";

const Slidebar = () => {
  const isSlidebarOpen = useSelector((store) => store.Slidebar.isSlidebarOpen);
  const dispatch = useDispatch();
  const screenWidth = window.innerWidth;
  useEffect(() => {
    width();
  }, []);
  function width() {
    if (screenWidth < 650) {
      if (isSlidebarOpen) {
        console.log("on" + screenWidth);
        dispatch(offSlidebar());
      }
    } else if (screenWidth > 650) {
      if (!isSlidebarOpen) {
        dispatch(onSlidebar());
        console.log("off");
      }
    }
  }

  return (
    <div
      className={
        (isSlidebarOpen ? " flex-[0.4]   " : " flex-[0] translate-x-[-300px]") +
        "  duration-200  border  shadow-lg py-2 h-[100vh] sticky top-0  bottom-0 left-0   overflow-hidden  max-sm:absolute max-sm:top-11 bg-white z-40 "
      }
    >
      <div className="px-4">
        <ul>
          <Link to="/">
            <li className="flex items-center gap-4 my-2 px-4 py-2 cursor-default rounded-md hover:bg-gray-200">
              <GoHome />
              <span>Home</span>
            </li>
          </Link>
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

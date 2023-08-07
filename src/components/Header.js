import React, { useEffect, useState } from "react";
import { RxHamburgerMenu, RxAvatar } from "react-icons/rx";
import { GoSearch, GoBell } from "react-icons/go";
import { FaMicrophone } from "react-icons/fa";
import Logo from "../assets/YouTube.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleSlidebar } from "../utils/SlidebarSlice";
import SearchSuggestion from "./SearchSuggestion";
import { Yt_Search } from "../utils/constant";
import { addDataToSearch } from "../utils/SearchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
  const cacheData = useSelector((store) => store.SearchData);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheData[searchQuery]) {
        setSuggestions(cacheData[searchQuery]);
      } else {
        getData();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getData = async () => {
    const response = await fetch(Yt_Search + searchQuery);
    const data = await response.json();
    setSuggestions(data[1]);
    dispatch(
      addDataToSearch({
        [searchQuery]: data[1],
      })
    );
  };

  return (
    <div className="flex items-center  justify-center gap-5 sm:justify-between  px-5 shadow-md py-1 sticky top-0 z-50 bg-white">
      <div className="flex items-center gap-5">
        <RxHamburgerMenu onClick={() => dispatch(toggleSlidebar())} />

        <div className="hidden md:flex">
          <img src={Logo} alt="youtube-logo" className=" w-24 object-cover" />
        </div>
      </div>
      <div className=" flex items-center md:w-[490px] sm:w-[300px] relative ">
        <input
          className="w-[90%] rounded-l-full p-1 h-9 pl-4 border  border-gray-500 focus:border-blue-500 focus:outline-none "
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onBlur={()=>setIsSuggestionsVisible(false)}
          onFocus={() => setIsSuggestionsVisible(true)}
        />
        <div className="rounded-r-full  h-9 w-10 border border-gray-500 flex items-center justify-center hover:bg-gray-200">
          <button>
            <GoSearch />
          </button>
        </div>
        <div className="bg-gray-100 mx-2 h-9 w-10 rounded-full  flex items-center justify-center cursor-pointer hover:bg-gray-200">
          <FaMicrophone size={"1em"} />
        </div>
        {isSuggestionsVisible && (
          <div className="bg-white border-black shadow-lg bottom-0 absolute  top-12 h-fit w-[25rem]  rounded-md  ">
            {suggestions.map((suggestion, index) => {
              return <SearchSuggestion data={suggestion} key={index+Math.random()} />;
            })}
          </div>
        )}
      </div>
      <div className=" gap-5 hidden lg:flex">
        <GoBell />
        <RxAvatar />
      </div>
    </div>
  );
};
export default Header;

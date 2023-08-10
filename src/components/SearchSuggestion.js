import React from "react";
import { GoSearch } from "react-icons/go";

const SearchSuggestion = ( {data , setSearch ,setSuggestionVisible}) => {
  return (
    <div
    onClick={()=>{setSearch(data);setSuggestionVisible(false)}}
     className="flex  items-center gap-3 hover:bg-gray-100 px-2 py-1 cursor-default max-sm:text-xs ">
      <GoSearch size={"18px"} /> <span className="">{data}</span>
    </div>
  );
};

export default SearchSuggestion;

import React from "react";
import useFormatNumber from "../utils/useFormatNumber";
import useFormatDate from "../utils/useFormatDate";

const OtherVideoCard = ({ data }) => {
  const { snippet, statistics } = data;
  console.log(snippet, statistics);
  const views = useFormatNumber(statistics?.viewCount);
  const date = useFormatDate(snippet?.publishedAt);
  return (
    <div className="h-20 flex gap-2 ">
      <div className=" h-full ">
        <img
          src={snippet?.thumbnails?.medium?.url}
          alt="thumbnail"
          className="max-w-[160px] h-full object-cover rounded-sm"
        />
      </div>
      <div>
        <h1 className="text-sm font-medium leading-4">
          {" "}
          {snippet?.title.length > 60
            ? `${snippet?.title.substr(0, 40)}...`
            : snippet?.title}
        </h1>
        <div className="">
          <span className="text-xs  text-gray-600">
            {snippet?.channelTitle}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs  text-gray-600">{views}</span>
            <span className="w-1 h-1 rounded-full border border-gray-500 bg-gray-500"></span>
            <span className="text-[14px] text-gray-500  ">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherVideoCard;

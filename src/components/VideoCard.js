import React from "react";
import useFormatNumber from "../utils/useFormatNumber";
import useFormatDate from "../utils/useFormatDate";

const VideoCard = ({ data }) => {
  const { snippet, statistics } = data;
  console.log(data);
  const views = useFormatNumber(statistics.viewCount);
  const date = useFormatDate(snippet.publishedAt);

  return (
    <div className=" w-[260px]">
      <div>
        <img
          src={snippet.thumbnails.medium.url}
          alt="thumbnail"
          className="w-full  object-cover rounded-lg duration-300 hover:rounded-none"
        />
      </div>
      <div className="flex gap-2 p-2 ">
        <img
          src="https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png"
          alt="avatar"
          className="w-9 self-start"
        />
        <div>
          <h1 className="font-medium text-[15px]">
            {snippet.title.length > 80
              ? `${snippet.title.substr(0, 55)}...`
              : snippet.title}
          </h1>
          <span className="text-sm text-gray-500">{snippet.channelTitle}</span>
          <div className="flex items-center gap-5">
            <span className="text-[14px] text-gray-500 ">{views}</span>
            <span className="w-1 h-1 rounded-full border border-gray-500 bg-gray-500"></span>
            <span className="text-[14px] text-gray-500  ">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

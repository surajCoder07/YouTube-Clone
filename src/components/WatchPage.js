import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { offSlidebar } from "../utils/SlidebarSlice";
import { useParams } from "react-router-dom";
import useFormatNumber from "../utils/useFormatNumber";
import useFormatDate from "../utils/useFormatDate";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFat, PiDotsThreeOutlineFill } from "react-icons/pi";

const WatchPage = () => {
  const [videoData, setVideoData] = useState({});
  const [channelData, setChannelData] = useState({});
  const [isDescOpen, setIsDescOpen] = useState(false);
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const subscribers = useFormatNumber(channelData.statistics?.subscriberCount);
  const likes = useFormatNumber(videoData.statistics?.likeCount);
  const date = useFormatDate(videoData?.snippet?.publishedAt);
  const views = useFormatNumber(videoData?.statistics?.viewCount);

  useEffect(() => {
    dispatch(offSlidebar());

    const fetchData = async () => {
      const data = await getData();
      setVideoData(data);
      console.log(data);
      const channelData = await getChannelData(data?.snippet?.channelId);
      setChannelData(channelData);
    };

    fetchData();
  }, [videoId]);
  const getData = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=AIzaSyCqlREH-FeANxy7xeWJlS8d8YctVFoQPas`
      );
      const data = await response.json();
      console.log(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=AIzaSyCqlREH-FeANxy7xeWJlS8d8YctVFoQPas`
      );
      return data.items[0];
    } catch (error) {
      console.log(error);
    }
  };

  const getChannelData = async (id) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${id}&key=AIzaSyCqlREH-FeANxy7xeWJlS8d8YctVFoQPas`
      );
      const channelData = await response.json();
      return channelData?.items[0];
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" px-10 py-5  flex-[1.7] flex">
      <div className=" flex-[0.7]">
        <div>
          <iframe
            className="w-full  sm:[150px] h-[380px]"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="">
          <h1 className="font-medium text-lg py-1">
            {videoData?.snippet?.title}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                className="w-[40px] rounded-full"
                src={channelData?.snippet?.thumbnails?.medium?.url}
                alt="channel-img"
              />
              <div className="flex flex-col">
                <span className="font-medium">
                  {channelData?.snippet?.title}
                </span>
                <span className="text-xs text-gray-500 ">
                  {subscribers} subscribers
                </span>
              </div>
              <button className="bg-black text-white rounded-3xl flex items-center py-2 px-4 text-sm hover:bg-gray-800  ">
                subscribe
              </button>
            </div>
            <div className="flex items-center gap-4 px-3">
              <div className="flex">
                <button className="flex items-center gap-1 bg-gray-100  px-4 py-2 rounded-l-3xl hover:bg-gray-200">
                  <AiOutlineLike />
                  {likes}
                </button>
                <button className="flex items-center gap-1 bg-gray-100  px-2 py-1 rounded-l-3xl rotate-180 hover:bg-gray-200">
                  <AiOutlineLike />
                </button>
              </div>
              <button className="flex  items-center gap-1 bg-gray-100  px-4 py-2 rounded-3xl  hover:bg-gray-200 ">
                {" "}
                <PiShareFat />
                share
              </button>
              <button className="flex  items-center gap-1 bg-gray-100  px-2 py-2 rounded-full  hover:bg-gray-200 ">
                {" "}
                <PiDotsThreeOutlineFill />
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => setIsDescOpen(true)}
          className={`${
            isDescOpen ? "h-auto" : "h-20 "
          } overflow-hidden  mt-3 bg-gray-100 rounded-lg p-2 cursor-default relative`}
        >
          <span className="text-sm font-medium mx-1  ">{views} views</span>
          <span className="text-sm font-medium mx-1 ">{date}</span>
          <p className="text-gray-800 text-sm py-2">
            {videoData?.snippet?.description}
          </p>
          <span className="absolute right-5 bottom-0 text-sm bg-gray-100">
            {" "}
            {!isDescOpen ? "show more" : ""}
          </span>
        </div>
      </div>
      <div>other</div>
    </div>
  );
};

export default WatchPage;

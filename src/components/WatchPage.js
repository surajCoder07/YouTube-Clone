import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { offSlidebar } from "../utils/SlidebarSlice";
import useFormatNumber from "../utils/useFormatNumber";
import useFormatDate from "../utils/useFormatDate";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFat, PiDotsThreeOutlineFill } from "react-icons/pi";
import CommentContainer from "./CommentContainer";
import OtherVideos from "./OtherVideos";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import LiveChat from "./LiveChat";
import { changeTitle } from "../utils/helper";

const WatchPage = () => {
  const [videoData, setVideoData] = useState({});
  const [channelData, setChannelData] = useState({});
  const [isDescOpen, setIsDescOpen] = useState(false);
  const dispatch = useDispatch();
  const subscribers = useFormatNumber(channelData?.statistics?.subscriberCount);
  const likes = useFormatNumber(videoData?.statistics?.likeCount);
  const date = useFormatDate(videoData?.snippet?.publishedAt);
  const views = useFormatNumber(videoData?.statistics?.viewCount);
  const [videoId] = useSearchParams();
  const isSlidebarVisible = useSelector(
    (store) => store?.Slidebar.isSlidebarOpen
  );

  useEffect(() => {
    dispatch(offSlidebar());

    const getData = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId.get(
          "v"
        )}&key=AIzaSyCqlREH-FeANxy7xeWJlS8d8YctVFoQPas`
      );
      const data = await response.json();
      changeTitle(data?.items[0].snippet.title)

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
  

    const fetchData = async () => {
      const data = await getData();
      setVideoData(data);
      const channelData = await getChannelData(data?.snippet?.channelId);
      setChannelData(channelData);
    };

    fetchData();
  }, [videoId,dispatch]);
  



  return (
    <div className=" px-10 py-5   flex gap-5 max-sm:w-[100vw] flex-[1.5] max-sm:justify-center max-sm:px-2">
      <div className=" flex-[1]  ">
        <div>
          <iframe
            className=" w-full h-[450px] max-sm:h-[200px]"
            src={"https://www.youtube.com/embed/" + videoId.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="max-sm:text-xs">
          <h1 className="font-medium text-lg py-1">
            {videoData?.snippet?.title}
          </h1>
          <div className="flex flex-wrap items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-5">
            <div className="flex items-center gap-3 max-sm:justify-between max-sm:w-[100%]">
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
              </div>

              <button className="bg-black text-white rounded-3xl flex items-center py-2 px-4 text-sm hover:bg-gray-800  ">
                subscribe
              </button>
            </div>
            <div className="flex items-center gap-4 px-3  ">
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
        <div>
          <CommentContainer />
        </div>
      </div>
      {!isSlidebarVisible && (
        <div className="max-sm:hidden flex flex-col  flex-[0.5] h-[200vh]  sticky  bottom-0 top-0">
          <LiveChat />
          <OtherVideos />
        </div>
      )}
    </div>
  );
};

export default WatchPage;

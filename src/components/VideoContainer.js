import React, { useEffect } from "react";
import { Youtube_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../utils/VideosDataSlice";
import VideoCard from "./VideoCard";
import ShimmerVideoCard from "./ShimmerVideoCard";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videoData = useSelector((store) => store.VideoData.data);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await fetch(Youtube_API);
      const data = await response.json();
      dispatch(updateData(data.items));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-wrap gap-5 justify-between">
      {videoData === undefined || videoData.length === 0
        ? Array(10)
            .fill(" ")
            .map((arr, index) => {
              return <ShimmerVideoCard key={index} />;
            })
        : videoData.map((video) => <VideoCard key={video.id} data={video} />)}
    </div>
  );
};

export default VideoContainer;

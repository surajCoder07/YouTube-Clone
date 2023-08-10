import React, { useEffect } from "react";
import { Youtube_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../utils/VideosDataSlice";
import VideoCard from "./VideoCard";
import ShimmerVideoCard from "./ShimmerVideoCard";
import { BackupData } from "../utils/constant";
import { Link } from "react-router-dom";

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

      if (response.ok === false) {
        setTimeout(() => {
          dispatch(updateData(BackupData));
        }, 2000);
      } else {
        dispatch(updateData(data.items));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-wrap gap-5 justify-between max-sm:justify-center">
      {videoData === undefined || videoData.length === 0
        ? Array(10)
            .fill(" ")
            .map((arr, index) => {
              return <ShimmerVideoCard key={index} />;
            })
        : videoData.map((video) => (
          video.id.videoId?
            <Link to={`/watch?v=${video?.id.videoId}`} key={video.id}>
              <VideoCard data={video} />
              </Link>:<Link to={`/watch?v=${video?.id}`} key={video.id}>
              <VideoCard data={video} />
              </Link>
            
          ))}
    </div>
  );
};

export default VideoContainer;

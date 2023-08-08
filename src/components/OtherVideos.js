import React from "react";
import OtherVideoCard from "./OtherVideoCard";
import { Link } from "react-router-dom";
import { BackupData } from "../utils/constant";

const OtherVideos = () => {
  console.log(BackupData);
  return (
    <div className=" flex flex-col gap-4 h-screen sticky top-0  bottom-0 overflow-scroll scrollbar-hide">
      {BackupData.map((video) => {
        return (
          <Link to={"?v=" + video.id} key={video.id}>
            <OtherVideoCard data={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default OtherVideos;

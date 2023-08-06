import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div className="flex-[1.7] p-5">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

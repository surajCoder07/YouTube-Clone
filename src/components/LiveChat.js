import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChats } from "../utils/liveChatSlice";
import LiveComment from "./LiveComment";
import { getDetails } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatData = useSelector((store) => store.liveChat.chats);
  const [myComment, setMyComment] = useState("");

  useEffect(() => {
    const getLiveChats = () => {
      dispatch(
        addChats({
          name: getDetails()[0],
          comment: getDetails()[1],
        })
      );
    }; 

    const interval = setInterval(() => {
      getLiveChats();
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (myComment !== "") {
      dispatch(
        addChats({
          name: "Suraj Singh",
          comment: myComment,
        })
      );
      setMyComment("");
    }
  };
  return (
    <form
      className="bg-gray-100 p-1 rounded-md"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h1 className="font-medium text-lg  ">Live</h1>
      <div className="w-full h-[350px]  py-2 overflow-y-scroll flex flex-col-reverse scrollbar-hide ">
        {chatData.map((chat, index) => {
          return <LiveComment data={chat} key={index} />;
        })}
      </div>
      <div className="flex justify-between p-2">
        <input
          type="text"
          placeholder="comment"
          className="w-[80%] border-b-2  border-gray-300  p-1 bg-transparent focus:outline-none"
          value={myComment}
          onChange={(e) => setMyComment(e.target.value)}
        />
        <button className="py-1 px-2 bg-black text-white rounded-md hover:bg-gray-800">
          send
        </button>
      </div>
    </form>
  );
};

export default LiveChat;

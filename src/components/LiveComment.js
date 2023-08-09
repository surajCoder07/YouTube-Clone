import React from "react";

const LiveComment = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="flex items-center gap-2 border border-b-gray-300 p-1 m-[1px] rounded-sm cursor-default hover:bg-white ">
      <img
        src="https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png"
        alt="avatar"
        className="w-6 rounded-full"
      />

      <div>
        <span className="text-xs  font-medium text-gray-700">{name}</span>
        <span className="text-sm mx-2 ">{comment}</span>
      </div>
    </div>
  );
};

export default LiveComment;

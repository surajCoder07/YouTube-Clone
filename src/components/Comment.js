import React from "react";

const Comment = ({ name, comment }) => {
  return (
    <div className="flex items-start gap-2 max-sm:text-xs">
      <img
        src="https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png"
        alt="avatar"
        className="w-8 rounded-full"
      />
      <div>
        <h1 className="text-sm font-medium">{name}</h1>
        <p className="text-sm text-gray-700">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;

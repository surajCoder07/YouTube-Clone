import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <div className="">
      {comments.map((comment, index) => {
        return (
          <div className="p-2" key={Math.random()}>
            <Comment name={comment.name} comment={comment.comment} />
            <div
              className="px-5 border-l-2 border-gray-200"
              key={Math.random() + 3}
            >
              <CommentList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;

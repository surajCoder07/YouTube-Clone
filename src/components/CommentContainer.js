import React from "react";
import CommentList from "./CommentList";
import { comments } from "../utils/constant";

const CommentContainer = () => {
  return (
    <div className="mt-5">
      <h1 className="font-medium">{comments.length} Comments</h1>

      <CommentList comments={comments} />
    </div>
  );
};

export default CommentContainer;

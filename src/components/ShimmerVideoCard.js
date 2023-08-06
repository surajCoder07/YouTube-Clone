import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ShimmerVideoCard = () => {
  return (
    <div className="w-[260px]">
      <Skeleton
        width={"full"}
        height={"150px"}
        containerClassName="rounder-lg"
      />
      <div className="flex gap-3 py-3 ">
        <Skeleton circle height={"40px"} width={"40px"} />
        <div className="flex flex-col">
          <p>
            <Skeleton width={"200px"} height={"15px"} />
          </p>
          <p>
            <Skeleton width={"180px"} height={"15px"} />
          </p>
          <div className="mt-4 flex gap-5">
            <p>
              <Skeleton width={"60px"} height={"15px"} />
            </p>
            <p>
              <Skeleton width={"70px"} height={"15px"} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerVideoCard;

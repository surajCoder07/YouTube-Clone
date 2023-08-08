import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../utils/VideosDataSlice";

const Button = ({ data }) => {
  const dispatch = useDispatch();
  async function getData() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${data}&maxResults=50&regionCode=In&key=AIzaSyBsn82v8YtG6U10fFWMn0pZcG_DRwfYKhw`
    );
    const dataJson = await response.json();

    dispatch(updateData(dataJson.items));
    console.log(dataJson.items);
  }

  return (
    <button
      onClick={() => getData()}
      className=" rounded-md bg-gray-100 py-2 px-4 text-sm hover:bg-gray-200 focus:bg-black focus:text-gray-50"
    >
      {data}
    </button>
  );
};

export default Button;

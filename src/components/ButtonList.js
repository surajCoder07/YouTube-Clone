import React from "react";
import { Buttons } from "../utils/constant";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="pb-4 pt-1 flex gap-3 flex-wrap max-sm:justify-center">
      {Buttons.map((button, index) => {
        return <Button key={index} data={button} />;
      })}
    </div>
  );
};

export default ButtonList;

import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/YouTube.png";

const Header = () => {
  return (
    <div className="border border-black ">
      <div className="flex items-center gap-3">
        <RxHamburgerMenu className="" size={"1.5em"} />
        <div>
          <img
            src={Logo}
            alt="youtube-logo"
            className="h-7 w-28 object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;

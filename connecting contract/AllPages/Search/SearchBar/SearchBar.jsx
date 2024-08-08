import React from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

//internal import
import Style from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={Style.SearchBar}>
      <div className={Style.SearchBar_box}>
        <BsSearch className={Style.SearchBar_box_icon} />
        <input type="text" placeholder="Type NFT keyword..." />
        <BsArrowRight />
      </div>
    </div>
  );
};

export default SearchBar;

"use client";
import React, { useState, useEffect } from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

//internal import
import Style from "./SearchBar.module.css";

const SearchBar = ({ onHandleSearch, onClearSearch }) => {
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchItem), 1000);
    return () => clearTimeout(timer);
  }, [searchItem]);

  useEffect(() => {
    if (search) {
      onHandleSearch(search);
    } else {
      onClearSearch();
    }
  }, [search]);

  return (
    <div className={Style.SearchBar}>
      <div className={Style.SearchBar_box}>
        <BsSearch className={Style.SearchBar_box_icon} />
        <input
          type="text"
          placeholder="Type NFT keyword..."
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
        />
        <BsArrowRight />
      </div>
    </div>
  );
};

export default SearchBar;

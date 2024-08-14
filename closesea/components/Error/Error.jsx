"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

//internal import
import Style from "./Error.module.css";
import images from "../../img";

//import smart contract
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const Error = () => {
  const { error, setOpenError } = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.Error}>
      <div className={Style.Error_box}>
        <div className={Style.Error_box_info}>
          <Image
        //   src={}
            alt="err"
            width={200}
            height={200}
            className={Style.Error_box_info_img}
          />
        </div>
      </div>
    </div>
  );
};

export default Error;

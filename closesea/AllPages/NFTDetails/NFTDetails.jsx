import React from "react";

//internal import
import Style from "./NFTDetails.module.css";
import { NFTDescription, NFTTabs, NFTDetailsImg } from "./nftdetailsindex";

const NFTDetails = () => {
  return (
    <div className={Style.NFTDetails}>
      <div className={Style.NFTDetails_box}>
        <NFTDetailsImg />
        <NFTDescription />
      </div>
    </div>
  );
};

export default NFTDetails;

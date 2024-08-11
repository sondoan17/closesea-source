import React from "react";

//internal import
import Style from "./NFTDetails.module.css";
import { NFTDescription, NFTTabs, NFTDetailsImg } from "./nftdetailsindex";

const NFTDetails = ({ nft }) => {
  return (
    <div className={Style.NFTDetails}>
      <div className={Style.NFTDetails_box}>
        <NFTDetailsImg nft={nft} />
        <NFTDescription nft={nft} />
      </div>
    </div>
  );
};

export default NFTDetails;

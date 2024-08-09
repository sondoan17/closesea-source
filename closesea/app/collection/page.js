import React from "react";

//internal import
import Style from "../styles/Collection.module.css";
import images from "../../img";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "../../AllPages/Collection/collectionindex";
import { Slider, Brand } from "../../components/componentsindex";
import Filter from "../../components/Filter/Filter";

const Collection = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_4,
    images.nft_image_5,
    images.nft_image_6,
    images.nft_image_7,
    images.nft_image_8,
    images.nft_image_9,
  ];
  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default Collection;

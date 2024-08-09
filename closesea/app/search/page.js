import React from "react";

//internal import
import { SearchBar } from "../../AllPages/Search/searchindex";
import { Slider, Brand, Filter } from "../../components/componentsindex";
import { NFTCardTwo, Banner } from "../../AllPages/Collection/collectionindex";
import images from "../../img";

const Search = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_8,
    images.nft_image_6,
    images.nft_image_5,
    images.nft_image_9,
    images.nft_image_7,
    images.nft_image_4,
    images.nft_image_3,
  ];

  return (
    <>
      <Banner bannerImage={images.creatorbackground5} />
      <SearchBar />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </>
  );
};

export default Search;

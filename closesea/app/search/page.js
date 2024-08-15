"use client";
import React, { useState, useEffect, useContext } from "react";

//internal import
import { SearchBar } from "../../AllPages/Search/searchindex";
import {
  Slider,
  Brand,
  Filter,
  Loader,
} from "../../components/componentsindex";
import { NFTCardTwo, Banner } from "../../AllPages/Collection/collectionindex";
import images from "../../img";

//import smart contract
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const Search = () => {
  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    fetchNFTs()
      .then((item) => {
        setNfts(item.reverse());
        setNftsCopy(item);
      })
      .catch((err) => console.log(err));
  }, []);

  const onHandleSearch = (value) => {
    const filteredNFTs = nfts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredNFTs.length === 0) {
      setNfts(nftsCopy);
    } else {
      setNfts(filteredNFTs);
    }
  };
  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  };
  // const collectionArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_8,
  //   images.nft_image_6,
  //   images.nft_image_5,
  //   images.nft_image_9,
  //   images.nft_image_7,
  //   images.nft_image_4,
  //   images.nft_image_3,
  // ];

  return (
    <>
      <Banner bannerImage={images.creatorbackground5} />
      <SearchBar
        onHandleSearch={onHandleSearch}
        onClearSearch={onClearSearch}
      />
      <Filter />
      {nfts.length == 0 ? <Loader /> : <NFTCardTwo NFTData={nfts} />}

      <Slider />
      <Brand />
    </>
  );
};

export default Search;

"use client";
import React, { useState, useEffect, useContext } from "react";
import "./styles/globals.css";
import Style from "./page.module.css";

import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  FollowerTab,
  AudioLive,
  Slider,
  Brand,
  Video,
  Loader,
} from "../components/componentsindex";
import { getTopCreator } from "../AllPages/TopCreator/TopCreator";
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const HomePage = () => {
  const { checkIfWalletConnected } = useContext(NFTMarketplaceContext);
  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  //creator list
  const creators = getTopCreator(nfts);

  useEffect(() => {
    fetchNFTs()
      .then((item) => {
        setNfts(item.reverse());
        setNftsCopy(item);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <div className={Style.homePage}>
        <HeroSection />
        <Service />
        <BigNFTSlider />
        <Title
          heading="Audio Collection"
          paragraph="Discover the most outstanding NFTs in all topics of lifes"
        />
        <AudioLive />
        {creators.length == 0 ? (
          <Loader />
        ) : (
          <FollowerTab TopCreators={creators} />
        )}

        <Slider />
        <Collection />
        <Title
          heading="Featured NFTs"
          paragraph="Discover the most outstanding NFTs in all topics of lifes"
        />
        <Filter />
        {nfts.length == 0 ? <Loader /> : <NFTCard NFTData={nfts} />}
        <Title
          heading="Browse by category"
          paragraph="Explore the NFTs in the most featured categories."
        />
        <Category />
        <Subscribe />
        <Brand />
        <Video />
      </div>
    </div>
  );
};

export default HomePage;

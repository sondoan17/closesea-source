import React from "react";
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
} from "../components/componentsindex";

const HomePage = () => (
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
      <FollowerTab />

      <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of lifes"
      />
      <Filter />
      <NFTCard />
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

export default HomePage;

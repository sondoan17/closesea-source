"use client";
import React, { useState, useEffect } from "react";

//internal import
import Style from "../styles/Author.module.css";
import { Banner } from "../../AllPages/Collection/collectionindex";
import {
  AuthorProfileCard,
  AuthorTaps,
  AuthorNFTCardBox,
} from "../../AllPages/Author/authorindex";
import { Brand, Title } from "../../components/componentsindex";
import FollowerTabCard from "../../components/FollowerTab/FollowerTabCard/FollowerTabCard";
import images from "../../img";

const author = () => {
  
  const popularArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
    images.user6,
    images.user7,
    images.user8,
  ];
  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);
  return (
    <div className={Style.banner}>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorProfileCard />
      <AuthorTaps
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />
      <AuthorNFTCardBox
        collectiables={collectiables}
        created={created}
        like={like}
        follower={follower}
        following={following}
      />
      <Title
        heading="Popular Creator"
        paragraph="Click on music icon and enjoy NFT music"
      />

      <Brand />
    </div>
  );
};

export default author;

import React, { useState } from "react";

//internal import
import Style from "./AuthorNFTCardBox.module.css";
import images from "../../../img";
import { NFTCardTwo } from "../../Collection/collectionindex";
import FollowerTabCard from "../../../components/FollowerTab/FollowerTabCard/FollowerTabCard";

const AuthorNFTCardBox = ({
  collectiables,
  created,
  like,
  follower,
  following,
  nfts,
  myNFTs,
}) => {
  const collectiablesArray = [
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
  const createdArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,

    images.nft_image_7,
    images.nft_image_8,
  ];
  const likeArray = [
    images.nft_image_1,
    images.nft_image_5,
    images.nft_image_6,
    images.nft_image_7,
    images.nft_image_8,
    images.nft_image_9,
  ];
  const followerArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "0xfys7f89wehfd9s8hh89",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      seller: "0xfys7f89wehfd9s8hh89",
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "0xfys7f89wehfd9s8hh89",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "0xfys7f89wehfd9s8hh89",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "0xfys7f89wehfd9s8hh89",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "0xfys7f89wehfd9s8hh89",
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
      seller: "0xfys7f89wehfd9s8hh89",
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
      seller: "0xfys7f89wehfd9s8hh89",
    },
  ];
  const followingArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "0xfys7f89wehfd9s8hh89",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      seller: "0xfys7f89wehfd9s8hh89",
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "0xfys7f89wehfd9s8hh89",
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
      seller: "0xfys7f89wehfd9s8hh89",
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
      seller: "0xfys7f89wehfd9s8hh89",
    },
  ];
  return (
    <div className={Style.AuthorNFTCardBox}>
      {collectiables && <NFTCardTwo NFTData={nfts} />}
      {created && <NFTCardTwo NFTData={myNFTs} />}
      {like && <NFTCardTwo NFTData={nfts} />}
      {follower && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followerArray.map((el, i) => (
            <FollowerTabCard el={el} i={i} key={i + 1} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followingArray.map((el, i) => (
            <FollowerTabCard el={el} i={i} key={i + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorNFTCardBox;

"use client";
import React, { useState, useEffect } from "react";
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri";

//internal import
import Style from "./FollowerTab.module.css";
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard";
import images from "../../img";

const FollowerTab = ({ TopCreators }) => {
  // const cardArray = [
  //   {
  //     background: images.creatorbackground1,
  //     user: images.user1,
  //   },
  //   {
  //     background: images.creatorbackground2,
  //     user: images.user2,
  //   },
  //   {
  //     background: images.creatorbackground3,
  //     user: images.user3,
  //   },
  //   {
  //     background: images.creatorbackground4,
  //     user: images.user4,
  //   },
  //   {
  //     background: images.creatorbackground5,
  //     user: images.user5,
  //   },
  //   {
  //     background: images.creatorbackground6,
  //     user: images.user6,
  //   },
  //   {
  //     background: images.creatorbackground7,
  //     user: images.user7,
  //   },
  //   {
  //     background: images.creatorbackground8,
  //     user: images.user8,
  //   },
  // ];
  const followingArray = [
    {
      background: images.creatorbackground7,
      user: images.user7,
      seller: "0x323ir2uihd09e09udfda0",
    },

    {
      background: images.creatorbackground2,
      user: images.user2,
      seller: "0x323ir2uihd09e09udfda0",
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "0x323ir2uihd09e09udfda0",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "0x323ir2uihd09e09udfda0",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "0x323ir2uihd09e09udfda0",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "0x323ir2uihd09e09udfda0",
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
      seller: "0x323ir2uihd09e09udfda0",
    },
  ];
  const newsArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "0x323ir2uihd09e09udfda0",
    },

    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "0x323ir2uihd09e09udfda0",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "0x323ir2uihd09e09udfda0",
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
      seller: "0x323ir2uihd09e09udfda0",
    },

    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "0x323ir2uihd09e09udfda0",
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
      seller: "0x323ir2uihd09e09udfda0",
    },
  ];

  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };
  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };
  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };

  return (
    <div className={Style.followerTab}>
      <div className={Style.followerTab_title}>
        <h2>Top Creator List</h2>
        <div className={Style.followerTab_tabs}>
          <div className={Style.followerTab_tabs_btn}>
            <button onClick={() => openPopular()}>
              <RiUserFollowFill /> Popular
            </button>
            <button onClick={() => openFollower()}>
              <RiUserFollowFill /> Following
            </button>
            <button onClick={() => openNews()}>
              <RiAwardLine /> New
            </button>
          </div>
        </div>
      </div>

      {popular && (
        <div className={Style.followerTab_box}>
          {TopCreators.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.followerTab_box}>
          {followingArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
      {news && (
        <div className={Style.followerTab_box}>
          {newsArray.map((el, i) => (
            <FollowerTabCard key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      <div className={Style.followerTab_member}>
        <div className={Style.followerTab_member_box}>
          <a href="#">Show me more</a>
          <a href="#">Become author</a>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;

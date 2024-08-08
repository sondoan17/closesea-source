"use client";
import React, { useState, useEffect } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";

//internal import
import Style from "./Collection.module.css";
import DaysComponents from "./DaysComponents/DaysComponents";
import images from "../../img";

const Collection = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const cardArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      username: "sondoan17",
      price: "1432",
      items: {
        item1: images.creatorbackground2,
        item2: images.creatorbackground4,
        item3: images.creatorbackground7,
      },
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      username: "Robert0",
      price: "532",
      items: {
        item1: images.creatorbackground1,
        item2: images.creatorbackground6,
        item3: images.creatorbackground9,
      },
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      username: "Jenny2",
      price: "5432",
      items: {
        item1: images.creatorbackground2,
        item2: images.creatorbackground6,
        item3: images.creatorbackground10,
      },
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      username: "Just4Fun",
      price: "4324",
      items: {
        item1: images.creatorbackground2,
        item2: images.creatorbackground1,
        item3: images.creatorbackground5,
      },
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      username: "BF1300",
      price: "786",
      items: {
        item1: images.creatorbackground3,
        item2: images.creatorbackground4,
        item3: images.creatorbackground10,
      },
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      username: "Glen",
      price: "9689",
      items: {
        item1: images.creatorbackground2,
        item2: images.creatorbackground6,
        item3: images.creatorbackground9,
      },
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
      username: "Kakavasha",
      price: "5231",
      items: {
        item1: images.creatorbackground5,
        item2: images.creatorbackground3,
        item3: images.creatorbackground1,
      },
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
      username: "Losata",
      price: "1897",
      items: {
        item1: images.creatorbackground6,
        item2: images.creatorbackground7,
        item3: images.creatorbackground8,
      },
    },
  ];
  const followingArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      username: "Client",
      price: "5312",
      items: {
        item1: images.creatorbackground1,
        item2: images.creatorbackground3,
        item3: images.creatorbackground9,
      },
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      username: "WWKWWK",
      price: "722",
      items: {
        item1: images.creatorbackground2,
        item2: images.creatorbackground1,
        item3: images.creatorbackground6,
      },
    },
    {
      background: images.creatorbackground5,
      user: images.user3,
      username: "HungryShark",
      price: "784",
      items: {
        item1: images.creatorbackground2,
        item2: images.creatorbackground5,
        item3: images.creatorbackground3,
      },
    },
    {
      background: images.creatorbackground3,
      user: images.user2,
      username: "BooleaN",
      price: "312",
      items: {
        item1: images.creatorbackground6,
        item2: images.creatorbackground4,
        item3: images.creatorbackground8,
      },
    },
  ];
  const newArray = [
    {
      background: images.creatorbackground6,
      user: images.user1,
      username: "ViaeTal",
      price: "878",
      items: {
        item1: images.creatorbackground1,
        item2: images.creatorbackground6,
        item3: images.creatorbackground10,
      },
    },
    {
      background: images.creatorbackground3,
      user: images.user2,
      username: "ElenTszk",
      price: "623",
      items: {
        item1: images.creatorbackground3,
        item2: images.creatorbackground4,
        item3: images.creatorbackground8,
      },
    },
    {
      background: images.creatorbackground2,
      user: images.user3,
      username: "Kim01",
      price: "5236",
      items: {
        item1: images.creatorbackground7,
        item2: images.creatorbackground5,
        item3: images.creatorbackground6,
      },
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      username: "Yassy12",
      price: "4532",
      items: {
        item1: images.creatorbackground3,
        item2: images.creatorbackground4,
        item3: images.creatorbackground2,
      },
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      username: "Arsene",
      price: "9532",
      items: {
        item1: images.creatorbackground1,
        item2: images.creatorbackground4,
        item3: images.creatorbackground4,
      },
    },
  ];

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
    <div className={Style.collection}>
      <div className={Style.collection_title}>
        <h2>Top Collection</h2>
        <div className={Style.collection_collections}>
          <div className={Style.collection_collections_btn}>
            <button onClick={() => openPopular()}>
              <BsFillAlarmFill /> 24 hours
            </button>
            <button onClick={() => openFollower()}>
              <BsCalendar3 /> 7 days
            </button>
            <button onClick={() => openNews()}>
              <BsFillCalendarDateFill /> 30 days
            </button>
          </div>
        </div>
      </div>
      {popular && (
        <div className={Style.collection_box}>
          {cardArray.map((el, i) => (
            <DaysComponents key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.collection_box}>
          {followingArray.map((el, i) => (
            <DaysComponents key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
      {news && (
        <div className={Style.collection_box}>
          {newArray.map((el, i) => (
            <DaysComponents key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;

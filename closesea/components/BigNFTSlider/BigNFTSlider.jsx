"use client";
import React, { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";

//internal import
import Style from "./BigNFTSlider.module.css";
import images from "../../img";
import Button from "../Button/Button";

const BigNFTSlider = () => {
  const [idNumber, setIdNumber] = useState(1);
  const sliderData = [
    {
      title: "NFT 1",
      id: 1,
      name: "sondoan17",
      collection: "Basic",
      price: "111 ETH",
      like: 120,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 12,
        hours: 8,
        minutes: 33,
        seconds: 41,
      },
    },
    {
      title: "NFT 2",
      id: 2,
      name: "sondoan17",
      collection: "Persona",
      price: "223 ETH",
      like: 120,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: {
        days: 12,
        hours: 23,
        minutes: 32,
        seconds: 15,
      },
    },
    {
      title: "NFT 3",
      id: 3,
      name: "sondoan17",
      collection: "Logarith",
      price: "412 ETH",
      like: 120,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: {
        days: 14,
        hours: 13,
        minutes: 12,
        seconds: 35,
      },
    },
    {
      title: "NFT 4",
      id: 4,
      name: "sondoan17",
      collection: "Changer",
      price: "5 ETH",
      like: 120,
      image: images.user4,
      nftImage: images.nft_image_4,
      time: {
        days: 19,
        hours: 19,
        minutes: 22,
        seconds: 35,
      },
    },
  ];
  //increase func
  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    } else {
      setIdNumber(0);
    }
  }, [idNumber, sliderData.length]);
  //decrease func
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    } else {
      setIdNumber(sliderData.length - 1);
    }
  }, [idNumber]);

  return (
    <div className={Style.BigNFTSlider}>
      <div className={Style.BigNFTSlider_box}>
        <div className={Style.BigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.BigNFTSlider_box_left_creator}>
            <div className={Style.BigNFTSlider_box_left_creator_profile}>
              <Image
                className={Style.BigNFTSlider_box_left_creator_profile_img}
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />
              <div className={Style.BigNFTSlider_box_left_creator_profile_info}>
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className={Style.BigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.BigNFTSlider_box_left_creator_collection_icon}
              />
              <div
                className={Style.BigNFTSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          <div className={Style.BigNFTSlider_box_left_bidding}>
            <div className={Style.BigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price} <span>~ $1543,45</span>
              </p>
            </div>
            <p className={Style.BigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={Style.BigNFTSlider_box_left_bidding_box_icon}
              />
              <span>Auction ending in</span>
            </p>
            <div className={Style.BigNFTSlider_box_left_bidding_box_timer}>
              <div
                className={Style.BigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>
              <div
                className={Style.BigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>
              <div
                className={Style.BigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>mins</span>
              </div>
              <div
                className={Style.BigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>secs</span>
              </div>
            </div>

            <div className={Style.BigNFTSlider_box_left_button}>
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>
          <div className={Style.BigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLine
              className={Style.BigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className={Style.BigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>
        <div className={Style.BigNFTSlider_box_right}>
          <div className={Style.BigNFTSlider_box_right_box}>
            <Image
              className={Style.BigNFTSlider_box_right_box_img}
              src={sliderData[idNumber].nftImage}
              alt="nft image"
              width={300}
              height={400}
              // layout="responsive"
            />
            <div className={Style.BigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSlider;

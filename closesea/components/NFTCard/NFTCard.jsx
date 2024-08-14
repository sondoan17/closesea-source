"use client";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
//internal import
import Style from "./NFTCard.module.css";
import images from "../../img";

const NFTCard = ({ NFTData }) => {
  // const featureArray = [
  //   {
  //     name: "Kolar",
  //     id: "4181",
  //     price: "3.03",
  //     img: images.nft_image_1,
  //   },
  //   {
  //     name: "Gideon",
  //     id: "1246",
  //     price: "9.54",
  //     img: images.nft_image_2,
  //   },
  //   {
  //     name: "Viper",
  //     id: "5621",
  //     price: "1.23",
  //     img: images.nft_image_3,
  //   },
  //   {
  //     name: "Clause",
  //     id: "5235",
  //     price: "6.23",
  //     img: images.nft_image_4,
  //   },
  //   {
  //     name: "JPEm",
  //     id: "4985",
  //     price: "5.036",
  //     img: images.nft_image_5,
  //   },
  //   {
  //     name: "Plucs",
  //     id: "9342",
  //     price: "2.563",
  //     img: images.nft_image_6,
  //   },
  //   {
  //     name: "Yinling",
  //     id: "7851",
  //     price: "2.35",
  //     img: images.nft_image_7,
  //   },
  //   {
  //     name: "JameeF",
  //     id: "9264",
  //     price: "4.364",
  //     img: images.nft_image_8,
  //   },
  //   {
  //     name: "RafePie",
  //     id: "4623",
  //     price: "1.99",
  //     img: images.nft_image_9,
  //   },
  // ];
  const [like, setLike] = useState(true);
  const likeNFT = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };
  return (
    <div className={Style.NFTCard}>
      {NFTData.map((el, i) => (
        <Link href={{ pathname: "nft-details", query: el }}>
          <div className={Style.NFTCard_box} key={i + 1}>
            <div className={Style.NFTCard_box_img}>
              <Image
                src={el.image}
                alt="nft-img"
                className={Style.NFTCard_box_img_img}
                layout="responsive"
                width={200}
                height={200}
              />
            </div>
            <div className={Style.NFTCard_box_update}>
              <div className={Style.NFTCard_box_update_left}>
                <div
                  className={Style.NFTCard_box_update_left_like}
                  onClick={() => likeNFT()}
                >
                  {like ? (
                    <AiOutlineHeart />
                  ) : (
                    <AiFillHeart
                      className={Style.NFTCard_box_update_left_like_icon}
                    />
                  )}
                  {""} 22
                </div>
              </div>
              <div className={Style.NFTCard_box_update_right}>
                <div className={Style.NFTCard_box_update_right_info}>
                  <small>Remaining time</small>
                  <p>3h : 15m : 20s</p>
                </div>
              </div>
            </div>
            <div className={Style.NFTCard_box_update_details}>
              <div className={Style.NFTCard_box_update_details_price}>
                <div className={Style.NFTCard_box_update_details_price_box}>
                  <h4>
                    {el.name} #{el.tokenId}
                  </h4>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_box}
                  >
                    <div
                      className={Style.NFTCard_box_update_details_price_box_bid}
                    >
                      <small>Current Bid</small>
                      <p>{el.price} ETH</p>
                    </div>
                    <div
                      className={
                        Style.NFTCard_box_update_details_price_box_stock
                      }
                    >
                      <small>61 left</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Style.NFTCard_box_update_details_category}>
                <BsImage />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCard;

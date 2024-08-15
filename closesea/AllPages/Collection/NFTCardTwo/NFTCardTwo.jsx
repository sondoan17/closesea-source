"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import Link from "next/link";

//internal import
import Style from "./NFTCardTwo.module.css";
import images from "../../../img";
import { LikeProfile } from "../../../components/componentsindex";

const NFTCardTwo = ({ NFTData }) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(30);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc(likeInc + 1);
    } else {
      setLike(false);
      setLikeInc(likeInc - 1);
    }
  };

  return (
    <div className={Style.NFTCardTwo}>
      {NFTData.map((el, i) => (
        <Link href={{ pathname: "/nft-details", query: el }} key={i}>
          <div className={Style.NFTCardTwo_box} key={i + 1}>
            <div className={Style.NFTCardTwo_box_like}>
              <div className={Style.NFTCardTwo_box_like_box}>
                <div className={Style.NFTCardTwo_box_like_box_box}>
                  <BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
                  <p onClick={() => likeNFT()}>
                    {like ? <AiFillHeart /> : <AiOutlineHeart />}
                    {""}
                    <span>{likeInc + 1}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={Style.NFTCardTwo_box_img}>
              <Image
                src={el.image || images.nft_image_1}
                alt="nft img"
                layout="responsive"
                className={Style.NFTCardTwo_box_img_img}
                width={250}
                height={200}
              />
            </div>
            <div className={Style.NFTCardTwo_box_info}>
              <div className={Style.NFTCardTwo_box_info_left}>
                <LikeProfile />
                <p>{el.name || "Demo NFT"}</p>
              </div>
              <small>4{i + 2}</small>
            </div>
            <div className={Style.NFTCardTwo_box_price}>
              <div className={Style.NFTCardTwo_box_price_box}>
                <small>Current Bid</small>
                <p>{el.price || "5"} ETH</p>
              </div>
              <p className={Style.NFTCardTwo_box_price_stock}>
                <MdTimer /> <span>{i + 1} hours left</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCardTwo;

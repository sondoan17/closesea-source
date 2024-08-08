"use client";
import React, { useState } from "react";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";
import Image from "next/image";

//internal import
import Style from "./AudioCardSmall.module.css";
import images from "../../../img";
import LikeProfile from "../../LikeProfile/LikeProfile";

const AudioCardSmall = () => {
  const [play, setPlay] = useState(false);
  const playMusic = () => {
    if (!play) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  };

  return (
    <div className={Style.audioPlayer}>
      <div className={Style.audioPlayer_box}>
        <Image
          src={images.creatorbackground1}
          alt="music"
          width={100}
          height={100}
          className={Style.audioPlayer_box_img}
          layout="responsive"
        />
        <div className={Style.audioPlayer_box_info}>
          <h4>Jakata #3123</h4>
          <div className={Style.audioPlayer_box_info_box}>
            <div className={Style.audioPlayer_box_info_box_price}>
              <small>Price</small>
              <p>1.00 ETH</p>
            </div>
            <LikeProfile />
          </div>
        </div>

        <div
          className={Style.audioPlayer_box_playBtn}
          onClick={() => playMusic()}
        >
          {play ? <TbPlayerPlay /> : <TbPlayerPause />}
        </div>
      </div>
    </div>
  );
};

export default AudioCardSmall;

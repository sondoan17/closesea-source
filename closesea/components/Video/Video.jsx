import React from "react";
import Image from "next/image";
import Iframe from "react-iframe";

//internal import
import Style from "./Video.module.css";
import images from "../../img";

const Video = () => {
  return (
    <div className={Style.video}>
      <div className={Style.video_box}>
        <h1>
          <span>🎥</span> The Videos
        </h1>
        <p>
          Check out our hottest video. View more and share more new perspectives
          on just about any topic. Everyone's welcome.
        </p>
        <div className={Style.video_box_frame}>
          <div className={Style.video_box_frame_left}>
            <Iframe
              className={Style.video_box_frame_left_video}
              src="https://www.youtube.com/embed/0tZFQs7qBfQ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></Iframe>
          </div>
          <div className={Style.video_box_frame_right}>Hey</div>
        </div>
      </div>
    </div>
  );
};

export default Video;

import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";

//internal import
import Style from "./Subscribe.module.css";
import images from "../../img";

const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>Never miss a drop</h2>
          <p>
            Subscribe to our exclusive drop list and be the first to know about
            upcoming drops
          </p>
          <div className={Style.subscribe_box_left_box}>
            <span>01</span>
            <small>Get more discount</small>
          </div>

          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Get premium magazines</small>
          </div>

          <div className={Style.subscribe_box_left_input}>
            <input type="email" placeholder="Enter your email" name="" id="" />
            <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
          </div>
        </div>
        <div className={Style.subscribe_box_right}>
          <Image
            className={Style.subscribe_box_right_img}
            src={images.update}
            alt="get update"
            height={400}
            width={600}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

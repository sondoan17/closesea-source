import React from "react";
import Image from "next/image";
//internal import
import Style from "./Banner.module.css";

const Banner = ({ bannerImage }) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <Image
          className={Style.banner_img_img}
          src={bannerImage}
          alt="background"
          layout="responsive"
        />
      </div>
      <div className={Style.banner_img_mobile}>
        <div className={Style.banner_img_mobile_img}>
          <Image
            className={Style.banner_img_mobile_img_img}
            src={bannerImage}
            alt="background"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

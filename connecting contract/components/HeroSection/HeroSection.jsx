"use client";
import React from "react";
import Image from "next/image";

//internal import

import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, Collect, and Thrive with our NFT Marketplace.</h1>
          <p>
            Discover unique digital assets, collect the ones that inspire you,
            and thrive as you build your portfolio and connect with a vibrant
            community.
          </p>
          <Button btnName="Get Started" />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={300}
            className={Style.heroSection_box_right_image}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

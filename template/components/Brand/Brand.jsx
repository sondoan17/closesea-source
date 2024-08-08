"use client";
import React from "react";
import Image from "next/image";
//internal import
import Style from "./Brand.module.css";
import images from "../../img";
import { Button } from "../componentsindex";

const Brand = () => {
  return (
    <div className={Style.brand}>
      <div className={Style.brand_box}>
        <div className={Style.brand_box_left}>
          <Image src={images.logo} alt="brand logo" width={100} height={100} />
          <h1>Earn free crypto with CloseSea</h1>
          <p>A creative agency that lead and inspire</p>

          <div className={Style.brand_box_left_btn}>
            <Button btnName="Create" handleClick={() => {}} />
            <Button btnName="Discover" handleClick={() => {}} />
          </div>
        </div>
        <div className={Style.brand_box_right}>
          <Image
            src={images.earn}
            alt="brand logo"
            width={800}
            height={600}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Brand;

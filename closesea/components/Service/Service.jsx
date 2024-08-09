"use-client";
import React from "react";
import Image from "next/image";
//internal import
import Style from "./Service.module.css";
import images from "../../img";
const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="service1"
            width={100}
            height={100}
          />
          <div className={Style.service_box_item_step}>
            <span>Step 1</span>
            <h3>Filter and Discover</h3>
            <p>Discover NFT Market</p>
          </div>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt="service2"
            width={100}
            height={100}
          />
          <div className={Style.service_box_item_step}>
            <span>Step 2</span>
            <h3>Connect Wallet</h3>
            <p>Connect your crypto wallet to send and receive NFTs</p>
          </div>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt="service3"
            width={100}
            height={100}
          />
          <div className={Style.service_box_item_step}>
            <span>Step 3</span>
            <h3>Create Order</h3>
            <p>Use your crypto currencies to buy NFTs or vice versa</p>
          </div>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service4}
            alt="service4"
            width={100}
            height={100}
          />
          <div className={Style.service_box_item_step}>
            <span>Step 4</span>
            <h3>Earn Profit</h3>
            <p>Earn money from trading NFTs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

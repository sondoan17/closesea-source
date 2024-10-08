"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

//internal import
import Style from "../styles/ConnectWallet.module.css";
import images from "../../img";

//import smart contract
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const connectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const providerArray = [
    {
      provider: images.provider1,
      name: "Metamask",
    },
    {
      provider: images.provider2,
      name: "Trust Wallet",
    },
    {
      provider: images.provider3,
      name: "Wallet Connect",
    },
    {
      provider: images.provider4,
      name: "Safepal",
    },
  ];
  const { currentAccount, connectWallet } = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.connectWallet}>
      <div className={Style.connectWallet_box}>
        <h1>Connect your wallet</h1>
        <p className={Style.connectWallet_box_para}>
          Connect with one of our available wallet providers or create a new one
        </p>
        <div className={Style.connectWallet_box_provider}>
          {providerArray.map((el, i) => (
            <div
              className={`${Style.connectWallet_box_provider_item} ${
                activeBtn == i + 1 ? Style.active : ""
              }`}
              key={i + 1}
              onClick={() => (setActiveBtn(i + 1), connectWallet())}
            >
              <Image
                src={el.provider}
                alt={el.provider}
                width={50}
                height={50}
                className={Style.connectWallet_box_provider_item_img}
              />
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default connectWallet;

import React from "react";
import Link from "next/link";
//internal import
import Style from "./Discover.module.css";

const Discover = () => {
  // Discover Navigation menu
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },

    {
      name: "NFT Detail",
      link: "nft-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },

    {
      name: "Upload NFT",
      link: "upload-nft",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
  ];
  return (
    <div className={Style.box}>
      {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;

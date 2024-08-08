"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

// internal import
import Style from "./SideBar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";
import { FaSkating } from "react-icons/fa";

const SideBar = ({ setOpenSideMenu }) => {
  // use state
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

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
  // help center
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
  ];
  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };
  return (
    <div className={Style.sideBar}>
      <GrClose
        className={Style.sideBar_closeBtn}
        onClick={() => closeSideBar()}
      />
      <div className={Style.sideBar_box}>
        <Image src={images.logo} alt="logo" width={150} height={150} />
        <p>
          CloseSea is a leading NFT marketplace that provides a secure platform
          for buying, selling, and trading a wide range of digital assets.
          Launched in 2024, the platform offers users advanced features like
          robust search tools, seamless payments, and a thriving community of
          creators and collectors.
        </p>
        <div className={Style.sideBar_social}>
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialYoutube />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
        </div>
      </div>
      <div className={Style.sideBar_menu}>
        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={() => openDiscoverMenu()}
          >
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {openDiscover && (
            <div className={Style.sideBar_discover}>
              {discover.map((el, i) => (
                <p key={i + 1} onClick={() => closeSideBar()}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={() => openHelpMenu()}
          >
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {openHelp && (
            <div className={Style.sideBar_discover}>
              {helpCenter.map((el, i) => (
                <p key={i + 1} onClick={() => closeSideBar()}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={Style.sideBar_button}>
        <Button btnName="Create New NFT" handleClick={() => {}} />
        <Button btnName="Connect Wallet" handleClick={() => {}} />
      </div>
    </div>
  );
};

export default SideBar;

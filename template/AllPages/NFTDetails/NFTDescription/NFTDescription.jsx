"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialYoutube,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";

//internal import
import Style from "./NFTDescription.module.css";
import images from "../../../img";
import { Button } from "../../../components/componentsindex";
import { NFTTabs } from "../nftdetailsindex";

const NFTDescription = () => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provenance, setProvenance] = useState(false);
  const [owner, setOwner] = useState(false);

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];
  const provenanceArray = [
    images.user6,
    images.user7,
    images.user8,
    images.user9,
    images.user10,
  ];
  const ownerArray = [
    images.user4,
    images.user2,
    images.user3,
    images.user1,
    images.user10,
  ];

  const openSocial = () => {
    if (!social) {
      setSocial(true);
      setNFTMenu(false);
    } else {
      setSocial(false);
    }
  };
  const openNFTMenu = () => {
    if (!NFTMenu) {
      setNFTMenu(true);
      setSocial(false);
    } else {
      setNFTMenu(false);
    }
  };

  const openTabs = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "History") {
      setHistory(true);
      setProvenance(false);
      setOwner(false);
    } else if (btnText == "Provenance") {
      setHistory(false);
      setProvenance(true);
      setOwner(false);
    }
  };
  const openOwner = () => {
    if (!owner) {
      setOwner(true);
      setHistory(false);
      setProvenance(false);
    } else {
      setOwner(false);
      setHistory(true);
    }
  };

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        {/* phan 1 */}
        <div className={Style.NFTDescription_box_share}>
          <p>Virtual Worlds</p>
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openSocial()}
            />

            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook />
                  Facebook
                </a>
                <a href="#">
                  <TiSocialLinkedin />
                  Linkedin
                </a>
                <a href="#">
                  <TiSocialTwitter />
                  Twitter
                </a>
                <a href="#">
                  <TiSocialInstagram />
                  Instagram
                </a>
                <a href="#">
                  <TiSocialYoutube />
                  Youtube
                </a>
              </div>
            )}

            <BsThreeDots
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openNFTMenu()}
            />
            {NFTMenu && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <BiDollar />
                  Change price
                </a>
                <a href="#">
                  <BiTransferAlt />
                  Transfer
                </a>
                <a href="#">
                  <MdReportProblem />
                  Report
                </a>
                <a href="#">
                  <MdOutlineDeleteSweep />
                  Delete
                </a>
              </div>
            )}
          </div>
        </div>
        {/* phan 2 */}
        <div className={Style.NFTDescription_box_profile}>
          <h1>FoxX #4124</h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <Image
                src={images.user1}
                alt="profile img"
                height={40}
                width={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small> <br />
                <span>
                  Weping Jean <MdVerified />
                </span>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_box_right}>
              <Image
                src={images.user4}
                alt="profile img"
                height={40}
                width={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />

              <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Creator</small> <br />
                <span>
                  Kali Costa <MdVerified />
                </span>
              </div>
            </div>
          </div>

          <div className={Style.NFTDescription_box_profile_bidding}>
            <p>
              <MdTimer /> <span>Auction ending in:</span>
            </p>
            <div className={Style.NFTDescription_box_profile_bidding_box_timer}>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>2</p>
                <span>Days</span>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>21</p>
                <span>hours</span>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>43</p>
                <span>mins</span>
              </div>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>12</p>
                <span>secs</span>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_bidding_box_price}>
              <div
                className={
                  Style.NFTDescription_box_profile_bidding_box_price_bid
                }
              >
                <small>Current Bid</small>
                <p>1.210 ETH</p>
              </div>

              <span>[12 left]</span>
            </div>

            <div
              className={Style.NFTDescription_box_profile_bidding_box_button}
            >
              <Button
                icon={<FaWallet />}
                btnName={"Place a bid"}
                handleClick={() => {}}
                classStyle={Style.button}
              />
              <Button
                icon={<FaPercentage />}
                btnName={"Make offer"}
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </div>

            <div className={Style.NFTDescription_box_profile_bidding_box_tabs}>
              <button onClick={(e) => openTabs(e)}>History</button>
              <button onClick={(e) => openTabs(e)}>Provenance</button>
              <button onClick={(e) => openOwner()}>Owner</button>
            </div>

            {history && (
              <div
                className={Style.NFTDescription_box_profile_bidding_box_card}
              >
                <NFTTabs dataTab={historyArray} />
              </div>
            )}
            {provenance && (
              <div
                className={Style.NFTDescription_box_profile_bidding_box_card}
              >
                <NFTTabs dataTab={provenanceArray} />
              </div>
            )}
            {owner && (
              <div
                className={Style.NFTDescription_box_profile_bidding_box_card}
              >
                <NFTTabs dataTab={ownerArray} icon={<MdVerified />} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;

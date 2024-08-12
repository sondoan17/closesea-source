import React, { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialTwitter,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
//internal import
import Style from "./AuthorProfileCard.module.css";
import images from "../../../img";
import { Button } from "../../../components/componentsindex";

const AuthorProfileCard = ({ currentAccount }) => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  const copyAddress = () => {
    const copyText = document.getElementById("myInput");

    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  const openShare = () => {
    if (!share) {
      setShare(true);
      setReport(false);
    } else {
      setShare(false);
    }
  };
  const openReport = () => {
    if (!report) {
      setShare(false);
      setReport(true);
    } else {
      setReport(false);
    }
  };

  return (
    <div className={Style.AuthorProfileCard}>
      <div className={Style.AuthorProfileCard_box}>
        <div className={Style.AuthorProfileCard_box_img}>
          <Image
            src={images.nft_image_1}
            className={Style.AuthorProfileCard_box_img_img}
            alt="NFT IMAGES"
            layout="responsive"
          />
        </div>
        <div className={Style.AuthorProfileCard_box_info}>
          <h2>
            Dony Join{" "}
            <span>
              <MdVerified />
            </span>
          </h2>
          <div className={Style.AuthorProfileCard_box_info_address}>
            <input type="text" value={currentAccount} id="myInput" />
            <FiCopy
              onClick={() => copyAddress()}
              className={Style.AuthorProfileCard_box_info_address_icon}
            />
            <p>
              Punk #4786 / An OG Cryptopunk Collector, hoarder of NFTs.
              Contributing to @ether_cards, an NFT Monetization Platform.
            </p>
            <div className={Style.AuthorProfileCard_box_info_social}>
              <a href="#">
                <TiSocialFacebook />
              </a>
              <a href="#">
                <TiSocialLinkedin />
              </a>
              <a href="#">
                <TiSocialYoutube />
              </a>
              <a href="#">
                <TiSocialTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className={Style.AuthorProfileCard_box_share}>
          <Button btnName="Follow" handleClick={() => {}} />
          <MdCloudUpload
            onClick={() => openShare()}
            className={Style.AuthorProfileCard_box_share_icon}
          />
          {share && (
            <div className={Style.AuthorProfileCard_box_share_upload}>
              <p>
                <span>
                  <TiSocialFacebook />
                </span>{" "}
                Facebook
              </p>
              <p>
                <span>
                  <TiSocialLinkedin />
                </span>{" "}
                Linkedin
              </p>
              <p>
                <span>
                  <TiSocialYoutube />
                </span>{" "}
                Youtube
              </p>
              <p>
                <span>
                  <TiSocialTwitter />
                </span>{" "}
                Twitter
              </p>
            </div>
          )}
          <BsThreeDots
            onClick={() => openReport()}
            className={Style.AuthorProfileCard_box_share_icon}
          />
          {report && (
            <p className={Style.AuthorProfileCard_box_share_report}>
              <span>
                <MdOutlineReportProblem />
              </span>{" "}
              Report
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;

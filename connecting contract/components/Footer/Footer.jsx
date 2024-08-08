import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

//internal import
import Style from "./Footer.module.css";
import images from "../../img";
import { Discover, HelpCenter } from "../NavBar/index";

export default function Footer() {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_socical}>
          <Image src={images.logo} alt="footer logo" height={100} width={100} />
          <p>
            CloseSea is a leading NFT marketplace that provides a secure
            platform for buying, selling, and trading a wide range of digital
            assets. Launched in 2024, the platform offers users advanced
            features like robust search tools, seamless payments, and a thriving
            community of creators and collectors.
          </p>
          <div className={Style.footer_social}>
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
        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover></Discover>
        </div>
        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter></HelpCenter>
        </div>
        <div className={Style.subscribe}>
          <h3>Subscribe</h3>

          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter your email" name="" id="" />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>
          <div className={Style.subscribe_box_info}>
            <p>Subscribe your email to receive latest update</p>
          </div>
        </div>
      </div>
    </div>
  );
}

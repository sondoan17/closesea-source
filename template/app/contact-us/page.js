"use client";
import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
//internal import
import Style from "../styles/ContactUs.module.css";
import formStyle from "../../AllPages/Account/Form/Form.module.css";
import { Button } from "../../components/componentsindex";

const ContactUs = () => {
  return (
    <div className={Style.ContactUs}>
      <div className={Style.ContactUs_box}>
        <h1>Contact</h1>
        <div className={Style.ContactUs_box_box}>
          <div className={Style.ContactUs_box_box_left}>
            <div className={Style.ContactUs_box_box_left_item}>
              <h3>🗺 ADDRESS</h3>
              <p>
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className={Style.ContactUs_box_box_left_item}>
              <h3>💌 EMAIL</h3>
              <p>nc.example@example.com</p>
            </div>
            <div className={Style.ContactUs_box_box_left_item}>
              <h3>☎ PHONE</h3>
              <p>000-123-456-7890</p>
            </div>
            <div className={Style.ContactUs_box_box_left_item}>
              <h3>🌏 SOCIALS</h3>

              <a href="#">
                <TiSocialFacebook />
              </a>
              <a href="#">
                <TiSocialInstagram />
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
          <div className={Style.ContactUs_box_box_right}>
            <form>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  placeholder="sondoan17"
                  className={formStyle.Form_box_input_username}
                />
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="email">Email</label>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <HiOutlineMail />
                  </div>
                  <input type="text" placeholder="Email*" />
                </div>
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="Description">Message</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="something about yourself"
                ></textarea>
              </div>
              <Button
                btnName="Send Message"
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

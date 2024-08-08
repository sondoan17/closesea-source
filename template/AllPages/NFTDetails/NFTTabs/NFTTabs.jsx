import React from "react";
import Image from "next/image";

//internal import
import Style from "./NFTTabs.module.css";

const NFTTabs = ({ dataTab, icon }) => {
  return (
    <div className={Style.NFTTabs}>
      {dataTab.map((el, i) => (
        <div className={Style.NFTTabs_box} key={i + 1}>
          <Image
            src={el}
            alt="profile img"
            width={40}
            height={40}
            className={Style.NFTTabs_box_img}
          />
          <div className={Style.NFTTabs_box_info}>
            <span>
              Offer $1235 by <span>Jean Siner{icon}</span>
            </span>

            <br />
            <small>Jun 12 - 4:12 PM</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTTabs;

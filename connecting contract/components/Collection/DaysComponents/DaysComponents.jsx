import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
//internal import
import Style from "./DaysComponents.module.css";
import images from "../../../img";

const DaysComponents = ({ i, el }) => {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <Image
            src={el.background}
            className={Style.daysComponent_box_img_img}
            alt="profile background"
            width={500}
            height={300}
            layout="responsive"
            style={{ objectFit: "cover", layout: "responsive" }}
          />
        </div>

        <div className={Style.daysComponent_box_profile}>
          <Image
            src={el.items.item1}
            alt="profile"
            width={180}
            height={180}
            layout="responsive"
            className={Style.daysComponent_box_img_1}
            style={{ objectFit: "cover" }}
          />
          <Image
            src={el.items.item2}
            alt="profile"
            width={180}
            height={180}
            layout="responsive"
            className={Style.daysComponent_box_img_2}
            style={{ objectFit: "cover" }}
          />
          <Image
            src={el.items.item3}
            alt="profile"
            width={180}
            height={180}
            layout="responsive"
            className={Style.daysComponent_box_img_3}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={Style.daysComponent_box_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <Image
                src={el.user}
                alt="prfile"
                width={30}
                height={30}
                style={{ objectFit: "cover" }}
                className={Style.daysComponent_box_title_info_profile_img}
              />
              <p>
                <span>
                  {el.username}{" "}
                  <small>
                    <MdVerified />
                  </small>
                </span>
              </p>
            </div>

            <div className={Style.daysComponent_box_title_info_price}>
              <small>{el.price} ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;

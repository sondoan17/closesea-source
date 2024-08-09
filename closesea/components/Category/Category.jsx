import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

//internal import
import Style from "./Category.module.css";
import images from "../../img";
const Category = () => {
  const categoryArray = [
    {
      img: images.creatorbackground1,
      category: "Art",
      amount: "4125",
    },
    {
      img: images.creatorbackground2,
      category: "Music",
      amount: "3412",
    },
    {
      img: images.creatorbackground3,
      category: "Video",
      amount: "645",
    },
    {
      img: images.creatorbackground4,
      category: "Gaming",
      amount: "97",
    },
  ];
  return (
    <div className={Style.category}>
      {categoryArray.map((el, i) => (
        <div className={Style.category_box} key={i + 1}>
          <div className={Style.category_box_item}>
            <Image
              src={el.img}
              className={Style.category_box_item_img}
              alt="bg img"
              layout="responsive"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={Style.category_box_title}>
            <span>
              <BsCircleFill />
            </span>
            <div className={Style.category_box_title_info}>
              <h4>{el.category}</h4>
              <small>{el.amount} NFTs</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;

import React from "react";
import Image from "next/image";

//internal import
import Style from "../styles/About.module.css";
import { Brand } from "../../components/componentsindex";
import images from "../../img";

const AboutPage = () => {
  const founderArray = [
    {
      name: "Niamh Sea",
      position: "Co-founder and Chief Executive",
      img: images.founder1,
    },
    {
      name: "Dani Jame",
      position: "Co-founder and Chief Executive",
      img: images.founder2,
    },
    {
      name: "Orla Dwye",
      position: "Co-founder, Chairman",
      img: images.founder3,
    },
    {
      name: "Dara Fraz",
      position: "Co-Founder, Chief Strategy Officer",
      img: images.founder4,
    },
  ];
  const factsArray = [
    {
      title: "10 million",
      info: "Articles have been public around the world (as of Sept. 30, 2021)",
    },
    {
      title: "100,000",
      info: "Registered users account (as of Sept. 30, 2021)",
    },
    {
      title: "220+",
      info: "Countries and regions have our presence (as of Sept. 30, 2021)",
    },
  ];
  return (
    <div className={Style.About}>
      <div className={Style.About_box}>
        <div className={Style.About_box_hero}>
          <div className={Style.About_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
              We’re impartial and independent, and every day we create
              distinctive, world-class programmes and content which inform,
              educate and entertain millions of people in the around the world.
            </p>
          </div>
          <div className={Style.About_box_hero_right}>
            <Image src={images.hero2} alt="hero img" layout="responsive" />
          </div>
        </div>
        <div className={Style.About_box_title}>
          <h2>⛱ Founder</h2>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={Style.About_box_founder}>
          <div className={Style.About_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.About_box_founder_box_img} key={i + 1}>
                <Image
                  src={el.img}
                  alt={el.name}
                  layout="responsive"
                  className={Style.About_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={Style.About_box_title}>
          <h2>🚀 Fast Facts</h2>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>
        <div className={Style.About_box_facts}>
          <div className={Style.About_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.About_box_facts_box_info} key={i + 1}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

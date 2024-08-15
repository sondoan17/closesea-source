"use client";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";

//internal import
import Style from "../styles/Resell.module.css";
import formStyle from "../../AllPages/Account/Form/Form.module.css";
import { Button } from "../../components/componentsindex";

//import smart contract
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const reSellToken = () => {
  const { createSale } = useContext(NFTMarketplaceContext);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const tokenURI = searchParams.get("tokenURI");

  const fetchNFT = async () => {
    if (!tokenURI) return;
    const { data } = await axios.get(tokenURI);
    setImage(data.image);
  };
  useEffect(() => {
    fetchNFT();
  }, [id]);

  const resell = async () => {
    await createSale(tokenURI, price, true, id);
    router.push("/author-profile");
  };

  return (
    <div className={Style.reSellToken}>
      <h1>Resell Your NFT</h1>
      <div className={Style.reSellToken_box}>
        <div className={Style.reSellToken_box_left}>
          {image && (
            <Image
              src={image}
              alt="resell nft"
              width={400}
              height={400}
              className={Style.reSellToken_box_image_img}
              layout="responsive"
            />
          )}
        </div>
        <div className={Style.reSellToken_box_right}>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="name">Price</label>
            <input
              type="number"
              min={0.001}
              placeholder=">= 0.001 ETH"
              className={formStyle.Form_box_input_username}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className={Style.reSellToken_box_btn}>
            <Button btnName="Resell NFT" handleClick={resell} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default reSellToken;

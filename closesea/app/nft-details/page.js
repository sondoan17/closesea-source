"use client";
import React, { useEffect, useState, useContext, Suspense } from "react";
import { useSearchParams } from "next/navigation";

//internal import
import NFTDetails from "../../AllPages/NFTDetails/NFTDetails";
import { Button, Category, Brand } from "../../components/componentsindex";

//import smart contract data
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NFTDetailsPage = () => {
  const { currentAccount } = useContext(NFTMarketplaceContext);
  const [nft, setNft] = useState({
    image: "",
    tokenId: "",
    name: "",
    owner: "",
    price: "",
    seller: "",
    description: "",
    tokenURI: "",
  });
  const searchParams = useSearchParams();
  useEffect(() => {
    setNft({
      image: searchParams.get("image"),
      tokenId: searchParams.get("tokenId"),
      name: searchParams.get("name"),
      owner: searchParams.get("owner"),
      price: searchParams.get("price"),
      seller: searchParams.get("seller"),
      description: searchParams.get("description"),
      tokenURI: searchParams.get("tokenURI"),
    });
  }, [searchParams]);
  return (
    <Suspense>
      <div>
        <NFTDetails nft={nft} />
        <Category />
        <Brand />
      </div>
    </Suspense>
  );
};

export default NFTDetailsPage;

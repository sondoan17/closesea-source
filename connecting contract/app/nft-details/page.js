import React from "react";

//internal import
import NFTDetails from "../../AllPages/NFTDetails/NFTDetails";
import { Button, Category, Brand } from "../../components/componentsindex";

const NFTDetailsPage = () => {
  return (
    <div>
      <NFTDetails />
      <Category />
      <Brand />
    </div>
  );
};

export default NFTDetailsPage;

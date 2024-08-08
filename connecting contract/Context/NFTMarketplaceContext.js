"use client";
import React, { useState, useEffect, useContext } from "react";
import Web3Modal from "web3modal";
const ethers = require("ethers");
import Router from "next/router";
import axios from "axios";
// import { create as ipfsHttpClient } from "ipfs-http-client";
import WalletConnectProvider from "@walletconnect/web3-provider";

//internal import
import { NFTMarketplaceAddress, NFTMarketplaceABI } from "./constants";

//fetching smart contract
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
  );

//connecting with smart contract
async function getWeb3Modal() {
  const web3Modal = new Web3Modal({
    cacheProvider: false,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: "your-infura-id",
        },
      },
    },
  });
  return web3Modal;
}
async function connect() {
  try {
    const web3Modal = await getWeb3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log("something wrong");
  }
}

export const NFTMarketplaceContext = React.createContext();
export const NFTMarketplaceProvider = ({ children }) => {
  const titleData = "Discover, Collect, and Thrive with our NFT Marketplace.";

  const checkContract = async () => {
    const contract = await connect();
    console.log(contract);
  };
  return (
    <NFTMarketplaceContext.Provider value={{ titleData, checkContract }}>
      {children}
    </NFTMarketplaceContext.Provider>
  );
};

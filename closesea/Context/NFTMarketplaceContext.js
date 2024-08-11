"use client";
import React, { useState, useEffect, useContext } from "react";
import Web3Modal from "web3modal";
const ethers = require("ethers");
import { useRouter } from "next/navigation";
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

  //usestate
  const [currentAccount, setCurrentAccount] = useState("");
  const router = useRouter();

  //---check if wallet connected
  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) return console.log("install metamask");
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("no account found");
      }
      console.log(currentAccount);
    } catch (error) {
      console.log("st wrong while connecting to wallet");
    }
  };
  useEffect(() => {
    checkIfWalletConnected();
  }, [currentAccount]);

  //---connect wallet function

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("install metamask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      // window.location.reload();
    } catch (error) {
      console.log("Err while connecting to wallet");
    }
  };

  //---upload to pinanta
  const uploadToPinata = async (file) => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: "1e4fd973631f8cabc91f",
            pinata_secret_api_key:
              "f423f3d91fc0a2826cb4fd1e0ed8822499fc24dcedd7614c6881b47f660e370d",
            "Content-Type": "multipart/form-data",
          },
        });

        const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
        return ImgHash;
      } catch (error) {
        console.error("error while upload to pinata");
      }
    }
  };

  //---create nft function
  const createNFT = async (name, price, image, description, router) => {
    if (!name || !description || !price || !image) {
      return setError("Data Is Missing"), setOpenError(true);
    }

    const data = JSON.stringify({ name, description, image });

    try {
      const response = await axios({
        method: "POST",
        url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        data: data,
        headers: {
          pinata_api_key: "1e4fd973631f8cabc91f",
          pinata_secret_api_key:
            "f423f3d91fc0a2826cb4fd1e0ed8822499fc24dcedd7614c6881b47f660e370d",
          "Content-Type": "application/json",
        },
      });

      const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
      console.log(url);
      await createSale(url, price);
    } catch (error) {
      console.error(error);
    }
  };

  //---createSale function
  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      const price = ethers.utils.parseUnits(formInputPrice, "ether");
      const contract = await connect();

      const listingPrice = await contract.getListingPrice();
      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.reSellToken(url, price, {
            value: listingPrice.toString(),
          });
      await transaction.wait();
      router.push('/search')
      console.log(transaction);
    } catch (error) {
      console.log("err while creating sale");
    }
  };

  //---fetchNFT function
  const fetchNFTs = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider();
      const contract = fetchContract(provider);
      const data = await contract.fetchMarketItem();
      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);
            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );
            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );
      return items;
    } catch (error) {
      console.log("err while fetching NFT");
    }
  };

  //---fetch my NFT
  const fetchMyNFTOrListedNFTs = async (type) => {
    try {
      const contract = await connect();
      const data =
        type == "fetchItemListed"
          ? await contract.fetchItemsListed()
          : await contract.fetchMyNFT();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);
            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );
            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );
      return items;
    } catch (error) {
      console.log("err while fetching listed NFTs");
    }
  };
  //---buy nfts function
  const buyNFT = async (nft) => {
    try {
      const contract = await connect();
      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });
      await transaction.wait();
    } catch (error) {
      console.log("error while buying nft");
    }
  };
  return (
    <NFTMarketplaceContext.Provider
      value={{
        titleData,
        checkIfWalletConnected,
        connectWallet,
        uploadToPinata,
        createNFT,
        fetchNFTs,
        fetchMyNFTOrListedNFTs,
        buyNFT,
        currentAccount,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};

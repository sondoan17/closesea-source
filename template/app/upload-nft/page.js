import React from "react";

//internal import
import Style from "../styles/UploadNFT.module.css";
import { UploadNFTPage } from "../../AllPages/UploadNFT/UploadNFTindex";

const UploadNFT = () => {
  return (
    <div className={Style.UploadNFT}>
      <div className={Style.UploadNFT_box}>
        <div className={Style.UploadNFT_box_heading}>
          <h1>Create New NFT</h1>
          <p>
            You can set preferred display name, create your profile picture and
            other personal settings.
          </p>
        </div>
        <div className={Style.UploadNFT_box_title}>
          <h2>Image, Video, Audio, or 3D Model</h2>
          <p>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 100 MB
          </p>
        </div>
        <div className={Style.UploadNFT_box_form}>
          <UploadNFTPage />
        </div>
      </div>
    </div>
  );
};

export default UploadNFT;

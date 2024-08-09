"use client";
import React, { useState, useMemo, useCallback, useContext } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

//internal import
import Style from "./Account.module.css";
import images from "../../../img";
import Form from "../Form/Form";

const Account = () => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFile) => {
    setFileUrl(acceptedFile[0]);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    },
    maxSize: 5000000,
  });

  return (
    <div className={Style.Account}>
      <div className={Style.Account_info}>
        <h1>Profile Setting</h1>
        <p>
          You can set preferred display name, create your profile picture and
          other personal settings.
        </p>
      </div>
      <div className={Style.Account_box}>
        <div className={Style.Account_box_img} {...getRootProps()}>
          <input {...getInputProps()} />
          <Image
            src={images.user1}
            alt="account upload"
            width={150}
            height={150}
            className={Style.Account_box_img_img}
          />
          <p className={Style.Account_box_img_para}>Change Image</p>
        </div>
        <div className={Style.Account_box_form}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Account;

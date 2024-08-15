require("@nomicfoundation/hardhat-toolbox");
// const { vars } = require("hardhat/config");
// const ALCHEMY_API_KEY = vars.get("nEXUTLTb9tJGiHkgDYToRKfvmZCoE8Z0");
// const SEPOLIA_PRIVATE_KEY = vars.get("f03f4ea2156f3db54b2f25ca3f0e42bb4401dc26f9149d3dc6af9a9a604d42e3");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    polygon_amoy: {
      url: "https://polygon-amoy.g.alchemy.com/v2/AmSZ2WUlMfz_eIXRFnaZSRSebcbefvuw",
      accounts: [
        `0x${"f0c7d72543a16d4662145b11651cedaa8d4244e47cf571c246a274c361dcd950"}`,
      ],
    },
  },
};

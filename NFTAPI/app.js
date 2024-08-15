const fs = require("fs");
const express = require("express");

const app = express();
app.use(express.json());

//---get method

const nfts = JSON.parse(fs.readFileSync(`${__dirname}/data/nft-simple.json`));
app.get("/api/v1/nfts", (req, res) => {
  res.status(200).json({
    status: "success",
    result: nfts.length,
    data: {
      nfts,
    },
  });
});

//---post method

app.post("/api/v1/nfts", (req, res) => {
  const newId = nfts[nfts.length - 1].id + 1;
  const newNFTs = Object.assign({ id: newId }, req.body);
  nfts.push(newNFTs);
  fs.writeFile(
    `${__dirname}/data/nft-simple.json`,
    JSON.stringify(nfts),
    (err) => {
      res.status(201).json({
        status: "success",
        nft: newNFTs,
      });
    }
  );
});

//---get single nft

app.get("/api/v1/nfts/:id", (req, res) => {
  const id = req.params.id * 1;
  const nft = nfts.find((el) => el.id === id);
  if (id > nfts.length) {
    res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: {
        nft,
      },
    });
  }
});

//---patch method

app.patch("/api/v1/nfts/:id", (req, res) => {
  if (req.params.id * 1 > nfts.length) {
    return res.status(404).json({
      status: "fail",
      message: "invalid id",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: {
        nft: "updating nft",
      },
    });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});

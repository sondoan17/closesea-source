const fs = require("fs");
const express = require("express");

const app = express();
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// app.get("/", (req, res) => {
//     res.json({
//         message: "hello",
//         api: "583946589-3456"
//     });
//   });

// app.post("/", (req, res) => {
//   res.json({
//     message: "your data",
//   });
// });

//get request
const nfts = JSON.parse(fs.readFileSync(`${__dirname}/data/nft-simple.json`));

// console.log(nfts);

app.get("/api/v1/nfts", (req, res) => {
  res.status(200).json({
    status: "success",
    result: nfts.length,
    data: {
      nfts,
    },
  });
});

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

const port = 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});

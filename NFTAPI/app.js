const express = require("express");

const app = express();

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

const port = 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});

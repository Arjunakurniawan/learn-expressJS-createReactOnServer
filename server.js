const express = require("express");
const path = require("path");
const app = express();
const port = "3002";

// menggunakan middleware
app.use("/", express.static(path.join(__dirname)));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// app.use("/image", function (req, res) {
//   res.sendFile(express.static(path.join(__dirname, "/img")));
// });

//study kasus tanpa middleware
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/image", (req, res) => {
//   res.sendFile(
//     __dirname + "/img/mihawk-sword-one-piece-uhdpaper.com-4K-6.795.jpg"
//   );
// });

app.listen(port, function () {
  console.log(`server running in http://localhost:${port}`);
});

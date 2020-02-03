const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("hi am ola Mohammed."); 
});

app.listen(3000, () => console.log("server is running on 3000"));

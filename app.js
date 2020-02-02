const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("as long as we are together, everything will be okay.");
});

app.listen(3000, () => console.log("server is running on 3000"));

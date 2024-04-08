const express = require("express");
const cors = require("cors");
const app = express();

app.get("/users", (req, res) => {
  console.log(req.headers, req.body);
  res.status(200).json({
    message: "OK",
    data: [
      {
        name: "rasel",
        age: 23,
      },
      {
        name: "Nayem",
        age: 25,
      },
    ],
  });
});

app.listen(3000, () => {
  console.log("server is running");
});

const express = require("express");

//create express app
const app = express();

//port at which the server will run
const port = 4000;

//create end point
app.get("/", (req, res) => {
  res.json("hello");
});

//start server and listen for the request
app.listen(port, () =>
  //a callback that will be called as soon as server start listening
  console.log(`server is listening at http://localhost:${port}`)
);

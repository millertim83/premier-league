//const { default: axios } = require("axios");
const express = require("express");
const app = express();
const port = 3004;

app.use("/", express.static("/src"));


app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`App listening on port ${port}!`));
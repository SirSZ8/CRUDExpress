const express = require("express");
const app = express();

app.use(express.json());

app.use("/user", require("./controllers/ControllerUser"));

// http://localhost:4000/user/
// http://localhost:4000/user/zeas/

module.exports = app;

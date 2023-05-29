const ControllerUser = require("express").Router();

ControllerUser.get("/", (req, res) => {
  return res.status(200).json({
    username: "budi",
    email: "budi@doremi.com",
  });
});

ControllerUser.get("/zeas", (req, res) => {
  return res.status(200).json({
    username: "asta",
    email: "SirSZ@gmail.com",
  });
});

module.exports = ControllerUser;

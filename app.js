const express = require("express");
const app = express();
const Connector = require("./models/connector");

app.set("view engine", "ejs");
app.set("views", "./views");

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/username/:id([0-9]+)", (req, res) => {
//   let username = req.params.id;
//   res.send("Hello Apakabar " + username + "!");
// });

// app.get("/username/:id", (req, res) => {
//   let username = req.params.id;
//   res.send("Hello Apa Kabar " + username + "!");
// });

// app.get("/", (req, res) => {
// const imageUrl1 =
//   "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";

// const imageUrl2 =
//   "https://i.guim.co.uk/img/media/84c133e52a7e219c2b0291019d2de9bfe6e34668/131_0_2498_1500/master/2498.jpg?width=620&quality=45&dpr=2&s=none";

// const imageUrl3 =
//   "https://assets-prd.ignimgs.com/2023/03/20/zelda-tears-of-the-kingdom-amiibo-blogroll-1679329694192.jpg?width=828";

// const images = [imageUrl1, imageUrl2, imageUrl3];

// res.render("index", { images });
// console.log(req.query);

// res.send(
//   `Hello Apakabar ${req.query.username} password anda adalah ${req.query.password}`
// );
// });

// app.get("/contactus", (req, res) => {
//   res.sendFile(__dirname + "/public/contactus.html");
// });

// app.post("/submit-contactus", (req, res) => {
//   console.log(req.query);
//   res.status(200).send("Terima kasih telah menghubungi kami!");
// });

// app.use(express.urlencoded({ extended: true }));

// app.post("/submit-contactus", (req, res) => {
//   console.log(req.body);
//   res.status(200).send(`Terima kasih ${req.body.name} telah menghubungi kami!`);
// });
app.get("/", async (req, res) => {
  await Connector("barang").insert({
    namaBarang: "Tablet Ipad Mini 6",
    harga: 7500000,
  });

  res.render("pages/index");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

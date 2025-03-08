const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/information", (req, res) => {
  res.render("information");
});

app.get("/player", (req, res) => {
  res.render("player");
});

app.get("/actor", (req, res) => {
  res.render("actor");
});

app.get("/actress", (req, res) => {
  res.render("actress");
});

app.get("/recommendation", (req, res) => {
  res.render("recommendation");
});

app.get("/iletisim", (req, res) => {
  res.render("iletisim");
});

app.post("/submitForm", (req, res) => {
  const { name, surname, email, message } = req.body;

  console.log(`Ad: ${name}`);
  console.log(`Soyad: ${surname}`);
  console.log(`Email: ${email}`);
  console.log(`Mesaj: ${message}`);

  res.send("Form gönderidi");
});

app.listen(PORT, () => {
  console.log("Sunucu ${PORT} portunda çalışıyor");
});

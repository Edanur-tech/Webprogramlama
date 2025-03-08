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

app.get("/film", (req, res) => {
  res.render("film");
});

app.get("/drama", (req, res) => {
  res.render("drama");
});

app.get("/iletisim", (req, res) => {
  res.render("iletisim");
});

app.post("/submitForm", (req, res) => {
  const { name, surname, email, phone, message } = req.body;

  console.log(
    `Ad: ${name}, Soyad: ${surname}, Email: ${email}, Telefon: ${phone}, Mesaj: ${message}`,
  );
  res.send("Form Gönderildi!");
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor!`);
});

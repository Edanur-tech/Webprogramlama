const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// URL kodlu gövdeleri ayrıştırmak için middleware
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("main");
});

app.get("/yemekler", (req, res) => {
    res.render("yemekler");
});

app.get("/drink", (req, res) => {
    res.render("drink");
});

app.get("/dessert", (req, res) => {
    res.render("dessert");
});

app.get("/iletisim", (req, res) => {
    res.render("iletisim");
});

app.post("/submitForm", (req, res) => {
    const { name, surname,email, city, recommendation } = req.body;
    console.log(
        `Adınız: ${name}, Soyadınız: ${surname} E mailiniz: ${email}, Yaşadığınız şehri seçiniz: ${city}, Geri Dönütleriniz: ${recommendation}`
    );
    res.send("Form gönderildi!");
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
});

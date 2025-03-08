
const express=require("express");
const fs=require("fs");
const path=require("path");

const app=express();

const PORT=process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views" , path.join(__dirname, "views"));
app.use(express.static (path.join(__dirname, "public")));

app.use(express.urlencoded({extented:true}));

app.get("/", (req,res)=> {
  res.render("main");
});

app.get("/know", (req,res) => {
  res.render("know");
});

app.get("/urunler", (req,res) => {
  res.render("urunler");
});

app.get("/iletisim", (req,res) => {
  res.render("iletisim");
});

app.get("/kayit", (req,res) => {
  res.render("kayit");
});

app.get("/uye", (req,res) => {
  res.render("uye");
});

app.post("/submitForm",(req,res)  => {

  const { name, surname , email, message} =req.body;

  console.log (
    'Ad : ${name}, Soyad :  ${soyad}, E Mail :${email}, Müşteri Öneri ve Şikayetleri :${message}'
  );
  res.send("Form Gönderildi");
});

app.post("/submit" ,(req,res) => {

  const { email, password } =req.body;

  console.log (
    'E Mail :${email}, Şifre :{password}'
  );

  res.send("Üyelik gerçekleştirildi");
});

app.post("/submitform", (req,res) => {

  const { name , surname , email , phone , password}= req.body;

  console.log(
    'Adınızı giriniz:${name}, Soyadınızı giriniz:${surname}, E Mail:${email}, Telefon Numaranız:${phone}, Şifreniz:${password}'
  );

res.send("Kayıt oluşturldu");
  
});


app.listen(PORT , () => {
  console.log('Sunucu ${PORT} portunda çalışıyor');
});
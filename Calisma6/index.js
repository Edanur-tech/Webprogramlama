const express=require('express');
const path=require('path');
const fs=require('fs');

const app=express();
const PORT= process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}));

app.get("/", (req,res)=> {
  res.render("main");
});

app.get("/know", (req,res)=> {
  res.render("know");
});

app.get("/projects",(req,res)=> {
  res.render("projects");
});

app.get("/english",(req,res)=> {
  res.render("english");
});

app.get("/korean", (req, res)=> {
  res.render("korean");
});

app.get("/arabian", (req,res)=>{
  res.render("arabian");
});

app.get("/italian", (req,res)=>{
  res.render("italian");
});

app.get("/spanish", (req,res)=> {
  res.render("spanish");
});

app.get("/malay", (req,res)=>{
  res.render("malay");
});

app.get("/iletisim", (req, res)=> {
  res.render("iletisim");
});

app.post("/submitform",(req,res)=> {

  const{name,surname,email,message}=req.body;

  console.log(`Ad: ${name}, Soyad: ${surname}, E-mail: ${email}, Öneri ve Şikayetleriniz: ${message}`);

  res.send("Form Gönderildi.Teşekkürler.");
});

app.listen(PORT,()=>{
  console.log(`Sunucu ${PORT} numaralı portta çalışıyor.`);
});
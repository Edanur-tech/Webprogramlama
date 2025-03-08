const express=require("express");
const path=require("path");
const fs=require("fs");

const app=express();
const PORT=process.env.PORT || 3000;

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}));

app.get("/", (req,res)=>{
  res.render("main");
});

app.get("/know", (req,res)=>{
  res.render("know");
});

app.get("/login",(req,res)=>{
  res.render("login");
});

app.get("/signin",(req,res)=>{
  res.render("signin");
});

app.get("/skincare",(req,res)=>{
  res.render("skincare");
});

app.get("/haircare", (req,res)=>{
  res.render("haircare");
});

app.get("/beautysecrets",(req,res)=>{
  res.render("beautysecrets");
});

app.get("/login", (req,res)=>{
  res.render("login");
});

app.get("/signin",(req,res)=>{
  res.render("signin");
});

app.post("/submitform" ,(req,res)=>{
  const{name,surname,email,message}=req.body;
  console.log(`Adınız: ${name}, Soyadınız: ${surname} ,E-Mailiniz: ${email} ,Sorularınız: ${message}`);
  res.send("Formunuz gönderildi");
});

app.post("/submit", (req,res)=>{
  const{name,surname,email,password}=req.body;
  console.log(`Adınız: ${name}, Soyadınız: ${surname}, E-Mailiniz: ${email}, Şifreniz: ${message}`);
  res.send("Üyeliğiniz gerçekleşti");
});

app.post("/submitForm", (req,res)=>{
  const{email,password}=req.body;
  console.log(`E-Mailiniz: ${email} ,Şifreniz: ${message}`);
  res.send("Giriş yapıldı");
});

app.listen(PORT, ()=>{
  console.log(`Sunucu ${PORT} portunda çalışıyor` );
});
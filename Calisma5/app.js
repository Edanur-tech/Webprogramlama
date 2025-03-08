const express=require("express");
const path=require("path");
const fs=require("fs");

const app=express();
const PORT=process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extented:true}));

app.get("/",(req, res)=>{
  res.render("main");
});

app.get("/know", (req, res)=>{
  res.render("know");
});

app.get("/blogs", (req,res)=>{
  res.render("blogs");
});

app.get("/contact",(req,res)=>{
  res.render("contact");
});

app.get("/iletisim", (req,res)=>{
  res.render("iletisim");
});

app.post("/submitform",(req, res)=>{

  const{name,surname,age,email,phone,message}=req.body;
  

  console.log(`Adınız: ${name}`);
  console.log(`Soyadınız: ${surname}`);
  console.log(`Yaş : ${age}`);
  console.log(`Emailiniz: ${email}`);
  console.log(`Telefon Numaranız: ${phone}`);
  console.log(`Mesajınız: ${message}`);
 
   res.send("Form gönderildi!");
});

app.listen(PORT, ()=> {
  console.log(`Sunucu ${PORT} portunda çalışıyor!`);
})
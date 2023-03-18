const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const path=require("path");

const x = path.join(__dirname, "../public");
app.use(express.static(x));
app.set("view engine", "hbs");

//////////////////////////////////////////////////////////////////
const viewsDirectory=path.join(__dirname,"../temp1/views");
app.set("views",viewsDirectory);
///////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////
const hbs=require("hbs");
const partialspath=path.join(__dirname,"../temp1/partials");
hbs.registerPartials(partialspath);
///////////////////////////////////////////////////////////////////

app.get("/", (req, res) => {
  res.render("index", {
    imagePath:"images/312564469_536408098317261_8225854017223923353_n.jpg",
    name: "Mohamed",
    title: "Home",
    age: "20",
    city: "monofia",
  });
});

app.get('/about',(req,res)=>{
    res.render("about", {
      firstName: "Mohamed",
      lastName: "Osman",
      title :"About",
      age: "20",
      city:"monofia"
    });
})

app.get("/service",(req,res)=>{
    res.render("service", {
      data1: "product1",
      imagePath1: "images/312564469_536408098317261_8225854017223923353_n.jpg",
      data2: "product2",
      imagePath2: "images/312564469_536408098317261_8225854017223923353_n.jpg",
      data3: "product3",
      imagePath3: "images/312564469_536408098317261_8225854017223923353_n.jpg",
      title: "Service",
    });
})
app.get("/contact", (req, res) => {
  res.render("contact", {
    Phone: "01148988342",
    email: "mt469063@gmail.com",
    title: "Contact",
    github: "mohamed.github.com",
    facebook: "mohamed.facebook.com",
  });
});
app.get("/team", (req, res) => {
  res.render("team", {
    title:"Team",
    team_manager: "Mohamed",
    front_developer : "Ahmed",
    designer :"Ali",
    back_developer:"Omar",
  });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
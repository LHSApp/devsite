const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const videos = require("./data")

app.use(express.static('public'))

app.set("view engine", "njk")

nunjucks.configure("views", {
  express:app,
  autoescape: false,
 
})
app.get("/", function(req, res){

  const about = {
  avatar_url: "https://avatars0.githubusercontent.com/u/48134318?s=460&u=1ab8aefde787685c5913a792411c4c6f4d17aba8&v=4",
  name: "Leandro Santos ",
  role: "Programador Web",
  link: [
    {name: "Github", url:" https://github.com/LHSApp"},
    {name: "Instagram", url:" https://www.instagram.com/leandrohsantos.com.br/"},
    {name: "Contato", url:" mailto:leandro@leandrohsantos.com.br"},
  ]

  }

  return res.render("about", {about})
})

app.get("/Portfolio", function(req, res){

  const about = {
  avatar_url: "https://avatars0.githubusercontent.com/u/48134318?s=460&u=1ab8aefde787685c5913a792411c4c6f4d17aba8&v=4",
  name: "LHSApp ",
  role: "",
  link: [
    {name: "CrazyBird", url:"https://play.google.com/store/apps/details?id=com.leandro.jogo&hl=pt_BR"},
    {name: "Flying", url:" https://play.google.com/store/apps/details?id=not.yet.specified.leandro&hl=pt_BR"},
    {name: "Ecoleta", url:"https://leandrohsantos.online/"},
  ]

  }

  return res.render("about", {about})
})

app.get("/Hobbies", function(req, res){

  return res.render("Hobbies", {items: videos})
})

app.get("/App", function(req, res){

  return res.render("App", {items: videos})
})

app.get("/video", function(req, res){
  const id= req.query.id

  const video = videos.find(function(video){
    return video.id == id
   
  })
  if (!video){
    return res.send("Video not found!")
  }

  return res.render("video", {item: video})
})


var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});
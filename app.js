const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const videos = require("./data")

app.use(express.static('public'))

app.set("view engine", "njk")

nunjucks.configure("views", {
  express:app,
  autoescape: false
})
app.get("/", function(req, res){

  const about = {
  avatar_url: "https://avatars0.githubusercontent.com/u/48134318?s=460&u=1ab8aefde787685c5913a792411c4c6f4d17aba8&v=4",
  name: "Leandro Santos ",
  role: "Programador Web",
  link: [
    {name: "Github", url:" https://github.com/LHSApp"},
    {name: "Instagram", url:" https://github.com/LHSApp"},
    {name: "Contato", url:" https://github.com/LHSApp"},
  ]

  }

  return res.render("about", {about})
})

app.get("/classes", function(req, res){

  return res.render("classes", {items: videos})
})

app.listen(5000, function() {
  console.log(" server in running ")
})

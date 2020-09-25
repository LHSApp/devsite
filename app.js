const express = require('express')
const nunjucks = require('nunjucks')
const app = express()

app.use(express.static('public'))

app.set("view engine", "html")

nunjucks.configure("views", {
  express:app
})
app.get("/", function(req, res){

  return res.render("about")
})

app.get("/classes", function(req, res){

  return res.render("classes")
})

app.listen(5000, function() {
  console.log(" server in running ")
})

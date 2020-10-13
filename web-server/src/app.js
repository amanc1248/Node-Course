const express = require("express");
const path = require("path")
const hbs = require("hbs")
const app = express();

//Define paths for express config
const publicDirectory = path.join(__dirname,"../public")
const viewspath = path.join(__dirname + "/../templates/views")
const partialPath = path.join(__dirname + "/../templates/partials")

//setup handlebars engine and views location
app.set("view engine","hbs")// this is to setup the view engine
app.set("views",viewspath) //this is for setting up the view engine manually and giving the path to it.
hbs.registerPartials(partialPath)

//setup static directory to serve.
app.use(express.static(publicDirectory))
//express.static gives the root path and 

//the root route is never going to be use. Because there is a express.static method used.

app.get("", (req, res) => {
    res.render("index",{
        title:"Weather",
        name:"Aman Chaudhary 1"
    });
  });
app.get("/help", (req, res) => {
  res.render("help",{
    title:"Help Page",
    name:"Aman Chaudhary 2"
  });
});
app.get("/about", (req, res) => {
  res.render("about",{
    title:"About",
    name:"Dipu Rai"
  });
});
app.get("/weather", (req, res) => {
  res.send({
      forecast:"Cloudy Sky",
      location:"Kathmandu"
  });
});
app.listen(3000, () => {
  console.log("Server started at port 3000");
});

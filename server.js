const express = require("express");
const app = express();
const path = require("path");
const blog = require("./blogService");

const exphbs = require("express-handlebars");

app.engine(".hbs",  exphbs.engine({
    extname: "hbs", 
    layoutsDir: "views", 
    defaultLayout: "index.hbs"
    })
);

app.set("view engine", ".hbs");
app.use(express.static("."));

var HTTP_PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  blog.getAllImgs()
    .then((data) => {
      res.render("about.hbs", { image: data });
    })
    .catch(() => {
      res.send("error");
    });
  // res.send('hi');
});

app.get("/gallery", (req, res) => {
  blog.getAllImgs()
    .then((data) => {
      res.render("about.hbs", { image: data });
    })
    .catch(() => {
      res.send("error");
    });
  // res.send('hi');
});

app.get("/contact", (req, res) => {
  res.render("contact.hbs");
  // res.send('hi');
});

app.use((req, res) => {
  res.render("404.hbs");
  // res.send('hi');
});

blog.initialize().then(() => {
  app.listen(HTTP_PORT);
});

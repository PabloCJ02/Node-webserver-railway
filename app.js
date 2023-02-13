const express = require("express");
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico Middlewares
app.use(express.static('public'))

// Como entra a la carpeta publi esto nunca se ejecuta:
// app.get("/", (req, res) => {
//     res.send("Home page");
// });

app.get("/", (req, res) => {

    res.render("home", {
        nombre: 'Pablo Chavez',
        titulo: 'Curso de Node'
    });
});

app.get("/generic", (req, res) => {

    res.render("generic", {
        nombre: 'Pablo Chavez',
        titulo: 'Curso de Node'
    });
});app.get("/elements", (req, res) => {

    res.render("elements", {
        nombre: 'Pablo Chavez',
        titulo: 'Curso de Node'
    });
});

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

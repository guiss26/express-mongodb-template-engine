const express = require("express")
const { create } = require("express-handlebars")

const app = express()

const hbs = create({//create va a recibir las configuraciones de express-handlebar
    extname: ".hbs",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");


app.get("/", (req,res)=>{
    // res.send('estás solicitando la ruta raíz')
    res.render("home")
})

app.use(express.static(__dirname + "/public"));

app.listen(5000, ()=> console.log('nuestro servidor andando'))
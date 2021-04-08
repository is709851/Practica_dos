const express = require('express');
const path = require('path');
//Requerimos el archivo de news que es el que nos muestra nuestras noticas
require('./public/news');

const app = express();

//Cargamos nuestros archivos estaticos para que el HTML pueda tomarlos
app.use("/public", express.static(path.join(__dirname, "public")))
//Utilizamos un middleware sencillo para corroborar que estamos dentro de la ruta correcta
app.use('/', (req, res, next)=>{
    console.log('Utilizando Middleware')
    next();
})
//Cargamos nuestro html, para mostrar en el puerto elegido
app.use('/', (req, res, next) =>{
    res.sendFile(path.join(__dirname, "src", "index.html"))
})
//Seleccionamos el puerto en el cual se correra la app
app.listen(3000, () =>{
    console.log('News app is running in port 3000');
})
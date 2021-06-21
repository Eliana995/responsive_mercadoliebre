const express = require ('express');
const app = express ();
const port = 3060;
const path = require('path');
const views = path.join(__dirname,'views')

app.use(express.static('public')) 

app.get('/', (req,res) =>{ res.sendFile(path.join(__dirname, 'views', 'home.html'))}) 

app.listen(port,() => console.log('Servidor corriendo en http://localhost: ' + port ))
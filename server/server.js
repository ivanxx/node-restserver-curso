require('./config/config');

const express = require('express');
const mongoose = require('mongoose')
const path = require('path');

const app = express();

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// habilitar la carpeta /public
app.use(express.static(path.resolve(__dirname, '../public')));

console.log(path.resolve(__dirname, '../public'));
// Configuración global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err, res) => {
        if (err) throw err;

        console.log('Base de datos Online');

    })

app.listen(process.env.PORT, () => {
    console.log(`Escuchando el puerto ${ process.env.PORT }`);
});


// cursonode: 2rVKudwlM2z1vRDz

// MongoDB URL
// mongodb+srv://cursonode:2rVKudwlM2z1vRDz@cluster0.67ze0.mongodb.net/test

//2ZeTL3sMR7Qr7VyeTdls2iqK
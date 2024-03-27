const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000; 


app.get('/', (req, res) => {
    res.send('¡Hola, mundo desde Express!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

//Se configuar la conexión
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'jcami',
    password: 'sqlinvitado',
    database: 'invitado'
});

//se crea la conexión
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datosss:', err);
        return;
    }
    console.log('Conexión a la base de datos MySQL exitosa');
});
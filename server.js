const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3006;


const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'invitado',
  password: 'sqlinvitado',
  database: 'tienda_virtual'
});


db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Hola, mundo desde Node.js');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});

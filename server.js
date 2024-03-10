const express = require('express');
const mysql = require('mysql');
const { ngExpressEngine } = require('@nguniversal/express-engine');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const app = express();
const port = 3306;
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/angular-tecnologia-server/main');


app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

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


app.get('/api/data', (req, res) => {
  res.json({ message: 'Data from the server' });
});

app.get('/', (req, res) => {
  res.render('index', { req });
});

app.set('view engine', 'html');
app.set('views', './dist/angular-tecnologia/browser');

app.get('/', (req, res) => {
  res.send('Hola, mundo desde Node.js');
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});

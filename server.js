var express = require('express'),
    path = require('path'),
    router = require('./router/router'),
    bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);

// Configmamos la vista
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'));

// Levantamos el server, en el puerto ingresado por consola o por defecto 3000
app.listen(process.env.PORT || 3000);

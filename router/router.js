var router = require('express').Router();

var loginControler = require('../controlers/loginControler')

router.get('/login', loginControler.mostrarLogin);

module.exports = router;

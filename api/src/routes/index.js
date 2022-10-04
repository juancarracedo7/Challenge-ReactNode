const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryWeather = require("./countryWeather")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/cities", countryWeather)

module.exports = router;

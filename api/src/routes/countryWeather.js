const express = require("express");
const { getCountryWeather, getAllDbInfo, postCountryWeather, deleteCityWeather, getByDateLocation} = require("../../controllers/getCountryWeather");

const router = express.Router();

//Get countryWetaher by name
router.get("/", getCountryWeather);
//Get all countriesWeather Data Base
router.get("/all", getAllDbInfo)
//Post new weather data
router.post("/", postCountryWeather)
//Delete weather data
router.delete("/:id", deleteCityWeather)
//Filtered by Date and Location
router.get("/filter", getByDateLocation)
// SSE  (Server Sent Events)
router.get("/sse", (req, res) => {
    console.log("Connected")
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Access-Control-Allow-Origin', '*')

    const actualInfo = setInterval( async () => {
        const info =  await getAllDbInfo()
        res.write(`data: ${info}\n\n`)
    },10000)

    res.on('close', () => {
        console.log('Conection closed')
        clearInterval(actualInfo)
        res.end()
    })
})



module.exports = router;

const axios = require("axios");
const express = require("express");
const dotenv = require("dotenv");
const { City } = require("../src/db");

dotenv.config();

// GET BY NAME
const getCountryWeather = async (req, res, next) => {
  try {
    const { name } = req.query;
    const apiUrl = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${process.env.API_URL}&units=metric`
    );

    const names = await apiUrl.data.city.name;
    // console.log('name',names)

    const uniqueCode = await apiUrl.data.city.id;
    // console.log("id", uniqueCode)

    const idCountry = await apiUrl.data.city.country;
    // console.log("country", idCountry)

    const apiFormat = await apiUrl.data.list.map((city) => {
      return {
        uniqueCode: uniqueCode,
        name: name,
        date: city.dt,
        weather: city.weather[0].main,
        desc: city.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`,
        temp: city.main.temp,
        temp_min: city.main.temp_min,
        temp_max: city.main.temp_max,
        time: city.dt_txt,
      };
    });

    await City.bulkCreate(apiFormat); // LO INTEGRO EN LA BASE DE DATOS
    res.send(apiFormat);
    // console.log("info", apiFormat);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//OBTENGO LA INFO DE LA BASE DE DATOS
const getAllDbInfo = async (req, res) => {
  try {
    const dbInfo = await City.findAll();
    // console.log('hola',dbInfo);
    await res.status(200).send(dbInfo);
    // return dbInfo
  } catch (error) {
    console.log(error);
  }
};

// PUEDO POSTEAR UN NUEVO CLIMA, CON TODOS LOS DATOS ESPECIFICADOS QUE VIENEN POR BODY
const postCountryWeather = async (req, res) => {
  try {
    const { name, date, weather, desc, icon, temp, temp_min, temp_max, time } =
      req.body;

    let newWeatherData = await City.create({
      name,
      date,
      weather,
      desc,
      icon,
      temp,
      temp_min,
      temp_max,
      time,
    });
    res.status(200).send(newWeatherData);
  } catch (error) {
    console.log(error);
  }
};

//Elimino clima de la ciudad por su id
const deleteCityWeather = async (req, res) => {
  let { id } = req.params;
  try {
    await City.destroy({
      where: {
        id: id,
      },
    }).then((e) => {
      if (!e) {
        return res.status(400).send("Not found"); // si no lo encuentra
      }
      res.status(200).send("Eliminated City Weather"); // si lo encuentra y elimina
    });
  } catch (error) {
    console.log(error);
  }
};

const getByDateLocation = async (req,res) => {

  try {
    const { name } = req.query;
  const apiUrl = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${process.env.API_URL}&units=metric`
  );
  console.log(apiUrl)

  const country = await apiUrl.data.city.country
  const apiFormat = await apiUrl.data.list.map((city) => {
    return {
     
      country: country,
      date: new Date(city.dt * 1000).toLocaleDateString()
  
    };
  });
   
  res.status(200).send(apiFormat)
  } catch (error) {
    console.log(error)
  }
  
}

module.exports = {
  getCountryWeather,
  getAllDbInfo,
  postCountryWeather,
  deleteCityWeather,
  getByDateLocation
};

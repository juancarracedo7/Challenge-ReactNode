const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("city", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uniqueCode : {
      type: DataTypes.INTEGER,
  
    },
    date: {
      type: DataTypes.INTEGER,
    },
    weather: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.STRING,
    },
    icon: {
      type: DataTypes.STRING,
    },
    temp: {
      type: DataTypes.DECIMAL,
    },
    temp_min: {
      type: DataTypes.DECIMAL,
    },
    temp_max: {
      type: DataTypes.DECIMAL,
    },
    time: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING
    },
  });
};

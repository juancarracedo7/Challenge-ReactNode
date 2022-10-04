import axios from "axios";
export const GET_CITY_WEATHER = "GET_CITY_WEATHER";
export const  GET_CITY_DB = " GET_CITY_DB"
export const GET_CITY_DETAILS = " GET_CITY_DETAILS "

export function getCityWeather(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/cities?name=${name}`);
      return dispatch({
        type: GET_CITY_WEATHER,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      alert("City not found");
    }
  };
}

export function getCityDb() {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/cities/all`);
      console.log('data action',json.data)
      return dispatch({
        type: GET_CITY_DB,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      alert("Not found");
    }
  };
}


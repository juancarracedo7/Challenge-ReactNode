import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar";
import styles from "./Card.module.css";

export default function Card() {
  const cityWeather = useSelector((state) => state.city);
  console.log(cityWeather);

  const day1 = cityWeather[0];
  const day2 = cityWeather[8];
  const day3 = cityWeather[16];
  const day4 = cityWeather[24];
  const day5 = cityWeather[32];
  const weekDaysArray = [];
  weekDaysArray.push(day1, day2, day3, day4, day5);
  console.log("5dias", weekDaysArray);

  return (
    <div className={styles.container}>
    
    <Searchbar/>
      <h1 className={styles.name}>{cityWeather[0]?.name}</h1>
      <div className={styles.cardContainer}>
        {weekDaysArray &&
          weekDaysArray.map((c, index) => {
            return (
              <Link key={index} to={`/${c?.uniqueCode}`} className={styles.Link}>
              <div  className={styles.card}>
                <p>{new Date(c?.date * 1000).toLocaleDateString()}</p>
                <img src={c?.icon} alt="not found" />
                <p>{Math.round(c?.temp)} °C</p>
                <p> Min {Math.round(c?.temp_min)} °C</p>
                <p> Max {Math.round(c?.temp_max)} °C</p>
              </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

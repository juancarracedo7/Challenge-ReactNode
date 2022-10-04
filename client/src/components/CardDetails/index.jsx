import { useSelector } from "react-redux";
import styles from "./CardDetails.module.css";
import { Link } from "react-router-dom";


export default function CardDetails() {
  const cityWeather = useSelector((state) => state.city);
  console.log('details',cityWeather);

  
  const cutCityWeather = cityWeather?.splice(5,8)


var today = new Date();
var date = today.toLocaleDateString('en-GB');

  
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
      <h1 className={styles.h1}>{date}</h1>
      <h3 className={styles.h3}>Forecast</h3>
      <h3 className={styles.h3}>Temp °C</h3>
      <Link to="/" className={styles.Link}>
        Home
      </Link>
      </div>
      <div className={styles.cardContainer}>
        {cutCityWeather &&
          cutCityWeather.map((c, index) => {
            return (
              <div key={index} className={styles.card}>
                <p>{c.time?.slice(10,16)} hs</p>
                <img src={c.icon} alt="not found" />
                <p>{c.weather}</p>
                <p>{c.desc}</p>
                <p>{Math.round(c.temp)} °C</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

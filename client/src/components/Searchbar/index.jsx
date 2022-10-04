import styles from "./Searchbar.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getCityWeather } from "../../redux/actions";


export default function Searchbar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  console.log('name',name)

  const handleInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
        alert("Complete name");
      } else {
        dispatch(getCityWeather(name));
      }
  
      setName("");
  };
  return (
    <div className={styles.searchBox}>
      <input
      className={styles.searchInput}
        type="text"
        placeholder="Search..."
        value={name}
        onChange={(e) => handleInput(e)}
        autoComplete="off"
      />
      <button
        className={styles.searchButton}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        🔎
      </button>
    </div>
  );
}

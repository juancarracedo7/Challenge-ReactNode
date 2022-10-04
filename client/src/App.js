import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCityDb } from "../src/redux/actions";



function App() {
const dispatch = useDispatch()
  useEffect(() => {
   dispatch(getCityDb())
  }, [dispatch]);

  // const interval = setInterval(() => {
  //   dispatch(getCityDb)
  // },1000)

  // console.log('intervalo',interval)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:uniqueCode" element={<CardDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

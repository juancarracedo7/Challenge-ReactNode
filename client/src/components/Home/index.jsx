import Card from "../Card";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCityDb } from "../../redux//actions.js";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCityDb());
  }, [dispatch]);

  return (
    <>
      <Card />
    </>
  );
}

import React, { useEffect, useState } from "react";
import picc from "../../assets/images/IMG01.jpg";
import axios from "axios";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import { Link } from "react-router-dom";

export default function Details() {
  const [allMealDtails, setallMealDtails] = useState([]);

  async function mealDeatisl() {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
    );
    setallMealDtails(data.meals);
  }

  useEffect(() => {
    mealDeatisl();
  }, []);

  return (
    <>
      {allMealDtails ? (
        allMealDtails.map(function (mizoo, idx) {
          return (
            <div className="container row ">
              <div key={idx} className="sectionOne col-8 ">
                <img className="w-100" src={mizoo.strMealThumb} alt="" />
              </div>

              <div className="sectionTwo  bg-danger  ms-1 col-3 me-0 !important  mt-0 ">
                <h3>{mizoo.strMeal} </h3>
                <h3>{mizoo.strCategory} </h3>
                <p>{mizoo.strInstructions}</p>
                <Link to={mizoo.strYoutube}> {mizoo.strYoutube} </Link>
              </div>
            </div>
          );
        })
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import LoadingScreen from "./../loadingScreen/LoadingScreen";
import { useParams } from "react-router-dom";

export default function MealsDetails() {
  const { id } = useParams();

  const [mealDetail, setmealDetail] = useState(null);

  async function getMealsDetails() {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      console.log(data);
      setmealDetail(data.meals);
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    getMealsDetails();
  }, []);

  return (
    <>
      {mealDetail ? (
        <div className="container row mt-5 ">
          <div className="image col-4">
            <img className="w-100" src={mealDetail[0].strMealThumb} alt="" />
          </div>
          <div className="paragraph col-8">
            <h4>Meal Name : {mealDetail[0].strMeal}</h4>
            <h4>Meal Category :{mealDetail[0].strCategory}</h4>
            <h4>Meal Area :{mealDetail[0].strArea}</h4>
            <p>{mealDetail[0].strInstructions}</p>
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

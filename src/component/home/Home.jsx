import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import imagess from "../../assets/images/IMG01.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingScreen from "../loadingScreen/LoadingScreen";

export default function Home() {
  const [allMeals, setallMeals] = useState(null);

  async function getAllMeals() {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s"
    );
    setallMeals(data.meals);
  }

  useEffect(() => {
    getAllMeals();
  }, []);

  return (
    <>
      <div className=" text-center ">
        <div className="row">
          {allMeals ? (
            allMeals.map(function (mizooo, idx) {
              return (
                <div key={idx} className="col-4 ">
                  <div className="card " style={{ width: " 18rem " }}>
                    <Link to={`/MealsDetails/${mizooo.idMeal}`}>
                      <img
                        className="card-img-top w-100"
                        src={mizooo.strMealThumb}
                        alt="Card image cap"
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{mizooo.strMeal}</h5>
                      <h5>{mizooo.strArea}</h5>
                      <h5>{mizooo.strCategory}</h5>
                      {/* <p className="card-text"> {mizooo.strInstructions}</p> */}

                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <LoadingScreen />
          )}
        </div>
      </div>
    </>
  );
}

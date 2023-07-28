import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingScreen from "./../loadingScreen/LoadingScreen";

export default function Search() {
  const [searchResult, setsearchResult] = useState([]);


  async function searchForMeal(param) {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${param}`
      );
      console.log(data);
      param && data.meals && setsearchResult(data.meals);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <>
      <div className=" container row">
        <div className=" my-5 row">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Meal Name"
              onChange={(e) => {
                if (/^[A-Za-z]+/.test(e.target.value)) {
                  searchForMeal(e.target.value);
                } else {
              
                  setsearchResult([]);
                }
              }}
            />
          </div>

          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search with first Letter"
            />
          </div>
        </div>

        <div className="row">
          {searchResult ? (
            searchResult.map(function (mizooo, idx) {
              return (
                <div key={idx} className="col-4 ">
                  <div className="card " style={{ width: " 18rem " }}>
                    <img
                      className="card-img-top w-100"
                      src={mizooo.strMealThumb}
                      alt="Card image cap"
                    />

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
            <h2>No Meals Found </h2>
          )}
        </div>
      </div>
    </>
  );
}

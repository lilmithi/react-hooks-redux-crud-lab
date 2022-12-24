import React from "react";
import Restaurant from "./Restaurant";

function Restaurants({ restaurants, handleDelete }) {
  const restaurantsRender = restaurants.map((restaurant) => (
    <Restaurant key={restaurant.id} restaurant={restaurant} handleDelete={handleDelete}/>
  ));
  return restaurantsRender;
}

export default Restaurants;

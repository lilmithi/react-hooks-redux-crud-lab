import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";
import { restaurantAdded, restaurantRemoved } from "./restaurantsSlice";

function RestaurantsContainer() {
  const [name, setName] = useState("");
  const restaurants = useSelector((state) => state.restaurants.entities);
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(restaurantAdded(name));
    setName("");
  }

  function onChange(e) {
    setName(e.target.value);
  }

  function onDelete(id) {
    dispatch(restaurantRemoved(id));
  }

  return (
    <div>
      <RestaurantInput handleChange={onChange} handleSubmit={onSubmit} name={name}/>
      <Restaurants restaurants={restaurants} handleDelete={onDelete} />
    </div>
  );
}

export default RestaurantsContainer;

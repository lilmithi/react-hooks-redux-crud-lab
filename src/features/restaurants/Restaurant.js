import React from "react";
import ReviewsContainer from "../reviews/ReviewsContainer";

function Restaurant({ restaurant, handleDelete }) {
  console.log(restaurant);
  return (
    <div>
      <li key={restaurant.id}>
        {restaurant.name}
        <button onClick={() => handleDelete(restaurant.id)}>
          {" "}
          Delete Restaurant{" "}
        </button>
        <ReviewsContainer restaurant={restaurant} />
      </li>
    </div>
  );
}

export default Restaurant;

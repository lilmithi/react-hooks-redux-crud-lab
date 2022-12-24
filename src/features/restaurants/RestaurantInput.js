import React from "react";

function RestaurantInput({ handleChange, handleSubmit, name }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={handleChange} value={name} />
        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
}

export default RestaurantInput;

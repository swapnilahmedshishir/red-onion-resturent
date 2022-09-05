import React from "react";
import "./FoodCatagory.css";
const FoodCatagory = (props) => {
  const { catgory, setCatgory } = props;

  const menuItem = ["breakfast", "lunch", "dinner"];

  return (
    <div className="catgory_item">
      <button
        className={
          catgory === menuItem[0] ? "cataory_btn btn_active" : "cataory_btn"
        }
        onClick={() => setCatgory("breakfast")}
      >
        Breakfast
      </button>
      <button
        className={
          catgory === menuItem[1] ? "cataory_btn btn_active" : "cataory_btn"
        }
        onClick={() => setCatgory("lunch")}
      >
        Lunch
      </button>
      <button
        className={
          catgory === menuItem[2] ? "cataory_btn btn_active" : "cataory_btn"
        }
        onClick={() => setCatgory("dinner")}
      >
        Dinner
      </button>
      <br />
      <br />
    </div>
  );
};

export default FoodCatagory;

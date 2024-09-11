import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";

const categoryColors = {
  Side: "#ffcc00",
  Lamb: "#ff6600",
  Beef: "#cc3300",
  Vegetarian: "#66cc33",
  Starter: "#99ccff",
  Miscellaneous: "#9966cc",
  Dessert: "#ff99cc",
  Seafood: "#3399ff",
  Breakfast: "#ffcc66",
  Pork: "#ff6666",
  Pasta: "#cccc00",
  Chicken: "#cc9966",
  Goat: "#669966",
  Vegan: "#33cc99",
};

const RecipeCard = ({ id, title, image, category }) => {
  const backgroundColor = categoryColors[category] || "#007bff";

  return (
    <Link to={`/recipe/${id}`} className="recipe-card-link">
      <div className="recipe-card">
        <img src={image} alt={title} className="recipe-card-image" />
        <div className="recipe-card-content">
          <h3 className="recipe-card-title">{title}</h3>
        </div>
        <div className="recipe-card-category" style={{ backgroundColor }}>
          <span>{category}</span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;

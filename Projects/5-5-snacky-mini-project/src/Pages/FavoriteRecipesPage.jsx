import React, { useState, useEffect } from "react";
import "./FavoriteRecipesPage.css";
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

const FavoriteRecipesPage = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    if (favorites.length === 0) {
        return (
            <div className="home-page">
                <main className="main-content">
                    <h2 style={{ marginTop: "10%" }}>No favourite recipes yet.</h2>
                </main>
            </div>
        );
    }

    return (
        <div className="home-page">
            <main className="main-content">
                <div className="favorite-recipes-page">
                    <h1>Favourite recipes</h1>
                    <ul className="favorite-recipes-list">
                        {favorites.map((recipe, index) => (
                            <li
                                key={index}
                                className="favorite-recipe-item">
                                <Link to={`/recipe/${recipe.id}`}>
                                    <img
                                        src={recipe.picture}
                                        alt={recipe.dish}
                                        className="favorite-recipe-image"
                                        width={256}
                                    />
                                    <section>
                                        <p>{recipe.dish}</p>
                                        <p>{recipe.cuisine} dish</p>
                                        <p style={{ backgroundColor: categoryColors[recipe.category] }}>{recipe.category}</p>
                                    </section>
                                    <p>{recipe.instructions.split(".").length - 1} steps</p>
                                    <p>{recipe.ingredients.length - 1} ingredients</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default FavoriteRecipesPage;

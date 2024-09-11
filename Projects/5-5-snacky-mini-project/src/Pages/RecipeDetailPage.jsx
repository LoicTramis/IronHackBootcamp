import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import recipes from "../data/database.json";
import "./RecipeDetailPage.css";

const RecipeDetailPage = () => {
    const { id } = useParams();
    const recipe = recipes.find((recipe) => recipe.id === Number(id));
    const recipeBgColor = `var(--${recipe.category.toLowerCase()}-color)`;
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);
    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    const addToFavorites = () => {
        const updatedFavorites = [...favorites, recipe];
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    const formatInstructions = (instructions) => {
        const formatInstructions = instructions.split(".").map((ins) => {
            if (ins !== "") return <li>{ins},</li>;
        });

        return formatInstructions;
    };

    const getNumberSteps = (instructions) => {
        return instructions.split(".").length - 1;
    };

    return (
        <div className="home-page">
            <main className="main-content">
                <div className="recipe-detail-page">
                    <h2>{recipe.dish}</h2>
                    <h3>{recipe.cuisine} dish</h3>
                    <img
                        src={recipe.picture}
                        alt={recipe.dish}
                        className="recipe-detail-image"
                    />
                    <ul className="recipe-label">
                        <li style={{ backgroundColor: recipeBgColor }}>{recipe.category}</li>
                    </ul>
                    <h3 id="ingredients">Ingredients:</h3>
                    <ul className="ingredient-list">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>
                                {ingredient.quantity} of {ingredient.ingredient}
                            </li>
                        ))}
                    </ul>
                    <h3>Instructions</h3>
                    <ol className="recipe-instructions">{formatInstructions(recipe.instructions)}</ol>
                    <aside className="favorite-aside">
                        <p>{recipe.ingredients.length} ingredients</p>
                        <p>{getNumberSteps(recipe.instructions)} steps</p>
                        <button
                            onClick={addToFavorites}
                            className="favorite-button">
                            <Link to="/favorites">Add to Favourites List</Link>
                        </button>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default RecipeDetailPage;

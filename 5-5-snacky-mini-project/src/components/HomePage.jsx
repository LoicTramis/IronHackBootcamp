// src/pages/HomePage.js
import React from "react";
import "./HomePage.css";
import RecipeCard from "./RecipeCard.jsx";

const HomePage = ({ recipes }) => {
    return (
        <div className="home-page">
            <main className="main-content">
                <h2>Welcome to SNACKY</h2>
                <div className="recipe-cards-container">
                    {recipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            id={recipe.id}
                            title={recipe.dish}
                            image={recipe.picture}
                            category={recipe.category}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default HomePage;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import FormPage from "./Pages/FormPage";
import ErrorPage from "./Pages/ErrorPage";
import AboutPage from "./Pages/AboutPage";
import { useState } from "react";
import recipesJSON from "./data/database.json";
import RecipeDetailPage from "./Pages/RecipeDetailPage";
import FavoriteRecipesPage from "./Pages/FavoriteRecipesPage";

function App() {
  const [recipes, setRecipes] = useState(recipesJSON);
  const [search, setSearch] = useState("");
  let filteredRecipes;

  function addRecipe(recipe) {
    setRecipes([recipe, ...recipes]);
  }

  if (search === "") {
    filteredRecipes = recipes;
  } else {
    filteredRecipes = recipes.filter((recipe) => {
      return (
        recipe.dish.toLowerCase().includes(search.toLowerCase()) ||
        recipe.cuisine.toLowerCase().startsWith(search.toLowerCase()) ||
        recipe.category.toLowerCase().startsWith(search.toLowerCase())
      );
    });
  }

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<HomePage recipes={filteredRecipes} />} />
        <Route path="/addRecipe" element={<FormPage addRecipe={addRecipe} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        <Route path="/favorites" element={<FavoriteRecipesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

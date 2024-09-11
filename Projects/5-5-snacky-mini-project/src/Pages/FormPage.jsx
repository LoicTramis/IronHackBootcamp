import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormPage.css";

function FormPage({ addRecipe }) {
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({
        id: crypto.randomUUID(),
        dish: "",
        category: "",
        cuisine: "",
        picture: "",
    });

    function handleChange(event) {
        const { name, value } = event.currentTarget;

        setRecipe({
            ...recipe,
            [name]: value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        addRecipe(recipe);
        navigate("/");
    }
    return (
        <div className="home-page">
            <main className="main-content">
                <h2>Add a recipe</h2>
                <section onSubmit={handleSubmit}>
                    <form className="form-content">
                        <label htmlFor="name">
                            <h3>Name</h3>
                            <input
                                id="dish"
                                name="dish"
                                type="text"
                                value={recipe.dish}
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="image">
                            <h3>Image URL</h3>
                            <input
                                id="picture"
                                name="picture"
                                type="text"
                                value={recipe.picture}
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="category">
                            <h3>Category</h3>
                            <input
                                id="category"
                                name="category"
                                type="text"
                                value={recipe.category}
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="cuisine">
                            <h3>Cuisine</h3>
                            <input
                                id="cuisine"
                                name="cuisine"
                                type="text"
                                value={recipe.cuisine}
                                onChange={handleChange}
                            />
                        </label>
                        <button
                            className="form-button"
                            type="submit">
                            Add recipe
                        </button>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default FormPage;

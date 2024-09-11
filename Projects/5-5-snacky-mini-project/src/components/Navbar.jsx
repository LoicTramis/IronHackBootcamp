import { NavLink } from "react-router-dom";
import "./NavBar.css";

function Navbar({ search, setSearch }) {
    const handleSearch = (e) => {
        setSearch(e.currentTarget.value);
    };
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search a recipe or category"
                        value={search}
                        onChange={handleSearch}
                    />
                </li>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/favorites">Favourites Recipes</NavLink>
                </li>
                <li>
                    <NavLink to="/addRecipe">Add a recipe</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

import { useContext, useEffect, useState } from "react";
import { SeavedSaladsContext, SelectedFruitsContext } from "../../App";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteIcon from "../../assets/delete-icon.svg";
import DeleteIconHover from "../../assets/delete-icon-hover.svg";
import "./Aside.css";

type Fruit = {
  id: number;
  name: string;
  family: string;
  order: string;
  genus: string;
  nutritions: {
    calories: number;
    fat: number;
    sugar: number;
    carbohydrates: number;
    protein: number;
  };
};
type Salad = {
  id: number;
  name: string;
  fruits: number[];
};
const Aside = ({ fruits }) => {
  const { selectedFruits, setSelectedFruits } = useContext(SelectedFruitsContext);
  const { savedSalads } = useContext(SeavedSaladsContext);
  const [salads, setSalads] = useState(null);
  const [isMouseOverButton, setIsMouseOverButton] = useState(null);

  const handleDelete = (event: Event, id: number) => {
    event.preventDefault();
    event.stopPropagation();
    const newSelectedFruits = [...selectedFruits].filter((fruitId) => fruitId !== id);
    setSelectedFruits(new Set(newSelectedFruits));
  };
  const handleMouseEnter = (id: number) => {
    setIsMouseOverButton(id);
  };
  const handleMouseLeave = () => {
    setIsMouseOverButton(null);
  };

  const fetchSalads = async () => {
    const saladsRes = await axios.get(import.meta.env.VITE_URL + `/salads`);
    setSalads(saladsRes.data);
  };

  useEffect(() => {
    fetchSalads();
  }, [savedSalads]);

  return (
    <aside className="fruit-aside">
      <h3>My salads</h3>
      {salads && (
        <>
          <ul>
            {salads.map((salad: Salad) => {
              return (
                <li key={salad.id}>
                  <Link to={`/my-salad/${salad.id}`}>{salad.name}</Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
      <h3>Selected fruits</h3>
      <ul>
        {selectedFruits &&
          [...selectedFruits].map((fruitMap: number) => {
            const foundFruit = fruits.find((fruitFind: Fruit) => fruitFind.id === fruitMap);
            return (
              <li key={foundFruit.id}>
                <Link to={`/fruits/${foundFruit.id}`}>
                  <p>{foundFruit.name}</p>
                </Link>
                <button
                  className="delete-button"
                  onMouseEnter={() => handleMouseEnter(foundFruit.id)}
                  onMouseLeave={() => handleMouseLeave()}
                  onClick={() => handleDelete(event, foundFruit.id)}>
                  {isMouseOverButton !== foundFruit.id && <img src={DeleteIcon} />}
                  {isMouseOverButton === foundFruit.id && <img src={DeleteIconHover} />}
                </button>
              </li>
            );
          })}
      </ul>
    </aside>
  );
};

export default Aside;

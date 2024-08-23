import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SeavedSaladsContext, SelectedFruitsContext } from "../App";
import Aside from "../components/Aside/Aside";
import "./SaladsPage.css";
import axios from "axios";

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
  fruits: number[];
};
const SERVING_SIZE = 150;

const SaladsPage = ({ fruits }) => {
  const { selectedFruits } = useContext(SelectedFruitsContext);
  const { savedSalads, setSavedSalads } = useContext(SeavedSaladsContext);
  const [salad, setSalad] = useState(null);
  const { saladId } = useParams();
  const navigate = useNavigate();

  const findFruit = (fruitId: number) => {
    return fruits.find((fruitFind: Fruit) => fruitFind.id === fruitId);
  };

  const areArraysEqual = (array1: number[], array2: number[]): boolean => {
    if (array1.length !== array2.length) return false;
    array1.sort();
    array2.sort();
    return array1.every((value, index) => value === array2[index]);
  };

  const getAverageCarbs = () => {
    return 0;
  };
  /**
   * Check if the salads already exist in DB before adding
   */
  const handleSave = async () => {
    try {
      const saladRes = await axios.get(import.meta.env.VITE_URL + `/salads`);

      const equalSalads = saladRes.data.filter((salad: Salad) => {
        return areArraysEqual(salad.fruits, [...selectedFruits]);
      });

      if (equalSalads.length !== 0) return null;

      console.log(saladRes.data);
      const newId = saladRes.data.length === 0 ? 1 : saladRes.data.at(-1).id + 1;
      await axios.post(import.meta.env.VITE_URL + `/salads`, {
        id: newId,
        name: `My salad #${newId}`,
        fruits: [...selectedFruits],
      });
      setSavedSalads(new Set([...savedSalads, newId]));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(import.meta.env.VITE_URL + `/salads/${saladId}`);

      const newSavedSalad = [...savedSalads].filter((savedSaladId: number) => savedSaladId !== Number(saladId));
      setSavedSalads(new Set([...newSavedSalad]));

      navigate("/my-salad/0");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSalad = async () => {
    try {
      const saladResponse = await axios.get(import.meta.env.VITE_URL + `/salads/${saladId}`);
      setSalad(saladResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (saladId !== "0") {
      fetchSalad();
    }
  }, [saladId]);

  return (
    <div className="content-page">
      <Aside fruits={fruits} />
      <main className="salads-content">
        <h2>{saladId !== "0" && salad ? salad.name : "My new salad"}</h2>
        {selectedFruits.size === 0 && saladId === "0" && (
          <p className="no-fruit-message">
            <Link to="/fruits">Add fruits</Link> to make your salad
          </p>
        )}
        {(selectedFruits.size !== 0 || saladId !== "0") && (
          <>
            <article className="salads-ingredients">
              <h3>Ingredients</h3>
              <ul>
                {selectedFruits &&
                  saladId === "0" &&
                  [...selectedFruits].map((fruitMap: number) => {
                    const foundFruit = findFruit(fruitMap);
                    return <li key={foundFruit.id}>{foundFruit.name}</li>;
                  })}
                {salad &&
                  saladId !== "0" &&
                  salad.fruits.map((fruitId: number) => {
                    const foundFruit = findFruit(fruitId);
                    return <li key={foundFruit.id}>{foundFruit.name}</li>;
                  })}
              </ul>
            </article>
            <article className="salads-ingredients">
              <h3>Nutrional value</h3>
              <ul className="salads-nutriments">
                <li>
                  <h4>Maccro</h4>
                  <table>
                    <tbody>
                      <tr>
                        <th>Carbohydrate</th>
                        <th>{getAverageCarbs()}</th>
                        <th>{getAverageCarbs()}% of RDI</th>
                      </tr>
                      <tr>
                        <th>Protein</th>
                        <th>{getAverageCarbs()}</th>
                        <th>{getAverageCarbs()}% of RDI</th>
                      </tr>
                      <tr>
                        <th>Fat</th>
                        <th>{getAverageCarbs()}</th>
                        <th>{getAverageCarbs()}% of RDI</th>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li>
                  <h4>Micro</h4>
                  <table>
                    <tbody>
                      <tr>
                        <th>Vitamines</th>
                        <th>{getAverageCarbs()}</th>
                        <th>{getAverageCarbs()}% of RDI</th>
                      </tr>
                      <tr>
                        <th>Minerals</th>
                        <th>{getAverageCarbs()}</th>
                        <th>{getAverageCarbs()}% of RDI</th>
                      </tr>
                      <tr>
                        <th>Oligo-elements</th>
                        <th>{getAverageCarbs()}</th>
                        <th>{getAverageCarbs()}% of RDI</th>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ul>
            </article>
            <article className="salads-buttons">
              {saladId !== "0" && (
                <button className="button-delete" onClick={handleDelete}>
                  Delete
                </button>
              )}
              {saladId === "0" && (
                <button className="button-save" onClick={handleSave}>
                  Save
                </button>
              )}
            </article>
          </>
        )}
      </main>
    </div>
  );
};

export default SaladsPage;

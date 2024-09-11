import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Aside from "../components/Aside/Aside";
import axios from "axios";
import "./FruitPage.css";

const FruitPage = ({ fruits }) => {
  const [fruit, setFruit] = useState(null);
  const [image, setImage] = useState(null);
  const { fruitId } = useParams();

  const fetchFruit = async () => {
    try {
      const responseFruit = await axios.get(import.meta.env.VITE_URL + `/fruits/${fruitId}`);
      setFruit(responseFruit.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchImage = async (name: string) => {
    try {
      const imageSrc = await import(`../assets/images/${name}.png`);
      setImage(imageSrc.default);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchFruit();
  }, [fruitId]);

  useEffect(() => {
    if (fruit && fruit.name) {
      fetchImage(fruit.name);
    }
  }, [fruit]);

  return (
    <div className="content-page">
      <Aside fruits={fruits} />
      {fruit && (
        <main className="fruit-content">
          <h2>{fruit.name}</h2>
          <article>
            <img src={image} alt={fruit.name} />
            <main className="fruit-nutrition">
              <section>
                <h3>Calories</h3>
                <p>{fruit.nutritions.calories} kcal</p>
              </section>
              <section>
                <h3>Carbohydrates</h3>
                <p>{fruit.nutritions.carbohydrates}g / 100g</p>
              </section>
              <section>
                <h3>Sugar</h3>
                <p>{fruit.nutritions.sugar}g / 100g</p>
              </section>
              <section>
                <h3>Fat</h3>
                <p>{fruit.nutritions.fat}g / 100g</p>
              </section>
              <section>
                <h3>Protein</h3>
                <p>{fruit.nutritions.protein}g / 100g</p>
              </section>
            </main>
          </article>
        </main>
      )}
    </div>
  );
};

export default FruitPage;

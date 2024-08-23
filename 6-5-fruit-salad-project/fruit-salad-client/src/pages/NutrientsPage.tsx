import { useEffect, useState } from "react";
import Aside from "../components/Aside/Aside";
import axios from "axios";
import "./NutrientsPage.css";

type Vitamin = {
  id: number;
  letter: string;
  name: string;
  role: string;
};
type Mineral = {
  id: number;
  letter: string;
  name: string;
  role: string;
};

const NutrientsPage = ({ fruits }) => {
  const [vitamins, setVitamins] = useState(null);
  const [minerals, setMinerals] = useState(null);

  const fetchVitamins = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_URL + `/vitamins`);
      setVitamins(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMinerals = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_URL + `/minerals`);
      setMinerals(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVitamins();
    fetchMinerals();
  }, []);

  return (
    <div className="content-page">
      <Aside fruits={fruits} />
      <main className="nutrients-content">
        <h2>Vitamins</h2>
        {vitamins && (
          <article className="nutrients-info">
            <ul>
              {vitamins.map((vitamin: Vitamin) => {
                return (
                  <li key={vitamin.id}>
                    <h3>{vitamin.name}</h3>
                    <section>
                      <p className="nutrient-symbol">{vitamin.letter}</p>
                      <p className="nutrient-role">{vitamin.role}</p>
                    </section>
                  </li>
                );
              })}
            </ul>
          </article>
        )}
        <h2>Minerals</h2>
        {minerals && (
          <article className="nutrients-info">
            <ul>
              {minerals.map((mineral: Mineral) => {
                return (
                  <li key={mineral.id}>
                    <h3>{mineral.name}</h3>
                    <section>
                      <p className="nutrient-symbol">{mineral.letter}</p>
                      <p className="nutrient-role">{mineral.role}</p>
                    </section>
                  </li>
                );
              })}
            </ul>
          </article>
        )}
      </main>
    </div>
  );
};

export default NutrientsPage;

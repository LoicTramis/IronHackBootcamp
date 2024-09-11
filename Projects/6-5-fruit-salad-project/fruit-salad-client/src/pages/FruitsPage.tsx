import React from "react";
import Aside from "../components/Aside/Aside";
import FruitCard from "../components/FruitCard/FruitCard";
import "./FruitsPage.css";

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

const FruitsPage = ({ fruits }) => {
  if (!fruits) {
    return (
      <div className="content-page">
        <Aside fruits={fruits} />
        <main className="main-content">
          <h2>Loading...</h2>
        </main>
      </div>
    );
  }

  return (
    <div className="content-page">
      <Aside fruits={fruits} />
      <main className="fruits-content">
        {fruits.map((fruit: Fruit) => {
          return <FruitCard key={fruit.id} fruit={fruit} />;
        })}
      </main>
    </div>
  );
};

export default FruitsPage;

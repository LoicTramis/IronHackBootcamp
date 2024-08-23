import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import FruitsPage from "./pages/FruitsPage";
import FruitPage from "./pages/FruitPage";
import NutrientsPage from "./pages/NutrientsPage";
import SaladsPage from "./pages/SaladsPage";
import "./App.css";
import axios from "axios";

interface SFContextType {
  selectedFruits: Set<number | any>;
  setSelectedFruits: React.Dispatch<React.SetStateAction<Set<number>>>;
}
interface SSContextType {
  savedSalads: Set<number | any>;
  setSavedSalads: React.Dispatch<React.SetStateAction<Set<number>>>;
}

export const SelectedFruitsContext = createContext<SFContextType | undefined>(undefined);
export const SeavedSaladsContext = createContext<SSContextType | undefined>(undefined);

function App() {
  const [selectedFruits, setSelectedFruits] = useState(new Set());
  const [savedSalads, setSavedSalads] = useState(new Set());
  const [fruits, setFruits] = useState(null);

  const fetchFruits = async () => {
    try {
      const responseFruits = await axios.get(import.meta.env.VITE_URL + `/fruits`);
      setFruits(responseFruits.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <>
      <Header />

      <SelectedFruitsContext.Provider value={{ selectedFruits, setSelectedFruits }}>
        <SeavedSaladsContext.Provider value={{ savedSalads, setSavedSalads }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fruits">
              <Route index element={<FruitsPage fruits={fruits} />} />
              <Route path=":fruitId" element={<FruitPage fruits={fruits} />} />
            </Route>
            <Route path="/nutrients" element={<NutrientsPage fruits={fruits} />} />
            <Route path="/my-salad/:saladId" element={<SaladsPage fruits={fruits} />}></Route>
          </Routes>
        </SeavedSaladsContext.Provider>
      </SelectedFruitsContext.Provider>

      <Footer />
    </>
  );
}

export default App;

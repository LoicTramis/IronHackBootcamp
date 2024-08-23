import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <main className="home-page">
      <header>
        <section>
        <h2>Welcome Fruit Salad!</h2>
        <p className="subtitle">and how to use it</p>
        </section>
      </header>
      <article>
        <section>
          <h3>1. Browse the fruits</h3>
        </section>
        <section>
          <h3>2. Then pick some</h3>
        </section>
      </article>
      <article>
        <section>
          <h3>3. Make your own salad</h3>
        </section>
        <section>
          <h3>4. See the nutritional value</h3>
        </section>
      </article>
      <footer>
        <h3>Enjoy a delicious fruit salad!</h3>
      </footer>
    </main>
  );
};

export default HomePage;

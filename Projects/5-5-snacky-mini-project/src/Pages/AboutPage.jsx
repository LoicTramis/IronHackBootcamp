import "./AboutPage.css";

function AboutPage() {
    return (
        <div className="home-page">
            <main className="main-content">
                <h2>About the devs</h2>
                <article className="about-card">
                    <h3>Alexande Tomolillo</h3>
                    <section className="about-meal">
                        <p>Programming is only a way to show my passion about cooking delicious meal and sharing special tips to make food taste better.</p>
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/marklanders"
                                    target="_blank">
                                    <img
                                        src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
                                        width={64}
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/alexandre-tomolillo-713113118"
                                    target="_blank">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgV3rvl_AvDgG9o7p9b_b1sb1ZVChFrvuNQ&s"
                                        width={64}
                                    />
                                </a>
                            </li>
                        </ul>
                        <p>
                            Favourite dishes: <em>Coq au vin</em> &bull; <em>Crème brûlée</em>
                        </p>
                    </section>
                </article>
                <article className="about-card">
                    <h3>Lo&iuml;c Tramis</h3>

                    <section className="about-meal">
                        <p>I love coding as much as cooking, and gathering recipes from all over the world has never been this much fun.</p>
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/LoicTramis/"
                                    target="_blank">
                                    <img
                                        src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
                                        width={64}
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/lo%C3%AFc-tramis-274295153/"
                                    target="_blank">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgV3rvl_AvDgG9o7p9b_b1sb1ZVChFrvuNQ&s"
                                        width={64}
                                    />
                                </a>
                            </li>
                        </ul>
                        <p>
                            Favourite dishes: <em>Tartiflette</em> &bull; <em>Fraisier</em>
                        </p>
                    </section>
                </article>
            </main>
        </div>
    );
}

export default AboutPage;

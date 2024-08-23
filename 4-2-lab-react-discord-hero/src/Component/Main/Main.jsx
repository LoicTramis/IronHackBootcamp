import Button from "../Button/Button";
import "./Main.css";

const Main = () => {
    return (
        <main className="Main">
            <h2>Imagine a place...</h2>
            <p>Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out</p>
            <Button
                text="Download for Mac"
                color="black"
                bgColor="white"
            />
            <Button
                text="Open discord in your browser"
                color="white"
                bgColor="black"
            />
        </main>
    );
};

export default Main;

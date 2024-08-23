import "./App.css";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import DiscordBg from "/src/assets/discord-background.png";

function App() {
    return (
        <>
            <Header />
            <Main />
            <img
                style={{
                    position: "fixed",
                    bottom: 0,
                    right: "20px",
                }}
                src={DiscordBg}
                alt="Discord bg"
            />
        </>
    );
}

export default App;

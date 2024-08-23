import Navbar from "./Navbar";
import SnackyLogo from "/src/assets/snacky.svg";
import "./Header.css";

function Header({ search, setSearch }) {
    return (
        <header className="Header">
            <section className="logoTitle">
                <img
                    src={SnackyLogo}
                    alt="Snacky logo"
                    width={48}
                />
                <h1>Snacky</h1>
            </section>
            <Navbar
                search={search}
                setSearch={setSearch}
            />
        </header>
    );
}

export default Header;

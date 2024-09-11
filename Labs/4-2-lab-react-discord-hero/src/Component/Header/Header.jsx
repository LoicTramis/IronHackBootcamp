import DiscordLogo from "/src/assets/discord-logo-white.png";
import MenuIcon from "/src/assets/menu-icon.png";
import "./Header.css";

const Header = () => {
    return (
        <header className="Header">
            <nav>
                <img
                    src={DiscordLogo}
                    alt="discord logo"
                    height={50}
                />
                <img
                    src={MenuIcon}
                    alt="menu icon"
                    height={50}
                />
            </nav>
        </header>
    );
};

export default Header;

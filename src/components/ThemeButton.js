import { useTheme } from "../ThemeContext";
import { LuSun, LuMoon } from "react-icons/lu";

const ThemeButton = () => {
    const { theme, toggleTheme } = useTheme();
    let themestatus = theme;

    return (
        <button className="themeBtn" onClick={toggleTheme}>
            {themestatus === "light" ? <LuMoon /> : <LuSun />}
        </button>
    );
};

export default ThemeButton;

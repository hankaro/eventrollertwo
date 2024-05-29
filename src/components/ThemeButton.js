import { useTheme } from "../ThemeContext";

const ThemeButton = () => {
 const { theme, toggleTheme } = useTheme();
 let themestatus = theme;
 return (
    <button className="themeBtn" onClick={toggleTheme}>{themestatus}</button>
 );
};

export default ThemeButton;
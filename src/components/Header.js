import { useState } from 'react';
import Navi from "./Navi";
import ThemeButton from "./ThemeButton";
import Dicelogo from "../dicelogo.png";
import { LuMenu } from "react-icons/lu";

const Header  = () =>  {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((open) => !open);
        console.log("Tila: ", isOpen);
    }

    return (
        <>
        <header>
        <div className='header-lg'><ThemeButton /></div>
        <div className='header-mob'>
        <div className='header-text'><img src={Dicelogo} alt="Logo" className="headerlogo" /> EventRoller</div>
        <button className="nav-toggle" onClick={handleClick}><LuMenu /></button>
        </div>
        </header>
        <div className={`mobile-nav ${isOpen ? "is-open" : ""}`}><Navi /><ThemeButton /></div>
        </>
    )
}

export default Header
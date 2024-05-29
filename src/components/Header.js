import { useState } from 'react';
import Navi from "./Navi";
import ThemeButton from "./ThemeButton";

const Header  = () =>  {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((open) => !open);
        console.log("Tila: ", isOpen);
    }

    

    return (
        <>
        <header>
        <h1>Header</h1>
        <button className="nav-toggle" onClick={handleClick}>Klikkaa mua</button>
        </header>
        <div class={`mobile-nav ${isOpen ? "is-open" : ""}`}><Navi /><ThemeButton /></div>
        </>
    )
}

export default Header
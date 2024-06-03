import { NavLink } from "react-router-dom";
import { LuCastle, LuSwords, LuDices } from "react-icons/lu";

function Navi() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active">
                            <div className="nav-icon"><LuDices /></div> 
                            Travel events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/townevents" activeClassName="active">
                            <div className="nav-icon"><LuCastle /></div> 
                            Town Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/raidevents" activeClassName="active">
                            <div className="nav-icon"><LuSwords /></div> 
                            Raid events
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navi;

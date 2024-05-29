
import { Link } from "react-router-dom";

function Navi(){
    return (
        <>
        <nav>
        <ul>
            <li><Link to="/">Travel events</Link></li>
            <li><Link to="/townevents">Town Events</Link></li>
            <li><Link to="/raidevents">Town raid events</Link></li>
        </ul>
    </nav>
        </>
    )
}

export default Navi
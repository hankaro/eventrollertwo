import data from './events/travelEvents'
import FlipCard from '../components/Flipcard';

const TownEvents = () => {
    return (
        <div className='main-content'>
            <div className='content-left'>
            <h1>Travel events</h1>
            <p>In the world of Dungeons and Dragons, the unexpected lurks around every corner, transforming each journey into a thrilling adventure. </p>

            <p>This Random Travel Encounter roller brings this excitement to your campaign, offering a wealth of potential scenarios that can occur during your party's travels.
            </p>
            
            <p>From simple combat encounters to intricate role-play opportunities, these encounters are tailored to fit various environments, adding realism and unpredictability to your game.</p>
            
            <p>Click the button and discover what fate has in store for your adventurers!</p>
            </div>
            
            <div className='content-right'>
            <FlipCard data={data}/>
            </div>
           
        </div>
    )
}

export default TownEvents;

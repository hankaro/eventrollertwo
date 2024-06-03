import { useState } from 'react';
import data from './events/travelEvents'
import FlipCard from '../components/Flipcard';

const TownEvents = () => {
    return (
        <div>
            <h1>Town events</h1>
            <FlipCard data={data} />
        </div>
    )
}

export default TownEvents;

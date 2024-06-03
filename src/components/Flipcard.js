// src/FlipCard.js
import React, { useState } from 'react';
import { LuDices } from "react-icons/lu";

const FlipCard = ({ data }) => {
    const [num, setNum] = useState(0);

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(prevIsFlipped => !prevIsFlipped);
        setTimeout(() => {
            setNum(randomNumberInRange(1, 100));
            setIsFlipped(prevIsFlipped => !prevIsFlipped);
        }, 1000);
    };

    const Message = ({ num }) => {
        let message = "";
        if (num > 0) {
            message = data.entries[num - 1];
        } else {
            num = "--"
            message = "(Click the button below to roll an event)";
        }

        return (
            <div className="flip-card-front">
                <div className='card-heading'>Event No.</div>
                <div className='card-number'>{num}</div>
                <div className='card-text'>{message}</div>
            </div>
        );
    }

    return (
        <div>
            <div className="flip-card">
                <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                    <div className="flip-card-front">
                        <Message num={num} />
                    </div>
                    <div className="flip-card-back">
                        <div className='back-icon'><LuDices /></div>
                    </div>
                </div>
            </div>
            <button onClick={handleClick} className='rollbtn'>Get a random event</button>
        </div>
    )
}

export default FlipCard;

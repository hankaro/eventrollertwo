// src/FlipCard.js
import React, { useState } from 'react';
import './FlipCard.css';

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
            num = num;
            message = data.entries[num - 1];
        } else {
            num = ""
            message = "Roll for event";
        }

        return (
            <div className="flip-card-front">
                <h1>{num}</h1>
                <p>{message}</p>
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
                        <h1>Back Side</h1>
                    </div>
                </div>
                <button onClick={handleClick}>Flip Card</button>
            </div>
        </div>
    )
}

export default FlipCard;

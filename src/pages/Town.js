import { useState } from 'react';

const Town = () => {
    const [num, setNum] = useState(0);
    
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
    
    const handleClick = () => {
        setNum(randomNumberInRange(1, 100));
    };

    const Message = ({ num }) => {
        let message = "";
        if (num > 0) {
            message = "You rolled " + num;
        } else {
            message = "Roll for event";
        }

        return (
            <p>{message}</p>
        );
    }

    return (
        <div>
        <h1>Town events</h1>
        <Message num={num} />
        <button onClick={handleClick}>Roll</button>
        </div>
    )
}

export default Town;
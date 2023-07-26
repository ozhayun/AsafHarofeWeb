import React, { useState } from 'react';
import './Dice.css';
import dice1 from '../../Public/GamePage/1.png';
import dice2 from '../../Public/GamePage/2.png';
import dice3 from '../../Public/GamePage/3.png';
import dice4 from '../../Public/GamePage/4.png';
import dice5 from '../../Public/GamePage/5.png';
import dice6 from '../../Public/GamePage/6.png';
import { Button } from "@mui/material";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = ({ updatePlayerPosition }) => {
    const [diceNumber, setDiceNumber] = useState(1);

    const rollDice = () => {
        const newDiceNumber = Math.floor(Math.random() * 6) + 1;
        setDiceNumber(newDiceNumber);
        updatePlayerPosition(newDiceNumber);
    };

    return (
        <div className="dice-container">
            {diceImages.map((diceImage, index) => (
                <img
                    key={index}
                    id={`DiceImage-${index + 1}`}
                    className={`dice-image ${diceNumber === index + 1 ? 'visible' : ''}`}
                    src={diceImage}
                    alt={`Dice ${index + 1}`}
                />
            ))}
            <Button id="RollButton" onClick={rollDice}>הטל</Button>
        </div>
    );
};

export default Dice;

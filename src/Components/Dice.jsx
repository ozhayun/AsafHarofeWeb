import './Dice.css';
import React, {useEffect, useState} from 'react';
import dice1 from '../../Public/GamePage/1.png';
import dice2 from '../../Public/GamePage/2.png';
import dice3 from '../../Public/GamePage/3.png';
import dice4 from '../../Public/GamePage/4.png';
import dice5 from '../../Public/GamePage/5.png';
import dice6 from '../../Public/GamePage/6.png';
import {SoundContext} from "../Sound/SoundContext.jsx";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = ({ updatePlayerPosition }) => {
    const [diceNumber, setDiceNumber] = useState(1);
    const [animate, setAnimate] = useState(false);
    const {playDiceRollSound} = React.useContext(SoundContext);


    const rollDice = () => {
        const newDiceNumber = Math.floor(Math.random() * 6) + 1;
        setDiceNumber(newDiceNumber);
        playDiceRollSound();
        updatePlayerPosition(newDiceNumber);
        setAnimate(true);
    };

    useEffect(() => {
        if (animate) {
            const animationTimeout = setTimeout(() => {
                setAnimate(false);
            }, 500); // The same duration as the CSS animation (0.5s)

            return () => clearTimeout(animationTimeout);
        }
    }, [animate]);

    return (
        <div className="dice-container" onClick={rollDice}>
            <div className={`dice-images ${animate ? 'animate' : ''}`}>
                {diceImages.map((diceImage, index) => (
                    <img
                        key={index}
                        id={`DiceImage-${index + 1}`}
                        className={`dice-image ${diceNumber === index + 1 ? 'visible' : ''}`}
                        src={diceImage}
                        alt={`Dice ${index + 1}`}
                    />
                ))}
            </div>
            <div id="RollText">הטל</div>
        </div>
    );
};

export default Dice;

import './GamePage.css'
import CustomToolbar from "../../Components/CustomToolbar.jsx";
import * as React from "react";
import { useLocation } from 'react-router-dom';
import { Button } from "@mui/material";
import Dice from '../../Components/Dice';
import { useState } from "react";
import vetLionImagePath from "../../../Public/HomePage/VetLion.png";
import vetPandaImagePath from "../../../Public/HomePage/VetPanda.png";
import vetMonkeyImagePath from "../../../Public/HomePage/VetMonkey.png";
import vetDogImagePath from "../../../Public/HomePage/VetDog.png";

const GamePage = () => {
    const location = useLocation();
    const {pain, animal} = location.state || {};
    const [diceNumber, setDiceNumber] = useState(1);

    console.log("Pain: ", pain, "Animal: ", animal)

    const rollDice = () => {
        const newDiceNumber = Math.floor(Math.random() * 6) + 1;
        setDiceNumber(newDiceNumber);
    };

    const animalClass = `animal ${animal || ''}`; // Use an empty string as a fallback if 'animal' is not provided

    let animalImage;
    switch (animal) {
        case 'dog':
            animalImage = vetDogImagePath;
            break;
        case 'lion':
            animalImage = vetLionImagePath;
            break;
        case 'monkey':
            animalImage = vetMonkeyImagePath;
            break;
        case 'panda':
            animalImage = vetPandaImagePath;
            break;
        default:
            animalImage = null;
    }

    return (
        <div className="container">
            <div className="toolbar-container">
                <CustomToolbar toolbarTitle="סולמות ומגלשות"/>
            </div>
            <div className="game-board">
                {Array.from({length: 100}, (_, index) => (
                    <div className="cell" key={index}/>
                ))}
            </div>
            <div className={animalClass}>
                {animalImage && <img src={animalImage} alt={animal} className="animal-image"/>}
                <div className='rectangleDice'>
                    <Dice diceNumber={diceNumber}/>
                    <Button id="RollButton" onClick={rollDice}>הטל</Button>
                </div>
            </div>
        </div>
    );
};

export default GamePage;

import './GamePage.css'
import CustomToolbar from "../../Components/CustomToolbar.jsx";
import * as React from "react";
import { useLocation } from 'react-router-dom';
import {Button} from "@mui/material";
import Dice from '../../Components/Dice';
import {useState} from "react";



const GamePage = () => {
    const location = useLocation();
    const { pain, animal } = location.state || {};
    const [diceNumber, setDiceNumber] = useState(1);

    console.log("Pain: ", pain, "Animal: ", animal)

    const rollDice = () => {
        const newDiceNumber = Math.floor(Math.random() * 6) + 1;
        setDiceNumber(newDiceNumber);
    };

    return (
        <div className="container">
            <div className="toolbar-container">
                <CustomToolbar toolbarTitle="סולמות ומגלשות"/>
            </div>
            <div className="game-board">
                {Array.from({ length: 100 }, (_, index) => (
                    <div className="cell" key={index} />
                ))}
            </div>
            <div className="animal background">
                <Dice diceNumber={diceNumber}/>
                <Button id="RollButton" onClick={rollDice}>הטל</Button>
            </div>
        </div>
    );
};

export default GamePage;

import './GamePage.css'
import CustomToolbar from "../../Components/CustomToolbar.jsx";
import * as React from "react";
import { useLocation } from 'react-router-dom';
import Dice from '../../Components/Dice';
import vetLionImagePath from "../../../Public/HomePage/VetLion.png";
import vetPandaImagePath from "../../../Public/HomePage/VetPanda.png";
import vetMonkeyImagePath from "../../../Public/HomePage/VetMonkey.png";
import vetDogImagePath from "../../../Public/HomePage/VetDog.png";
import slideImagePath from "../../../Public/GamePage/water-slide-04 1.png";

const GamePage = () => {
    const location = useLocation();
    const {pain, animal} = location.state || {};

    console.log("Pain: ", pain, "Animal: ", animal)

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
                {Array.from({length: 100}, (_, index) => {
                    const x = Math.floor(index / 10);
                    const y = index % 10;
                    const isOddRow = x % 2 !== 0;
                    const cellNumber = isOddRow ? (9 - x) * 10 + (10 - y) : (9 - x) * 10 + y + 1;
                    return (
                        <div className="cell" key={index}>
                            <span className="cell-number">{cellNumber}</span>
                        </div>
                    );
                })}
                <div className="slide-image1">
                    <img src={slideImagePath} alt="Slide" className="slide-image1" />
                </div>
                <div className="slide-image2">
                    <img src={slideImagePath} alt="Slide" className="slide-image2" />
                </div>
            </div>





            <div className={animalClass}>
                {animalImage && <img src={animalImage} alt={animal} className="animal-image"/>}
                <div className='rectangleDice'>
                    <Dice/>
                </div>
            </div>
        </div>
    );
};

export default GamePage;

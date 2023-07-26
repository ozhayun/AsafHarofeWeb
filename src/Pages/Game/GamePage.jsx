import './GamePage.css'
import CustomToolbar from "../../Components/CustomToolbar.jsx";
import * as React from "react";
import { useLocation } from 'react-router-dom';
import vetLionImagePath from "../../../Public/HomePage/VetLion.png";
import vetPandaImagePath from "../../../Public/HomePage/VetPanda.png";
import vetMonkeyImagePath from "../../../Public/HomePage/VetMonkey.png";
import vetDogImagePath from "../../../Public/HomePage/VetDog.png";
// import vetLionPlayerImagePath from "../../../Public/GamePage/lionPlayer.png";
// import vetPandaPlayerImagePath from "../../../Public/GamePage/pandaPlayer.png";
// import vetMonkeyPlayerImagePath from "../../../Public/GamePage/monkeyPlayer.png";
// import vetDogPlayerImagePath from "../../../Public/GamePage/dogPlayer.png";
import slideImagePath from "../../../Public/GamePage/water-slide.png";
import ladderImagePath from "../../../Public/GamePage/ladder.png";
import Dice from "../../Components/Dice.jsx";

const GamePage = () => {
    const location = useLocation();
    const {pain, animal} = location.state || {};

    console.log("Pain: ", pain, "Animal: ", animal)

    const animalClass = `animal ${animal || ''}`; // Use an empty string as a fallback if 'animal' is not provided

    let animalImage, playerImage;
    switch (animal) {
        case 'dog':
            animalImage = vetDogImagePath;
            // playerImage = vetDogPlayerImagePath;
            break;
        case 'lion':
            animalImage = vetLionImagePath;
            // playerImage = vetLionPlayerImagePath;
            break;
        case 'monkey':
            animalImage = vetMonkeyImagePath;
            // playerImage = vetMonkeyPlayerImagePath;
            break;
        case 'panda':
            animalImage = vetPandaImagePath;
            // playerImage = vetPandaPlayerImagePath;
            break;
        default:
            animalImage = null;
            playerImage = null;
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

                    if (cellNumber === 1) {
                        return (
                            <div className="cell" key={index}>
                                <span className="cell-number">{cellNumber}</span>
                                <img src={playerImage} alt="Player" className="player-image"/>
                            </div>
                        );
                    }

                    return (
                        <div className="cell" key={index}>
                            <span className="cell-number">{cellNumber}</span>
                        </div>
                    );
                })}

            <div className="slide-image1">
                <img src={slideImagePath} alt="Slide" className="slide-image1"/>
            </div>
            <div className="slide-image2">
                <img src={slideImagePath} alt="Slide" className="slide-image2"/>
            </div>
            <div className="slide-image3">
                <img src={slideImagePath} alt="Slide" className="slide-image3"/>
            </div>

            <div className="ladder-image1">
                <img src={ladderImagePath} alt="Slide" className="ladder-image1"/>
            </div>
            <div className="ladder-image2">
                <img src={ladderImagePath} alt="Slide" className="ladder-image2"/>
            </div>
            <div className="ladder-image3">
                <img src={ladderImagePath} alt="Slide" className="ladder-image3"/>
            </div>
            <div className="ladder-image4">
                <img src={ladderImagePath} alt="Slide" className="ladder-image4"/>
            </div>

            <div className={animalClass}>
                {animalImage && <img src={animalImage} alt={animal} className="animal-image"/>}
                <div className='rectangleDice'>
                    <Dice/>
                </div>
            </div>
        </div>
    </div>
    );
};
export default GamePage;

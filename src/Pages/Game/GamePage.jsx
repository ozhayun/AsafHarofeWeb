import './GamePage.css';
import CustomToolbar from "../../Components/CustomToolbar.jsx";
import * as React from "react";
import { useLocation } from 'react-router-dom';
import Dice from '../../Components/Dice';
import CutBoard from '../../Components/MedicalBoards/CutBoard';
import vetLionImagePath from "../../../Public/HomePage/VetLion.png";
import vetPandaImagePath from "../../../Public/HomePage/VetPanda.png";
import vetMonkeyImagePath from "../../../Public/HomePage/VetMonkey.png";
import vetDogImagePath from "../../../Public/HomePage/VetDog.png";
import vetLionPlayerImagePath from "../../../Public/GamePage/lionPlayer.png";
import vetPandaPlayerImagePath from "../../../Public/GamePage/pandaPlayer.png";
import vetMonkeyPlayerImagePath from "../../../Public/GamePage/monkeyPlayer.png";
import vetDogPlayerImagePath from "../../../Public/GamePage/dogPlayer.png";

const GamePage = () => {
    const [playerPosition, setPlayerPosition] = React.useState(1);
    const location = useLocation();
    const {pain, animal} = location.state || {};
    const animalClass = `animal ${animal || ''}`; // Use an empty string as a fallback if 'animal' is not provided

    let animalImage, playerImage;
    switch (animal) {
        case 'dog':
            animalImage = vetDogImagePath;
            playerImage = vetDogPlayerImagePath;
            break;
        case 'lion':
            animalImage = vetLionImagePath;
            playerImage = vetLionPlayerImagePath;
            break;
        case 'monkey':
            animalImage = vetMonkeyImagePath;
            playerImage = vetMonkeyPlayerImagePath;
            break;
        case 'panda':
            animalImage = vetPandaImagePath;
            playerImage = vetPandaPlayerImagePath;
            break;
        default:
            animalImage = null;
            playerImage = null;
    }

    const [ladders, setLadders] = React.useState({});

    const handleLaddersChange = (newLadders) => {
        setLadders(newLadders);
    };

    const [slides, setSlides] = React.useState({});

    const handleSlidesChange = (newSlides) => {
        setSlides(newSlides);
    };

    const updatePlayerPosition = async (rollResult) => {
        const startPosition = playerPosition;
        const endPosition = Math.min(playerPosition + rollResult, 100);

        for (let newPos = startPosition + 1; newPos <= endPosition; newPos++) {
            await new Promise((resolve) => setTimeout(resolve, 200));
            setPlayerPosition(newPos);
        }

        if (ladders.hasOwnProperty(endPosition)) {
            await new Promise((resolve) => setTimeout(resolve, 200));
            setPlayerPosition(ladders[endPosition]);
        }

        if (slides.hasOwnProperty(endPosition)) {
            await new Promise((resolve) => setTimeout(resolve, 200));
            setPlayerPosition(slides[endPosition]);
        }
    };


    return (
        <div className="container">
            <div className="toolbar-container">
                <CustomToolbar toolbarTitle="סולמות ומגלשות"/>
            </div>

           <CutBoard playerPosition={playerPosition}
                     playerImage={playerImage}
                     onLaddersChange={handleLaddersChange}
                     onSlidesChange={handleSlidesChange}/>

            <div className={animalClass}>
                {animalImage && <img src={animalImage} alt={animal} className="animal-image"/>}
                <div className='rectangleDice'>
                    <Dice updatePlayerPosition={updatePlayerPosition} />
                </div>
            </div>
        </div>
    );
};

export default GamePage;
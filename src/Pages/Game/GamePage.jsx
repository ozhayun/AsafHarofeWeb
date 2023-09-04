import './GamePage.css';
import CustomToolbar from "../../Components/CustomToolbar.jsx";
import * as React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Dice from '../../Components/Dice';
import CutBoard from '../../Components/MedicalBoards/CutBoard';
import PopUp from '../../Components/PopUp'
import vetLionImagePath from "../../../Public/HomePage/VetLion.png";
import vetPandaImagePath from "../../../Public/HomePage/VetPanda.png";
import vetMonkeyImagePath from "../../../Public/HomePage/VetMonkey.png";
import vetDogImagePath from "../../../Public/HomePage/VetDog.png";
import vetLionPlayerImagePath from "../../../Public/GamePage/lionPlayer.png";
import vetPandaPlayerImagePath from "../../../Public/GamePage/pandaPlayer.png";
import vetMonkeyPlayerImagePath from "../../../Public/GamePage/monkeyPlayer.png";
import vetDogPlayerImagePath from "../../../Public/GamePage/dogPlayer.png";
import FeverBoard from "../../Components/MedicalBoards/FeverBoard.jsx";
import AbdominalPainBoard from "../../Components/MedicalBoards/AbdominalPainBoard.jsx";
import InjuryBoard from "../../Components/MedicalBoards/InjuryBoard.jsx";
import {SoundContext} from "../../Sound/SoundContext.jsx";
import confetti from 'canvas-confetti';

const GamePage = () => {
    const [playerPosition, setPlayerPosition] = React.useState(1);
    const [ladders, setLadders] = React.useState({});
    const [slides, setSlides] = React.useState({});
    const [isPopUpOpen, setIsPopUpOpen] = React.useState(false);
    const [popUpContent, setPopUpContent] = React.useState("");
    const [popUpImage, setPopUpImage] = React.useState("");
    const [popUpCells, setPopUpCells] = React.useState([]);
    const [popUpMessages, setPopUpMessages] = React.useState([]);
    const [popUpImages, setPopUpImages] = React.useState([]);
    const [isGamePaused, setIsGamePaused] = React.useState(false);
    const [isPlayerWin, setIsPlayerWin] = React.useState(false);
    const [resetKey, setResetKey] = React.useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const {pain, animal} = location.state || {};
    const animalClass = `animal ${animal || ''}`;
    const {playWinSound, playSlideSound, playLadderSound, playJumpSound} = React.useContext(SoundContext);

    let animalHebrew, animalImage, playerImage;
    switch (animal) {
        case 'dog':
            animalImage = vetDogImagePath;
            playerImage = vetDogPlayerImagePath;
            animalHebrew = 'כלב';
            break;
        case 'lion':
            animalImage = vetLionImagePath;
            playerImage = vetLionPlayerImagePath;
            animalHebrew = 'אריה';
            break;
        case 'monkey':
            animalImage = vetMonkeyImagePath;
            playerImage = vetMonkeyPlayerImagePath;
            animalHebrew = 'קוף';
            break;
        case 'panda':
            animalImage = vetPandaImagePath;
            playerImage = vetPandaPlayerImagePath;
            animalHebrew = 'פנדה';
            break;
        default:
            animalImage = null;
            playerImage = null;
            animalHebrew = null;
    }

    const handleLaddersChange = (newLadders) => {
        setLadders(newLadders);
    }

    const handleSlidesChange = (newSlides) => {
        setSlides(newSlides);
    };

    const updatePlayerPosition = async (rollResult) => {
        const startPosition = playerPosition;
        const endPosition = Math.min(playerPosition + rollResult, 100);

        // Use a loop to move the player
        for (let newPos = startPosition + 1; newPos <= endPosition; newPos++) {
            setPlayerPosition(newPos);

            // Wait for a short delay between animation steps
            await new Promise((resolve) => setTimeout(resolve, 400));

            // If the player reaches cell 100, show victory popup and return
            if (newPos === 100) {
                handlePlayerWin();
                return;
            }
        }

        if (ladders.hasOwnProperty(endPosition)) {
            playLadderSound();
            await new Promise((resolve) => setTimeout(resolve, 200));
            setPlayerPosition(ladders[endPosition]);
        }

        if (slides.hasOwnProperty(endPosition)) {
            playSlideSound();
            await new Promise((resolve) => setTimeout(resolve, 200));
            setPlayerPosition(slides[endPosition]);
        }
    };

    const checkCellPopups = (playerPosition) => {
        if (popUpMessages.length !== 0 || playerPosition === 100) {
            const cellIndex = popUpCells.indexOf(playerPosition);
            if (cellIndex !== -1) {
                openPopUp(popUpMessages[0], popUpImages[0]);
                setPopUpCells(prevItems => prevItems.filter((_, index) => index !== cellIndex));
                setPopUpMessages(prevMessages => prevMessages.filter((_, index) => index !== 0))
                setPopUpImages(prevImage => prevImage.filter((_, index) => index !== 0))
            }
        }
    };

    React.useEffect(() => {
        checkCellPopups(playerPosition);
    }, [playerPosition]);


    const openPopUp = (content, image) => {
        setPopUpContent(content);
        setPopUpImage(image);
        setIsPopUpOpen(true);
        setIsGamePaused(true)
    };

    const closePopUp = () => {
        setIsPopUpOpen(false);
        setIsGamePaused(false)
    };

    const handlePlayerWin = () => {
        playWinSound();
        launchConfetti();
        setIsPopUpOpen(true);
        setIsPlayerWin(true);
        setIsGamePaused(true);
    }

    const launchConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: {y: 0.6}
        });
    }

    const navigateHome = () => {
        setIsPopUpOpen(false);
        setIsPlayerWin(false)
        navigate('/');
    };

    const restartGame = () => {
        setIsPopUpOpen(false);
        setIsPlayerWin(false)
        setPlayerPosition(1);
        setResetKey(prevKey => prevKey + 1);
    };

    return (
        <div className="game-page">
            <CustomToolbar toolbarTitle="סולמות ומגלשות"/>

            {/*Medical Board*/}
            {pain === 'cut' ? (
                <CutBoard animalHebrew={animalHebrew}
                          playerPosition={playerPosition}
                          playerImage={playerImage}
                          onLaddersChange={handleLaddersChange}
                          onSlidesChange={handleSlidesChange}
                          setPopUpCells={setPopUpCells}
                          setPopUpMessages={setPopUpMessages}
                          setPopUpImages={setPopUpImages}
                          resetKey={resetKey}
                />
            ) : pain === 'fever' ? (
                <FeverBoard animalHebrew={animalHebrew}
                            playerPosition={playerPosition}
                            playerImage={playerImage}
                            onLaddersChange={handleLaddersChange}
                            onSlidesChange={handleSlidesChange}
                            setPopUpCells={setPopUpCells}
                            setPopUpMessages={setPopUpMessages}
                            setPopUpImages={setPopUpImages}
                            resetKey={resetKey}
                />
            ) : pain === 'injury' ? (
                <InjuryBoard animalHebrew={animalHebrew}
                             playerPosition={playerPosition}
                             playerImage={playerImage}
                             onLaddersChange={handleLaddersChange}
                             onSlidesChange={handleSlidesChange}
                             setPopUpCells={setPopUpCells}
                             setPopUpMessages={setPopUpMessages}
                             setPopUpImages={setPopUpImages}
                             resetKey={resetKey}
                />
            ) : pain === 'abdominalPain' ? (
                <AbdominalPainBoard animalHebrew={animalHebrew}
                                    playerPosition={playerPosition}
                                    playerImage={playerImage}
                                    onLaddersChange={handleLaddersChange}
                                    onSlidesChange={handleSlidesChange}
                                    setPopUpCells={setPopUpCells}
                                    setPopUpMessages={setPopUpMessages}
                                    setPopUpImages={setPopUpImages}
                                    resetKey={resetKey}
                />
            ) : null
            }

            <PopUp isOpen={isPopUpOpen}
                   isPlayerWin={isPlayerWin}
                   content={popUpContent}
                   image={popUpImage}
                   closePopup={closePopUp}
                   restartGame={restartGame}
                   navigateHome={navigateHome}/>

            <div className={animalClass}>
                {animalImage && <img src={animalImage} alt={animal} className="animal-image"/>}
                <div className='rectangleDice'>
                    <Dice updatePlayerPosition={updatePlayerPosition}/>
                </div>
            </div>
        </div>
    );
};

export default GamePage;
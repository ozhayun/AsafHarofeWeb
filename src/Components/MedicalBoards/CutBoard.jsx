import "./CutBoard.css"
import slideImagePath from "../../../Public/GamePage/water-slide.png";
import ladderImagePath from "../../../Public/GamePage/ladder.png";
import * as React from "react";
import Board from "../Board.jsx";

const ladders = {
    3: 22,
    9: 48,
    26: 76,
    78: 99 };

const slides = {
    24: 16,
    62: 44,
    94: 72 };

const popupCells = {
    3: 'שלום!\n מיד האחות תקבל אותך, תעצור את הדימום, תבדוק לך דופק, לחץ דם וחום',
    9: 'You passed cell 9!',
    24: 'You passed cell 24!',
    26: 'You passed cell 26!',
    62: 'You passed cell 62!',
    78: 'You passed cell 78!',
    94: 'You passed cell 94!',
};

const CutBoard = ({playerPosition, playerImage, onLaddersChange, onSlidesChange, openPopUp }) => {
    React.useEffect(() => {
        onLaddersChange(ladders);
    }, [ladders, onLaddersChange]);

    React.useEffect(() => {
        onSlidesChange(slides);
    }, [slides, onSlidesChange]);

    const checkCellPopups = (playerPosition) => {
        if (Object.keys(popupCells).includes(String(playerPosition))) {
            openPopUp(popupCells[playerPosition]);
        }
    };

    React.useEffect(() => {
        checkCellPopups(playerPosition);
    }, [playerPosition]);

    return (
        <div className="game-board-container">
            <Board playerPosition={playerPosition} playerImage={playerImage}/>

            <div className="slide-image1">
                <img src={slideImagePath} alt="Slide" className="slide-image1" />
            </div>
            <div className="slide-image2">
                <img src={slideImagePath} alt="Slide" className="slide-image2" />
            </div>
            <div className="slide-image3">
                <img src={slideImagePath} alt="Slide" className="slide-image3" />
            </div>

            <div className="ladder-image1">
                <img src={ladderImagePath} alt="Slide" className="ladder-image1" />
            </div>
            <div className="ladder-image2">
                <img src={ladderImagePath} alt="Slide" className="ladder-image2" />
            </div>
            <div className="ladder-image3">
                <img src={ladderImagePath} alt="Slide" className="ladder-image3" />
            </div>
            <div className="ladder-image4">
                <img src={ladderImagePath} alt="Slide" className="ladder-image4" />
            </div>
            <div className="ladder-image5">
                <img src={ladderImagePath} alt="Slide" className="ladder-image5" />
            </div>
            <div className="ladder-image6">
                <img src={ladderImagePath} alt="Slide" className="ladder-image6" />
            </div>
            <div className="ladder-image7">
                <img src={ladderImagePath} alt="Slide" className="ladder-image7" />
            </div>
        </div>
    )
}


export default CutBoard
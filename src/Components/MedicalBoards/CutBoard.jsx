import "./CutBoard.css"
import slideImagePath from "../../../Public/GamePage/water-slide.png";
import ladderImagePath from "../../../Public/GamePage/ladder.png";
import * as React from "react";
import Board from "../Board.jsx";

const CutBoard = ({playerPosition, playerImage, onLaddersChange }) => {
    const ladders = { 2:22, 3: 23, 4:24, 5:25, 6:26, 7:27 };

    React.useEffect(() => {
        // Notify the parent component (GamePage) about the ladders dictionary when it changes
        onLaddersChange(ladders);
    }, [ladders, onLaddersChange]);

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
        </div>
    )
}


export default CutBoard
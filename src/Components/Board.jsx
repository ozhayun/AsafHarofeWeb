import "./Board.css"
import slideImagePath from "../../Public/GamePage/water-slide.png";
import ladderImagePath from "../../Public/GamePage/ladder.png";
import * as React from "react";

const Board = ({playerPosition, playerImage}) => {

    console.log("playerpos: ", playerPosition)
    console.log("playerimg: ", playerImage)
    return (
        <div className="game-board">
            {Array.from({ length: 100 }, (_, index) => {
                const x = Math.floor(index / 10);
                const y = index % 10;
                const isOddRow = x % 2 !== 0;
                const cellNumber = isOddRow ? (9 - x) * 10 + (10 - y) : (9 - x) * 10 + y + 1;

                if (cellNumber === playerPosition) {
                    return (
                        <div className="cell" key={index}>
                            <span className="cell-number">{cellNumber}</span>
                            <img src={playerImage} alt="Player" className="player-image" />
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


export default Board
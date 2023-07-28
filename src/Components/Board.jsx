import "./Board.css"
import * as React from "react";

const Board = ({playerPosition, playerImage}) => {
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
        </div>
    )
}

export default Board
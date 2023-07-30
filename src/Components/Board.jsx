import "./Board.css"
import Cell from "./Cell.jsx"
import * as React from "react";

const Board = ({ playerPosition, playerImage }) => {
    return (
        <div className="game-board">
            {Array.from({ length: 100 }, (_, index) => {
                const x = Math.floor(index / 10);
                const y = index % 10;
                const isOddRow = x % 2 !== 0;
                const cellNumber = isOddRow ? (9 - x) * 10 + (10 - y) : (9 - x) * 10 + y + 1;

                return (
                    <Cell
                        key={index}
                        cellNumber={cellNumber}
                        playerPosition={playerPosition}
                        playerImage={playerImage}
                    />
                );
            })}
        </div>
    )
}

export default Board
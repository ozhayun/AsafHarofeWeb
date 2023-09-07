import React from 'react'
import "./Cell.css"

const Cell = ({ playerPosition, playerImage, cellNumber }) => {
    const isPlayerOnCell = cellNumber === playerPosition;

    return (
        <div className={`cell ${isPlayerOnCell ? 'highlighted' : ''}`}>
            <span className="cell-number">{cellNumber}</span>
            {cellNumber === playerPosition && (
                <img src={playerImage} alt="Player" className="player-image" />
            )}
        </div>
    );
};


export default React.memo(Cell)
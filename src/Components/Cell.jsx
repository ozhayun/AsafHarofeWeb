import React from 'react'
import "./Cell.css"

const Cell = ({ playerPosition, playerImage, cellNumber }) => {
    return (
        <div className="cell">
            <span className="cell-number">{cellNumber}</span>
            {cellNumber === playerPosition && (
                <img src={playerImage} alt="Player" className="player-image" />
            )}
        </div>
    );
};


export default React.memo(Cell)
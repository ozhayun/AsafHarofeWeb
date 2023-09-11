import "./Board.css"
import Cell from "./Cell.jsx"
import * as React from "react";

const Board = ({
                   animal,
                   pain,
                   playerPosition,
                   playerImage,
                   ladders,
                   slides,
                   popUpCells,
                   popUpMessages,
                   popUpImages,
                   onLaddersChange,
                   onSlidesChange,
                   setPopUpCells,
                   setPopUpMessages,
                   setPopUpImages,
                   importAudio,
                   setPopUpsAudio,
                   resetKey
               }) => {

    React.useEffect(() => {
        setPopUpCells(popUpCells)
    },[]);

    React.useEffect(() => {
        setPopUpMessages(popUpMessages)
    }, []);

    React.useEffect(() => {
        setPopUpImages(popUpImages)
    }, []);

    React.useEffect(() => {
        onLaddersChange(ladders);
    }, []);

    React.useEffect(() => {
        onSlidesChange(slides);
    }, []);

    React.useEffect(() => {
        const promises = popUpMessages.map((message, index) => importAudio(pain, animal, index + 1));
        Promise.all(promises).then(setPopUpsAudio);
    }, [pain, animal, resetKey]);

    React.useEffect(() => {
        setPopUpCells(popUpCells);
        setPopUpMessages(popUpMessages);
        setPopUpImages(popUpImages);
    }, [resetKey]);

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
import './GamePage.css';
import CustomToolbar from "../../Components/CustomToolbar.jsx";
import * as React from "react";

const GamePage = ({pain}) => {
    return (
        <div className="container">
            <div className="toolbar-container">
                <CustomToolbar toolbarTitle={pain}/>
            </div>
            <div className="game-board">
                {Array.from({ length: 100 }, (_, index) => (
                    <div className="cell" key={index} />
                ))}
            </div>
        </div>
    );
};

export default GamePage;

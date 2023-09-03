import './PopUp.css'
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import slideImagePath from "../../Public/GamePage/water-slide.png";
const PopUp = ({ isOpen, isPlayerWin, content, image, closePopup, restartGame, navigateHome }) => {
    if (!isOpen) return null;

    if (isPlayerWin) {
        content = (
            <div>
                <p>ברכות! ניצחת במשחק!</p>
                <button
                    className="button-restart"
                    onClick={() => restartGame()}
                >
                    משחק חדש
                </button>
                <button
                    className="button-home"
                    onClick={() => navigateHome()}
                >
                    מסך ראשי
                </button>
            </div>
        );
    }

    return (
        <div className="popup-container">
            <div className="popup-content">
                <button className="close-button" onClick={closePopup}>
                    <CloseIcon className="close-icon"/>
                </button>
                <div className={`popup-image-container`}>
                    <img src={image} alt={`popup-image`} className={`popup-image`} />
                </div>

                <div className="content">{content}</div>
            </div>
        </div>
    );
};

export default PopUp
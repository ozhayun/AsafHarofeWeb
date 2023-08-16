import './PopUp.css'
const PopUp = ({ isOpen, isPlayerWin, content, closePopup, restartGame, navigateHome }) => {
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
                <button className="close-button" onClick={closePopup}>X</button>
                <div className="content">{content}</div>
            </div>
        </div>
    );
};

export default PopUp
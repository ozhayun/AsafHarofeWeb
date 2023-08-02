import './PopUp.css'
const PopUp = ({ isOpen, content, closePopup }) => {
    if (!isOpen) return null;

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
import "./CutBoard.css"
import slideImagePath from "../../../Public/GamePage/water-slide.png";
import ladderImagePath from "../../../Public/GamePage/ladder.png";
import * as React from "react";
import Board from "../Board.jsx";

const CutBoard = ({playerPosition, playerImage, onLaddersChange, onSlidesChange, setPopUpCells, setPopUpMessages, resetKey }) => {
    const specifics = {
        ladders: {
            4: 23,
            28: 46,
            51: 92,
            22: 41,
            24 : 38,
            36 : 86,
            79 : 99,
            12 : 32},
        slides: {
            21: 2,
            53 : 31,
            77: 42,
            26 : 9,
            96: 78,
            93 : 67,
            61 : 59,
            95: 87 },
        popUpCells: [3,11,18,25,33,40,49,57,65,74,81,88,94,97],
        popUpMessages: [
            "הראשונה שתבדוק אותך היא האחות! איזה כיף! אם יורד לך דם אז קודם כל נעצור את הדימום. לאחר מכן היא תבדוק לך חום, דופק ולחץ דם. היא אישה מאוד נחמדה, אין ממה לפחד.",
            "עכשיו אנחנו ממתינים לרופא שיחליט על הטיפול המתאים, הרופאים בבית החולים אסף הרופא הם האנשים הכי נחמדים שיש",
            "הטיפולים האפשריים הם חבישה, הדבקה או תפירה. יכול להיות שיביאו לך תרופה כדי שלא יכאב לך. הרופאים עושים את כל המאמצים שהטיפול יהיה מהיר וללא כאבים. אם כואב לך תשתף אותם כדי שיוכלו להקל עליך.",
            "תעבור ניקוי וחיטוי של החתך, כדי שחיידקים רעים לא יכנסו לגוף שלנו.",
            "במידה ואינך מחוסן לטטנוס או שחיסון הטטנוס שלך לא בתוקף תקבל זריקת טטנוס.",
            "לאחר התאוששות יכול להיות שנעבור למחלקה ונצטרך להישאר קצת בבית החולים או שנקבל מכתב ונחזור הביתה."
        ]
    };

    return (
        <div className="game-board-container">
            <Board playerPosition={playerPosition}
                   playerImage={playerImage}
                   onLaddersChange={onLaddersChange}
                   onSlidesChange={onSlidesChange}
                   setPopUpCells={setPopUpCells}
                   setPopUpMessages={setPopUpMessages}
                   resetKey={resetKey}
                   {...specifics}/>
            <div className="CB-slide-image1-container">
                <img src={slideImagePath} alt="Slide" className="CB-slide-image1" />
            </div>
            <div className="CB-slide-image2-container">
                <img src={slideImagePath} alt="Slide" className="CB-slide-image2" />
            </div>
            <div className="CB-slide-image3-container">
                <img src={slideImagePath} alt="Slide" className="CB-slide-image3" />
            </div>
            <div className="CB-slide-image4-container">
                <img src={slideImagePath} alt="Slide" className="CB-slide-image4" />
            </div>
            <div className="CB-slide-image5-container">
                <img src={slideImagePath} alt="Slide" className="CB-slide-image5" />
            </div>
            <div className="CB-slide-image6-container">
                <img src={slideImagePath} alt="Slide" className="CB-slide-image6" />
            </div>
            <div className="CB-slide-image7-container">
                <img src={slideImagePath} alt="Slide" className="CB-slide-image7" />
            </div>
            <div className="CB-slide-image8-container">
                <img src={slideImagePath} alt="Slide" className="CB-slide-image8" />
            </div>

            <div className="CB-ladder-image1-container">
                <img src={ladderImagePath} alt="Ladder" className="CB-ladder-image1" />
            </div>
            <div className="CB-ladder-image2-container">
                <img src={ladderImagePath} alt="Ladder" className="CB-ladder-image2" />
            </div>
            <div className="CB-ladder-image3-container">
                <img src={ladderImagePath} alt="Ladder" className="CB-ladder-image3" />
            </div>
            <div className="CB-ladder-image4-container">
                <img src={ladderImagePath} alt="Ladder" className="CB-ladder-image4" />
            </div>
            <div className="CB-ladder-image5-container">
                <img src={ladderImagePath} alt="Ladder" className="CB-ladder-image5" />
            </div>
            <div className="CB-ladder-image6-container">
                <img src={ladderImagePath} alt="Ladder" className="CB-ladder-image6" />
            </div>
            <div className="CB-ladder-image7-container">
                <img src={ladderImagePath} alt="Ladder" className="CB-ladder-image7" />
            </div>
            <div className="CB-ladder-image8-container">
                <img src={ladderImagePath} alt="Ladder" className="CB-ladder-image8" />
            </div>
        </div>
    )
}


export default CutBoard
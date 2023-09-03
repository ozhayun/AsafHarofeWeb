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

    const imagesCount = 8;

    return (
        <div className="CB-game-board-container">
            <Board playerPosition={playerPosition}
                   playerImage={playerImage}
                   onLaddersChange={onLaddersChange}
                   onSlidesChange={onSlidesChange}
                   setPopUpCells={setPopUpCells}
                   setPopUpMessages={setPopUpMessages}
                   resetKey={resetKey}
                   {...specifics}/>

            {/*Slides*/}
            {Array.from({ length: imagesCount }, (_, index) => (
                <div key={index} className={`CB-slide-image${index + 1}-container`}>
                    <img src={slideImagePath} alt={`Slide ${index + 1}`} className={`CB-slide-image${index + 1}`} />
                </div>
            ))}

            {/*Ladders*/}
            {Array.from({ length: imagesCount }, (_, index) => (
                <div key={index} className={`CB-ladder-image${index + 1}-container`}>
                    <img src={ladderImagePath} alt={`Ladder ${index + 1}`} className={`CB-ladder-image${index + 1}`} />
                </div>
            ))}
        </div>
    )
}


export default CutBoard
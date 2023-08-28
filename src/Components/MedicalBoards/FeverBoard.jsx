import "./FeverBoard.css"
import slideImagePath from "../../../Public/GamePage/water-slide.png";
import ladderImagePath from "../../../Public/GamePage/ladder.png";
import * as React from "react";
import Board from "../Board.jsx";


const FeverBoard = ({playerPosition, playerImage, onLaddersChange, onSlidesChange, setPopUpCells, setPopUpMessages, resetKey, onReset }) => {
    const specifics = {
        ladders: {
            2 : 21,
            28 : 46,
            55 : 95,
            22 : 41,
            84 : 98,
            32 : 90,
            79 : 99,
            10 : 30},
        slides: {
            23 : 4,
            94 : 72,
            96 : 63,
            26 : 9,
            56: 38,
            73 : 47,
            80 : 62,
            61 : 59 },
        popUpCells: [3,11,18,25,33,40,49,57,65,74,81,87,93,97],
        popUpMessages: [
            "הראשונה שתבדוק אותך היא האחות! איזה כיף! היא תבדוק לך חום, דופק ולחץ דם. היא אישה מאוד נחמדה, אין ממה לפחד.",
            "אם יש לך חום היא תביא לך תרופה שתגרום לך להרגיש טוב יותר.",
            "עכשיו אנחנו ממתינים לרופא שיחליט על הטיפול המתאים, הרופאים בבית החולים אסף הרופא הם האנשים הכי נחמדים שיש.",
            "יש כל מיני בדיקות שהרופא יכול לבקש מאיתנו לעשות - אולטרסאונד, צילום, בדיקות דם או שתן. הבדיקות האלו לא כואבות, אין ממה לחשוש!",
            "נחכה להחלטת הרופא בהתאם לתוצאות.",
            "יכול להיות שנעבור למחלקה ונצטרך להישאר קצת בבית החולים או שנקבל מכתב ונחזור הביתה."
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
                   onReset={onReset}
                   {...specifics}/>

            <div className="FB-slide-image1-container">
                <img src={slideImagePath} alt="Slide" className="FB-slide-image1" />
            </div>
            <div className="FB-slide-image2-container">
                <img src={slideImagePath} alt="Slide" className="FB-slide-image2" />
            </div>
            <div className="FB-slide-image3-container">
                <img src={slideImagePath} alt="Slide" className="FB-slide-image3" />
            </div>
            <div className="FB-slide-image4-container">
                <img src={slideImagePath} alt="Slide" className="FB-slide-image4" />
            </div>
            <div className="FB-slide-image5-container">
                <img src={slideImagePath} alt="Slide" className="FB-slide-image5" />
            </div>
            <div className="FB-slide-image6-container">
                <img src={slideImagePath} alt="Slide" className="FB-slide-image6" />
            </div>
            <div className="FB-slide-image7-container">
                <img src={slideImagePath} alt="Slide" className="FB-slide-image7" />
            </div>
            <div className="FB-slide-image8-container">
                <img src={slideImagePath} alt="Slide" className="FB-slide-image8" />
            </div>

            <div className="FB-ladder-image1-container">
                <img src={ladderImagePath} alt="Slide" className="FB-ladder-image1" />
            </div>
            <div className="FB-ladder-image2-container">
                <img src={ladderImagePath} alt="Slide" className="FB-ladder-image2" />
            </div>
            <div className="FB-ladder-image3-container">
                <img src={ladderImagePath} alt="Slide" className="FB-ladder-image3" />
            </div>
            <div className="FB-ladder-image4-container">
                <img src={ladderImagePath} alt="Slide" className="FB-ladder-image4" />
            </div>
            <div className="FB-ladder-image5-container">
                <img src={ladderImagePath} alt="Slide" className="FB-ladder-image5" />
            </div>
            <div className="FB-ladder-image6-container">
                <img src={ladderImagePath} alt="Slide" className="FB-ladder-image6" />
            </div>
            <div className="FB-ladder-image7-container">
                <img src={ladderImagePath} alt="Slide" className="FB-ladder-image7" />
            </div>
            <div className="FB-ladder-image8-container">
                <img src={ladderImagePath} alt="Slide" className="FB-ladder-image8" />
            </div>
        </div>
    )
}


export default FeverBoard
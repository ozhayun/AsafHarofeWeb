import "./FeverBoard.css"
import slideImagePath from "../../../Public/GamePage/water-slide.png";
import ladderImagePath from "../../../Public/GamePage/ladder.png";
import * as React from "react";
import Board from "../Board.jsx";
import vetDogImagePath from "../../../Public/HomePage/VetDog.png";
import vetDogPlayerImagePath from "../../../Public/GamePage/dogPlayer.png";
import vetLionImagePath from "../../../Public/HomePage/VetLion.png";
import vetLionPlayerImagePath from "../../../Public/GamePage/lionPlayer.png";
import vetMonkeyImagePath from "../../../Public/HomePage/VetMonkey.png";
import vetMonkeyPlayerImagePath from "../../../Public/GamePage/monkeyPlayer.png";
import vetPandaImagePath from "../../../Public/HomePage/VetPanda.png";
import vetPandaPlayerImagePath from "../../../Public/GamePage/pandaPlayer.png";


const FeverBoard = ({animalHebrew, playerPosition, playerImage, onLaddersChange, onSlidesChange, setPopUpCells, setPopUpMessages, resetKey }) => {
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
            animalHebrew + "הראשונה שתבדוק אותך היא האחות! איזה כיף! היא תבדוק לך חום, דופק ולחץ דם. היא אישה מאוד נחמדה, אין ממה לפחד.",
            "אם יש לך חום היא תביא לך תרופה שתגרום לך להרגיש טוב יותר.",
            "עכשיו אנחנו ממתינים לרופא שיחליט על הטיפול המתאים, הרופאים בבית החולים אסף הרופא הם האנשים הכי נחמדים שיש.",
            "יש כל מיני בדיקות שהרופא יכול לבקש מאיתנו לעשות - אולטרסאונד, צילום, בדיקות דם או שתן. הבדיקות האלו לא כואבות, אין ממה לחשוש!",
            "נחכה להחלטת הרופא בהתאם לתוצאות.",
            "יכול להיות שנעבור למחלקה ונצטרך להישאר קצת בבית החולים או שנקבל מכתב ונחזור הביתה."
        ]
    };

    const imagesCount = 8;

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

            {/*Slides*/}
            {Array.from({ length: imagesCount }, (_, index) => (
                <div key={index} className={`FB-slide-image${index + 1}-container`}>
                    <img src={slideImagePath} alt={`Slide ${index + 1}`} className={`FB-slide-image${index + 1}`} />
                </div>
            ))}

            {/*Ladders*/}
            {Array.from({ length: imagesCount }, (_, index) => (
                <div key={index} className={`FB-ladder-image${index + 1}-container`}>
                    <img src={ladderImagePath} alt={`Ladder ${index + 1}`} className={`FB-ladder-image${index + 1}`} />
                </div>
            ))}
        </div>
    )
}


export default FeverBoard
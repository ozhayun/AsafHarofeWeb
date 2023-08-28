import "./InjuryBoard.css"
import slideImagePath from "../../../Public/GamePage/water-slide.png";
import ladderImagePath from "../../../Public/GamePage/ladder.png";
import * as React from "react";
import Board from "../Board.jsx";

// const ladders = {
//     2: 21,
//     50: 68,
//     58: 98,
//     22: 41,
//     89: 93,
//     35: 87,
//     79 : 99,
//     10 : 30};
//
// const slides = {
//     23: 4,
//     47: 29,
//     95: 64,
//     26: 9,
//     56: 38,
//     73: 47,
//     80 : 62,
//     61 : 59};
//
// const popUpCells = [3,11,18,25,33,40,49,57,65,74,81,88,94,97];
//
// const popUpMessages = [
//     "לצערנו אי אפשר לאכול עד בדיקת רופא, אפילו לא במבה. אם כואב לך ממש אז יבצעו קיבוע ליד.",
//     "כעת האחות תבדוק אותך! איזה כיף! היא תבדוק לך חום, דופק ולחץ דם. היא אישה מאוד נחמדה, אין ממה לפחד.",
//     "אם ממש כואב לך היא תביא לך תרופה שתגרום לך להרגיש טוב יותר.",
//     "עכשיו אנחנו ממתינים לרופא שיחליט על הטיפול המתאים, הרופאים בבית החולים אסף הרופא הם האנשים הכי נחמדים שיש",
//     "יש כל מיני בדיקות שהרופא יכול לבקש מאיתנו לעשות – צילום CT או ייעוץ של רופא אורתופד. הבדיקות האלו לא כואבות, אין ממה לחשוש!",
//     "נחכה להחלטת הרופא בהתאם לתוצאות. יכול להיות שיחבשו את החבלה או יקבעו בגבס. לאחר מכן נוכל ללכת הביתה או שנצטרך להישאר בבית החולים עוד קצת."
// ];

const InjuryBoard = ({playerPosition, playerImage, onLaddersChange, onSlidesChange, setPopUpCells, setPopUpMessages }) => {
    const specifics = {
        ladders: {
            2: 21,
            50: 68,
            58: 98,
            22: 41,
            89: 93,
            35: 87,
            79 : 99,
            10 : 30},
        slides: {
            23: 4,
            47: 29,
            95: 64,
            26: 9,
            56: 38,
            73: 47,
            80 : 62,
            61 : 59},
        popUpCells:  [3,11,18,25,33,40,49,57,65,74,81,88,94,97],
        popUpMessages: [
            "לצערנו אי אפשר לאכול עד בדיקת רופא, אפילו לא במבה. אם כואב לך ממש אז יבצעו קיבוע ליד.",
            "כעת האחות תבדוק אותך! איזה כיף! היא תבדוק לך חום, דופק ולחץ דם. היא אישה מאוד נחמדה, אין ממה לפחד.",
            "אם ממש כואב לך היא תביא לך תרופה שתגרום לך להרגיש טוב יותר.",
            "עכשיו אנחנו ממתינים לרופא שיחליט על הטיפול המתאים, הרופאים בבית החולים אסף הרופא הם האנשים הכי נחמדים שיש",
            "יש כל מיני בדיקות שהרופא יכול לבקש מאיתנו לעשות – צילום CT או ייעוץ של רופא אורתופד. הבדיקות האלו לא כואבות, אין ממה לחשוש!",
            "נחכה להחלטת הרופא בהתאם לתוצאות. יכול להיות שיחבשו את החבלה או יקבעו בגבס. לאחר מכן נוכל ללכת הביתה או שנצטרך להישאר בבית החולים עוד קצת."
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
                   {...specifics}/>
            <div className="IB-slide-image1-container">
                <img src={slideImagePath} alt="Slide" className="IB-slide-image1" />
            </div>
            <div className="IB-slide-image2-container">
                <img src={slideImagePath} alt="Slide" className="IB-slide-image2" />
            </div>
            <div className="IB-slide-image3-container">
                <img src={slideImagePath} alt="Slide" className="IB-slide-image3" />
            </div>
            <div className="IB-slide-image4-container">
                <img src={slideImagePath} alt="Slide" className="IB-slide-image4" />
            </div>
            <div className="IB-slide-image5-container">
                <img src={slideImagePath} alt="Slide" className="IB-slide-image5" />
            </div>
            <div className="IB-slide-image6-container">
                <img src={slideImagePath} alt="Slide" className="IB-slide-image6" />
            </div>
            <div className="IB-slide-image7-container">
                <img src={slideImagePath} alt="Slide" className="IB-slide-image7" />
            </div>
            <div className="IB-slide-image8-container">
                <img src={slideImagePath} alt="Slide" className="IB-slide-image8" />
            </div>

            <div className="IB-ladder-image1-container">
                <img src={ladderImagePath} alt="Ladder" className="IB-ladder-image1" />
            </div>
            <div className="IB-ladder-image2-container">
                <img src={ladderImagePath} alt="Ladder" className="IB-ladder-image2" />
            </div>
            <div className="IB-ladder-image3-container">
                <img src={ladderImagePath} alt="Ladder" className="IB-ladder-image3" />
            </div>
            <div className="IB-ladder-image4-container">
                <img src={ladderImagePath} alt="Ladder" className="IB-ladder-image4" />
            </div>
            <div className="IB-ladder-image5-container">
                <img src={ladderImagePath} alt="Ladder" className="IB-ladder-image5" />
            </div>
            <div className="IB-ladder-image6-container">
                <img src={ladderImagePath} alt="Ladder" className="IB-ladder-image6" />
            </div>
            <div className="IB-ladder-image7-container">
                <img src={ladderImagePath} alt="Ladder" className="IB-ladder-image7" />
            </div>
            <div className="IB-ladder-image8-container">
                <img src={ladderImagePath} alt="Ladder" className="IB-ladder-image8" />
            </div>
        </div>
    )
}


export default InjuryBoard
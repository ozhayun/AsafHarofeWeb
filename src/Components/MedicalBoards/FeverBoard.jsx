import "./FeverBoard.css"
import slideImagePath from "../../../Public/GamePage/water-slide.png";
import ladderImagePath from "../../../Public/GamePage/ladder.png";
import * as React from "react";
import Board from "../Board.jsx";

const ladders = {
    2 : 21,
    28 : 46,
    55 : 95,
    22 : 41,
    84 : 98,
    32 : 90,
    79 : 99,
    10 : 30};

const slides = {
    23 : 4,
    94 : 72,
    96 : 63,
    26 : 9,
    56: 38,
    73 : 47,
    80 : 62,
    61 : 59 };

const popUpCells = [3,11,18,25,33,40,49,57,65,74,81,87,93,97];

const popUpMessages = [
    "הראשונה שתבדוק אותך היא האחות! איזה כיף! היא תעצור את הדימום, תבדוק לך דופק, לחץ דם וחום. היא אישה מאוד נחמדה, אין ממה לפחד.",

    "עכשיו אנחנו ממתינים לרופא שיחליט על הטיפול המתאים - הדבקה, חבישה או תפירה." +
    "לאחר הדבקה או חבישה, תקבל מכתב שחרור ותוכל לחזור הביתה." +
    "תפירה יכולה להיות עם טשטוש או בלי טשטוש.",

    "בתפירה עם טשטוש יכנס רופא בכיר, תיהיה חתימה על הסכמה, מתן תרופה ומעבר לחדר תפירה." +
    "בתפירה בלי טשטוש תעבור לחדר תפירה.",

    "תעבור ניקוי וחיטוי של החתך, הרדמה מקומית, תפירה וחבישה.",

    "במידה ואינך מחוסן או שזריקת הטטנוס שלך אינה בתוקף, תקבל זריקת טטנוס.",

    "לאחר התאוששות תקבל מכתב עם החלטה על אשפוז או שחרור הביתה."
];

const FeverBoard = ({playerPosition, playerImage, onLaddersChange, onSlidesChange, setPopUpCells, setPopUpMessages }) => {
    React.useEffect(() => {
        setPopUpCells(popUpCells)
    },[setPopUpCells]);

    React.useEffect(() => {
        setPopUpMessages(popUpMessages)
    }, [setPopUpMessages]);

    React.useEffect(() => {
        onLaddersChange(ladders);
    }, [ladders, onLaddersChange]);

    React.useEffect(() => {
        onSlidesChange(slides);
    }, [slides, onSlidesChange]);


    return (
        <div className="game-board-container">
            <Board playerPosition={playerPosition} playerImage={playerImage}/>

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
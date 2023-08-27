import "./InjuryBoard.css"
import slideImagePath from "../../../Public/GamePage/water-slide.png";
import ladderImagePath from "../../../Public/GamePage/ladder.png";
import * as React from "react";
import Board from "../Board.jsx";

const ladders = {
    3: 22,
    14: 36,
    29: 54,
    39: 60,
    45 : 74,
    80 : 99};

const slides = {
    23: 16,
    53 : 31,
    62: 44,
    86 : 64,
    94: 72 };

const popUpCells = [3,14,23,29,39,45,53,62,74,80,86,97];

const popUpMessages = [
    "מיד האחות תקבל אותך, תעצור את הדימום, תבדוק לך דופק, לחץ דם וחום",

    "המתן לרופא אשר יחליט על הטיפול המתאים- הדבקה, חבישה או תפירה." +
    "לאחר הדבקה או חבישה, תקבל מכתב שחרור ותוכל לחזור הביתה." +
    "תפירה יכולה להיות עם טשטוש או בלי טשטוש.",

    "בתפירה עם טשטוש יכנס רופא בכיר, תיהיה חתימה על הסכמה, מתן תרופה ומעבר לחדר תפירה." +
    "בתפירה בלי טשטוש תעבור לחדר תפירה.",

    "תעבור ניקוי וחיטוי של החתך, הרדמה מקומית, תפירה וחבישה.",

    "במידה ואינך מחוסן או שזריקת הטטנוס שלך אינה בתוקף, תקבל זריקת טטנוס.",

    "לאחר התאוששות תקבל מכתב עם החלטה על אשפוז או שחרור הביתה."
];

const InjuryBoard = ({playerPosition, playerImage, onLaddersChange, onSlidesChange, setPopUpCells, setPopUpMessages }) => {
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
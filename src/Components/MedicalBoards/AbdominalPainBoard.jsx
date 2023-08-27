import "./AbdominalPainBoard.css"
import slideImagePath from "../../../Public/GamePage/water-slide.png";
import ladderImagePath from "../../../Public/GamePage/ladder.png";
import * as React from "react";
import Board from "../Board.jsx";

const ladders = {
    4 : 23,
    28 : 46,
    55 : 95,
    22 : 41,
    24 : 38,
    32 : 90,
    79 : 99,
    10 : 30};

const slides = {
    21 : 2,
    94 : 72,
    77 : 42,
    26 : 9,
    96: 78,
    73 : 47,
    80 : 62,
    57 : 45 };

const popUpCells = [4,10,21,22,24,26,28,32,55,57,73,77,79,80,94,96];

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

const AbdominalPainBoard = ({playerPosition, playerImage, onLaddersChange, onSlidesChange, setPopUpCells, setPopUpMessages }) => {
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

            <div className="APB-slide-image1-container">
                <img src={slideImagePath} alt="Slide" className="APB-slide-image1" />
            </div>
            <div className="APB-slide-image2-container">
                <img src={slideImagePath} alt="Slide" className="APB-slide-image2" />
            </div>
            <div className="APB-slide-image3-container">
                <img src={slideImagePath} alt="Slide" className="APB-slide-image3" />
            </div>
            <div className="APB-slide-image4-container">
                <img src={slideImagePath} alt="Slide" className="APB-slide-image4" />
            </div>
            <div className="APB-slide-image5-container">
                <img src={slideImagePath} alt="Slide" className="APB-slide-image5" />
            </div>
            <div className="APB-slide-image6-container">
                <img src={slideImagePath} alt="Slide" className="APB-slide-image6" />
            </div>
            <div className="APB-slide-image7-container">
                <img src={slideImagePath} alt="Slide" className="APB-slide-image7" />
            </div>
            <div className="APB-slide-image8-container">
                <img src={slideImagePath} alt="Slide" className="APB-slide-image8" />
            </div>

            <div className="APB-ladder-image1-container">
                <img src={ladderImagePath} alt="Slide" className="APB-ladder-image1" />
            </div>
            <div className="APB-ladder-image2-container">
                <img src={ladderImagePath} alt="Slide" className="APB-ladder-image2" />
            </div>
            <div className="APB-ladder-image3-container">
                <img src={ladderImagePath} alt="Slide" className="APB-ladder-image3" />
            </div>
            <div className="APB-ladder-image4-container">
                <img src={ladderImagePath} alt="Slide" className="APB-ladder-image4" />
            </div>
            <div className="APB-ladder-image5-container">
                <img src={ladderImagePath} alt="Slide" className="APB-ladder-image5" />
            </div>
            <div className="APB-ladder-image6-container">
                <img src={ladderImagePath} alt="Slide" className="APB-ladder-image6" />
            </div>
            <div className="APB-ladder-image7-container">
                <img src={ladderImagePath} alt="Slide" className="APB-ladder-image7" />
            </div>
            <div className="APB-ladder-image8-container">
                <img src={ladderImagePath} alt="Slide" className="APB-ladder-image8" />
            </div>
        </div>
    )
}


export default AbdominalPainBoard
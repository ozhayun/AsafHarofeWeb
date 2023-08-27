import "./CutBoard.css"
import slideImagePath from "../../../Public/GamePage/water-slide.png";
import ladderImagePath from "../../../Public/GamePage/ladder.png";
import * as React from "react";
import Board from "../Board.jsx";

const ladders = {
    4: 23,
    28: 46,
    51: 92,
    22: 41,
    24 : 38,
    36 : 86,
    79 : 99,
    12 : 32};

const slides = {
    21: 2,
    53 : 31,
    77: 42,
    26 : 9,
    96: 78,
    93 : 67,
    61 : 59,
    95: 87 };

const popUpCells = [4,12,21,22,24,26,28,36,51,53,61,77,79,93,95,96];

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

const CutBoard = ({playerPosition, playerImage, onLaddersChange, onSlidesChange, setPopUpCells, setPopUpMessages }) => {
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
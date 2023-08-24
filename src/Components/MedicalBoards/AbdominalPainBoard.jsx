import "./CutBoard.css"
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

            <div className="slide-image1">
                <img src={slideImagePath} alt="Slide" className="slide-image1" />
            </div>
            <div className="slide-image2">
                <img src={slideImagePath} alt="Slide" className="slide-image2" />
            </div>
            <div className="slide-image3">
                <img src={slideImagePath} alt="Slide" className="slide-image3" />
            </div>
            <div className="slide-image4">
                <img src={slideImagePath} alt="Slide" className="slide-image4" />
            </div>
            <div className="slide-image5">
                <img src={slideImagePath} alt="Slide" className="slide-image5" />
            </div>
            <div className="slide-image6">
                <img src={slideImagePath} alt="Slide" className="slide-image6" />
            </div>
            <div className="slide-image7">
                <img src={slideImagePath} alt="Slide" className="slide-image7" />
            </div>
            <div className="slide-image8">
                <img src={slideImagePath} alt="Slide" className="slide-image8" />
            </div>

            <div className="ladder-image1">
                <img src={ladderImagePath} alt="Slide" className="ladder-image1" />
            </div>
            <div className="ladder-image2">
                <img src={ladderImagePath} alt="Slide" className="ladder-image2" />
            </div>
            <div className="ladder-image3">
                <img src={ladderImagePath} alt="Slide" className="ladder-image3" />
            </div>
            <div className="ladder-image4">
                <img src={ladderImagePath} alt="Slide" className="ladder-image4" />
            </div>
            <div className="ladder-image5">
                <img src={ladderImagePath} alt="Slide" className="ladder-image5" />
            </div>
            <div className="ladder-image6">
                <img src={ladderImagePath} alt="Slide" className="ladder-image6" />
            </div>
            <div className="ladder-image7">
                <img src={ladderImagePath} alt="Slide" className="ladder-image7" />
            </div>
            <div className="ladder-image8">
                <img src={ladderImagePath} alt="Slide" className="ladder-image8" />
            </div>
        </div>
    )
}


export default CutBoard
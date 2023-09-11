import "./InjuryBoard.css"
import slideImagePath from "../../../Public/GamePage/water-slide.png";
import ladderImagePath from "../../../Public/GamePage/ladder.png";
import * as React from "react";
import Board from "../Board.jsx";
import startPopUpImagePath from "../../../Public/GamePage/PopUp/start.png";
import doNotEatPopUpImagePath from "../../../Public/GamePage/PopUp/doNotEat.png";
import nursesPopUpImagePath from "../../../Public/GamePage/PopUp/nursesStation.png";
import medicationPopUpImagePath from "../../../Public/GamePage/PopUp/medication.png";
import waitingPopUpImagePath from "../../../Public/GamePage/PopUp/Waiting.png";
import medicalTestsPopUpImagePath from "../../../Public/GamePage/PopUp/medicalTests.png";
import homePopUpImagePath from "../../../Public/GamePage/PopUp/home.png";

const InjuryBoard = ({animal, animalHebrew, pain, playerPosition, playerImage, onLaddersChange, onSlidesChange, setPopUpCells, setPopUpMessages, setPopUpImages, setIsAudioLoaded, importAudio, setPopUpsAudio, resetKey }) => {
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
            91: 69,
            80 : 62,
            61 : 59},
        popUpCells:  [1,3,11,18,25,33,40,49,57,65,74,81,88,94],
        popUpMessages: [
            "ברוכים הבאים למשחק סולמות ומגלשות! במהלך המשחק נלווה את ה" + animalHebrew +
            " בתהליך הטיפול הרפואי שהוא הולך לעבור במיון. חשוב לנו לומר שהצוות הרפואי שנמצא במיון עושה את המאמצים לעזור לו להרגיש טוב יותר. ה" + animalHebrew +
            " לא נמצא לבד, אתם וההורים שלכם מלווים אותה בתהליך. אם הוא מפחד אפשר לשתף את הצוות הרפואי. מאחלים לכם משחק מהנה!",

             "לצערנו, אי אפשר לאכול עד בדיקת הרופאים, אפילו לא במבה אחת. אם ממש כואב ל" + animalHebrew +
             ", אז הרופאים יבצעו קיבוע ליד או לרגל.",

            "בהתחלה האח או האחות יבדקו את ה " + animalHebrew +
            ", הם יבדקו חום, דופק ולחץ דם.",

            "אם ממש כואב ל" + animalHebrew +
            ", הוא יקבל תרופה שתגרום לו להרגיש טוב יותר.",

            "עכשיו אנחנו ממתינים בסבלנות לרופאים שיחליטו על הטיפול המתאים.",

            "יש כל מיני בדיקות שהרופאים יכולים לבקש מה" + animalHebrew +
            " לעשות - צילום CT או ייעוץ של רופא אורתופד. הבדיקות האלו לא כואבות.",

            "נחכה להחלטות הרופאים בהתאם לתוצאות.",

            "יכול להיות שיחבשו או יקבעו בגבס ל" + animalHebrew +
            " את החבלה ונשאר ביחד קצת בבית החולים. או שנקבל מכתב שחרור ונחזור הביתה."
        ],
        popUpImages:[
            startPopUpImagePath,
            doNotEatPopUpImagePath,
            nursesPopUpImagePath,
            medicationPopUpImagePath,
            waitingPopUpImagePath,
            medicalTestsPopUpImagePath,
            waitingPopUpImagePath,
            homePopUpImagePath
        ]
    };

    const imagesCount = 8;

    return (
        <div className="IB-game-board-container">
            <Board playerPosition={playerPosition}
                   playerImage={playerImage}
                   onLaddersChange={onLaddersChange}
                   onSlidesChange={onSlidesChange}
                   setPopUpCells={setPopUpCells}
                   setPopUpMessages={setPopUpMessages}
                   setPopUpImages={setPopUpImages}
                   setIsAudioLoaded={setIsAudioLoaded}
                   animal={animal}
                   pain={pain}
                   importAudio={importAudio}
                   setPopUpsAudio={setPopUpsAudio}
                   resetKey={resetKey}
                   {...specifics}/>

            {/*Slides*/}
            {Array.from({ length: imagesCount }, (_, index) => (
                <div key={index} className={`IB-slide-image${index + 1}-container`}>
                    <img src={slideImagePath} alt={`Slide ${index + 1}`} className={`IB-slide-image${index + 1}`} />
                </div>
            ))}

            {/*Ladders*/}
            {Array.from({ length: imagesCount }, (_, index) => (
                <div key={index} className={`IB-ladder-image${index + 1}-container`}>
                    <img src={ladderImagePath} alt={`Ladder ${index + 1}`} className={`IB-ladder-image${index + 1}`} />
                </div>
            ))}
        </div>
    )
}


export default InjuryBoard
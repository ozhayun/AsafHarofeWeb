import "./FeverBoard.css"
import slideImagePath from "../../../Public/GamePage/water-slide.png";
import ladderImagePath from "../../../Public/GamePage/ladder.png";
import startPopUpImagePath from "../../../Public/GamePage/PopUp/start.png";
import nursesPopUpImagePath from "../../../Public/GamePage/PopUp/nursesStation.png";
import medicationPopUpImagePath from "../../../Public/GamePage/PopUp/medication.png";
import waitingPopUpImagePath from "../../../Public/GamePage/PopUp/Waiting.png";
import medicalTestsPopUpImagePath from "../../../Public/GamePage/PopUp/medicalTests.png";
import homePopUpImagePath from "../../../Public/GamePage/PopUp/home.png";
import * as React from "react";
import Board from "../Board.jsx";

const FeverBoard = ({animal, animalHebrew, pain, playerPosition, playerImage, onLaddersChange, onSlidesChange, setPopUpCells, setPopUpMessages, setPopUpImages, importAudio, setPopUpsAudio, resetKey }) => {
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
            "ברוכים הבאים למשחק סולמות ומגלשות! במהלך המשחק נלווה את ה" + animalHebrew +
            " בתהליך הטיפול הרפואי שהוא הולך לעבור במיון. חשוב לנו לומר שהצוות הרפואי שנמצא במיון עושה את המאמצים לעזור לנו להרגיש טוב יותר. ה" + animalHebrew +
            " לא נמצא לבד, אתם וההורים שלכם מלווים אותה בתהליך. אם הוא מפחד אפשר לשתף את הצוות הרפואי. מאחלים לכם משחק מהנה!",

            "בהתחלה האח או האחות יבדקו את ה" + animalHebrew +
            ", הם יבדקו חום, דופק ולחץ דם.",

            "אם ל" + animalHebrew +
            " יש חום הוא יקבל תרופה שתגרום לו להרגיש טוב יותר.",

            "עכשיו אנחנו ממתינים בסבלנות לרופאים שיחליטו על הטיפול המתאים.",

            "יש כל מיני בדיקות שהרופאים יכולים לבקש מה" + animalHebrew +
            " לעשות - אולטרסאונד, צילום, בדיקות דם או שתן. אולטרסאונד, צילום ובדיקת שתן לא כואבות ובדיקת הדם יכולה טיפה לכאוב, אך הרופאים עושים את המאמצים כדי שיכאב כמה שפחות.",

            "נחכה להחלטות הרופאים בהתאם לתוצאות.",

            "יכול להיות ש" + animalHebrew +
            " יעבור למחלקה ונשאר ביחד קצת בבית החולים או שנקבל מכתב שחרור ונחזור הביתה."
        ],
        popUpImages:[
            startPopUpImagePath,
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
        <div className="FB-game-board-container">
            <Board playerPosition={playerPosition}
                   playerImage={playerImage}
                   onLaddersChange={onLaddersChange}
                   onSlidesChange={onSlidesChange}
                   setPopUpCells={setPopUpCells}
                   setPopUpMessages={setPopUpMessages}
                   setPopUpImages={setPopUpImages}
                   animal={animal}
                   animalHebrew={animalHebrew}
                   pain={pain}
                   importAudio={importAudio}
                   setPopUpsAudio={setPopUpsAudio}
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
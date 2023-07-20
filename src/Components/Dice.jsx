import './Dice.css'
import dice1 from '../../Public/GamePage/1.png';
import dice2 from '../../Public/GamePage/2.png';
import dice3 from '../../Public/GamePage/3.png';
import dice4 from '../../Public/GamePage/4.png';
import dice5 from '../../Public/GamePage/5.png';
import dice6 from '../../Public/GamePage/6.png';

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = ({ diceNumber }) => {
    const diceImage = diceImages[diceNumber - 1];

    return (
        <div className="dice-container">
            <img id="Dice" src={diceImage} alt={`Dice ${diceNumber}`} />
        </div>
    );
};

export default Dice;
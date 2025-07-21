import { loadScore } from "/src/utils/threeInARowUtils";
import {createScore} from "/src/utils/threeInARowUtils"
import './playNow.css';


export default function playNow (createGameFn) {

    loadScore();

    let gameContainer = document.querySelector('.gameContainer');

    if (!gameContainer) {
        gameContainer = document.createElement('section');
        gameContainer.className = 'gameContainer';
        document.querySelector('main').appendChild(gameContainer);
    }

    gameContainer.innerHTML = '';
    gameContainer.style.display = 'block';
    
    createGameFn(gameContainer);
    const {loadPoints} = createScore();
    window.updatePointsUI = loadPoints;

};
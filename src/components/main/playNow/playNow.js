import createThreeInARow from '../threeInARow/threeInARow';
import './playNow.css';



export default function playNow (createGame) {

    let gameContainer = document.querySelector('.gameContainer');

    if (!gameContainer) {
        gameContainer = document.createElement('section');
        gameContainer.className = 'gameContainer';
        document.querySelector('main').appendChild(gameContainer);
    }

    gameContainer.innerHTML = '';
    gameContainer.style.display = 'block';
    
    createGame(gameContainer);
 
};

import './threeInaRow.css';
import { getScore, resetScore, saveScore } from "../../../utils/scoreUtils";
import { loadThreeInScore } from '../../../utils/threeInARowUtils/threeInARowUtils';

const SCORE_KEY = 'threeInARowScore';
export default function createThreeInARow (container) {

   container.innerHTML ='';

    let board = Array(9).fill("");
    let currentPlayer = "X";
    let gameActive = true;

    const winPosibilities = [
        [0,1,2],[3,4,5], [6,7,8],
        [0,3,6], [1,4,7],[2,5,8], 
        [0,4,8], [2,4,6]];

    const threeIn = document.createElement('div');
    threeIn.className = 'threeIn';

    for (let index = 0; index<board.length; index++) {
        const cell = document.createElement('button');
        cell.className = 'cell';
        cell.textContent = "";
        threeIn.appendChild(cell);

        cell.addEventListener('click', () => handleClick(cell, index));
    }

    const gameAlert = document.createElement('div');
    gameAlert.className = "gameAlert hidden";

    const alertText = document.createElement('p');
    alertText.className = 'alertText';

    const alertButton = document.createElement('button');
    alertButton.textContent = 'Juega otra vez';
    alertButton.className = 'alertButton';
    alertButton.addEventListener('click', () =>{
        gameAlert.classList.add('hidden');
        resetGame(createThreeInARow, container);
    })

    gameAlert.append(alertText, alertButton);
    container.appendChild(gameAlert);

    const scoreDiv = document.createElement('div');
    scoreDiv.className = 'scoreGame';

    const scoreElement = document.createElement('p');
    scoreElement.className = 'points';

    const reButton = document.createElement('button');
    reButton.className='resetPoints';
    reButton.textContent = 'Reiniciar puntuación';

    const resetButton = document.createElement('button');
    resetButton.className ='resetGame';
    resetButton.textContent = '🔁 Juega otra vez';

    scoreDiv.append(scoreElement, reButton, resetButton);

    const threeInAside = document.createElement('aside');
    threeInAside.className = 'threeInAside';
    threeInAside.textContent = 'Juego a dos jugadores ¡Intenta completar tu línea antes que tu rival!';
    container.append(threeIn, threeInAside, scoreDiv);

    loadThreeInScore(scoreElement, SCORE_KEY);

    reButton.addEventListener('click', () => {
        resetScore(scoreElement, SCORE_KEY)
        loadThreeInScore(scoreElement, SCORE_KEY);
        });

    resetButton.addEventListener('click', () => createThreeInARow (container));
    
    function handleClick(cell,index){
    
    if (!gameActive || board[index] !=="") return;
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.className = 'taken';
    cell.disabled= true;

    let pointsData = getScore(SCORE_KEY, { X: 0, O: 0, empate: 0 } );
    if (typeof pointsData !== 'object' || pointsData === null) {
        pointsData = { X: 0, O: 0, empate: 0 };
    }
    pointsData.X ??= 0;
    pointsData.O ??= 0;
    pointsData.empate ??= 0;


    if (checkWin(currentPlayer)){
        gameActive = false;
        alertText.textContent = (`${currentPlayer} ha ganado la partida: +5ptos`);
        gameAlert.classList.remove('hidden');
        pointsData[currentPlayer] +=5;
        saveScore(SCORE_KEY, pointsData);
        loadThreeInScore(scoreElement, SCORE_KEY);

        setTimeout(()=>{
            gameAlert.classList.add('hidden');
            createThreeInARow(container)
        }, 2000);
        return;
    }

    if (!board.includes("") && gameActive){
        alertText.textContent=('Ha habido un empate. +1 pto. ');
        gameActive = false;
        pointsData.empate += 1;
        saveScore(SCORE_KEY, pointsData);
        loadThreeInScore(scoreElement, SCORE_KEY);

        gameAlert.classList.remove('hidden');
        
        setTimeout(() => {
            gameAlert.classList.add('hidden');
            createThreeInARow(container);
        }, 1500);
        
        return
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    };

    function checkWin(player) {
    return winPosibilities.some(combo=>combo.every(index => board[index] === player))
    } 
}


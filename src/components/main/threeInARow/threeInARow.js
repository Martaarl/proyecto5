import { keepPoints, loadPoints, loadScore, resetPoints, resetGame} from "/src/utils/threeInARowUtils/threeInARowUtils";
import './threeInaRow.css';


export default function createThreeInARow (container) {

   container.innerHTML ='';
   const section = document.querySelector('.gameContainer');

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
        resetGame(createThreeInARow, section);
    })

    gameAlert.append(alertText, alertButton);
    section.appendChild(gameAlert);

    const scoreDiv = document.createElement('div');
    scoreDiv.className = 'scoreGame';

    let points= document.createElement('p');
    points.className = 'points';
    points.textContent = `❎ X: 0 pts | 🅾️ O: 0 | ＝ Empates: 0`;

    const reButton = document.createElement('button');
    reButton.className='resetPoints';
    reButton.textContent = 'Reiniciar puntuación';

    const resetButton = document.createElement('button');
    resetButton.className ='resetGame';
    resetButton.textContent = '🔁 Juega otra vez';

    scoreDiv.append(points, reButton, resetButton);

    const threeInAside = document.createElement('aside');
    threeInAside.className = 'threeInAside';
    threeInAside.textContent = 'Juego a dos jugadores ¡Intenta completar tu línea antes que tu rival!';
    section.append(threeIn, threeInAside, scoreDiv);

    loadScore(points);

    reButton.addEventListener('click', () =>  resetPoints(points));
    resetButton.addEventListener('click', () => resetGame(createThreeInARow, section));
    
    function handleClick(cell,index){
    
    if (!gameActive || board[index] !=="") return;
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.className = 'taken';
    cell.disabled= true;

    let pointsData = loadPoints();

    if (checkWin(currentPlayer)){
        gameActive = false;
        alertText.textContent = (`${currentPlayer} ha ganado la partida: +5ptos`);
        gameAlert.classList.remove('hidden');
        pointsData[currentPlayer] +=5;
        keepPoints(pointsData);
        loadScore(points);
        return;
    }

    if (!board.includes("") && gameActive){
        alertText.textContent=('Ha habido un empate. +1 pto. ');
        gameActive = false;
        pointsData.empate += 1;
        keepPoints(pointsData);
        loadScore(points);
        return
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    };

    function checkWin(player) {
    return winPosibilities.some(combo=>combo.every(index => board[index] === player))
    } 
}


import {  loadScore, keepPoints} from "/src/utils/threeInARowUtils";
import './threeInaRow.css';

export default function createThreeInARow (table) {
    
    const board = Array(9).fill("");
    let currentPlayer = "X";
    let gameActive = true;

    window.threeInState = {board, currentPlayer, gameActive};

    const winPosibilities = [
        [0,1,2],[3,4,5], [6,7,8],
        [0,3,6], [1,4,7],[2,5,8], 
        [0,4,8], [2,4,6],
    ];

    const threeIn = document.createElement('div');
    threeIn.className = 'threeIn';

    for (let index = 0; index < 9; index++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.index = index;

        threeIn.appendChild(cell);
        cell.addEventListener('click', () => handleClick(cell, index));
    }

    function checkWin(player){
        return winPosibilities.some(combo=>combo.every(index => window.threeInState.board [index] === player));
    }

    function handleClick(cell, index){
        console.log('click en celda', index)
        const state = window.threeInState;
        if (!state.gameActive|| state.board[index]) return;

        state.board[index] = state.currentPlayer;
        cell.textContent = state.currentPlayer;
        cell.className = 'taken';

       /*const points = loadScore();*/

        if (checkWin(state.currentPlayer)){
            alert (`${state.currentPlayer} ha ganado la partida. +5ptos`);
            const points = loadScore();
            state.gameActive = false;
            points[state.currentPlayer] += 5;
            keepPoints(points);
            if (window.updatePointsUI) window.updatePointsUI();
            return;
        }

        if (state.board.every(val => val)){
            alert ('Ha empatado');
            const points = loadScore();
            points.empates += 1;
            keepPoints(points);
            state.gameActive = false;
            if (window.updatePointsUI) window.updatePointsUI();
            return;
        }

        state.currentPlayer = (state.currentPlayer === 'X') ? "O" : "X";
    };

    table.appendChild(threeIn);

    return threeIn;

}

export function resetGame (){
    const state = window.threeInState;
    if(!state) return;

    state.board.fill("");
    state.currentPlayer="X";
    state.gameActive= true; 

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove('taken');
    });
}
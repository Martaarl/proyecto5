import './threeInaRow.css'

export default function createThreeInARow (container) {
    
    const main = document.querySelector('main');
    
    const board = Array(9).fill("");

    const winPosibilities = [
        [0,1,2],[3,4,5], [6,7,8],
        [0,3,6], [1,4,7],[2,5,8], 
        [0,4,8], [2,4,6],
    ];

    function loadScore (){
        const data = localStorage.getItem('puntuacionTresEnRaya');
        return data ? JSON.parse(data) : { X: 0, O: 0, empates: 0};
    };

    function keepPoints () {
        localStorage.setItem('puntuacionTresEnRaya', JSON.stringify(points));
    };

    let points = loadScore();

    const score = document.createElement('div');
    score.className = 'scoreGame';

    const winnerPoints= document.createElement('p');
    winnerPoints.className = 'points';
    score.appendChild(winnerPoints);

    function loadPoints () {
        winnerPoints.textContent = `❎ X: ${points.X} pts | 🅾️ O: ${points.O} | ＝ Empates: ${points.empates}`
    }

    loadPoints();

    let currentPlayer = "X";
    let gameActive = true;

    const threeIn = document.createElement('div');
    threeIn.className = 'threeIn';

    for (let index = 0; index < 9; index++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.index = index;

        threeIn.appendChild(cell);

        cell.addEventListener('click', () => handleClick(cell, index));
    }

    function handleClick(cell, index){
        if (!gameActive|| board[index]) return;

        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.className = 'taken';

        if (checkWin(currentPlayer)){
            alert (`${currentPlayer} ha ganado la partida. +5ptos`);
            gameActive = false;
            points[currentPlayer] += 5;
            keepPoints();
            loadPoints();
            return;
        }

        if (board.every(val => val)){
            alert ('Ha empatado');
            points.empates += 1;
            keepPoints();
            loadPoints();
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === 'X' ? "O" : "X";
    };


    const reButton = document.createElement('button');
    reButton.className='resetPoints';
    reButton.textContent = 'Reiniciar puntuación';

    const resetButton = document.createElement('button');
    resetButton.className ='resetGame';
    resetButton.textContent = '🔁 Juega otra vez';

    score.append(reButton, resetButton);
    main.append(score, threeIn);
  
    function checkWin(player){
        return winPosibilities.some(combo=>combo.every(index => board [index] === player));
    }


    function resetPoints() {
        points = {
            X: 0, O: 0, empates: 0
        }
        keepPoints();
        loadPoints();
    }

    function resetGame () {
        board.fill("");
        const cells = document.getElementsByClassName('cell');

        cells.forEach(cell => {
            cell.textContent = "";
            cell.classList.remove('taken');
        });

        /*currentPlayer = "X";
        gameActive= true;*/
    }

    reButton.addEventListener('click', resetPoints);
    resetButton.addEventListener('click', resetGame);
 
    container.appendChild(threeIn);

}
import createThreeInARow from "../components/main/threeInARow/threeInARow";

/*let points = loadScore();*/
import {resetGame} from "/src/components/main/threeInARow/threeInARow";
/*const main = document.querySelector('main');*/

export function keepPoints (newPoints) {
    localStorage.setItem('puntuacionTresEnRaya', JSON.stringify(newPoints));
};

export function loadScore (){
    const data = localStorage.getItem('puntuacionTresEnRaya');
    return data ? JSON.parse(data) : { X: 0, O: 0, empates: 0};
};

export function resetPoints(){
    const resetPoints = {X:0, O: 0, empates: 0};
    /*keepPoints(resetPoints);*/
}

export function createScore () {
    const score = document.createElement('div');
    score.className = 'scoreGame';

    const winnerPoints= document.createElement('p');
    winnerPoints.className = 'points';
    score.appendChild(winnerPoints);

    const reButton = document.createElement('button');
    reButton.className='resetPoints';
    reButton.textContent = 'Reiniciar puntuación';

    const resetButton = document.createElement('button');
    resetButton.className ='resetGame';
    resetButton.textContent = '🔁 Juega otra vez';

    score.append(reButton, resetButton);

    const threeInSection = document.querySelector('.gameContainer');
    threeInSection.appendChild(score);
    
    function loadPoints () {
        const currentPoints = loadScore();
        winnerPoints.textContent = `❎ X: ${currentPoints.X} pts | 🅾️ O: ${currentPoints.O} | ＝ Empates: ${currentPoints.empates}`;
    } 

    loadPoints();

//He integrado las funciones que tenía externa en cuanto a los botones para simplificar el código

    reButton.addEventListener('click', () => {
        resetPoints();
        loadPoints();
        
       /* winnerPoints.textContent = `❎ X: 0 pts | 🅾️ O: 0 | ＝ Empates: 0`;*/
    });

    resetButton.addEventListener('click', () =>{
        const gameContainer = document.querySelector('.gameContainer');
        gameContainer.innerHTML = '';
        createThreeInARow(gameContainer);
        loadPoints();
        createScore();
        /*resetGame();
        loadPoints();*/
    });
    return {loadPoints};
}



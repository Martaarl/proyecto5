
export const keepPoints = (newPoints) => {
    localStorage.setItem('pointsThreeIn', JSON.stringify(newPoints));
}

export const loadPoints = () => {
    console.log('what');
    const dataPoints =localStorage.getItem('pointsThreeIn');
    return dataPoints ? JSON.parse(dataPoints) : {X: 0, O: 0, empate: 0};
}

export const loadScore = (pointsRe) => {
    let currentPoints = loadPoints ();
    pointsRe.textContent = `❎ X: ${currentPoints.X} pts | 🅾️ O: ${currentPoints.O} | ＝ Empates: ${currentPoints.empates}`;}

export function resetPoints(pointsRe){
    const resetPoints = {X:0, O: 0, empates: 0};
    keepPoints(resetPoints);
    loadScore(pointsRe);
}

export function resetGame (createGameFn, container) {
    container.innerHTML ='';
    createGameFn(container);
}



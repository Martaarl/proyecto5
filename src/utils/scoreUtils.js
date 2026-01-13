export const keepPoints = (score) => {
   localStorage.setItem('scorePokemonQuiz', JSON.stringify(score));
}

export const loadPoints = () => {
   const savedScore =localStorage.getItem('scorePokemonQuiz');
   return savedScore ? JSON.parse(savedScore) : 0;
}

export const loadScore = (pointsElement) => {
   const score =loadPoints();
   pointsElement.textContent = `Puntuación: ${score} pts`;
}
export function resetPoints(pointsElement){
   keepPoints(0);
   loadScore(pointsElement);
}
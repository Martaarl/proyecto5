export const saveScore = (key, score) => {
   localStorage.setItem(key, JSON.stringify(score));
}

export const getScore = (key, initialValue = 0) => {
   const savedScore = localStorage.getItem(key);
   return savedScore ? JSON.parse(savedScore) : initialValue;
}

export const loadScore = (pointsElement, key) => {
   if (!pointsElement) {
      return
   }
   const score = getScore(key);
   pointsElement.textContent = `Puntuación: ${score} pts`;
}
export function resetScore(pointsElement, key, initialValue = 0){
   saveScore(key, initialValue);
   loadScore(pointsElement, key);
}


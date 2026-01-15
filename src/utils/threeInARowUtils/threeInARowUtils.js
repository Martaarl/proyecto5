

import { getScore } from "../scoreUtils";

export function loadThreeInScore(scoreElement, scoreKey = 'threeInARowScore') {
    let pointsData = getScore(scoreKey, { X: 0, O: 0, empate: 0 });

    if (typeof pointsData !== 'object' || pointsData === null) {
        pointsData = { X: 0, O: 0, empate: 0 };
    }

    pointsData.X = typeof pointsData.X === 'number' ? pointsData.X : 0;
    pointsData.O = typeof pointsData.O === 'number' ? pointsData.O : 0;
    pointsData.empate = typeof pointsData.empate === 'number' ? pointsData.empate : 0;

    scoreElement.textContent = `❎ X: ${pointsData.X} pts | 🅾️ O: ${pointsData.O} pts | ＝ Empates: ${pointsData.empate}`;
}
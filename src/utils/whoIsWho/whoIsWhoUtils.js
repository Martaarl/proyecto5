
export default function whoIsCategories (whoIsQuestion, charPlaying, answerDiv ) {
    const categories = {
        piel: ['clara', 'oscura'],
        cabello: ['rubio', 'negro', 'pelirrojo', 'marrón', 'gris'],
        gafas: [true, false],
        camiseta: ['roja', 'azul', 'verde', 'amarilla', 'negra', 'rosa', 'turquesa'],
        accesorio: ['gorro', 'sombrero', 'no']
    }
    for (let category in categories) {
        let categoryDiv = document.createElement('div');
        categoryDiv.className = 'questionCategory';
        categoryDiv.textContent = category.toUpperCase();

        for (let index = 0; index < categories[category].length; index++) {
            const options = categories[category][index];
            const button = document.createElement('button');
            button.textContent = options;
            button.addEventListener('click', () => {
                answerDiv.textContent = '',
                checkQuestions(charPlaying, category, options, answerDiv)});
            categoryDiv.appendChild(button);

        }
        whoIsQuestion.appendChild(categoryDiv);
    }
}

let score = 100;

export function initScore(){
    const savedScore = localStorage.getItem('whoIsScore');
    score = savedScore ? parseInt (savedScore) : 100;
    updateScoreWho ();
    return score;
}

export function decreaseScore (amount) {
    score -= amount;
    if(score<0) score = 0;
    localStorage.setItem('whoIsScore', score);
    updateScoreWho();
    return score;
}

export function increaseScore (amount) {
    score+= amount;
    localStorage.setItem('whoIsScore', score);
    updateScoreWho();
    return score;
}

export function updateScoreWho() {
    const whoIsScoreDiv = document.querySelector('.whoIsScore');
    
    if(!whoIsScoreDiv) return;

    const resetButtonWho = document.querySelector('.resetButtonWho');
    whoIsScoreDiv.textContent = `Puntuación: ${score}`;

    if (resetButtonWho) whoIsScoreDiv.appendChild(resetButtonWho);
}

export function resetScoreWho (){
    score = 100;
    localStorage.setItem('whoIsScore', score);
    updateScoreWho();
}

export function checkQuestions (charPlaying, category, options, answerDiv, savedScore) {
    answerDiv.textContent = '';

    const whoIsCharacters = document.querySelector('.whoIsCharacters');
    const possibleName = document.querySelector('.solution');
    const whoIsQuestions = document.querySelector('.whoIsQuestions');

    if (!charPlaying) return;

    if (charPlaying[category] === options) {
        answerDiv.textContent = '¡Si tiene esa característica!';
    } else {
        answerDiv.textContent = 'No coincide 😩';
        decreaseScore(20);
    }
    if(score<=0){
        answerDiv.textContent = '¡Se acabó el juego!';
        whoIsCharacters.style.display='none';
        possibleName.textContent = '';
        whoIsQuestions.textContent = '';
        }
}
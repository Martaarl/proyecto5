
export default function whoIsCategories (whoIsQuestion, charPlaying, answerDiv ) {
    const categories = {
        piel: ['clara', 'oscura'],
        cabello: ['rubio', 'negro', 'pelirrojo', 'marrón'],
        gafas: [true, false],
        camiseta: ['roja', 'azul', 'verde', 'amarilla', 'negra'],
        accesorio: ['gorro', 'sombrero', null]
    }
    for (let category in categories) {
        let categoryDiv = document.createElement('div');
        categoryDiv.className = 'questionCategory';
        categoryDiv.textContent = category.toUpperCase();

        for (let index = 0; index < categories[category].length; index++) {
            const options = categories[category][index];
            const button = document.createElement('button');
            button.textContent = options;
            button.addEventListener('click', () => checkQuestions(charPlaying, category, options, answerDiv));
            categoryDiv.appendChild(button);

        }
        whoIsQuestion.appendChild(categoryDiv);
    }
}

export function checkQuestions (charPlaying, category, options, answerDiv) {
    if (!charPlaying) return;

    if (charPlaying[category] === options) {
        answerDiv.textContent = '¡Si tiene esa característica!';
    } else {
        answerDiv.textContent = 'No coincide 😩';
    }
}
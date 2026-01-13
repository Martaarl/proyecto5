import characters from  '/src/data/characters.json';
import whoIsCategories, { increaseScore, initScore, resetScoreWho } from '../../../utils/whoIsWho/whoIsWhoUtils';
import './whoIsWho.css'

export default function createWhoIsWho (container) {
    container.innerHTML = '';

    const whoIsBoard = document.createElement('div');
    whoIsBoard.className = 'whoIsBoard';

    let charPlaying;
    let attempts = 2;

    const whoIs = document.createElement('div');
    whoIs.className = 'whoIsDiv';

    const player = document.createElement('img');
    player.className = 'player';
    player.style.display = 'none';
    
    const whoIsButton = document.createElement('button');
    whoIsButton.className = 'whoIsButton';
    whoIsButton.textContent = '¡Conoce tu personaje!';

    const answerDiv = document.createElement('div');
    answerDiv.className = 'answerDiv';

    const possibleName = document.createElement('div');
    possibleName.textContent = '¿Quién crees que soy?';
    possibleName.className = 'solution';
        
        const solutionText = document.createElement('input');
        solutionText.className = 'solutionText';
        solutionText.type = 'text';
        solutionText.placeholder = '¿Quién crees que soy?';

        const solutionButton = document.createElement('button');
        solutionButton.className = 'solutionButton';
        solutionButton.textContent = 'Check'

    possibleName.append(solutionText, solutionButton);
    whoIs.append(player, whoIsButton,possibleName, answerDiv);

    const whoIsCharacters = document.createElement('div');
    whoIsCharacters.className ='whoIsCharacters';

    const whoIsQuestions = document.createElement('div');
    whoIsQuestions.className = 'whoIsQuestions';

    const whoIsScore = document.createElement('div');
    whoIsScore.className = 'whoIsScore';
    whoIsScore.textContent = `Puntuación: ${initScore()}`;

    const resetButtonWho = document.createElement('button');
    resetButtonWho.className = 'resetButtonWho';
    resetButtonWho.textContent = '¡Empieza de nuevo!';
    resetButtonWho.addEventListener('click', () => {
        resetScoreWho();
        section.innerHTML = '';
        createWhoIsWho();
    })

    const whoIsAside = document.createElement('aside');
    whoIsAside.className = 'whoIsAside';
    whoIsAside.textContent = '¡Adivina quién es! Haz preguntas sobre lo que ves y... ¡acierta! No olvides controlar tu puntuación... 😏'

    whoIsScore.appendChild(resetButtonWho);
    whoIsBoard.append(whoIs, whoIsCharacters, whoIsQuestions);
    container.append(whoIsBoard, whoIsAside, whoIsScore);

    whoIsButton.addEventListener('click', () => {
            resetScoreWho();
            answerDiv.textContent = '';
            solutionText.value = '';
            attempts = 2;
            whoIsCharacters.style.display = 'flex';
            possibleName.style.display = 'flex';
            possibleName.textContent = '';
            possibleName.append(solutionText, solutionButton);

            whoIsScore.style.display = 'flex';

            charPlaying = [...characters].sort(()=>Math.random()-0.5).slice(0, 1)[0];
            player.src = charPlaying.image;
            player.alt = charPlaying.nombre;
            player.style.display ='none';
           
            let otherChars = characters.filter(c=> c !== charPlaying);
            let charImg = [...otherChars].sort(()=>Math.random()-0.5).slice(0,9);
            charImg.push(charPlaying);
            charImg = charImg.sort(()=> Math.random()-0.5);

            whoIsCharacters.innerHTML = '';
            charImg.forEach(character=>{
                const charDiv = document.createElement('div');
                charDiv.className= 'charDiv';

                const char = document.createElement('img');
                char.className = 'char';
                char.src = character.image;
                char.alt = character.nombre;
                whoIsCharacters.appendChild(char);

                const charName = document.createElement('p');
                charName.className = 'charName';
                charName.textContent = character.nombre;

                charDiv.append(char, charName);
                whoIsCharacters.appendChild(charDiv)
            });

            whoIsQuestions.innerHTML = ''; 
            whoIsCategories(whoIsQuestions, charPlaying, answerDiv/* ,whoIsCharacters, possibleName*/);
        });

        solutionButton.addEventListener('click', () => {

            if(!charPlaying)return;
            const solution = solutionText.value.trim().toLowerCase();
            if (!solution) return;

            if (solution === charPlaying.nombre.toLowerCase()) {
                answerDiv.textContent = '¡HAS ACERTADO!';
                increaseScore(100);
                player.style.display ='flex';
                whoIsCharacters.style.display = 'none';
                possibleName.textContent = '';
            } else {
                attempts --;
                answerDiv.textContent =  attempts > 0 ? '¡Prueba otra vez! Solo tienes un intento más': '¡JUEGA OTRA VEZ!';
                if (attempts === 0){
                    whoIsCharacters.style.display = 'none';
                    possibleName.textContent = '';
                }
            }
            
        });

   


  

} 
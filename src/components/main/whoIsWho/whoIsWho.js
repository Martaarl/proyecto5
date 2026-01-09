import whoIsCategories, { increaseScore, initScore, resetScoreWho } from '../../../utils/whoIsWho/whoIsWhoUtils';
import './whoIsWho.css'

export default function createWhoIsWho () {
    const section = document.querySelector('.gameContainer');

    const whoIsBoard = document.createElement('div');
    whoIsBoard.className = 'whoIsBoard';

    const characters = [
        { nombre: 'Clara', piel: 'clara', cabello: 'rubio liso', gafas: true, camiseta: 'roja', accesorio: 'no', image: '/assets/characters/1.png'},
        { nombre: 'Pepe',piel: 'clara', cabello: 'calvo con canas', gafas: true, camiseta: 'azul', accesorio: 'no', image: '/assets/characters/2.png'},
        { nombre: 'Úrsula',piel: 'clara', cabello: 'pelirrojo liso', gafas: false, camiseta: 'verde', accesorio: 'no', image: '/public/assets/characters/3.png' },
        { nombre: 'Raquel',piel: 'clara', cabello: 'negro liso corto', gafas: false, camiseta: 'rosa', accesorio: 'no' , image: '/public/assets/characters/4.png'},
        { nombre: 'Sergio',piel: 'clara', cabello: 'pelirrojo rizado y barba', gafas: false, camiseta: 'azul', accesorio: 'no', image: '/public/assets/characters/5.png' },

        { nombre: 'Nacho',piel: 'clara', cabello: 'castaño con gorro verde', gafas: false, camiseta: 'amarilla', accesorio: 'gorro', image: '/public/assets/characters/6.png' },
        { nombre: 'Alfredo',piel: 'clara', cabello: 'negro corto', gafas: true, camiseta: 'verde', accesorio: 'no', image: '/public/assets/characters/7.png' },
        { nombre: 'Michael',piel: 'clara', cabello: 'negro corto con sombrero negro', gafas: false, camiseta: 'verde', accesorio: 'sombrero', image: '/public/assets/characters/8.png' },
        { nombre: 'Nadia',piel: 'oscura', cabello: 'negro rizado', gafas: true, camiseta: 'roja', accesorio: 'no', image: '/public/assets/characters/9.png' },
        { nombre: 'Diego',piel: 'clara', cabello: 'calvo con barba', gafas: false, camiseta: 'azul', accesorio: 'no', image: '/public/assets/characters/10.png' },

        { nombre: 'Ana',piel: 'clara', cabello: 'gris corto', gafas: false, camiseta: 'roja', accesorio: 'no', image: '/public/assets/characters/11.png' },
        { nombre: 'Santi',piel: 'clara', cabello: 'marrón corto con barba', gafas: false, camiseta: 'azul', accesorio: 'no', image: '/public/assets/characters/12.png' },
        { nombre: 'Paqui',piel: 'clara', cabello: 'negro liso', gafas: true, camiseta: 'turquesa', accesorio: 'no' , image: '/public/assets/characters/13.png'},
        { nombre: 'Manuel',piel: 'clara', cabello: 'pelirrojo corto con gorro rojo', gafas: false, camiseta: 'verde', accesorio: 'gorro', image: '/public/assets/characters/14.png'},
        { nombre: 'Ricardo',piel: 'clara', cabello: 'marrón corto con barba', gafas: false, camiseta: 'azul', accesorio: 'no', image: '/public/assets/characters/15.png' },

        { nombre: 'Alba',piel: 'oscura', cabello: 'negro liso largo', gafas: false, camiseta: 'roja', accesorio: 'no', image: '/public/assets/characters/16.png' },
        { nombre: 'Juan',piel: 'clara', cabello: 'pelirrojo corto', gafas: false, camiseta: 'verde', accesorio: 'no', image: '/public/assets/characters/17.png' },
        { nombre: 'Esmeralda',piel: 'clara', cabello: 'gris corto', gafas: true, camiseta: 'roja', accesorio: 'no', image: '/public/assets/characters/18.png'},
        { nombre: 'Toni',piel: 'clara', cabello: 'rubio liso', gafas: true, camiseta: 'negra', accesorio: 'no', image: '/public/assets/characters/19.png'},
        { nombre: 'Flora',piel: 'clara', cabello: 'pelirrojo con barba', gafas: false, camiseta: 'azul', accesorio: 'no', image: '/public/assets/characters/20.png' },

        { nombre: 'Neha',piel: 'clara', cabello: 'pelirrojo con barba', gafas: false, camiseta: 'negra', accesorio: 'no', image: '/public/assets/characters/21.png'},
        { nombre: 'Ron',piel: 'clara', cabello: 'marrón corto con gorro rojo', gafas: true, camiseta: 'azul', accesorio: 'gorro', image: '/public/assets/characters/22.png' },
        { nombre: 'Teresa',piel: 'clara', cabello: 'rubio liso', gafas: true, camiseta: 'negra', accesorio: 'no' , image: '/public/assets/characters/23.png'},
        { nombre: 'Susana',piel: 'clara', cabello: 'marrón corto', gafas: false, camiseta: 'verde', accesorio: 'no', image: '/public/assets/characters/24.png' },
        { nombre: 'Rubén',piel: 'clara', cabello: 'pelirrojo corto con gafas', gafas: true, camiseta: 'amarilla', accesorio: 'no', image: '/public/assets/characters/25.png' },

        { nombre: 'Kim',piel: 'oscura', cabello: 'negro liso largo', gafas: false, camiseta: 'negra', accesorio: 'no', image: '/public/assets/characters/26.png' },
        { nombre: 'Rita',piel: 'clara', cabello: 'pelirrojo corto', gafas: false, camiseta: 'verde', accesorio: 'no', image: '/public/assets/characters/27.png' },
        { nombre: 'Natalia',piel: 'clara', cabello: 'gris corto', gafas: true, camiseta: 'roja', accesorio: 'no', image: '/public/assets/characters/28.png'},
        { nombre: 'Fran',piel: 'clara', cabello: 'rubio liso', gafas: true, camiseta: 'negra', accesorio: 'no', image: '/public/assets/characters/29.png' },
        { nombre: 'Flora',piel: 'clara', cabello: 'pelirrojo con barba', gafas: false, camiseta: 'azul', accesorio: 'no', image: '/public/assets/characters/30.png'}
    ];

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
        solutionText.textContent = '¿Quién crees que soy?';

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
    section.append(whoIsBoard, whoIsAside, whoIsScore);

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
import whoIsCategories from '../../../utils/whoIsWho/whoIsWhoUtils';
import './whoIsWho.css'

export default function createWhoIsWho () {
    const section = document.querySelector('.gameContainer');

    const whoIsBoard = document.createElement('div');
    whoIsBoard.className = 'whoIsBoard';

    const characters = [
        { nombre: 'Clara', piel: 'clara', cabello: 'rubio liso', gafas: true, camiseta: 'roja', accesorio: null, image: '/public/assets/characters/1.png'},
        { nombre: 'Pepe',piel: 'clara', cabello: 'calvo con canas', gafas: true, camiseta: 'azul', accesorio: null, image: '/public/assets/characters/2.png'},
        { nombre: 'Úrsula',piel: 'clara', cabello: 'pelirrojo liso', gafas: false, camiseta: 'verde', accesorio: null, image: '/public/assets/characters/3.png' },
        { nombre: 'Raquel',piel: 'clara', cabello: 'negro liso corto', gafas: false, camiseta: 'rosa', accesorio: null , image: '/public/assets/characters/4.png'},
        { nombre: 'Sergio',piel: 'clara', cabello: 'pelirrojo rizado y barba', gafas: false, camiseta: 'azul', accesorio: null, image: '/public/assets/characters/5.png' },

        { nombre: 'Nacho',piel: 'clara', cabello: 'castaño con gorro verde', gafas: false, camiseta: 'amarilla', accesorio: 'gorro', image: '/public/assets/characters/6.png' },
        { nombre: 'Alfredo',piel: 'clara', cabello: 'negro corto', gafas: true, camiseta: 'verde', accesorio: null, image: '/public/assets/characters/7.png' },
        { nombre: 'Michael',piel: 'clara', cabello: 'negro corto con sombrero negro', gafas: false, camiseta: 'verde', accesorio: 'sombrero', image: '/public/assets/characters/8.png' },
        { nombre: 'Nadia',piel: 'oscura', cabello: 'negro rizado', gafas: true, camiseta: 'roja', accesorio: null, image: '/public/assets/characters/9.png' },
        { nombre: 'Diego',piel: 'clara', cabello: 'calvo con barba', gafas: false, camiseta: 'azul', accesorio: null, image: '/public/assets/characters/10.png' },

        { nombre: 'Clara',piel: 'clara', cabello: 'gris corto', gafas: false, camiseta: 'roja', accesorio: null, image: '/public/assets/characters/11.png' },
        { nombre: 'Clara',piel: 'clara', cabello: 'marrón corto con barba', gafas: false, camiseta: 'azul', accesorio: null, image: '/public/assets/characters/12.png' },
        { nombre: 'Clara',piel: 'clara', cabello: 'negro liso', gafas: true, camiseta: 'turquesa', accesorio: null , image: '/public/assets/characters/13.png'},
        { nombre: 'Clara',piel: 'clara', cabello: 'pelirrojo corto con gorro rojo', gafas: false, camiseta: 'verde', accesorio: 'gorro', image: '/public/assets/characters/14.png'},
        { nombre: 'Clara',piel: 'clara', cabello: 'marrón corto con barba', gafas: false, camiseta: 'azul', accesorio: null, image: '/public/assets/characters/15.png' },

        { nombre: 'Clara',piel: 'oscura', cabello: 'negro liso largo', gafas: false, camiseta: 'roja', accesorio: null, image: '/public/assets/characters/16.png' },
        { nombre: 'Clara',piel: 'clara', cabello: 'pelirrojo corto', gafas: false, camiseta: 'verde', accesorio: null, image: '/public/assets/characters/17.png' },
        { nombre: 'Clara',piel: 'clara', cabello: 'gris corto', gafas: true, camiseta: 'roja', accesorio: null, image: '/public/assets/characters/18.png'},
        { nombre: 'Clara',piel: 'clara', cabello: 'rubio liso', gafas: true, camiseta: 'negra', accesorio: null, image: '/public/assets/characters/19.png'},
        { nombre: 'Clara',piel: 'clara', cabello: 'pelirrojo con barba', gafas: false, camiseta: 'azul', accesorio: null, image: '/public/assets/characters/20.png' },

        { nombre: 'Clara',piel: 'clara', cabello: 'pelirrojo con barba', gafas: false, camiseta: 'negra', accesorio: null, image: '/public/assets/characters/21.png'},
        { nombre: 'Clara',piel: 'clara', cabello: 'marrón corto con gorro rojo', gafas: true, camiseta: 'azul', accesorio: 'gorro', image: '/public/assets/characters/22.png' },
        { nombre: 'Clara',piel: 'clara', cabello: 'rubio liso', gafas: true, camiseta: 'negra', accesorio: null , image: '/public/assets/characters/23.png'},
        { nombre: 'Clara',piel: 'clara', cabello: 'marrón corto', gafas: false, camiseta: 'verde', accesorio: null, image: '/public/assets/characters/24.png' },
        { nombre: 'Clara',piel: 'clara', cabello: 'pelirrojo corto con gafas', gafas: true, camiseta: 'amarilla', accesorio: null, image: '/public/assets/characters/25.png' },

        { nombre: 'Clara',piel: 'oscura', cabello: 'negro liso largo', gafas: false, camiseta: null, accesorio: null, image: '/public/assets/characters/26.png' },
        { nombre: 'Clara',piel: 'clara', cabello: 'pelirrojo corto', gafas: false, camiseta: 'verde', accesorio: null, image: '/public/assets/characters/27.png' },
        { nombre: 'Clara',piel: 'clara', cabello: 'gris corto', gafas: true, camiseta: 'roja', accesorio: null , image: '/public/assets/characters/28.png'},
        { nombre: 'Clara',piel: 'clara', cabello: 'rubio liso', gafas: true, camiseta: 'negra', accesorio: null, image: '/public/assets/characters/29.png' },
        { nombre: 'Clara',piel: 'clara', cabello: 'pelirrojo con barba', gafas: false, camiseta: 'azul', accesorio: null , image: '/public/assets/characters/30.png'}
      
    ];

    const whoIs = document.createElement('div');
    whoIs.className = 'whoIsDiv';

    const player = document.createElement('img');
    player.className = 'player';
    
    const whoIsButton = document.createElement('button');
    whoIsButton.className = 'whoIsButton';
    whoIsButton.textContent = '¡Conoce tu personaje!';

    const answerDiv = document.createElement('div');
    answerDiv.className = 'answerDiv';

    whoIs.append(player, whoIsButton, answerDiv);

    const whoIsCharacters = document.createElement('div');
    whoIsCharacters.className ='whoIsCharacters';

    const whoIsQuestions = document.createElement('div');
    whoIsQuestions.className = 'whoIsQuestions';

    whoIsButton.addEventListener('click', () => {

            let charPlaying = [...characters].sort(()=>Math.random()-0.5).slice(0, 1)[0];
            player.src = charPlaying.image;
            player.alt = charPlaying.nombre;
            player.style.display ='none';
           
            whoIsCharacters.innerHTML = '';

            let charAleatory = [...characters].sort(()=>Math.random() - 0.5).slice(0, 10);

            charAleatory.forEach(character=>{
                const charImg = document.createElement('img');
                charImg.className = 'char';
                charImg.src = character.image;
                charImg.alt = character.nombre;
                whoIsCharacters.appendChild(charImg);
            });

            whoIsQuestions.innerHTML = ''; 

            whoIsCategories(whoIsQuestions, charPlaying, answerDiv);
        })

    whoIsBoard.append(whoIs, whoIsCharacters);

    const whoIsAside = document.createElement('aside');
    whoIsAside.className = 'whoIsAside';
    whoIsAside.textContent = '¡Adivina quién es! Haz preguntas sobre lo que ves y... ¡acierta!'

    const whoIsScore = document.createElement('div');
    whoIsScore.className = 'whoIsScore';

    section.append(whoIsBoard, whoIsAside, whoIsQuestions, whoIsScore);

} 
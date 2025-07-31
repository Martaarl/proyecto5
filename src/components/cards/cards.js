import './cards.css';
import createThreeInARow from '../main/threeInARow/threeInARow'; 
import { createPokemonQuiz } from "/src/components/main/pokemonQuiz/pokemonQuiz"
/*import '/src/components/main/whoIsWho/whoIsWho';*/
import playNow from '../main/playNow/playNow.js';

export default function createCards (){

    const main = document.querySelector('main');

    const sectionGames = document.createElement('section');
    sectionGames.className = 'sectionGames'; 

    const gameContainer = document.createElement('section');
    gameContainer.className = 'gameContainer';

    const games = [
    {
        title: 'Three in a row',
        module: createThreeInARow,
        image: '/public/assets/threeIn.png',
        score: '6/10⭐️',
    },
    {
        title: 'Pokemon Quiz',
        module: createPokemonQuiz, 
        image: '#',
        score: '9/10⭐️',
        link: '#'
    }/*,
    {
        title: 'Who Is Who',
        module: createWhoIsWho,
        image: '#',
        score: '8/10⭐️',
    }*/
    ]
    
    games.forEach((game) => {

        const divGames = document.createElement('div');
        divGames.className = 'divGames shake';

        const titleGame = document.createElement('h3');
        titleGame.className = 'titleGame';
        titleGame.textContent = game.title;

        const imageGame = document.createElement('img');
        imageGame.src = game.image;
        imageGame.alt= 'juego';
        imageGame.className='gameImage';

        const scoreGame = document.createElement('p');
        scoreGame.className = 'score';
        scoreGame.textContent=game.score;
        
        const button = document.createElement('a');
        button.className = 'gameButton';
        button.textContent='Play';
        button.addEventListener('click', (e) => {
            e.preventDefault();
            sectionGames.remove();
            playNow(game.module);
        });

        divGames.append(titleGame, imageGame, scoreGame, button);
        
        sectionGames.appendChild(divGames);
    })

    main.appendChild(sectionGames);
}
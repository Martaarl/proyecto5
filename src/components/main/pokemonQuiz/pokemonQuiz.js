import { loadScore } from '../../../utils/pokemonQuizUtils/pokemonQuizUtils';
import './pokemonQuiz.css'
import { fetchApi, printPokemon, randomType, resetPoints} from "/src/utils/pokemonQuizUtils/pokemonQuizUtils";

export function createPokemonQuiz () {
   const section  = document.querySelector('.gameContainer');

   const pokeBoard = document.createElement('section');
   pokeBoard.className = 'pokeBoard';
   pokeBoard.innerHTML = "";

   const pokeButtonsDiv = document.createElement('div');
   pokeButtonsDiv.className ='pokeButtonsDiv';

   const pokeShowed = document.createElement('div');
   pokeShowed.className = 'pokeShowed';

   const pokeStart = document.createElement('button');
   pokeStart.className = 'buttonStart';
   pokeStart.textContent="Mostrar un pokemon aleatorio";
   pokeStart.addEventListener('click', async ()=>{
      try{
         const pokemon = await fetchApi();
         currentPokemon = pokemon;
         printPokemon(pokemon, pokeShowed);

         if (currentPokemon && currentPokemon.types) {
            randomType(currentPokemon, score);
         }
      } catch (error){
         console.error(error);
      }
   });

   let currentPokemon;

   const pokeButtonChoose = document.createElement('div');
   pokeButtonChoose.className = 'pokeButtonChoose';

   const answer = document.createElement('div');
   answer.className = 'answer';

   pokeButtonsDiv.appendChild(pokeStart);
   pokeBoard.append(pokeButtonsDiv, pokeShowed, pokeButtonChoose, answer);

   const scoreDiv = document.createElement('div');
    scoreDiv.className = 'scoreGame';

    let score= document.createElement('p');
    score.className = 'scorePoke';
    score.textContent = `pokeJugador: 0 pts`;

    const reButton = document.createElement('button');
    reButton.className='resetPoints';
    reButton.textContent = 'Reiniciar puntuación';

    scoreDiv.append(score, reButton )
    section.append(pokeBoard, scoreDiv);

    loadScore(score);

    reButton.addEventListener('click', () =>  resetPoints(score));

}
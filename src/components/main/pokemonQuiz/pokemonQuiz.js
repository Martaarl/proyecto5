
import {loadScore, resetScore} from '../../../utils/scoreUtils';

import './pokemonQuiz.css';
import { fetchApi, printPokemon, randomType} from "/src/utils/pokemonQuizUtils/pokemonQuizUtils";

const SCORE_KEY = 'pokemonScore';

export function createPokemonQuiz (container) {
   container.innerHTML = '';

   const pokeBoard = document.createElement('section');
   pokeBoard.className = 'pokeBoard';

   const pokeButtonsDiv = document.createElement('div');
   pokeButtonsDiv.className ='pokeButtonsDiv';

   const pokeShowed = document.createElement('div');
   pokeShowed.className = 'pokeShowed';

   const pokeButtonChoose = document.createElement('div');
   pokeButtonChoose.className = 'pokeButtonChoose';

   const answer = document.createElement('div');
   answer.className = 'answer';

   let currentPokemon;

   const pokeStart = document.createElement('button');
   pokeStart.className = 'buttonStart';
   pokeStart.textContent = "Mostrar un pokemon aleatorio";
   pokeStart.addEventListener('click', async ()=>{
      try{
         answer.textContent = '';
         pokeShowed.innerHTML = '';
         pokeButtonChoose.innerHTML = '';

         const pokemon = await fetchApi();
         currentPokemon = pokemon;
         printPokemon(pokemon, pokeShowed);

         if (currentPokemon && currentPokemon.types) {
            randomType(currentPokemon,score);
         }
      } catch (error){
         console.error(error);
      }
   });

   pokeButtonsDiv.appendChild(pokeStart);
   pokeBoard.append(pokeButtonsDiv, pokeShowed, pokeButtonChoose, answer);
   
   const scoreDiv = document.createElement('div');
   scoreDiv.className = 'scoreGame';

   let score = document.createElement('p');
   score.className = 'scorePoke';

    const reButton = document.createElement('button');
    reButton.className='resetPoints';
    reButton.textContent = 'Reiniciar puntuación';

    scoreDiv.append(score, reButton );

    const pokeAside = document.createElement('aside');
    pokeAside.className = 'pokeAside';
    pokeAside. textContent = 'Consigue la máxima puntuación posible ¡Solo tienes dos intentos por Pokemon!';

    container.append(pokeBoard,pokeAside, scoreDiv);

    loadScore(score, SCORE_KEY);

    reButton.addEventListener('click', () =>  resetScore(score, SCORE_KEY));

   
}
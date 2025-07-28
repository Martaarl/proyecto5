import './pokemonQuiz.css'
import { fetchApi, printPokemon } from "/src/utils/pokemonQuizUtils/pokemonQuizUtils";

export function createPokemonQuiz () {
   const main  = document.querySelector('main');

   const pokeBoard = document.createElement('section');
   pokeBoard.className = 'pokeBoard';
   pokeBoard.innerHTML = "";

   const pokeButtonsDiv = document.createElement('div');
   pokeButtonsDiv.className ='pokeButtonsDiv';

   const pokeStart = document.createElement('button');
   pokeStart.className = 'buttonStart';
   pokeStart.textContent="Mostrar un pokemon aleatorio";
   pokeStart.addEventListener('click', async ()=>{
      try{
         const pokemon = await fetchApi();
         printPokemon(pokemon, pokeBoard);
      } catch (error){
         console.error(error);
      }
   
   /*const pokemonType = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"];  

   const pokeWhoButton = document.createElement('div');
   pokeWhoButton.className = 'pokeWhoButton';*/
   });

   pokeButtonsDiv.appendChild(pokeStart);
   pokeBoard.appendChild(pokeButtonsDiv);
   main.appendChild(pokeBoard);

}
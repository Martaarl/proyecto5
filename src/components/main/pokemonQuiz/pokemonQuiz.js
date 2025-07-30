import './pokemonQuiz.css'
import { fetchApi, printPokemon, checkPokemon } from "/src/utils/pokemonQuizUtils/pokemonQuizUtils";

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
      } catch (error){
         console.error(error);
      }
   });

   const pokeButtonChoose = document.createElement('div');
   pokeButtonChoose.className = 'pokeButtonChoose';

   const answer = document.createElement('div');
   answer.className = 'answer';

   let currentPokemon;

   const pokemonType = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"];  
   pokemonType.forEach (type => {
      const pokeButton = document.createElement('button');
      pokeButton.className = 'chooseButton';
      pokeButton.textContent = type;
      pokeButton.addEventListener('click', () => {
         const result = checkPokemon(currentPokemon, type)
         answer.textContent = result;
      })
      pokeButtonChoose.appendChild(pokeButton);
   });

   pokeButtonsDiv.appendChild(pokeStart);
   pokeBoard.append(pokeButtonsDiv, pokeShowed, pokeButtonChoose, answer);
   section.appendChild(pokeBoard);

}
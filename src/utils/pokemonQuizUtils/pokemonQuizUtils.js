
import { getScore, loadScore, resetScore, saveScore } from "../scoreUtils";

const SCORE_KEY = 'pokemonScore';

 export async function fetchApi() {
   const id = Math.floor(Math.random() * 898)+1;
   const url = 'https://pokeapi.co/api/v2/pokemon/';
   const response = await fetch (`${url}${id}`);

   if(!response.ok){
      throw new Error ('Error obteniendo el Pokemon')
   };
   
   return await response.json();
}

export function printPokemon(pokemon, container) {
   const namePokemon = pokemon.name;
   const imagePokemon = pokemon.sprites.front_default;

   container.innerHTML = `
   <h2>${namePokemon}</h2>
   <img src="${imagePokemon}" alt= "${namePokemon}"/>
   `;
}

export function checkPokemon(pokemon, currentType, scoreElement, SCORE_KEY) {
  if(!pokemon || !pokemon.types){
     return 'no hay ningún pokemon';
  }
  const types = pokemon.types.map(t => t.type.name);
 
  const pokeShowed = document.querySelector('.pokeShowed');
  const pokeButtonChoose = document.querySelector('.pokeButtonChoose');
  const answer = document.querySelector('.answer');
 
  if (types.includes(currentType)){
      pokeShowed.innerHTML='';
      pokeButtonChoose.innerHTML='';
      answer.textContent='';

      let currentScore = getScore(SCORE_KEY);
      currentScore++;
      saveScore(SCORE_KEY, currentScore);
      loadScore(scoreElement, SCORE_KEY);
   
     return '¡Has acertado!'; 
  } else {
     return '¡Vaya! Vuelve a intentarlo'
  }
}
export function randomType(currentPokemon, score){
   const pokemonType = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"];  
   const types = currentPokemon.types.map(t=>t.type.name);
   const correctType = types[Math.floor(Math.random()*types.length)];

   const otherTypes = pokemonType.filter(type=>!types.includes(type));

   let pokemonAleatory = [correctType];
   for (let index = 0; index < 3; index++) {
      const poks = Math.floor(Math.random() * otherTypes.length);
      pokemonAleatory.push(otherTypes.splice(poks, 1)[0]);
}              

   const pokeButtonChoose = document.querySelector('.pokeButtonChoose');
   pokeButtonChoose.innerHTML = '';

   let intentos= 0;

   pokemonAleatory.forEach (type => {
      const pokeButton = document.createElement('button');
      pokeButton.className = 'chooseButton';
      pokeButton.textContent = type;

      pokeButton.addEventListener('click', () => {
         if (intentos>=2) {
            return 
         }

         const result = checkPokemon(currentPokemon, type, score, SCORE_KEY);
         intentos++;

         const answer = document.querySelector('.answer');
         answer.textContent = result;

         if (result === '¡Has acertado!') {
            pokeButtonChoose.innerHTML = '';
            return;
         }

         if (intentos >= 2) {
            pokeButtonChoose.innerHTML = '';
            answer.textContent = 'Has agotado los dos intentos 😔 la ronda ha acabado';
         }
      })

      pokeButtonChoose.appendChild(pokeButton);

   });
}



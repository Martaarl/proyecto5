 

 export async function fetchApi() {
   const id = Math.floor(Math.random() * 898)+1;
   const url = 'https://pokeapi.co/api/v2/pokemon/';
   const response = await fetch (`${url}${id}`);

   if(!response.ok) return error ('Error obteniendo el Pokemon');
   
   const results = await response.json();
   return results;
}

export function printPokemon(pokemon, container) {
   const namePokemon = pokemon.name;
   const imagePokemon = pokemon.sprites.front_default;

   container.innerHTML = `
   <h2>${namePokemon}</h2>
   <img src="${imagePokemon}" alt= "${namePokemon}"/>
   `;
}

export function checkPokemon(pokemon, currentType) {
  if(!pokemon){
     return 'no hay ningún pokemon';
  }
  const types = pokemon.types.map(t => t.type.name);

  if (types.includes(currentType)){
     return '¡Has acertado!';
  } else {
     return '¡Vaya! Vuelve a intentarlo'
  }
}

        
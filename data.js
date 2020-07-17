// estas funciones son de ejemplo

export const orderNames = (data, option) => {
  const orderAZ = data.sort(function(a, b){
    if (a.name < b.name) {
      return -1
    }
    if (a.name < b.name) {
      return 1
    }
  })
      
 if (option === 'A-Z') {
   return orderAZ;
 }
 if (option === 'Z-A') {
   return orderAZ.reverse();
 }
};

// export const anotherExample = () => {
//   return 'OMG';
// };




 export const filterType = (data, option) => {
          const newArrayFilterType = data.filter((object) => object.type.includes(option));
          return newArrayFilterType;
 }

 export const filterName = (data, pokemon) => {
  const newArrayname = data.filter((object) => object.name.toLowerCase().startsWith(pokemon.toLowerCase()));
    
    return newArrayname;
  
  }


  export const candyAmountAvg =(allData,) => {
  const avgCandyCount = allData.reduce((acc, character) => (acc + (character.candy_count)/151), 0);
  
  return Math.round(avgCandyCount);


  }


  
   export const sweetestPokemon =(allData,) => {
   const sweeterPokemon = allData.reduce((sweetest, character) => {
     let candies = (sweetest.candy_count || 0) > character.candy_count ? sweetest : character;
     return candies;
  }, {});
  
  return sweeterPokemon
  
}


export const minCandiesPokemon =(allData,) => {
  const pokemonWhitNoCandies = allData.reduce((sweet, character) => {
    let noCandies = (sweet.candy_count || 0) < character.candy_count ? sweet : character;
    
    return noCandies;
 }, {});
 
 return pokemonWhitNoCandies
}



  export const percentPokemon = (type,) => {
    let result = Math.round((type.length/151)*100)
   return result; 

}

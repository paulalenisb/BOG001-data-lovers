
export const orderNames = (data, option) => {
  const orderAZ = data.sort(function(a, b){
    if (a.name < b.name) {
      return -1
    }
   if (a.name < b.name) {
       return 1;
    }
  })
      
 if (option === 'A-Z') {
   return orderAZ;
 }
 if (option === 'Z-A') {
   return orderAZ.reverse();
 }
};


 export const filterType = (data, option) => {
          const newArrayFilterType = data.filter((object) => object.type.includes(option));
          return newArrayFilterType;
 }

 export const filterName = (data, pokemon) => {
  const newArrayname = data.filter((object) => object.name.toLowerCase().startsWith(pokemon.toLowerCase()));
  return newArrayname;
  
  }


  export const avgHeightPokemon =(allData) => {
  const avgHeight = allData.reduce((acc, pokemon) => (acc + (parseFloat(pokemon.height))/allData.length), 0);
  
  return avgHeight.toFixed(2);

  }


  
   export const tallestPokemon =(allData) => {
   const  tallPokemon = allData.reduce((tallest, pokemon) => {
     let heightPokemon = (tallest.height || 0) > pokemon.height  ? tallest : pokemon;
     return heightPokemon;
  }, {});
  
  return tallPokemon
  
}


export const shortestPokemon =(allData) => {
  const shortPokemon = allData.reduce((short, pokemon) => {
     let shortHeight = (short.height || 0) < pokemon.height ? short : pokemon;
    return shortHeight;
 }, {});
 
 return shortPokemon
}



  export const percentPokemon = (arrType) => {
    let result = Math.round((arrType.length/151)*100)
   return result; 

}




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
          const newFilterType = data.filter((object) => object.type.includes(option));
          return newFilterType;
 }



 let computeType = (data,option) => {

   const newComputeType = data.reduce((contador, data) => {
    if (data.option === "Grass") {
      return contador + 1;
    } else {
     return contador;
    }

   }, 0);


 console.log(newComputeType);
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
          const newArray = data.filter((el) => el.type.includes(option));
          return newArray;
 }


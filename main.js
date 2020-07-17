//import { example } from './allPokemon.js';
//import data from './data/pokemon/pokemon.js';

// import {
  
//   orderNames,
// } from './data.js';

window.onload 

import {
  
  orderNames,
  filterType,
  filterName,
  percentPokemon,
  candyAmountAvg,
  // computeType,
  
} from './data.js';



fetch('https://raw.githubusercontent.com/paulalenisb/BOG001-data-lovers/master/src/data/pokemon/pokemon.json')
  .then((res) => res.json())
  .then((data) => {

  const allData= data.pokemon
  createCard(allData);
  
    function createCard (allData) {
     
      let card = '';
         
        for ( let i = 0;  i < allData.length; i++) {
              
          if (allData[i].candy_count === undefined) {
              allData[i].candy_count = 0
          }

          let typeSection = "";

          for (let t=0; t< allData[i].type.length; t++) {
            
            let typeColorPokemon = allData[i].type[t];
            let color = getColor(typeColorPokemon);
            typeSection =  typeSection + color ;

          }

          card += `
                <li class="card" id="cards${allData[i].id}">
                <h2 id="namePokemon${allData[i].name}" class="name">${allData[i].name}   ${allData[i].num}</h2>
                <img class ="image_pokemon" src="${allData[i].img}" alt="pokemon-image">
                <button class="btn_aboutMe" id="${allData[i].id}" onclick="modal(${allData[i].id})">About me</button>
                </li>
                
                <div class="overlay" id="overlay${allData[i].id}" style="display:none">
                <div class="popup" id="modal${allData[i].id}" style="display:none">
                <a href="#" id="btn-close-popup" class="btn-close-popup" onclick="closeModal(${allData[i].id})"><i class="fas fa-times"></i> </a>
                <img src="${allData[i].img}" alt="pokemon_card_popup">
                <h2 class="name_popup">${allData[i].name} ${allData[i].num}</h2>
                <div class="white_bar"> </div>
                <div class="type" id="${allData[i].type}">${typeSection}</div>
                <div class="container2_popup">
                <p class="pokemon_info"> <strong> Weaknesses: </strong>  ${allData[i].weaknesses.join(", ")} </p>
                <p class="pokemon_info"><strong>Candy:</strong> ${allData[i].candy}</p>
                <p class="pokemon_info"><strong>Candy Count: </strong>${allData[i].candy_count}</p>
                <p class="pokemon_info"><strong>Spawn Chance:</strong> ${allData[i].spawn_chance}</p>
                <p class="pokemon_info"><strong>Spawn Time:</strong> ${allData[i].spawn_time}</p>
                </div>
                </div>
                </div>
                </div>

                ` 
                // console.log(allData[i].weaknesses);

                
 

          }
          
          document.getElementById('listOfPokemon').innerHTML = card

        }
     
        
        console.log(candyAmountAvg(allData));

    //Botones Menú
    const menuBar = document.querySelector("#menuBar");
    const menuContent = document.querySelector("#menuContent");
    const home  = document.querySelector('#home')
    const pokemonGalery = document.querySelector('#pokemonGalery')
    const subMenuSort = document.querySelector(".submenuSort"); 
    const menuType = document.querySelector('.menuType')  
    const menuSort = document.querySelector('.menuSort');
    const subMenuType= document.querySelector(".subMenuType");
    const containerCharts = document.querySelector('#containerCharts')
    let resultType = document.getElementById("bigContainerResult")

    const showMenuBar = () => {
      menuContent.classList.toggle("hidden")
      };
    menuBar.addEventListener("click", showMenuBar);
    
    // const hideMenuBar = () => {
    //   menuContent.classList.toggle("hidden")6
    // };
    // menuBar.addEventListener("click", hideMenuBar);

    
    const showPokemon = () =>{
      containerCharts.style.display= 'none'
      pokemonGalery.style.display= 'block'
      }
    home.addEventListener('click', showPokemon) 
    
  
    const getOrderCards = (e)=>{
      const eventBtnSort= e.target.textContent
      createCard(orderNames(allData, eventBtnSort))
      pokemonGalery.style.display= 'block'
      containerCharts.style.display= 'none'
    }
    menuSort.addEventListener('click',getOrderCards) 
    

    const showOrderNames = () => {
      menuSort.style.display = "block"
    };
    subMenuSort.addEventListener("click", showOrderNames);

    const hideOrderNames = () => {
      menuSort.style.display = "none"
    };
    subMenuSort.addEventListener("mouseleave", hideOrderNames);

    const showType = () => {
      menuType.style.display = "grid";
    
    };
    subMenuType.addEventListener("click", showType);

    const hideType = () => {
      menuType.style.display = "none";
    };
    subMenuType.addEventListener("mouseleave", hideType)

    

    const getFilterCards = (e)=>{
      const eventBtnFilter= e.target.textContent
      let newArrFilterType = filterType(allData, eventBtnFilter)
      createCard(newArrFilterType)
      let compute = percentPokemon(newArrFilterType)
      resultType.style.display = 'flex';
      resultType.innerHTML = `${compute}% of the Pokemons at the Kanto region are ${eventBtnFilter}` 
      pokemonGalery.style.display= 'block'
      containerCharts.style.display= 'none'
    }
    menuType.addEventListener('click', getFilterCards)
   

   
    
    

    

    



console.log(filterName(allData, "Pikachu"))

let searchName =document.querySelector("#searchName")

 
searchName.addEventListener( "keyup", getName )

 function getName (){
  let namePokemon=  searchName.value;
  containerCharts.style.display= 'none'
  pokemonGalery.style.display= 'block'
  
 createCard(filterName(allData,namePokemon))
 }

 const avgCandy = candyAmountAvg(allData)
 






 



  
  // var mostExpPilot = allData.reduce(function (oldest, pilot) {
  //   return (oldest.candy_count || 0) < pilot.candy_count ? oldest : pilot;
  // }, {});

  // console.log(mostExpPilot)

//  const newComputeType = allData.reduce((contador, option) => {
//   if (option === "Grass") {
//     return contador + 1;
//   } else {
//    return contador;
//   }

//  }, 0);

//  console.log(newComputeType)



})



window.modal = modal;

function modal (id) {
  let overlay = document.getElementById("overlay" + id);
  let modalPopup = document.getElementById("modal" + id);
  modalPopup.style.display = 'block';
  overlay.style.display = 'flex';
  // console.log(modalPopup)
}
      
window.closeModal = closeModal;

function closeModal (id) {
  let overlay = document.getElementById("overlay" + id);
  let modalPopup = document.getElementById("modal" + id);
    modalPopup.style.display = 'none';
    overlay.style.display = 'none';
}



// function getColor (type) {
//   let templateImgType;
//   switch (type) {
//     case  "Grass":
//       templateImgType = `<img class="typeElement" src="images/type_grass.png"></img>`;
//       break;
//     case "Poison":
//       console.log("Soy poisson");
//       break;
//     default:
//       console.log("si") 

//   }
//   console.log(templateImgType)
//   return  templateImgType;

// }
 

function getColor (type) {
  if (type === "Grass") {
    return `<img class="typeElement" src="images/type_grass.png"></img>`
  }
  
  if (type === "Poison"){
    return  `<img class="typeElement" src="images/type_poison.png"></img>`
  }
  
  if (type === "Fire"){
    return  `<img class="typeElement" src="images/type_fire.png"></img>`
  } 
  
  if (type === "Fighting"){
    return  `<img class="typeElement" src="images/type_fighting.png"></img>`
  }
  
  if (type === "Rock"){
    return  `<img class="typeElement" src="images/type_rock.png"></img>`
  }
  
  if (type === "Water"){
    return  `<img class="typeElement" src="images/type_water.png"></img>`
  }
  
  if (type === "Ground"){
    return  `<img class="typeElement" src="images/type_ground.png"></img>`
  }
  
  if (type === "Psychic"){
    return  `<img class="typeElement" src="images/type_psychic.png"></img>`
  }
  
  if (type === "Electric"){
    return  `<img class="typeElement" src="images/type_electric.png"></img>`
  }
  
  if (type === "Normal"){
    return  `<img class="typeElement" src="images/type_normal.png"></img>`
  }
  
  if (type === "Ice"){
    return  `<img class="typeElement" src="images/type_ice.png"></img>`
  }
  
  if (type === "Ghost"){
    return  `<img class="typeElement" src="images/type_ghost.png"></img>`
  }
  
  if (type === "Dragon"){
    return  `<img class="typeElement" src="images/type_dragon.png"></img>`
  }
  
  if (type === "Bug"){
    return  `<img class="typeElement" src="images/type_bug.png"></img>`
  }

  return ""
  }
  // const containerCharts = document.querySelector('#containerCharts')
  

   
   


   
  
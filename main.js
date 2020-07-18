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
            let color = getImg(typeColorPokemon);
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

          }
          
          document.getElementById('listOfPokemon').innerHTML = card

        }
     

    //Botones Menú
    const menuBar = document.querySelector("#menuBar");
    const menuContent = document.querySelector("#menuContent");
    // const home  = document.querySelector('#home');
    const pokemonGalery = document.querySelector('#pokemonGalery');
    const subMenuSort = document.querySelector(".submenuSort"); 
    const menuType = document.querySelector('.menuType');  
    const menuSort = document.querySelector('.menuSort');
    const subMenuType= document.querySelector(".subMenuType");
    const containerCharts = document.querySelector('#containerCharts');
    let resultType = document.getElementById("bigContainerResult");
    let searchName =document.querySelector("#searchName");
    const chartBtn = document.querySelector('#chartLink');

    //Mostrar y ocultar ventanas 
    const showMenuBar = () => {
      menuContent.classList.toggle("hidden")
      };
    menuBar.addEventListener("click", showMenuBar);
    
    
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

    function getName (){
      let namePokemon=  searchName.value;
      containerCharts.style.display= 'none'
      pokemonGalery.style.display= 'block'
      
    createCard(filterName(allData,namePokemon))
    }

    searchName.addEventListener("keyup", getName)
  
   const showCharts = () =>{
    pokemonGalery.style.display= 'none'
    // resultType.style.display= 'none'
    containerCharts.style.display= 'block'
    
   }
   chartBtn.addEventListener('click', showCharts)

   //Manejo del DOM 
  
  const infoPokemon = document.querySelector('#info');
   const title= document.createElement('h1')
   title.textContent = 'Important data about the Pokemon'
   infoPokemon.appendChild(title);

   const textNoCandies = document.createElement('p');
   textNoCandies.innerHTML = `It is the only pokemon in  Kanto region that doesn't eat candy  <strong>${allData[150].name} <img src="${allData[150].img}" alt="pokemon_150">`;
   infoPokemon.appendChild(textNoCandies);

   const textCandies = document.createElement('p');
   textCandies.innerHTML = ` It is the  pokemon that  eat more amount of candy in the  Kanto region  <strong>${allData[129].name} <img src="${allData[129].img}" alt="pokemon_150">`;
   infoPokemon.appendChild(textCandies);

   const textAvgCandies = document.createElement('p');
   textAvgCandies.textContent = " In the Kanto region the pokemon´s candy count average is " + candyAmountAvg(allData);
   infoPokemon.appendChild(textAvgCandies);

   const titleChartType= document.createElement('h2')
   titleChartType.textContent = 'Percent according to the type of Pokemon'

   infoPokemon.appendChild(titleChartType);




})

//Mostrar y ocultar modales


window.modal = modal;

function modal (id) {
  let overlay = document.getElementById("overlay" + id);
  let modalPopup = document.getElementById("modal" + id);
  modalPopup.style.display = 'block';
  overlay.style.display = 'flex';
}
      
window.closeModal = closeModal;

function closeModal (id) {
  let overlay = document.getElementById("overlay" + id);
  let modalPopup = document.getElementById("modal" + id);
    modalPopup.style.display = 'none';
    overlay.style.display = 'none';
}

//Funcion mostrar img en modales según tipo

function getImg (type) {
  let templateImgType;
  switch (type) {
    case  "Grass":
      templateImgType = `<img class="typeElement" src="images/type_grass.png"></img>`;
      break;
    case "Poison":
      templateImgType = `<img class="typeElement" src="images/type_poison.png"></img>`;
      break;
      case "Fire":
      templateImgType =  `<img class="typeElement" src="images/type_fire.png"></img>`;
      break;
      case "Fighting":
      templateImgType =  `<img class="typeElement" src="images/type_fighting.png"></img>`;
      break;
      case "Rock":
      templateImgType = `<img class="typeElement" src="images/type_rock.png"></img>`;
      break;
      case "Water":
      templateImgType = `<img class="typeElement" src="images/type_water.png"></img>`;
      break;
      case "Ground":
      templateImgType = `<img class="typeElement" src="images/type_ground.png"></img>`;
      break;
      case "Psychic":
      templateImgType = `<img class="typeElement" src="images/type_psychic.png"></img>`;
      break;
      case "Electric":
      templateImgType = `<img class="typeElement" src="images/type_electric.png"></img>`;
      break;
      case "Normal":
      templateImgType = `<img class="typeElement" src="images/type_normal.png"></img>`;
      break;
      case "Ice":
      templateImgType = `<img class="typeElement" src="images/type_ice.png"></img>`;
      break;
      case "Ghost":
      // templateImgType = `<img class="typeElement" src="images/type_ghost.png"></img>`;
      break;
      case  "Dragon":
      templateImgType = `<img class="typeElement" src="images/type_dragon.png"></img>`;
      break;
      case "Bug":
      templateImgType = `<img class="typeElement" src="images/type_bug.png"></img>`;
      break;
    default:
      ""

  }
  return  templateImgType;

}
  

   
   


   
  
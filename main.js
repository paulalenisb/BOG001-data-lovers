//import { example } from './allPokemon.js';
//import data from './data/pokemon/pokemon.js';

// import {
  
//   orderNames,
// } from './data.js';




window.onload 



// import {
  
//   orderNames,
  
// } from './data.js';


     fetch('https://raw.githubusercontent.com/paulalenisb/BOG001-data-lovers/master/src/data/pokemon/pokemon.json')
          .then((res) => res.json())
          .then((data) => {

          const allData= data.pokemon
         createCard(allData);
         
       
     function createCard (allData) {
      let card = '';
         
          for ( let i = 0;  i < allData.length; i++) {
              
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
             <div class="blue_bar"> </div>
             <p class="type">Type: ${allData[i].type}</p>
             <div class="container2_popup">
             <p class="pokemon_info"> <strong> Weaknesses:</strong> ${allData[i].weaknesses}</p>
             <p class="pokemon_info"><strong>Candy:</strong> ${allData[i].candy}</p>
             <p class="pokemon_info"><strong>Candy Count: </strong>${allData[i].candy_count}</p>
             <p class="pokemon_info"><strong>Spawn Chance:</strong> ${allData[i].spawn_chance}</p>
             <p class="pokemon_info"><strong>Spawn Time:</strong> ${allData[i].spawn_time}</p>
             </div>
             </div>
             </div>
             </div>

            ` 
 

          };
          
          document.getElementById('listOfPokemon').innerHTML = card;
        
        }
      
      
        function getOrderCards(){
          
        const valueOption = selectOrderAz.value
        createCard(orderNames(allData, valueOption));
        }

         const selectOrderAz = document.querySelector('#sortNames');
        selectOrderAz.addEventListener('change',getOrderCards)
      
    })



    const orderNames = (data, option) => {
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
     return orderAZ;
    };


       
        function modal (id) {
          let overlay = document.getElementById("overlay" + id);
          let modalPopup = document.getElementById("modal" + id);
          modalPopup.style.display = 'block';
          overlay.style.display = 'block';
          
          console.log(modalPopup)
     };
      
       function closeModal (id) {
          let overlay = document.getElementById("overlay" + id);
          let modalPopup = document.getElementById("modal" + id);
          modalPopup.style.display = 'none';
          overlay.style.display = 'none';
          
       }



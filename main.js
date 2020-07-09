//import { example } from './allPokemon.js';
//import data from './data/pokemon/pokemon.js';

// import {
  
//   orderNames,
// } from './data.js';




window.onload 



import {
  
  orderNames,
  filterType,
  
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
              allData[i].candy_count = 'I do not eat candies'
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
             <div class="blue_bar"> </div>
             <p class="type" id="${allData[i].type}">Type: ${allData[i].type}</p>
             <div class="container2_popup">
             <p class="pokemon_info"> <strong> Weaknesses:</strong> <span id="${allData[i].weaknesses}">${allData[i].weaknesses}</span> </p>
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
          // .join(", ")
          
          document.getElementById('listOfPokemon').innerHTML = card

          

        }
      
        // function getOrderCardsAz(){
        // const stringAz = selectOrderAz.textContent
        // createCard(orderNames(allData, stringAz ));
        // };

       const getOrderCards =(e)=>{
          const eventBtnSort= e.target.textContent
    
          createCard(orderNames(allData, eventBtnSort ))
          
        }


      
        let menuSort = document.querySelector('.menuSort');
         menuSort.addEventListener('click',getOrderCards)





         let typePokemon = document.querySelector('.menuType')
         const onclick = (e)=>{
           const eventBtnFilter= e.target.textContent
           createCard(filterType(allData, eventBtnFilter))
          typePokemon.style.display = 'none';

         }
        

          typePokemon.addEventListener('click', onclick)
         console.log(filterType(allData, "Poison"))
      
       
    

    })

    

    


       window.modal = modal;

        function modal (id) {
          let overlay = document.getElementById("overlay" + id);
          let modalPopup = document.getElementById("modal" + id);
          modalPopup.style.display = 'block';
          overlay.style.display = 'block';
          
          console.log(modalPopup)
     }
      
     window.closeModal = closeModal;

       function closeModal (id) {
          let overlay = document.getElementById("overlay" + id);
          let modalPopup = document.getElementById("modal" + id);
          modalPopup.style.display = 'none';
          overlay.style.display = 'none';
          
       }


      
      
   
     


        
         

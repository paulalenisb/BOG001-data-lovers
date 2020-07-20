/* eslint-disable no-undef */


window.onload 

import {
    filterType,
    percentPokemon,
    shortestPokemon,
    tallestPokemon,
    avgHeightPokemon,
  
  } from './data.js';
  

  fetch('https://raw.githubusercontent.com/paulalenisb/BOG001-data-lovers/master/src/data/pokemon/pokemon.json')
  .then((res) => res.json())
  .then((data) => {

    const allData= data.pokemon;
  // 
    const arrShortestPokemon = shortestPokemon(allData);
    const arrTallestPokemon= tallestPokemon(allData);
  
    const infoPokemon = document.querySelector('#info');
     const title= document.createElement('h1')
     title.textContent = 'Important data about the Pokemon'
     infoPokemon.appendChild(title);
  
     const cardsCandiesPokemon = document.querySelector('#square');
     const textNoCandies = document.createElement('div');
     textNoCandies.innerHTML = `I'm the shortest pokemon, my heigth is ${arrShortestPokemon.height}   <strong>${arrShortestPokemon.name} <img src="${arrShortestPokemon.img}" alt="pokemon_150">`;
     cardsCandiesPokemon.appendChild(textNoCandies);
  
     const textCandies = document.createElement('div');
     textCandies.innerHTML = `I'm the tallest pokemon my heigth is ${arrShortestPokemon.height} <strong>${arrTallestPokemon.name} <img src="${arrTallestPokemon.img}" alt="pokemon_150">`;
     cardsCandiesPokemon.appendChild(textCandies);
  
     const textAvgCandies = document.createElement('div');
     textAvgCandies.innerHTML = `In the Kanto region the pokemon´s  average  height is ${avgHeightPokemon(allData)}m. <img class="candyImg" src="images/height.png"></img>`;
     cardsCandiesPokemon.appendChild(textAvgCandies);

     const textInfo = document.createElement('div');
     textInfo.innerHTML = ` <strong class="titleCuriosity">Did you know ? <br> <img class="pokeball" src="images/pokeball3.png" ></img></strong> <p class="textCuriosity">A Pokémon with the ability Overshadow will, upon entering battle, lower the Attack and Special Attack of any opposing Pokémon that are shorter than it.</p> `;
     cardsCandiesPokemon.appendChild(textInfo);
  
     const titleChart = document.querySelector('#titleChart');
     const titleChartType= document.createElement('h2')
     titleChartType.textContent = 'Percent according to the type of Pokemon'
  
     titleChart.appendChild(titleChartType);
  
  


  
  const totalPokemon= 151;

  

const ctx= document.querySelector('.charts').getContext("2d");
const myChart= new Chart(ctx,{
   type:"horizontalBar",
   data:{
       labels:["Grass",
                "Poison",
                "Fire",
                "Fighting",
                "Rock",
                "Water",
                "Ground",
                "Psychic",
                "Electric",
                "Normal",
                "Ice",
                "Ghost",
                "Dragon",
                "Bug"
            ],
       datasets:[{
               label:'% Pokemons Type',
               data:[
                percentPokemon(filterType(allData,"Grass"),totalPokemon),
                percentPokemon(filterType(allData,"Poison"),totalPokemon),
                percentPokemon(filterType(allData,"Fire"),totalPokemon),
                percentPokemon(filterType(allData,"Fighting"),totalPokemon),
                percentPokemon(filterType(allData,"Rock"),totalPokemon),
                percentPokemon(filterType(allData,"Water"),totalPokemon),
                percentPokemon(filterType(allData,"Ground"),totalPokemon),
                percentPokemon(filterType(allData,"Psychic"),totalPokemon),
                percentPokemon(filterType(allData,"Electric"),totalPokemon),
                percentPokemon(filterType(allData,"Normal"),totalPokemon),
                percentPokemon(filterType(allData,"Ice"),totalPokemon),
                percentPokemon(filterType(allData,"Ghost"),totalPokemon),
                percentPokemon(filterType(allData,"Dragon"),totalPokemon),
                percentPokemon(filterType(allData,"Bug"),totalPokemon),
                
                ],
               backgroundColor:[
                   '#E8E85F',
                   '#B92025',
                   '#F37021',
                   '#662D91',
                   '#745C44',
                   '#0A87B3',
                   '#915022',
                   '#C03995',
                   '#F3B81A',
                   '#FFFFFF',
                   '#86DCF7',
                   '#8B7E71',
                   '#459F46',
                   '#35D384',

               ]
       }]
   },
   options: {
    responsive: true,
    responsiveAnimationDuration: 0,
    maintainAspectRatio: 0,
      legend: {          
          labels: {
              width: 100,
              height: 300,
              fontSize: 15,
              padding: 5,
              boxWidth: 10,
              fontFamily: 'Roboto',
              fontColor: 'black',       
          }
      },     
   }
});
window.myChart = myChart;
  })




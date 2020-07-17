import data from './data/pokemon/pokemon.js';

import {
    filterType,
    candyAmountAvg,
    sweetestPokemon,
    minCandiesPokemon,
    percentPokemon,
    // computeType,
    
  } from './data.js';
  
  
// console.log(minCandiesPokemon(allData))


    const allData = data.pokemon;
  
  const chartBtn = document.querySelector('#chartLink') 

   
   
  
   const showCharts = () =>{
    pokemonGalery.style.display= 'none'
    // resultType.style.display= 'none'
    containerCharts.style.display= 'block'
    
   }
   chartBtn.addEventListener('click', showCharts)
  
  const infoPokemon = document.querySelector('#info');
   const title= document.createElement('h1')
   title.textContent = 'Important data about the Pokemon'
   infoPokemon.appendChild(title);

   const textNoCandies = document.createElement('p');
   textNoCandies.innerHTML = `The only pokemon in Kanto region that doesn't eat candy is ${allData[150].name} <img src="${allData[150].img}" alt="pokemon_150">`;
   infoPokemon.appendChild(textNoCandies);

   const textAvgCandies = document.createElement('p');
   textAvgCandies.textContent = "The pokemon´s candy count average is candyAmountAvg 27";
   infoPokemon.appendChild(textAvgCandies);

   const titleChartType= document.createElement('h2')
   titleChartType.textContent = 'Percent according to the type of Pokemon'

   infoPokemon.appendChild(titleChartType);

//    const chartData = document.querySelector('.chartData');

//    const canvas= document.createElement('canvas')
//   //  titleChartType.textContent = 'Percentaje according to the type of Pokemon'

//   chartData.appendChild(canvas);


// ;

// let maxCandy = sweetestPokemon(allData);

// let minCandy = minCandiesPokemon(allData);

// console.log(maxCandy, minCandy)

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
                percentPokemon(filterType(allData,"Grass")),
                percentPokemon(filterType(allData,"Poison")),
                percentPokemon(filterType(allData,"Fire")),
                percentPokemon(filterType(allData,"Fighting")),
                percentPokemon(filterType(allData,"Rock")),
                percentPokemon(filterType(allData,"Water")),
                percentPokemon(filterType(allData,"Ground")),
                percentPokemon(filterType(allData,"Psychic")),
                percentPokemon(filterType(allData,"Electric")),
                percentPokemon(filterType(allData,"Normal")),
                percentPokemon(filterType(allData,"Ice")),
                percentPokemon(filterType(allData,"Ghost")),
                percentPokemon(filterType(allData,"Dragon")),
                percentPokemon(filterType(allData,"Bug")),
                
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
    //   title: {
    //       display: true,
    //       text: 'Cantidad de Pokemones por Tipo',
    //       fontSize: 15,
    //       padding: 5,
    //       fontColor: '#1C2D61',
    //   },
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
    //   tooltips: {                   
    //       xPadding: 10,
    //       yPadding: 10,
    //   }
   }
});




window.myChart= myChart;


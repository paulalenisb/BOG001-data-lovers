import {orderNames, filterType, tallestPokemon, shortestPokemon,  percentPokemon, filterName,avgHeightPokemon} from '../src/data.js';


describe('sort data alphabetically', () => {
  it('is a function', () => {
    expect(typeof orderNames).toBe('function')});

    it('sort data alphabetically', () => {
      const names = [
        {name: "Ninetales"},
        {name: "Dodrio"},
        {name: "Marowak"},
      ];
      const optionUser = "A-Z"; 
      const sortNames = [
        {name: "Dodrio"},
        {name: "Marowak"},
        {name: "Ninetales"},
      ];
      expect(orderNames(names,optionUser)).toStrictEqual(sortNames);    
  })
 });

 describe('sort data alphabetically', () => {
  it('is a function', () => {
    expect(typeof orderNames).toBe('function')});

    it('sort data alphabetically', () => {
      const names = [
        {name: "Ninetales"},
        {name: "Dodrio"},
        {name: "Marowak"},
      ];
      const optionUsers = "Z-A"; 
      const sortNames = [
        {name: "Ninetales"},
        {name: "Marowak"},
        {name: "Dodrio"},
      ];
      expect(orderNames(names,optionUsers)).toStrictEqual(sortNames);    
  })
 });

 
 describe('Filter by type', () => {
  it('Should be a function', () => {
    expect(typeof filterType).toBe('function');
  });

  it('should filter by type', () => {
    const types = [
      { type: ['Grass', 'Poison'] },
      { type: ['Fire'] },
      { type: ['Fire', 'Flying'] },
      { type: ['Dragon', 'Flying'] }
    ];
    const userInput = 'Fire';
    const output = [
      { type: ['Fire'] },
      { type: ['Fire', 'Flying'] },
    ];
    expect(filterType(types, userInput)).toEqual(output);
  });
});


describe('Average Height', () => {
  it('Should be a function', () => {
    expect(typeof avgHeightPokemon).toBe('function');
  });

  it("should show the  pokemon's height average", () => {
    const heightPokemon = [
      { height: "1 m" },
      { height: "0.50 m"},
      { height: "0.30 m"},
    ];
    const output = "0.60" ;
    
    expect(avgHeightPokemon(heightPokemon)).toEqual(output);
  });
});

describe('shortest Pokemon', () => {
  it('Should be a function', () => {
    expect(typeof shortestPokemon).toBe('function');
  });

  it('should show the shortest Pokemon', () => {
    const heightPokemon = [
      { height: "1 m" },
      { height: "0.50 m"},
      { height: "0.30 m"},
           ];
    const output = { height: "0.30 m"};
    
    expect(shortestPokemon(heightPokemon)).toEqual(output);
  });
});



describe('Tallest pokemon', () => {
  it('Should be a function', () => {
    expect(typeof tallestPokemon).toBe('function');
  });

  it('should show the tallest pokemon', () => {
    const heightPokemon = [
      { height: "1 m" },
      { height: "0.50 m"},
      { height: "0.30 m"},
           ];
    const output = { height: "1 m"};
  
    expect(tallestPokemon(heightPokemon)).toEqual(output);
  });
});


describe('Percent pokemon type', () => {
  it('Should be a function', () => {
    expect(typeof percentPokemon).toBe('function');
  });

  it('should return "2% of Pokemon in the Kanto region are Dragon-type." ', () => {
    const types = [
      { type: ['Dragon', 'Poison'] },
      { type: ['Dragon'] },
      { type: ['Dragon', 'Flying'] },
    ];
     
    const output = 2
  
    
    expect((percentPokemon(types))).toEqual(output);
  });
});

describe('Search By Name', () => {
  it('Should be a function', () => {
    expect(typeof filterName).toBe('function');
  });

  it('should search for pokemon by name ', () => {
    const input1 = [
      { name: 'Charizard' },
      { name: 'Charmander' },
      { name: 'Bulbasaur' },
    ];
    const input2 = 'char';
    const output = [
      { name: 'Charizard' },
      { name: 'Charmander' },
    ];
    expect(filterName(input1, input2)).toEqual(output);
  });
});
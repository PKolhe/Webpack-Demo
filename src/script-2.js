// A base class is defined using the new reserved 'class' keyword
class Country {
  
  constructor(name, capital, population, pm) {
    this.name = name;
    this.capital = capital;
    this.population = population;
    this.pm = pm;
  }

  // Simple class instance methods using short-hand method
  // declaration
  getCountry() {
    return this;
  }

  // We will look at static and subclassed methods shortly
}

// Classes are used just like ES5 constructor functions:
let countryObj = new Country('India', 'New Delhi', 10506565454, 'Narendra Modi');
countryObj.getCountry();

module.exports = countryObj; // "I am Pankaj K"; // can be string, array, objects etc...


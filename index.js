// import coffee_data.js

// print an array with all drinks on menu
const {coffeeMenu}  = require("./coffee_data");
// const coffee = require("./coffee_data");
// const names = coffee.coffeeMenu.map ((drink) => drink.name)

const names = coffeeMenu.map(({name}) => name);
console.log(names);

// Print an array of drinks that cost 5 and under.
const drinksFivebelow = coffeeMenu.filter((item)=> {
    return item.price <= 5
})
console.log(drinksFivebelow)


// Print an array of drinks that are priced at an even number.
const evenDrinks = coffeeMenu.filter((item) => {
    return item.price % 2 ==0
})
console.log(evenDrinks)


// Print the total if you were to order one of every drink.
const total = coffeeMenu.reduce (function (accumulator, drink){
    accumulator += drink.price;
    return accumulator;
}, 0);
console.log("To buy all the drinks it would cost","$", total);


// Print an array with all the drinks that are seasonal.
const seasonalDrinks = coffeeMenu.filter (({seasonal}) => seasonal);
const seasonalDrinknames = seasonalDrinks.map ((element) => element.name);
console.log("Drinks that are seasonal are:",seasonalDrinknames);
   


// Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
const seasonalDrinkwbeans = seasonalDrinks.map((element) => element.name += " with imported beans");
console.log(seasonalDrinkwbeans);
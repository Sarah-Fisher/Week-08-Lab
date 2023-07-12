const output = document.getElementById('output');
const output2 = document.getElementById('output2');


// That's it! Now on to Lab 8...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/

function Hamburger(bun, vegetable, cheese, sauce, patties, pattiesAmt, extras) {
    this.bun = bun;
    this.vegetable = vegetable;
    this.cheese = cheese;
    this.sauce = sauce;
    this.patties = patties;
    this.pattiesAmt = pattiesAmt;
    this.extras = extras;
    this.hamDescription = function () {
        output2.textContent = (`The hamburger will have a ${this.bun} bun, with ${this.pattiesAmt} ${this.patties} patty(ies), and ${this.vegetable}, ${this.cheese} cheese, ${this.sauce}, ${this.extras} as the toppings. Yummy!`)
    }
};

var order1 = new Hamburger("brioche", "lettuce", "cheddar", "ketchup", "beef", "one", ["pickles", " pineapple"]);

order1.hamDescription();

// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
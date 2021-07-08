/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window: It's when you invoque a function from the global scope, not inside any object
* 2. Implicit: It's when you invoque a function from inside an object's scope (you call the function or method with the object and a dot preceding)
* 3. New: it's when you invoque a constructor function. 'This' is refered to the object being created. 
* 4. Explicit: it's used when there is inheritance, so you can override what object 'this' refers to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

let principle1 = {
  name: 'Ignacio',
  location: 'Peru',
  class: 'WEB24',
  greeting: function() {
    return `Implicit: Hello Lambda, I'm ${this.name}`;
  }
}
console.log(this);

// Principle 2

// code example for Implicit Binding

let principle2 = {
  name: 'Ignacio',
  location: 'Peru',
  class: 'WEB24',
  greeting: function() {
    return `Implicit: Hello Lambda, I'm ${this.name}`;
  }
}
console.log(principle2.greeting());

// Principle 3

// code example for New Binding

function Principle3(me) {
  this.name = me.name,
  this.location = me.location,
  this.class =  me.class
  this.greeting = function() {
    return `New: Hello Lambda, I'm ${this.name}`;
  }
};

let ignacio = new Principle3({
  name: 'Ignacio',
  location: 'Peru',
  class: 'WEB24',
});

console.log(ignacio.greeting());

// Principle 4

// code example for Explicit Binding

function Principle4(me) {
  this.name = me.name,
  this.location = me.location,
  this.class =  me.class
  this.greeting = function() {
    return `Explicit: Hello Lambda, I'm ${this.name}`;
  }
};

// ignacio already declared in Principle 3

let rachel = new Principle4({
  name: 'Rachel',
  location: 'USA',
  class: 'WEB34',
});

console.log(ignacio.greeting.call(rachel));
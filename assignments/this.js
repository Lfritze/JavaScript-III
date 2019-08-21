/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window/Global Binding - 

This works in the global scope. The 'this' keyword will be the window object. The window object is an open window in the browser. Global is not country, state, county, city.  Global is world.

* 2. Implicit Binding -

  This is the most commonly used principle. When a function is called with a dot before it (preceding dot), 'this' is the object before the dot. Example,  'this.functionName'.  The dot notation is used to invoke a function.  The items to the left of the dot become the CONTEXT for 'this' in the function

* 3. New Binding - 

    New Binding is for a constructor function and 'this' refers to the specific instance of the object and is returned by the constructor function. A Constructor function constructs other objects as its main purpose.
    
    Note: Constructor functions are like the example in class: 

function Pet(attributes){
  this.newName = attributes.name,
  this.newSpecies = attributes.species, 
  this.newPronoun = attributes.pronoun,
  this.newFavFood = attributes.favFood,
  this.newSound = attributes.sound  
}

* 4. Explicit Binding - 

    Explicit binding occurs when we use .call(), .apply(), or .bind() on a function.  We are explicitly passing a 'this' context to call() and apply().  Note: apply works great for arrays.  
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

'use strict'
function bloodType(type) {
  console.log(this);
  return type;
}
console.log(bloodType("A-positive"));

// Principle 2

// code example for Implicit Binding

const animalOne = {
  animal: 'Lion',
  weight: '500 lbs',
  food: 'meat',
  home: 'Africa',
  location: function(){
    return `A large ${this.animal} weighs up to ${this.weight}, eats ${this.food} and lives in ${this.home}.`
  }
}

const animalTwo = {
  animal: 'Kodiak Bear',
  weight: '1600 lbs',
  food: 'meat, berries, and roots',
  home: 'Alaska',
  location: function(){
    return `A large ${this.animal} weighs up to ${this.weight}, eats ${this.food} and lives in ${this.home}.`
  }
}

const animalThree = {
  animal: 'Canadian Timber Wolf',
  weight: '175 lbs',
  food: 'meat',
  home: 'Canada',
  location: function(){
    return `A large ${this.animal} weighs up to ${this.weight}, eats ${this.food} and lives in ${this.home}.`
  }
}

const animalFour = {
  animal: 'Great White Shark',
  weight: '2.5 tons',
  food: 'meat',
  home: 'the ocean',
  location: function(){
    return `A large ${this.animal} weighs up to ${this.weight}, eats ${this.food} and lives in ${this.home}.`
  }
}

const animalFive = {
  animal: 'Racoon',
  weight: '20 lbs',
  food: 'anything',
  home: 'your backyard',
  location: function(){
    return `A large ${this.animal} weighs up to ${this.weight}, eats ${this.food} and lives in ${this.home}.`
  }
}

console.log(animalOne.location());
console.log(animalTwo.location());
console.log(animalThree.location());
console.log(animalFour.location());
console.log(animalFive.location());

// Another little IMPLICIT

// let myWife = {
//   name: 'Raka',
//   job: 'Elementary Art Teacher',
//   wife: function(){
//     console.log(this.job);
//   }
// }

// myWife.wife();




// Principle 3

// code example for New Binding

function Punch(ouch){
  this.item = ouch;
}

let myPunch = new Punch('Two right-hand Mike Tyson kidney punches followed by an uppercut');

console.log(myPunch.item);





// Principle 4

// code example for Explicit Binding


const howdy = function(jobNoun, hobbyVerb) {
  console.log(`Howdy, my name is ${this.name} and I am a ${jobNoun}, in my spare time I ${hobbyVerb}!`)
}

const rodney = {
  name: 'Rodney Jackson',

};

const jobHobby = ['plumber', 'wrestle alligators'];

howdy.apply(rodney, jobHobby);
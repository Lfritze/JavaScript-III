/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window/Global Binding - 

This works in the global scope. The 'this' keyword will be the window object. The window object is an open window in the browser. Global is not country, state, county, city.  Global is world.

* 2. Implicit Binding -

When a function is called with a dot before it (preceding dot), 'this' is the object before the dot. Example,  'this.functionName'.  The dot notation is used to invoke a function.  The items to the left of the dot become the CONTEXT for 'this' in the function

* 3. New Binding - 

    New Binding is for a constructor function and 'this' refers to the specific instance of the object and is returned by the constructor function. 
    
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

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
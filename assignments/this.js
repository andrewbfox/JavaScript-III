/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/console global object binding -- `this` refers to the browser or console window
* 2. Implicit binding -- when a method is invoked on an object, `this` refers to the object
* 3. New binding -- when a constructor function creates a new instance of an object, `this` refers to the new instance
* 4. Explicit binding -- call and apply methods override the new binding by explicitly defining the context
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// console.log(this)

// Principle 2

// code example for Implicit Binding

const myObj = {
    name: 'Andy',
    sayName: function() {
        return `My name is ${this.name}`;
    }
}

console.log(myObj.sayName());

// Principle 3

// code example for New Binding

function CreatePerson(name) {
    this.name = name,
    this.sayName = function() {
        console.log(`My name is ${this.name}`);
    }
}

const andy = new CreatePerson('Andy');
andy.sayName();

// Principle 4

// code example for Explicit Binding
// I'm starting from the code in Principle 3 above

const rob = new CreatePerson('Rob');

andy.sayName();
rob.sayName();

andy.sayName.call(rob);
rob.sayName.apply(andy);
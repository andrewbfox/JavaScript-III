/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// GameObject constructor
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;        // looks like we need a Date() constructor function
  this.name = attributes.name;                  // string
  this.dimensions = attributes.dimensions       // object {length, width, height}
}
GameObject.prototype.destroy = function() {                   // prototype method
    return `${this.name} was removed from the game.`
  };

// CharacterStats constructor
function CharacterStats(attributes) {
  GameObject.call(this, attributes);
  this.healthPoints = attributes.healthPoints;  // number
  // inherit destroy() from GameObject
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {                // prototype method
    return `${this.name} took damage.`
  };

// Humanoid constructor
function Humanoid(attributes) {
  CharacterStats.call(this, attributes);
  this.team = attributes.team;                  // string
  this.weapons = attributes.weapons;             // string array
  this.language = attributes.language;          // string
  // inherit destroy() from GameObject through CharacterStats
  // inherit takeDamage() from CharacterStats
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {                     // prototype method
    return `${this.name} offers a greeting in ${this.language}.`
  };

// Villain constructor
function Villain(attributes) {
  Humanoid.call(this, attributes);
}
Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.villainy = function(attributes) {
  return `${this.name} attacks ${attributes.name} villainously.`
}

// Hero constructor
function Hero(attributes) {
  Humanoid.call(this, attributes);
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.heroism = function() {
  return `${this.name} attacks heroically.`
}

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const sam = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Slimy Sam',
    team: 'Slime Buckets',
    weapons: [
      'Poison',
    ],
    language: 'Common Tongue',
  });

  const paladin = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 4,
    },
    healthPoints: 15,
    name: 'Paladin',
    team: 'Paladins',
    weapons: [
      'Excalibur',
    ],
    language: 'Common Tongue',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(sam.villainy(paladin));
  console.log(paladin.heroism());

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
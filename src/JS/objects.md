# Objects

## Introduction

JavaScript objects are containers storing related data and functionality -› extremely powerful in practice. 

- variables in objects are called **properties**
- functions in objects are called **methods**

- properties and methods have a **key** and a **value**. The key must be unique. A key is like a variable name that points to a location in memory that holds a value.
- value of a property can be anything: string, number, boolean, array, another object, value of a method is always a function
- JavaScript objects are written with curly braces: {}
- Objects are **mutable**—we can change their properties even when they’re declared with const.
- Objects are **passed by reference**— when we make changes to an object passed into a function, those changes are permanent.
- left of a dot(.) is always an object
- [MDN - Introducing JS Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects) [MDN - Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

------

## Creating Objects

```js
// Using literal notation:
const myObject = {};

// Using the Object() constructor function:
const myObject = new Object();
```

### Object literal notation:

```js
var objectName {
  key1: value,
  key2: value,
  methodName: function() {
    ... 
  }
}
```

- key’s name (identifier) followed by a colon `:` and then the value.
- separate each key-value pair in an object literal with a comma (,). No comma after the last value
- Keys are strings, but the quotation marks are usually omitted - unless the key does have any special characters in it, or if it is a reserved word  (e.g., for, if, let, true, etc.).
- the same Syntax as JSON. But in JSON the key needs the quoation

------

### Object literal shorthand

Instead of:

```js
const gemstone = {
  type: type,
  color: color,
  carat: carat,
  calculateWorth: function() {
    // ...
  }
};
```

...you can write:

```js
const gemstone = {
  type,
  color,
  carat,
  calculateWorth() { 
    ... 
  }
};
```

------

## Accessing Properties

- There are two ways to access an object’s property. 

- If we try to access a property that does not exist, `undefined` will be returned.

### A) Dot Notation

For properties & methods. object’s name, followed by the dot operator and then the property name (key). Like in `'hello'.length;`

```js
objectName.propertyName
objectName.methodName()
```

```js
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',
```

### B) Bracket Notation

Not for Methods. But esp. if the propertyName is a variable or when accessing keys that have numbers, spaces, or special characters in them.

`objectName['propertyName']`

```js
let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!'];   // Returns undefined

// use a variable inside the brackets -  Helpful when working with functions: 
let returnAnyProp = (objectName, propName) => objectName[propName];
 
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'
```

#### Dynamic property access

```js
const userChosenKeyName = 'level';

const person = {
  [userChosenKeyName]: '...',
  name: 'John',
  age: 30,
};
```

------

### Property-names

- one word

- strings - with square-bracket-notation: any string

- any key alwas gets coerced into a string

- dotNotation or squareBracket-Notation


- ```js
  console.log(person['first name'])	
  ```

  - eg dom: 


  ```js
  movieList.style.backgroundColor
  movieList.style['background-color']
  movieList.style['backgroundColor']
  ```


------

### Property-Types

you can also use a (positive ) numbers as the key:

```
 1.5: 'hello',
 
 ...
 person[1.5]
 person['1.5']
```

------

### Property Order

the keys are stored in the order they are added. 

Exception:

- if you only have numbers as keys, they are sorted by number (behaves like an array. After all, an array is just an Object with number-keys)

```js
const object = { 5: 'Hi', 1: 'true' } ;
// { 1: 'true', 5: 'hi' }
```

------

## Modifying properties

Use either **dot notation .** or **bracket notation []** and the assignment operator `=` to add new key-value pairs to an object or change an existing property.

```js
objectName['Property Name'] = 'New Value'

objectName.propertyName = 'New Value'
```

- If the property already exists, the value will be replaced with the new value.

- If there was no property with that name, a new property will be added to the object.


although we can’t reassign an object declared with const, we can still mutate it.

### **Delete** a property 

with the [delete operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete).

```js
// delete property: 
delete objectName.propertyName // sets the value to undefined and returns a boolean indicating successful deletion
// delete value:
objectName.propertyName=''
```

```js
const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};
 
delete spaceship.mission;  // Removes the mission property
```

## Methods

- When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.

- Example: `console.log()` or `Math.floor()`

Syntax:

```js
const objectName = {
  sayHello: function () { 
    console.log('Hello!')
  }
};
```

New Syntax in ES6: method Shorthand Syntax. name directely followed by `()`

```js
const objectName = {
    sayHello() { 
      console.log('Hello!')
    }
  };
```

> behind the scenes it is not exactly the same…

Object methods are invoked by appending the object’s name with the dot operator followed by the method name and parentheses:

```js
objectName.sayHello(); // Prints 'Hello!'
```

------

### Method Chaining

```js
var johnDoe = {
  firstName: 'John',
  lastName: 'Doe',
  doExercise: function () {
    console.log('coding is fun');
  },
};
var mentor = {
  firstName: 'Max',
  lastName: 'Mustermann',
  mentee: johnDoe,
  getMentee: function () {
    return this.mentee;
  },
};

// this:
mentor.getMentee().doExercise();

// is the same as:
var mentee = mentor.getMentee();
mentee.doExercise(); // Prints out “coding is fun”
```

Method chaining also works with line breaks -> if the chain gets too long.

```js
mentor
  .getMentee()
  .doExercise(); // Would work the same way
```

------

## Nested Objects

objects are often nested— an object might have another object as a property which could have a property that’s an array of even more objects!

```js
const spaceship = {
     telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032 
     },
    crew: {
        captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { console.log('We got this!') } 
         }
    },
    engine: {
        model: 'Nimbus2000'
     },
     nanoelectronics: {
         computer: {
            terabytes: 100,
            monitors: 'HD'
         },
        'back-up': {
           battery: 'Lithium',
           terabytes: 50
         }
    }
}; 
```

Chain operators to access nested properties. 

```js
spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'
```

------

### Object - Looping trough Objects - For...in

- for...in will execute a given block of code for each property in an object.
- the key-value pairs in objects aren’t ordered!
- do not use in arrays - be careful!

```js
let spaceship = {
  crew: {
    captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
    },
    'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
    },
    medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
    translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
    }
  }
}; 
 
// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}
```

- [MDN - For...In](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

------

## Using Objects for Lookups

```js
function phoneticLookup(val) {
  var result = "";

  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  }

  result = lookup[val];
  return result;
}
console.log(phoneticLookup("foxtrot"));
```

------

## Copy Object

### Spread Operator

```js
const person2 = { ...person }
```

creates a copy

not a deep copy, only top level:

- -> to also create a copy of an array:

  ```js
  const person3 = {...person, hobbies: [...person.hobbies]}
  ```

------

### Object.assign()

another (older) way to create a copy:

```js
const person2 = Object.assign({}, person)
```

or merge into an existing object:

```js
const person2 = Object.assign(myObject, person)
```



------

## Object Getters & setters

### Privacy

- defines the idea that only certain properties should be mutable or able to change in value.
- Certain languages have privacy built-in for objects, but JavaScript does not have this feature. 
- JavaScript naming convention: place an **underscore _ before the name** of a property to mean that the property should not be altered

------

### Object Getters

Setters and getter methods allow for more detailed ways of accessing and assigning properties.

- adds a method that can be treated like a property (not called like a method)

Getters are methods that get and return the internal properties of an object. Advantages:

- Getters can perform an action on the data when getting a property. (eg set a default value or throw an error)
- Getters can return different values using conditionals.
- In a getter, we can access the properties of the calling object using `this`
- The functionality of our code is easier for other developers to understand
- convention eg, use an underscore to name the internal value
- -> We use the **`get` keyword** followed by a function.
- when using getter (and setter) methods,  properties cannot share the same name as the getter/setter function. If we do so, then calling the method will result in an infinite call stack error. 
- if you omit the setter, you have a readonly property

```js
const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
  }
   
  // To call the getter method: 
person.fullName; // 'John Doe'
```



```js
const newMovie = {
    info: {
      set title(val) {
        if (val.trim() === '') {
          this._title = 'DEFAULT';
          return;
        }
        this._title = val;
      },
		  get title() {
        return this._title.toUpperCase();
      },
    },
  };
```

------

### Object Setters

reassign values of existing properties within an object

```js
const person = {
    _age: 37,
    set age(newAge){
      if (typeof newAge === 'number'){
        this._age = newAge;
      } else {
        console.log('You must assign a number to age');
      }
    }
  };
  
  person.age = 40;
  console.log(person._age); // Logs: 40
  person.age = '40'; // Logs: You must assign a number to age
```

- Setter methods  **do not need to be called with a set of parentheses**. Syntactically, it looks like we’re reassigning the value of a property.
- Like getter methods, there are similar advantages to using setter methods that include checking input, performing actions on properties, and displaying a clear intention for how the object is supposed to be used.

------

## Object Factory Functions

- to create many instances of an object quickly and repeatedly -> a function that returns an object and can be reused to make multiple object instances.
- can also have parameters allowing us to customize the object that gets returned.
- we don’t have to create an object literal every time 

```js
const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
      name: name,
      age: age, 
      energySource: energySource,
      scare() {
        console.log(catchPhrase);
      } 
    }
  };
  
  
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'
```

------

## Object Destructuring

[MDN: Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

```js
const { info } = movie;
```

> you have to use a key-name, that exists

rest parameter

```js
const { info, ...otherProps } = movie;
```

give the pulled out property a new name:

```js
const { info: movieInfo } = movie;
```

- to extract key-value pairs from objects and save them as variables. 

- create a variable with the name of an object’s key that is wrapped in curly braces { } and assign to it the object.

- ```js
  const vampire = {
      name: 'Dracula',
      residence: 'Transylvania',
      preferences: {
        day: 'stay inside',
        night: 'satisfy appetite'
      }
    };
  
  // instead of:
  
  const residence = vampire.residence; 
  console.log(residence); // Prints 'Transylvania' 
  
  // you can use:
  
  const { residence } = vampire; 
  console.log(residence); // Prints 'Transylvania'
  
  // We can even use destructured assignment to grab nested properties of an object:
  
  const { day } = vampire.preferences; 
  console.log(day); // Prints 'stay inside'
  ```
  
- ```js
  function makeCalculation({x, y: d, z = 4}) {
    return Math.floor((x + d + z) / 3)
  }
  
  // this is the same as
  function makeCalculation(obj) {
    const {x, y: d, z = 4} = obj
    return Math.floor((x + d + z) / 3)
  }
  
  // which is the same as
  function makeCalculation(obj) {
    const x = obj.x
    const d = obj.y
    const z = obj.z === undefined ? 4 : obj.z
    return Math.floor((x + d + z) / 3)
  }
  ```
  



Another example: [MDN: Object initializer *New notations in ECMAScript 2015*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015)

```js
const monsterFactory = (name, age) => {
    return { 
      name,
      age 
    }
  };
  
  instead of:
  
  const monsterFactory = (name, age) => {
    return { 
      name: name,
      age: age
    }
  };
```

```js
const a = 'Hi there'
const b = 23
const c = {d: [true, false]}
console.log({a, b, c})

// this is the same as:
console.log({a: a, b: b, c: c})
```

------

## Checking Object Property Existence:

```js
if ('info' in movie) {
	//
} 
```

```js
if (movie.info) { ... } // will be undefined if key doesn`t exist
```

```js
if (movie.info === undefined) { ... } 
```

------

## Object Built-in Methods

- access to object instance methods like: .hasOwnProperty(), .valueOf(), 
- [MDN - Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods)
- There are also useful Object class methods such as Object.assign(), Object.entries(), and Object.keys()
- [MDN - Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [MDN - target="_blank" Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [MDN - Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- Object.freeze to prevent data mutation.Once the object is frozen, you can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error.

------

## Built In Objects

are collections of methods and properties that JavaScript provides.

- [MDN - Standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
- [Math Object - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) - To perform more complex mathematical operations than arithmetic
- [Number Object - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) eg.: [Number.isInteger()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
- [String Object - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


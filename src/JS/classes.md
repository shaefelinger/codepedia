# Classes

Classes are a tool that developers use to quickly produce similar objects. Create a template of an object.

classes are a great way to reduce duplicate code and debugging time.

```js
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}
```

## Constructor

 JavaScript calls the `constructor()` method every time it creates a new *instance* of a class.

```js
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
```

- `Dog` is the name of our class. By convention, we capitalize and CamelCase class names.
- Inside of the `constructor()` method, we use the `this` keyword.  In  a class, `this` refers to an instance of that class. 

## Instance

An *instance* is an object that contains the property names and methods of a class, but with unique property values

```js
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  } 
}
 
const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'
```

we use the `new` keyword to create an instance of our `Dog` class.

## Methods

Class method and getter syntax is the same as it is for objects **except you can not include commas between methods**.

```js
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
}
```



- use getter methods for `name` and `behavior`
-  prepended the property names with underscores (`_name` and `_behavior`), which indicate these properties should not be accessed directly.

------

## Inheritance I



------

## constuctor function - appbrewery

capitalized!

```js
function HouseKeeper(name, age, hasWorkPermit) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
}
```



```js
const houseKeeper1 = new HouseKeeper("Tom", 29, true)
```

### methods

```js
function HouseKeeper(name, age, hasWorkPermit) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.clean = function () {
        alert("cleaning in progress");
    };
}    
```

------


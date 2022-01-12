# Classes - JS

Used to quickly produce similar objects: 

create a template of an object -› reduce duplicate code and debugging time.

```js
class Dog {
  constructor(name) {
    this._name = name;
    this._age = 3;
  }

  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }

  incrementAge() {
    this._age++;
  }
}
```

## Constructor

JavaScript calls the `constructor()` method every time it creates a new _instance_ of a class.

```js
class Dog {
  constructor(name) {
    this.name = name;
    this.age = 3;
  }
}
```

- `Dog` is the name of the class. 
- Convention, capitalize and CamelCase class names.
- Inside of the `constructor()` method,  the `this` keyword refers to an instance of that class.

## Instance

An _instance_ is an object that contains the property names and methods of a class, but with unique property values.

 `new` - Javascript calls a _constructor_ method to create a new instance

```js
class Dog {
  constructor(name) {
    this.name = name;
    this.age = 0;
  }
}

const charlie = new Dog('Charlie'); // Create new Dog instance
console.log(charlie.name); // Log the name value saved to charlie
// Output: 'Charlie'
```

## Methods

- Class method and getter syntax is the same as it is for objects **except you don't include commas between methods**.

```js
class Dog {
  constructor(name) {
    this._name = name;
    this._age = 3;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  incrementAge() {
    this._age++;
  }
}
```

- use getter methods for `name` and `age`
- prepended the property names with underscores (`_name` and `_age`) -› indicates that these properties should not be accessed directly

---

## Inheritance

Create a parent class with properties and methods that we can extend to child classes.

When multiple classes share properties or methods, they become candidates for _inheritance_

<img src="./assets/inheritance3.png" alt="inheritance.png" style="zoom: 40%;" />



### Parent Class

Create a **_parent_** class (also known as a **_superclass_**) with properties and methods that multiple **_child_** classes (***subclasses***) share.

```js
class Animal {
  constructor(name) {
    this._name = name;
    this._age = 3;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  incrementAge() {
    this._age++;
  }
}
```

 `Animal` class contains the properties and methods that the `Cat` and `Dog` classes share (`name`, `age`, `.incrementAge()`).

### Subclass

-  `extends`  creates a subclass
-  `super` calls the `constructor()` of a parent class

```js
class Cat extends Animal {
  constructor(name, likesDogs) {
    super(name);
    this._likesDogs = likesDogs;
  }
}
```

Create a new `Cat` instance:

```js
const luluCat = new Cat('Lulu', false);
```

-  `extends` makes the methods of the animal class available inside the cat class
- The constructor, called when you create a new `Cat` object, accepts two arguments, `name` and `likesDogs`.
- `super`  calls the constructor of the parent class
- `_likesDogs` is a new property that is unique to the `Cat` class -› set it in the `Cat` constructor

::: warning

In a `constructor()`, always call  `super()`  before you can use  `this` - otherwise, JavaScript will throw a reference error.

Best practice: call `super` on the first line of subclass constructors!

::: 



### Subclass Methods:

All of the parent methods are available to the child class.

Because `luluCat` has access to the `name` getter, the code below logs `'Lulu'` to the console.

```js
console.log(luluCat.name);
```

Additionally, child classes can contain their own properties, getters, setters, and methods.

```js
class Cat extends Animal {
  constructor(name, likesDogs) {
    super(name);
    this._likesDogs = likesDogs;
  }

  get likesDogs() {
    return this._likesDogs;
  }
}
```

---

## Static Methods

Static methods are called on the class, but not on instances of the class

> Example: the `Date` class:  
>
> - can both create `Date` instances to represent whatever date, and call _static_ methods, like `Date.now()` which returns the current date. 
> - The `.now()` method is static -› can be called directly from the class, but not from an instance of the class

 `static` creates a static method called `generateName` (returns a random name when it’s called)

```js
class Animal {
  constructor(name) {
    this._name = name;
    this._age = 3;
  }

  static generateName() {
    const names = ['Abby', 'Candy', 'Buffy', 'Emmy', 'Honey'];
    const randomNumber = Math.floor(Math.random() * 5);
    return names[randomNumber];
  }
}
```

Call with the following syntax:

```js
console.log(Animal.generateName()); // returns a name
```

> You cannot access the `.generateName()` method from instances of the `Animal` class or instances of its subclasses

------

## Simple constructor function

capitalized!

```js
function HouseKeeper(name, age, hasWorkPermit) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
}
```

```js
const houseKeeper1 = new HouseKeeper('Carla', 33, true);
```

### methods

```js
function HouseKeeper(name, age, hasWorkPermit) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.clean = function() {
    alert('cleaning in progress');
  };
}
```

------

## Links

- [https://www.taniarascia.com/understanding-classes-in-javascript/](https://www.taniarascia.com/understanding-classes-in-javascript/)
- [MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)


# Classes - JS

Classes are a tool that developers use to quickly produce similar objects.

Create a template of an object -› reduce duplicate code and debugging time.

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

## Constructor

JavaScript calls the `constructor()` method every time it creates a new _instance_ of a class.

```js
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
```

- `Dog` is the name of our class. By convention, we capitalize and CamelCase class names.
- Inside of the `constructor()` method, we use the `this` keyword -› refers to an instance of that class.

## Instance

An _instance_ is an object that contains the property names and methods of a class, but with unique property values.

Use `new` - Javascript calls a _constructor_ method when we create a new instance of a class.

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

## Methods

- Class method and getter syntax is the same as it is for objects **except you don't include commas between methods**.

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
- prepended the property names with underscores (`_name` and `_behavior`), which indicate these properties should not be accessed directly.

---

## Inheritance

Create a parent class with properties and methods that we can extend to child classes.

<img src="./assets/inheritance.png" alt="inheritance.png" style="zoom: 33%;" />

When multiple classes share properties or methods, they become candidates for _inheritance_ —

### Parent Class

With inheritance, you can create a **_parent_** class (also known as a **_superclass_**) with properties and methods that multiple **_child_** classes (also known as **_subclasses_**) share.

```js
class Animal {
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

In the example above, the `Animal` class contains the properties and methods that the `Cat` and `Dog` classes share (`name`, `behavior`, `.incrementBehavior()`).

#### Subclass

- Use the `extends` keyword to create a subclass.
- The `super` keyword calls the `constructor()` of a parent class.

```js
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}
```

Create a new `Cat` instance:

```js
const luluCat = new Cat('Lulu', false);
```

- The `extends` keyword makes the methods of the animal class available inside the cat class.
- The constructor, called when you create a new `Cat` object, accepts two arguments, `name` and `usesLitter`.
- The `super` keyword calls the constructor of the parent class.
- `_usesLitter` is a new property that is unique to the `Cat` class, so we set it in the `Cat` constructor.

In a `constructor()`, you must always call the `super` method before you can use the `this` keyword - otherwise, JavaScript will throw a reference error.

Best practice: call `super` on the first line of subclass constructors.

### Subclass Methods:

All of the parent methods are available to the child class.

Because `luluCat` has access to the `name` getter, the code below logs `'Lulu'` to the console.

```
console.log(luluCat.name);
```

Additionally, child classes can contain their own properties, getters, setters, and methods.

```js
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }

  get usesLitter() {
    return this._usesLitter;
  }
}
```

---

## Static Methods

Static methods are called on the class, but not on instances of the class.

> Take the `Date` class, for example — you can both create `Date` instances to represent whatever date you want, and call _static_ methods, like `Date.now()` which returns the current date. The `.now()` method is static, so you can call it directly from the class, but not from an instance of the class.

Use the `static` keyword to create a static method called `generateName`

```js
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random() * 5);
    return names[randomNumber];
  }
}
```

In the example above, the `static` method called `.generateName()` returns a random name when it’s called.

Call the `.generateName()` method with the following syntax:

```js
console.log(Animal.generateName()); // returns a name
```

You cannot access the `.generateName()` method from instances of the `Animal` class or instances of its subclasses.

---

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
const houseKeeper1 = new HouseKeeper('Tom', 29, true);
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


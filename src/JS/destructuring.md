# Destructuring

is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

**Destructuring** borrows inspiration from languages like [Perl](https://en.wikipedia.org/wiki/Perl) and [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) by allowing you to specify the elements you want to extract from an array or object *on the left side of an assignment*.

## Destructuring values from an array

Syntax for splitting arrays into values. the rest-operator provides all other elements

```js
const [ firstName, lastName, ...otherInformation ] = nameData;
```



```js
const point = [10, 25, -34];
const [x, y, z] = point;
console.log(x, y, z);

// Prints: 10 25 -34
```

You don't have to specify the indexes - they are implied.

> **TIP:** You can also ignore values when destructuring arrays. For example, `const [x, , z] = point;` ignores the `y` coordinate and discards it.

difference between the spread operator and array destructuring:

- spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2


const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

const [a, b] = [b, a]; // -> Change Values!
```

------

## Destructuring values from an object

```js
const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const {type, color, carat} = gemstone;

console.log(type, color, carat);

// Prints: quartz rose 21.29
```



Because `gemstone` has a property named `type`, the value is automatically stored in the `type` variable

**TIP:** *You can also specify the values you want to select when destructuring an object. For example,* `let {color} = gemstone;` *will only select the* `color` *property from the* `gemstone` *object.*



```js
const user = { name: 'John Doe', age: 34 };
const { name, age } = user; // name = 'John Doe', age = 34

// instead of:

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34
```

Destructuring allows you to assign a new variable name when extracting values by putting the new name after a colon when assigning the value.

```js
const user = { name: 'John Doe', age: 34 };

// Here's how you can give new variable names in the assignment:

const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34
```

[freecodecamp - use destructuring](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-nested-objects )

------

## Create partial Object and subset

If you are using ES6 there is a very concise way to do this using destructuring. Destructuring allows you to easily add on to objects using a spread, but it also allows you to make subset objects in the same way.

```js
const object = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
}

// Remove "c" and "d" fields from original object:
const {c, d, ...partialObject} = object;
const subset = {c, d};

console.log(partialObject) // => { a: 'a', b: 'b'}
console.log(subset) // => { c: 'c', d: 'd'};
```

[https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties](https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties)

but this might be the most readable version:

```js
var subset = {
   color: elmo.color,
   height: elmo.height 
}
```



You could also write a utility function do it...

```js
const cloneAndPluck = function(sourceObject, keys) {
    const newObject = {};
    keys.forEach((obj, key) => { newObject[key] = sourceObject[key]; });
    return newObject;
};

const subset = cloneAndPluck(elmo, ["color", "height"]);
```




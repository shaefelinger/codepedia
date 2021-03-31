# Spread... and ...Rest

## Spread... operator

written with three consecutive dots ( `...` ) gives you the ability to expand, or *spread*, [iterable objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterators) into multiple elements.

```js
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);
```

> **Prints:** Don Quixote The Hobbit Alice in Wonderland Tale of Two Cities

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);
```

> **Prints:** 2 3 5 7 11 13 17 19 23 29

combine 2 Arrays with spread:

```js
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];
```

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-spread-operator-to-evaluate-arrays-in-place	

------

## ...Rest parameter

The **rest parameter**, also written with three consecutive dots ( `...` ), allows you to represent an indefinite number of elements as an array. 

```js
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);
```

> **Prints:** 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]
>
> `total`, `subtotal`, and `tax` are assigned the first three values in the array,`items` is assigned the *rest* of the values in the array (as an array).



```js
function printContent(...items) {
  for (const item of items) {
    console.log(item);
  }
}

printContent("cheese", "bread", "butter", "milk");
```

The result is similar to Array.prototype.slice():

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]

const [, , ...arr] = list;
//-> removes first 2 elements
```

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
```

The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-rest-parameter-with-function-parameters	

------
## Variadic functions

Another use case for the rest parameter is when you’re working with variadic functions. **Variadic functions** are functions that take an indefinite number of arguments.

### Using the arguments object

In previous versions of JavaScript, this type of function would be handled using the [arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments). The **arguments object** is an array-like object that is available as a local variable inside all functions. It contains a value for each argument being passed to the function starting at 0 for the first argument, 1 for the second argument, and so on.

```js
function sum() {
  let total = 0;  
  for(const argument of arguments) {
    total += argument;
  }
  return total;
}

console.log(sum(10, 36, 7, 84, 90, 110));
```

ist working, but hard to read

### better: using the Rest parameter

```js
function sum(...nums) {
  let total = 0;  
  for(const num of nums) {
    total += num;
  }
  return total;
}
```


# Spread... and ...Rest

## Spread... operator

[MDN: Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

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

```js
const ninjas = ['shaun', 'yoshi', 'mario', 'peach'];
console.log(...ninjas);

// -> 4 seperate strings instead of an array
```

##### Combine 2 Arrays with spread:

```js
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];
```

[freecodecamp -spread](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-spread-operator-to-evaluate-arrays-in-place	)

##### Add property to an object:

```js
const blog = { title: 'new blog', author: 'bowser'}
const idBlog = {...blog, id: 1}
```

##### A list of values:

```js
const prices = [10.99, 5.99, 3.99, 6.59];
Math.min(...prices)
```

##### Create a real copy of an array:

```js
const copiedNameFragments = [...nameFragments];	
```

> if you copy an array of objecs, the objects are still reference-values!
>
> To copy an array of objects and also create copies of the objects:
>
> ```js
> const persons = [{ name: 'Max', age: 30 }, { name: 'Manuel', age: 31 }];
> 
> const copiedPersons = persons.map(person => ({
>   name: person.name,
>   age: person.age
> }));
> ```
>
> or:
>
> ```js
> const copiedPersons = persons.map(({ name, age }) => ({
>   name,
>   age,
> }));
> ```
>



------

## ...Rest parameter

[MDN: Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

The **rest parameter**, written with three consecutive dots ( `...` ), allows you to represent an indefinite number of elements as an array. 

Takes out all the arguments and creates an array -> if you need a flexible amout of arguments

```js
function printContent(...items) {
  for (const item of items) {
    console.log(item);
  }
}

printContent("cheese", "bread", "butter", "milk");
```



```js
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);
// Prints: 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]
```

> `total`, `subtotal`, and `tax` are assigned the first three values in the array,`items` is assigned the *rest* of the values in the array (as an array).



```js
const sumUp = (a, b, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};

console.log(sumUp(1, 5, 10, -3, 6, 10));
```

> must be the last parameter. you can only have one



The result is similar to `Array.prototype.slice()`:

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

[freecodecamp - rest](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-rest-parameter-with-function-parameters	)

> if you define the function with the the `function`-keyword, you can always acces the parameters with the `arguments`-keyword. an array-like object
>
> ```js
> const subtract = function () {
>   let sum = 0;
>   for (const num of arguments) {
>     sum -= num;
>   }
>   return sum;
> };
> 
> console.log(subtract(1, 5, 10, -3, 6, 10));
> ```
>
> > was used before ES6 - don't use it!

## Example Spread & Rest

```js
const arr = [5, 6, 8, 4, 9]
Math.max(...arr)
// is the same as
Math.max.apply(null, arr)

const obj1 = {
  a: 'a from obj1',
  b: 'b from obj1',
  c: 'c from obj1',
  d: {
    e: 'e from obj1',
    f: 'f from obj1',
  },
}
const obj2 = {
  b: 'b from obj2',
  c: 'c from obj2',
  d: {
    g: 'g from obj2',
    h: 'g from obj2',
  },
}
console.log({...obj1, ...obj2})
// is the same as
console.log(Object.assign({}, obj1, obj2))

function add(first, ...rest) {
  return rest.reduce((sum, next) => sum + next, first)
}
// is the same as
function add() {
  const first = arguments[0]
  const rest = Array.from(arguments).slice(1)
  return rest.reduce((sum, next) => sum + next, first)
}

// in React:
function Box({className, ...restOfTheProps}) {
  const defaultProps = {
    className: `box ${className}`,
    children: 'Empty box',
  }
  return <div {...defaultProps} {...restOfTheProps} />
}
```

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

is working, but hard to read

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


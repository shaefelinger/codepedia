# Arrays

- An array is a special variable, which can hold more than one value at a time.
- Arrays can store **any data types** (including strings, numbers, and booleans)
- Each element in an array has a numbered position known as its index
- Arrays in JavaScript are **zero-indexed**, meaning the positions start counting from 0 rather than 1.
- when you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well (pass-by-reference)
- Arrays are objects. the keys are the index-numbers. if the order is important, use arrays, otherwise you can use objects
- Arrays are saved in the HEAP not in the STACK
- There shouldn't be any spaces between the array name and the square brackets, like `array [0][0]` and even this `array [0] [0]` is not allowed.

## Create and modify Arrays

------

### Array literal 

JavaScript arrays are written with square brackets. Array items are separated by commas.

```js
var arrayName = [ “a”, “b”, “c” ];
```

### new Array() 

*old Version (rarely used)*

```js
const myArray = new Array('hi', 'there')
```

you can also omit the `new` keyword

```js
const myArray = Array('hi', 'there')
```

> beware: this creates an empty array with a length of 5
>
> ```js
> const myArray = new Array(5)
> const myArray = Array(5)
> ```
>

### Array.from(iterable)

create an array fron am Iterable or Array-like object, e.g. a String or a Node list

```js
const newArray = Array.from('Hi!'); // ['H', 'i', '!']
```

------

### Access a value

```js
console.log(arrayName[1]); // Will print out “b”
```

You can also access individual characters in a string using bracket notation and the index.

```js
const hello = 'Hello World';
  console.log(hello[6]);
// Output: W
```

------

### Update Elements

```js
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']
```

Elements in an array declared with const remain mutable. (We can change the contents of a const array, but cannot reassign a new array or a different value.)  

------

## [Array properties & Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### `.length`	

property - returns the number of items in the array

------

### [`.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)	

**add** items to the **end** of an array

- can take a single argument or multiple arguments separated by commas
- returns the new length of the array

```js
const items = ['item 0', 'item 1', 'item 2'];

items.push('item 3', 'item 4');
                     
console.log(items); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];
```

------

### [`.pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

**removes** the **last** item of an array

- returns the value of the removed element
- does not take any arguments, it simply removes the last element

```js
const newItems = ['item 0', 'item 1', 'item 2'];
 
const removed = newItems.pop();
 
console.log(newItems); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2
```

------

### [`.shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

**Remove** an item from the **beginning** of an Array

- returns the value of the removed element
- does not take any arguments, it simply removes the last element

------

### [`.unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

**Add** an item to the **beginning** of an Array

- returns the new length of the array

------

### [`.splice(pos, n)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

changes the contents of an array by **removing or replacing** existing elements and/or **adding new** elements in place
also: Remove an item by index position

- starting at the index position specified by pos (negative index counts from the end)
- n defines the number of items to be removed
- returns the removed element(s)

```
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
```



| Splice                          | `.splice(start, deleteCount, items)` |
| ------------------------------- | ------------------------------------ |
| insert an element               | `.splice(1, 0 'Good Food')`          |
| remove an element               | `.splice(1, 1)`                      |
| remove all item                 | `.splice(0)`                         |
| remove everything after index 3 | `.splice(3)`                         |
| remove last  item               | `.splice(-1, 1)`                     |

------

### [`.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

`arr.slice([start[, end]])`

Returns a **copy of a portion** of an array into a new array.

- slice(-2) extracts the last two elements in the sequence

- you can also use only one element

  ```js
  .slice(2) // from index 2 to the end
  ```

- If start is undefined, slice starts from the index 0.

- startIndex is included, endIndex is not

  ```js
  .slice(0, 2) // item[0] and item[1]
  ```

- It is also an easy method to copy&and create a new array:

  - ```js
    const newArray = myArray.slice()
    ```

------

### [`.concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

to **merge** two or more **arrays**. 

- does not change the existing arrays -> returns a new array.

------

### [`.indexOf(...)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

`indexOf(searchElement, [fromIndex])`

**Find** the **index** of an item in the Array

- If there isn’t an element whose value matches the argument, -1 is returned
- If there are multiple results, the first index will be returned
- to find the last result, use [.lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
- does not work for reference values (eg objects)

------

### [`.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

Checks **if item exists** -> returns boolean

------

### [`.toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/tostring)

**returns** a **string** - always uses a comma as seperator

------

### [`.join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

creates and returns a **new string** by concatenating all of the elements 

- more options than `.toString()`

  ```js
  const nameFragments = ['John', 'Doe'];
  const name = nameFragments.join(' ');
  ```

  if you dont provide a seperator, by default `,` will be used

------

### [`.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

executes a reducer function on each element of the array, **resulting in single output value**

```
.reduce(prevValue, CurValue, curIndex, originalArray) => {}, initialValue)
```

```js
dogs.reduce((allTemperaments, dog) => {
  return [...allTemperaments, ...dog.temperament]
}, [])
```

- combine the values of the array to a single value
- eg to reduce an array of numbers to the sum of the numbers
- in the first iteration, prevValue = initialValue

```js
const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);
```

------

### [`reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

reverts the order

------

## [Array Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

All iterator methods take a callback function that can be pre-defined, or a function expression, or an arrow function.

### [`.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

loops through the array and executes the callback function for each element. The return value is always `undefined`



- `array.forEach(callackFunction)`

- During each execution, the current element is passed as an argument to the callback function.

- `groceries.forEach(groceryItem => console.log(groceryItem));`

- ```js
  const fruits = ['banana', 'orange', 'pineapple', 'apple'];
  fruits.forEach(element => console.log("I want to eat a " + element));
  ```

- Function can also be defined externally:

  ```js
  function printGrocery(element){
    console.log(element);
  }
    
  groceries.forEach(printGrocery);
  ```

- other Syntax:

  ```js
  namesArray.forEach(function(name) {
    console.log('Welcome, ' + name + '!');
  }
  // this is the same:
  namesArray.forEach(name =>  console.log('Welcome, ' + name + '!'));
  ```

- an Alternative fo `for...of` with easy access to the index

  ```js
  prices.forEach((price, index, prices) => {
  	taxAdjustedPrices.push(price * (1 + tax ));
  })
  ```

------

### [`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

takes an argument of a callback function and returns a new array with a transformed element for every element

```js
const numbers = [1, 2, 3, 4, 5]; 
  
const bigNumbers = numbers.map(number => number * 10);
    
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]
```

```js
dogs.map(dog => dog.name)
// ['Name 1', 'Name 2', 'Name 3']
```

```js
prices.map((price, index, prices) => {
	const  priceObj = { index , taxAdjPrice: proce * (1 + tax) };
	return priceObj;
})
```

------

### [`.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

returns an array of elements after filtering out certain elements from the original array

- The callback function should return `true` or `false` depending on the element that is passed to it. if `true` -> element is added to the new array

- ```js
  const words = ['house', 'music', 'pillow', 'cat', 'pen', 'door']; 
  
  const shortWords = words.filter(word => word.length < 6);
  ```

```js
dogs.filter(dog => dog.temperament.includes('Faithful'))
```

```js
const filteredArray = prices.filter(p => p > 6);
```

------

### [`.find`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

```
find((element) => { /* ... */ } )
find((element, index) => { /* ... */ } )
find((element, index, array) => { /* ... */ } )
```

returns the value of the first element that evaluates to `true` in the callback function (the same reference-value, not a copy)

```js
dogs.find(dog => dog.name === 'Lilly')
```

```js
const manuel = personData.find((person, index, persons) => {
	return person.name === 'Manuel';
}
```

- especially useful, if you have an array of objects.


------

### [`.findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

returns the index of the first element that evaluates to `true` in the callback function

- If there is no element in the array that satisfies the condition, it will return -1.

```js
const numbers = [124 22, 78, 6, 8]; 
const lessThanTen = numbers.findIndex(num => num < 10);
  
console.log(lessThanTen); // Output: 3 
```

------

### [`.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

returns a single value after iterating through the elements of an array

```js
const numbers = [1, 2, 4, 10];
  
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
    
console.log(summedNums) // Output: 17
```

- can also take an optional second parameter to set an initial value:

```js
const numbers = [1, 2, 4, 10];
   
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
     
console.log(summedNums); // Output: 117
```

------

### [`.some()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

tests whether at least one element in the array passes the test. Returns boolean 

```js
dogs.some(dog => dog.temperament.includes('Aggressive'))
```

------

### [`.every()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

tests whether all elements in the array pass the test. Returns boolean 

```js
dogs.every(dog => dog.temperament.includes('Intelligent'))
```

------

### [`.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

sorts the elements of an array in place and returns the sorted array.

- Optional: compareFunction. `arr.sort([compareFunction])`
- If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code

```js
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);
```

```js
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
```

------

### `.reverse()`

------

### for..of-loop

------



## Matrix/Nested Arrays

```
const nestedArr = [[1], [2, 3]];
```

To access the elements within the nested array chain more bracket notation with index values.

```js
const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2
```

### Matrix

A Matrix is an array within an array.

```js
var hotelRooms = [
  [ 1, 2, 3, 4, 5 ],
  [ 11, 12, 14, 15, 16 ],
  [ 21, 22, 23, 24, 25 ]
  ];
```

You can access its values just like with an array, only now you need to specify two indexes: row and column.

```js
var room = hotelRooms[1][2];
  console.log(room); // prints 14
```

------

## Links

- [Practice Array Methods](https://www.youtube.com/watch?v=3LOEGS4qcRM&list=PLDlWc9AfQBfZGZXFb_1tcRKwtCavR7AfT)
- Array on MDN (also check the linked methods on the left on that page): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

------

## Iterabeles

Objects, that implement the iterable-protocol and have an @@iterator-method (you can use a `for...of`-loop)

not every Iterable is an array. For example:

- NoteList, String, Map, Set

### Array-like-Object

Objects, that:

- have a length-property
- use index to access items 

not every Array-like-Object is an array. For Example

- NodeList, String

Arrays have a lot of methods, that iterables and array-like objects don't have

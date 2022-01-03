# Operators

## Mathematical operators

|      | Mathematical operators                                       |
| ---- | :----------------------------------------------------------- |
| `+`  | Addition (and also used for concatenating strings) -> can cause errors, if an element is a string |
| `-`  | Subtraction                                                  |
| `/`  | Division                                                     |
| `%`  | Modulus (Division Remainder)                                 |
| `++` | increment. `counter++` is the same as: `counter = counter + 1` |
| `--` | decrement                                                    |
| `**` | Exponentiation (same (but newer) as : `Math.pow()`)          |

------

## Assignment Operators

|      | Assignment Operators           |
| ---- |:------------------------------ |
| =    | assigns a value                |
| +=   | x += is the same as x= x + y   |
| -=   | x -= is the same as x= x - y   |
| *=   | x *= is the same as x= x * y   |
| /=   | x /= is the same as x= x / y   |
| %=   | x %= is the same as x= x % y   |
| **=  | x **= is the same as x= x ** y |

------

## Comparison Operators

result is always: true=1, false=0

|       | Comparison Operators                                         |
| ----- |:------------------------------------------------------------ |
| `==`  | equal to                                                     |
| `!=`  | not equal                                                    |
| `<`   | less than                                                    |
| `>`   | greater than                                                 |
| `<=`  | less than or equal to                                        |
| `>=`  | greater than or equal to                                     |
| `===` | equal value and equal type - strict equality (usually preferred)[-> additional Information](https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a) |
| `!==` | not equal value and equal type                               |

```js
let res = 5 == 2 + 3;
console.log(res);
```

Comparing an object: checks, if they point to the same object in memory

------

## Truthy & Falsy

Theese values evaluate to false when checked as a condition (falsy):

- 0
- Empty strings like "" or ''
- `null` which represent when there is no value at all
- `undefined` which represent when a declared variable lacks a value
- `NaN`, or Not a Number

this is often used to check, if an object exsits.

> `!!` converts truthy/falsy value into real boolean

Difference when using comparison opreators:

| Truthy & Falsy                         |                                                              |
| :------------------------------------- | :----------------------------------------------------------- |
| `(false == 0)` `(false === 0)`         | true false                                                   |
| `(false == '')` `(false === '')`       | true false                                                   |
| `(0 == '')` `(0 === '')`               | true false                                                   |
| `(undefined == 0)` `(undefined === 0)` | true false                                                   |
| `NaN == Nan`                           | false. NaN is a non defineable Number. 2 NaN can not be equal |

------

## Logical Operators

| &&   | logical AND (both sides need to be true)         |
| ---- |:------------------------------------------------ |
| \|\| | logical OR (one side needs to be true)           |
| !    | logical NOT (turns true to false and vice versa) |

The `!` not operator reverses, or negates, the value of a boolean:

```js
let excited = true;
console.log(!excited); // Prints false	
```









------

## Typeof Operator

Check the data types of the variables -> returns a string of the data type.

*Syntax: `typeof` is a global operator so can be called on any object, `.length` is an object attribute and can only be called in the context of an existing object instance.*

```js
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean
```


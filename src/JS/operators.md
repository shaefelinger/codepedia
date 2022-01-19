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



## “Boolean Tricks” with Logical Operators

|                                                              |      | Example                             | Result                                                 |
| ------------------------------------------------------------ | ---- | ----------------------------------- | ------------------------------------------------------ |
| Boolean Coercion via double NOT (double bang) operator       | `!!` | `!!““`, `!!1`                       | false, true                                            |
| Default value assignment via OR operator                     | `||` | `const name = someInput || 'Jane'`  | someInput if not falsy, ‘Jane’ otherwise               |
| [Nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator): Use value if condition is true via AND operator | `&&` | `const name = isLoggedIn && ‘Jane’` | ‘Jane’ is set if `isLoggedIn` is true, false otherwise |

## [Nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) 

```js
// here's what we often did for this:
x = x || 'some default'

// but this was problematic for numbers or booleans where "0" or "false" are valid values

// So, if we wanted to support this:
add(null, 3)

// here's what we had to do before:
function add(a, b) {
  a = a == null ? 0 : a
  b = b == null ? 0 : b
  return a + b
}

// here's what we can do now
function add(a, b) {
  a = a ?? 0
  b = b ?? 0
  return a + b
}

// in React:
function DisplayContactName({contact}) {
  return <div>{contact.name ?? 'Unknown'}</div>
}Example
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

------

## Optional Chaining

[MDN: Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

Also known as the "Elvis Operator," this allows you to safely access properties and call functions that may or may not exist. Before optional chaining, we used a hacky-workaround that relied on falsy/truthy-ness.

If you find yourself doing `?.` a lot in your code, you might want to consider the place where those values originate and make sure they consistently return the values they should.

```js
// what we did before optional chaining:
const streetName = user && user.address && user.address.street.name

// what we can do now:
const streetName = user?.address?.street?.name

// this will run even if options is undefined (in which case, onSuccess would be undefined as well)
// however, it will still fail if options was never declared,
// since optional chaining cannot be used on a non-existent root object.
// optional chaining does not replace checks like if (typeof options == "undefined")
const onSuccess = options?.onSuccess

// this will run without error even if onSuccess is undefined (in which case, no function will be called)
onSuccess?.({data: 'yay'})

// and we can combine those things into a single line:
options?.onSuccess?.({data: 'yay'})

// and if you are 100% certain that onSuccess is a function if options exists
// then you don't need the extra ?. before calling it. Only use ?. in situations
// where the thing on the left might not exist.
options?.onSuccess({data: 'yay'})

// in React:
function UserProfile({user}) {
  return (
    <div>
      <h1>{user.name}</h1>
      <strong>{user.bio?.short ?? 'No bio provided'}</strong>
    </div>
  )
}
```

------


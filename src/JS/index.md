# JavaScript Basics

## Comments

```JS
// single line comment
/* multiline comment */` also works within a line: `console.log(/*IGNORED!*/ 5); // Still just prints 5
```

## Basic Syntax and Logic

- Add a semicolon at the end of each executable statement.
- When you name a variable (or array, function etc.) the first character must be a letter, an underscore (\_) or a dollar sign (\$). Subsequent characters may be letters, numbers, underscores or dollar signs. Also:
  - it can not be one of the [keywords](https://www.w3schools.com/js/js_reserved.asp) that are reserved for JavaScript (like var, if, else, for, break, etc)
  - JavaScript is case sensitive
  - By convention and for readability JavaScript uses **camelCase** and PascalCase. (kebap-case is not working)
- what is written inside brackets is evaluated before what is outside them
- statements can be grouped together in code blocks, inside curly brackets {...}.The purpose of code blocks is to define statements to be executed together.

## Reserverd Keywords

`abstract, arguments, await*boolean, break, bytecase, catch, char, class, const, continuedebugger, default, delete, do, doubleelse, enum, eval, export, extendsfalse, final, finally, float, for, functiongotoif, implements, import,in, instanceof, int, interfacelet, longnative, new, nullpackage, private, protected, publicreturnshort, static, super, switch, synchronizedthis, throw, throws, transient, true, try, typeofvar, void, volatilewhile, withyield`

Also Avoid:

`Array, Date, eval, function hasOwnProperty, Infinity, isFinite, isNaN, isPrototypeOf, length, Math, NaN, name, Number, Object, prototype, String, toString, undefined, valueOf`

---

## Data Types

JavaScript is a non-typed Language. When adding a number and a string, JavaScript will treat the number as a string.

| Type        | Description                                                  |
| :---------- | :----------------------------------------------------------- |
| numbers     | JavaScript has only one type of numbers - it doesn't distinguish between integer and float |
| strings     | Any series of characters like "John Doe". Written inside quotes: ‘...’ (preferred) or “...” |
| Boolean     | **true** or **false**. Convention for Name: _isCondition_    |
| arrays      | structure that allows you to store a list of values in one single reference. |
| objects     | Constructs that have properties. Everything in JavaScript is an object, and can be stored in a variable |
| _and also:_ |                                                              |
| Null        | represents the intentional absence of a value, and is represented by the keyword `null`. You can assign `null` to "reset"/"clear" a variable |
| Undefined   | also represents the absence of a value. Default value of unitialized variables. Convention: never assign `undefined` |
| Symbol      | a newer feature to the language, symbols are unique identifiers, useful in more complex coding. |

`NaN` - is of Type "Number" - result of invalid calculations (eg `3 * 'Hello'`)

`typeof` can be used to return the type

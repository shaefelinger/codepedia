# Variables

A variable is a container for a value. You can:

- Create a variable with a descriptive name.
- Store or update information stored in a variable.
- Reference or “get” information stored in a variable.

|                    |                                                              |
| ------------------ | ------------------------------------------------------------ |
| `let name`         | declaration. Value: '`undefined`'. when using let, a variable with the same name can only be declared once (this is a good thing!) |
| `name = 'Max'`     | attribution                                                  |
| `let name = 'Max'` | initializing                                                 |

- `var` - declares/initilizes the variable - pre-ES6
- `let` -  alternative to `var`, but stricter (prefered)
- `const` - is used for constants, the content can’t change (must be assigned a value when declared). A common practice when naming constants is to use all uppercase letters, with words separated by an underscore. `const FAV_PET = "Dogs";`
- When JavaScript variables are declared, they have an **initial value** of **undefined**. If you do a mathematical operation on an undefined variable the result will be **NaN**  ("Not a Number"). If you concatenate a string with an undefined variable, you will get a literal string of "undefined".
- Create multiple Variables at once: `let a = 2, b = 3, c = 4;`

## Hoisting

Before any JavaScript code is executed, all variables declared with `var` are "hoisted" -> JS engine goes over the whole code and registers vars and functions

```js
console.log(userName);
var userName = 'Max';
// undefined
```

```js
console.log(userName);
let userName = 'Max';
// error
```

## let and const

Variables declared with `let` and `const` eliminate this specific issue of hoisting because they're scoped **to the block**, not to the function. 

`let` and `const` also have some other interesting properties.

- Variables declared with `let` can be reassigned, but can't be redeclared in the same scope.
- Variables declared with `const` must be assigned an initial value, but can't be redeclared in the same scope, and can't be reassigned.

## Scope

- Scope determines the accessibility (visibility) of these variables.
- JavaScript has 'function scope': Each function creates its own new scope.
- there are two types of scope: Local & Global Scope

### Local Scope

- Variables declared inside a function are not accessible (visible) from outside the function. They become local to the function.
- Local variables have function scope: They can only be accessed from within the function.
- Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
- Local variables are created when a function starts, and deleted when the function is completed.

#### Block scope

- When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. 

- `let` and `const`  use block scope

- you can create a scope: (not needed often):

  ```js
  {
    let test = 5;
    console.log(test);
  }
  console.log(test); // -> error - not defined
  ```


### Global Scope

- A variable declared outside a function becomes global.
- A global variable has global scope: All scripts and functions on a web page can access it
- it’s best practice to not define variables in the global scope -> having too many global variables can cause problems -> Scope pollution
- Global namespace is the space in our code that contains globally scoped information.

## Don't use `var`

`var` can create nasty behaviour!

- this does not throw an error:

  ```js
  var name = 'Max';
  var name = 'Anne';
  ```

- this creates a global variable:

  ```js
  if (name === 'Max') {
    var hobbies = ['Sport', 'Cooking'];
  }
  ```

## Strict Mode

JS is a forgiving language wich can lead to messy code

with `var` this is possible:

```js
var userName = 'Max';
var userName = 'Moritz';
console.log(userName); // Moritz
```

also possible: (`var` is added automatically)

```js
userName = 'Max';
console.log(userName);
```

to avoid this, add `'use strict';`:

```js
'use strict';

userName = 'Max';
console.log(userName);
```

only for the scipt where this is placed in

Changes:

- [MDN changes_in_strict_mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#changes_in_strict_mode)

- no undeclared vars
- no reserved words `var undefined = 'Max';`

JavaScript modules are automatically in strict mode
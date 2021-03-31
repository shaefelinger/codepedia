# Variables

A variable is a container for a value. There are only a few things you can do with variables:

- Create a variable with a descriptive name.
- Store or update information stored in a variable.
- Reference or “get” information stored in a variable.

|                        |                                                              |
| ---------------------- | ------------------------------------------------------------ |
| `let name`             | declaration. Value: 'undefined'. when using let, a variable with the same name can only be declared once (this is a good thing!) |
| `name = 'Steffen'`     | attribution                                                  |
| `let name = 'Steffen'` | initializing                                                 |

- `var` - declares/initilizes the variable - pre-ES6
- `let` - is used in web development, an alternative to `var`, but stricter (prefered)
- `const` - is used for constants, the content can’t change (must be assigned a value when declared). A common practice when naming constants is to use all uppercase letters, with words separated by an underscore. `const FAV_PET = "Cats";`
- When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of "undefined".
- Create multiple Variables at once: `let a = 2, b = 3, c = 4;`

## Hoisting

before any JavaScript code is executed, all variables declared with `var` are "hoisted"

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
- block scope. When a variable is defined inside a block, it is only accessible to the code within the curly braces {}.

### Global Scope

- A variable declared outside a function becomes global.
- A global variable has global scope: All scripts and functions on a web page can access it
- it’s best practice to not define variables in the global scope -> having too many global variables can cause problems -> Scope pollution
- Global namespace is the space in our code that contains globally scoped information.
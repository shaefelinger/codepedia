# Modules

## Why use modules?

It makes sense to split JavaScript programs up into separate modules that can be imported when needed.  

There are a lot of benefits to using modules:

**1) Maintainability:** Updating a single module is much easier 

**2) Namespacing:** Sharing global variables between unrelated code is a big [no-no in development](http://c2.com/cgi/wiki?GlobalVariablesAreBad).  Modules allow us to avoid namespace pollution by creating a private space for our variables.

**3) Reusability**

Modern browsers  support module functionality natively.

------

## [What is a module?](https://javascript.info/modules-intro#what-is-a-module)

*Modules* are reusable pieces of code in a file that can be exported and then imported for use in another file.

-› *separation of concerns* 

Modules can load each other and use  `export` and `import` to interchange functionality, call functions of one module from another one:

- `export` keyword labels variables and functions that should be accessible from outside the current module
- `import` allows the import of functionality from other modules.

```js
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

 another file may import and use it:

```javascript
// 📁 main.js
import {sayHi} from './sayHi.js';

sayHi('John'); // Hello, John!
```

##### Import in HTML

`type="module"  ` is nescessary, otherwise it won't work

```html
<script type="module">
	import { sayHi } from './sayHi.js';
	document.body.innerHTML = sayHi('John');
</script>
```

or

```html
<script src="app.js" type="module"></script>
```

> **Modules work only via HTTP(s), not locally** -> Use a local web-server like "live-server"

### Module-level scope

- Each module has its own top-level scope -> each module has independent variables

- Modules should `export` what they want to be accessible from outside and `import` what they need. 
- Use import/export instead of relying on global variables.

##### A module code is evaluated only the first time when imported

If the same module is imported into multiple other modules, its code is executed only once, upon the first import. Then its exports are given to all further importers.

### [In a module, “this” is undefined](https://javascript.info/modules-intro#in-a-module-this-is-undefined)

```html
<script>
  alert(this); // window
</script>

<script type="module">
  alert(this); // undefined
</script>
```

------

## `import/export` - Syntax- (ES6 / ESM)

Syntax for natively implementing modules was only introduced in 2015 with the release of [ECMAScript 6 (ES6)](http://es6-features.org/#ValueExportImport). 



ESM stands for ES Modules.

- Works in [many modern browsers](https://caniuse.com/#feat=es6-module)
- It has  simple syntax and async
- [Tree-shakeable](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/), due to ES6's [static module structure](https://exploringjs.com/es6/ch_modules.html#static-module-structure)
- ESM allows bundlers like Rollup to [remove unnecessary code](https://dev.to/bennypowers/you-should-be-using-esm-kn3), allowing sites to ship less codes to get faster load.

------

### ES6 Import Syntax

```js
import { exportedResourceA, exportedResourceB } from '/path/to/module.js';
```

you must also update the html: add the attribute `type='module'` to the `<script>` element.

```html
 <script type="module" src="./secret-messages.js"> </script>
  </body>
```

#### Renaming Imports 

-> to Avoid naming Collisions

ES6 includes syntax for renaming imported resources by adding in the keyword `as`.

```js
import { exportedResource as newlyNamedResource } from '/path/to/module'
```

```js
// index.js

import { ninjas, greet } from './module.js'

console.log(ninjas);
greet()
```

or

```js
import * as module from './module.js';

console.log(module.ninjas);
module.greet();
```

#### Import entire content

```js
import * as myModule from '/modules/my-module.js';
```

call it like this:

```js
myModule.functionFromTheModule();
```

#### Import a single export

```js
import {myExport} from '/modules/my-module.js';
```

#### Import multiple exports

```js
import {foo, bar} from '/modules/my-module.js';
```

#### Import with alias

```js
import {reallyReallyLongModuleExportName as shortName}
  from '/modules/my-module.js';
```

```js
import {
  reallyReallyLongModuleExportName as shortName,
  anotherLongModuleName as short
} from '/modules/my-module.js';
```

------

### ES6 Named Export Syntax

The name of each exported resource is listed between curly braces and separated by commas

```js
export { resourceToExportA, resourceToExportB, ...}
```

individual values may be exported as named exports by placing the `export` keyword in front of the declaration.

```js
export const toggleHiddenElement = (domElement) => {
  // ...
}
 
export const changeToFunkyColor = (domElement) => {
  // ...
}
```

##### Examples

```js
// Exporting individual features
export let name1, name2, nameN; // also var, const
export function functionName(){...}
export class ClassName {...}

// Export list
export { name1, name2 };

// Renaming exports
export { variable1 as name1, variable2 as name2 };

// Exporting destructured assignments with renaming
export const { name1, name2: bar } = object;
```

```js
// ninjas.js
export const ninjas = ['shaun', 'yoshi', 'mario', 'peach'];

export const greet = () => {
  console.log(ninjas[0] + ' says hello');
};
```

or:

```js
// ninjas.js
const ninjas = ['shaun', 'yoshi', 'mario', 'peach'];

const greet = () => {
    console.log(ninjas[0] + ' says hello');
}

export { ninjas, greet }
```

You can also rename named exports to avoid naming conflicts:

```js
export { myFunction as function1,
         myVariable as variable };
```

------

### Default Exports

Every module also has the option to export a single value to represent the entire module called the *default export*. 

- can be an object containing the entire set of functions and/or data values of a module.

-  syntax :  `as default` renames the exported object to `default`, a reserved identifier that can only be given to a single exported value.


- import can be any name
- only 1 default export!

```js
const resources = { 
  valueA, 
  valueB 
}
export { resources as default };
```

shorthand syntax:

```js
const resources = {
  valueA,
  valueB
}
export default resources;
```

or:

```js
export default {
  valueA,
  valueB
}
```

```js
// Default exports
export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };
```

```js
// module "my-module.js"

export default function cube(x) {
  return x * x * x;
}
```

```js
import cube from './my-module.js';
console.log(cube(3)); // 27
```

------

### Default Import

```js
import importedResources from 'module.js';
```

Notice that the import statement has no curly braces . This syntax is  shorthand for: 

```js
import { default as importedResources } from 'module.js
```

if the `default` export is an object, the values inside cannot be extracted until after the object is imported, like so:

```js
// This will work...
import resources from 'module.js'
const { valueA, valueB } = resources;
 
// This will not work...
import { valueA, valueB } from 'module.js'
```

Examples

```js
import myDefault from '/modules/my-module.js';
```

combined:

```js
import myDefault, * as myModule from '/modules/my-module.js';
// myModule used as a namespace
```

or

```js
import myDefault, {foo, bar} from '/modules/my-module.js';
// specific, named imports
```

------

Example:

```js
/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
   //...
}
 
const changeToFunkyColor = (domElement) => {
	//...
}
 
const resources = { 
  toggleHiddenElement, 
  changeToFunkyColor
}
export default resources;
```

->

```js
// secret-messages.js
import domFunctions from '../modules/dom-functions.js';
 
const { toggleHiddenElement, changeToFunkyColor } = domFunctions;
 
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});
```



- Can be called in HTML:

```html
<script type="module">
  import {func1} from 'my-lib';

  func1();
</script>
```

### [Import a module for its side effects only](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only)

Import an entire module for side effects only, without importing anything. This runs the module's global code, but doesn't actually import any values.

```js
import '/modules/my-module.js';
```

This works with [dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports) as well:

```js
(async () => {
  if (somethingIsTrue) {
    // import module for side effects
    await import('/modules/my-module.js');
  }
})();
```

------

### [Dynamic Imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports)

------

## `require` - Syntax (Node - CJS)

- node [uses CJS module format](https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/).
- CJS imports module synchronously
- When CJS imports, it will give you a **copy** of the imported object.
- CJS will not work in the browser. 
- modern versions of node can also use `import/export`

[https://www.sitepoint.com/understanding-module-exports-exports-node-js/](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)

### Export: module.exports

To make  functions available to other files, add them as properties to the built-in `module.exports` object:

`module.exports` is an object that is built-in to the Node.js runtime environment. Other files can now import this object, and make use of these  functions, with the `require()` function.

```js
/* converters.js */
function celsiusToFahrenheit(celsius) {
  return celsius * (9/5) + 32;
}
 
module.exports.celsiusToFahrenheit = celsiusToFahrenheit;
 
module.exports.fahrenheitToCelsius = function(fahrenheit) {
  return (fahrenheit - 32) * (5/9);
};
```

or 

```js
module.exports = celsiusToFahrenheit
```

------



```js
function requestHandler(req, res) { 
	// ...
}

// or:

// const requestHandler = (req, res) => {
//		// ...
// }

module.exports = requesthandler
```

or to use as: `modulename.handler`

```js
module.exports = {
	handler: requestHandler,
	someText: 'Some hard coded text'
}
```

or

```js
module.exports.handler = requestHandler;
module.exports.someText = 'Some hard coded text'
```

or shortcut:

```js
exports.handler = requestHandler;
exports.someText = 'Some hard coded text'
```

#### Function directily in the Object:

```js
module.exports = {
    circleArea:  (radiusLength) => {
    return PI * radiusLength * radiusLength
  },
    squareArea: function (sideLength) {
    return sideLength**2
  }
}
```

or

```js
module.exports = {
  circleArea (radiusLength) {
  	return Math.PI * radiusLength * radiusLength
  },
  squareArea (sideLength) {
  	return sideLength**2
  )
}
```

------

### Import: require()

Use `require` -> node will look for `module.exports`

The `require()` function accepts a string as an argument. That string provides the [file path](https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/) to the module.

```js
/* water-limits.js */
const converters = require('./converters.js');
```

`./` is a relative path indicating that **converters.js** is stored in the same folder as **water-limits.js**. When you use `require()`, the entire `module.exports` object is returned and stored in the variable `converters`. 

All exported methods can be used by `converters.methodName`

##### Examples:

```js
const module = require('./module.js')
```

```js
const http = require('http')

const routes = require ('./routes,js') // custom module

const server = http.createServer(routes)
//-> will use the function stored in routes for incoming requests

server.listen(3000)
```

### Object Destructuring with `require()`

You can use object destructuring to extract only the needed functions.

```js
/* celsius-to-fahrenheit.js */
const { celsiusToFahrenheit } = require('./converters.js');
const fahrenheitValue = celsiusToFahrenheit(input);
```

-> you can access the function directly 

------

## Module-Example inlc. dynamic import

```js
export default function add(a, b) {
  return a + b
}

/*
 * import add from './add'
 * console.assert(add(3, 2) === 5)
 */

export const foo = 'bar'

/*
 * import {foo} from './foo'
 * console.assert(foo === 'bar')
 */

export function subtract(a, b) {
  return a - b
}

export const now = new Date()

/*
 * import {subtract, now} from './stuff'
 * console.assert(subtract(4, 2) === 2)
 * console.assert(now instanceof Date)
 */

// dynamic imports
import('./some-module').then(
  allModuleExports => {
    // the allModuleExports object will be the same object you get if you had
    // used: import * as allModuleExports from './some-module'
    // the only difference is this will be loaded asynchronously which can
    // have performance benefits in some cases
  },
  error => {
    // handle the error
    // this will happen if there's an error loading or running the module
  },
)

// in React:
import React, {Suspense, Fragment} from 'react'

// dynamic import of a React component
const BigComponent = React.lazy(() => import('./big-component'))
// big-component.js would need to "export default BigComponent" for this to work
```



------

## Module-links:

[MDN export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)

[MDN import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

[https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm](https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm)

[https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/](https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/)

[https://dev.to/bennypowers/you-should-be-using-esm-kn3](https://dev.to/bennypowers/you-should-be-using-esm-kn3)

[MDN JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

[javascript.info/modules-intro](https://javascript.info/modules-intro)

[freecodecamp - Modules Beginners guide](https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/)

[watch that talk here](https://www.youtube.com/watch?v=kTlcu16rSLc&list=PLV5CVI1eNcJgNqzNwcs4UKrlJdhfDjshf)


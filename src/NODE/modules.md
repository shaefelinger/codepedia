

# Node Modules

*Modularity* - separate the program into manageable chunks.

Code is organized into separate files and combined through *requiring* them where needed using the `require()` function.

 *core modules* - part of node. 

```js
// Require in the 'events' core module:
let events = require('events');
```

`require()` can also be used for own creations:

The `require()` function will first check if its argument is a core module, if not, it will move try to locate it

https://nodejs.org/api/modules.html#modules_modules

- core modules: name of the module as a string
- local modules: path to the module

It assumes file extensions if none are provided: 

`let Dog = require('./dog.js');`

`let Dog = require('./dog');` works as well

```js
// app.js
let Dog = require('./dog.js');
const lumpi = new Dog('Lumpi');
console.log(lumpi.praise());
```



```js
// dog.js
module.exports = class Dog {
  constructor(name) {
    this.name = name;
  }
 
  praise() {
    return `Good dog, ${this.name}!`;
  }
};
```



##### `module.exports`.

holds everything in that file, or module, that’s available to be required into a different file.
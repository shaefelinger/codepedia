# Node Modules

- Code can be organized into separate files, modules, and combined through *requiring* them where needed using the `require()` function.
- In addition to *core modules*, modules included within the environment to efficiently perform common tasks, we can also create our own modules using `module.exports` and the `require()` function.

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

------



## [Importing and creating modules](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#importing_and_creating_modules)

A module is a JavaScript library/file that you can import into other code using Node's `require()` function. 

- First we invoke the `require()` function with the name of the module
- then calling the returned object to create an [Express application](https://expressjs.com/en/4x/api.html#app). We can then access the properties and functions of the application object.

> **Tip:** You will *want* to create your own modules. this allows you to organise your code into manageable parts — a monolithic single-file application is hard to understand and maintain. Using modules also helps you manage your namespace, because only the variables you explicitly export are imported when you use a module.

To make objects available outside of a module you just need to expose them as additional properties on the `exports` object. 

```js
exports.area = function(width) { return width * width; };
exports.perimeter = function(width) { return 4 * width; };
```

We can import this module using `require()`, and then call the exported method(s) 

```js
const square = require('./square'); // Here we require() the name of the file without the (optional) .js file extension
console.log('The area of a square with a width of 4 is ' + square.area(4));
```

> **Note:** You can also specify an absolute path to the module

can also be done in one assignement:

```js
module.exports = {
  area: function(width) {
    return width * width;
  },

  perimeter: function(width) {
    return 4 * width;
  }
};
```

Modules-Links

- https://nodejs.org/api/modules.html#modules_modules

  

------

## Module: Nodemon

```
npm i -D nodemon
```

then change the start-script in package.json:

```
 "scripts": {
    "start": "nodemon app.js",
```

You could install `nodemon` globally if you wanted (this is NOT required though - because we can just run it locally)

https://www.npmjs.com/package/nodemon



type `rs` in Terminal forces nodemon to restart

------

## HTTP Module

- The Node `http` core module allows for easy creation of *web servers*, computer processes that listen for requests from clients and return responses.

`http` module. This module contains functions which simplify interacting with HTTP and streamline receiving and responding to requests.

- The `http.createServer()` method returns an instance of an `http.server`.
- An `http.server` has a method `.listen()` which causes the server to “listen” 

 When we run `http.createServer()` we pass in a custom callback function (often referred to as the `requestListener`). This callback function will be triggered once the server is listening and receives a request.

https://nodejs.org/api/http.html

### http-module

Launch a server, send requests

```js
http.createServer
```

takes a **request listener** as an argument

request listener = function that will run for every incoming request

```js
const http = require('http');

function rqListener(req, res) {
 // funtion runs on every request
}

http.createServer(rqListener)
```

 ore use anonymous function

```js
const http = require('http');

http.createServer((req, res) => {
    // funtion runs on every request
});
```

this is the createServer-callback

### The server

```js
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
```

------



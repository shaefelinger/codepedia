# Middleware - Express

A middleware is a part of your node.js software that gets executed for every incoming request. -› Plug in functionallity

middleware needs to be mounted using the method `app.use(path, middlewareFunction)`. The first `path` argument is optional. If you don’t pass it, the middleware will be executed for all requests.

```
REQUEST 
-> Middleware (req, res, next) => { ... next() }  
-> Middleware (req, res, next) => { ... res.send() }  
-> Response
```



`app.use();` -> adds a new middleware

Simplest form:

```js
app.use((req, res, next) => {});
```

`next` is a function that is passed by express -> go to the next middleware

```js
app.use((req, res, next) => {
  console.log('in the middleware');
  next(); // continue in the next middleware
});
app.use((req, res, next) => {
  console.log('in the next middleware');
  // ...
});
```

to finish the request, send a response…

##### Example:

```js
const bodyParser = require(‘body-parser’);
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
```

You can add as many middlewares as you like. They are put on the **middleware stack**.

> Because a middleware is called for every incoming request, you need to make sure that your middleware does not do any long or expensive operations.

---

sort me…

---

## [Using middleware](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#using_middleware)

is used extensively in Express apps, for tasks from serving static files to error handling, to compressing HTTP responses

The middleware can perform any operation, execute any code, make changes to the request and response object, and it can _also end the request-response cycle_. If it does not end the cycle then it must call `next()`

Most apps will use _third-party_ middleware in order to simplify common web development tasks like working with cookies, sessions, user authentication, accessing request `POST` and JSON data, logging, etc.

http://expressjs.com/en/resources/middleware.html

To use third party middleware you first need to install it into your app using NPM

```
$ npm install morgan
```

```js
const express = require('express');
const logger = require('morgan');
const app = express();
app.use(logger('dev'));
...
```

You can write your own middleware functions, and you are likely to have to do so (if only to create error handling code).The **only** difference between a middleware function and a route handler callback is that middleware functions have a third argument `next`,

You can add a middleware function to the processing chain for _all responses_ with `app.use()`, or for a specific HTTP verb using the associated method: `app.get()`, `app.post()`,

```js
const express = require('express');
const app = express();

// An example middleware function
let a_middleware_function = function(req, res, next) {
  // ... perform some operations
  next(); // Call next() so Express will call the next middleware function in the chain.
};

// Function added with use() for all routes and verbs
app.use(a_middleware_function);

// Function added with use() for a specific route
app.use('/someroute', a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get('/', a_middleware_function);

app.listen(3000);
```

The Express documentation has a lot more excellent documentation about [using](https://expressjs.com/en/guide/using-middleware.html) and [writing](http://expressjs.com/en/guide/writing-middleware.html) Express middleware.

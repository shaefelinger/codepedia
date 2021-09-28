# Middleware

A middleware is a part of your node.js software that gets executed for every incoming request. -› Plug in functionallity



`app.use();` -> adds a new middleware

Simplest form:

```js
app.use((req, res, next) => {})
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
# Express Routes

## Use

`use` always executes -› for middleware

```js
app.use('/users', (req, res, next) => {
  res.send('users');
});
```

`app.use` docs: 

https://expressjs.com/en/4x/api.html#app.use

------

## limit to http-verbs

`app.get` is the same as `app.use` but only reacts to `get` requests

and `app.post`, `.delete`, `.patch`, `.put`

------

## 404-page / catch-all route

you can chain methods, but `send` has to be the last one

```
res.setHeader(...).send(...)
```

as the very last middleware:

```js
app.use((req, res, next) => {
  res.status(404).send('<h1>404 Page not found!</h1>');
});
```

------

## Express-Router

to split routing code in multiple files:

folder `/routes`

router is like a mini-express-app:

```js
const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  console.log('in the first middleware');
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>'
  );
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
```

and import in the main app - `app.js`

and put the imported Object in `app.use()` (not calling the function)

```js
const adminRoutes = require('./routes/admin');
app.use(adminRoutes)
```

the Order matters!

------

if all routes in a routes-file start with the same segment, you can add that as a filter in the main app:

```js
	app.use('/admin', adminRoutes);
```

-> only routes starting with `/admin` will go into the 'adminRoutes'-File


# Router - Express

To split routing code in multiple files:

[Routes and controllers .](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)



Useful to group route handlers for a particular part of a site together and access them using a common route-prefix -›  `express.Router` 

## Example 1

```js
// wiki.js - Wiki route module

const express = require('express');
const router = express.Router();

// Home page route
router.get('/', function(req, res) {
  res.send('Wiki home page');
});

// About page route
router.get('/about', function(req, res) {
  res.send('About this wiki');
});

module.exports = router;
```

> **Note:** Adding routes to the `Router` object is just like adding routes to the `app` object 

To use the router in the main app file, `require()` the route module (**wiki.js**), then call `use()` on the *Express* application to add the Router to the middleware handling path. The two routes will then be accessible from `/wiki/` and `/wiki/about/`.

```js
const wiki = require('./wiki.js');
// ...
app.use('/wiki', wiki);
```



------

## Example 2

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


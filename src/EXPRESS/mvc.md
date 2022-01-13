# Model View Controller (MVC)

Seperation of Concerns

create folders

- /models
- /views
- /controller

=> model and view usually never interact with each other -> presentaion and logic of data is totally seperated

<!-- ![mvc](./assets/mvc.png) -->

put all the logic in seperate files, eg.

## Controller

route

```js
const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
```

```js
const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add new product',
    path: '/admin/add-product',
    formsCss: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
};
```

## Models

costructor function or class

example: /models/product.js

```js
const products = [];
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
};
```

```js
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add new product',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
  });
};
```

- More on MVC: https://developer.mozilla.org/en-US/docs/Glossary/MVC

- https://www.youtube.com/watch?v=DUg2SWWK18I

- https://www.youtube.com/watch?v=pCvZtjoRq1I

![mvc_structure](./assets/mvc_structure.png)

## [Express development environment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment#what_is_the_express_development_environment)

A handy tool for creating skeleton _Express_ web apps that follow the [MVC pattern](https://developer.mozilla.org/en-US/docs/Glossary/MVC).

The application generator is optional

[Installing the Express Application Generator](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment#installing_the_express_application_generator)

https://expressjs.com/en/starter/generator.html

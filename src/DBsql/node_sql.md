# SQL with Node

```
 npm i mysql2
```

to connect, create a connection-pool

(with `createConnection`, the connextion has to be closed an established for each query)



`/util/database.js`:

```js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: ShadowRoot,
  database: 'node-coplete',
  password:'xyz'
});

module.exports = pool.promise();
```



then in app.js:

```
const db = require('./util/database.js');

db.
```

- `db.end()`
- `db.execute()`(safer than `db.query()`)



```js
db.execute('SELECT * FROM products')
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
```

`result` is an array with 2 nested arrays



```js
Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('shop/product-list', {
        prods: rows,
        pageTitle: 'All Products',
        path: '/products',
      });
    })
    .catch((err) => console.log(err));
```

in Product-class:

```js
static fetchAll() {
    return db.execute('SELECT * FROM products');
  }
```

------

in Product class:

```js
save() {
	return db.execute(
	'INSERT INTO products (title, price, description, imageUrl) VALUES (?,?,?,?)',
      [this.title, 
       this.price, 
       this.imageUrl, 
       this.description
      ]
    );
  }
```

```js
static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.id=?', [id]);
  
```

------

- Learn more about MySQL/ SQL in General: https://www.w3schools.com/sql/
- Learn more about the Node MySQL Package: https://github.com/sidorares/node-mysql2


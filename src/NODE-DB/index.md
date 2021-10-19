# SQL with Node

[Learn more about the Node MySQL Package](https://github.com/sidorares/node-mysql2)

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

`result[0]` contains the data(rows), `result[1]` contains Meta-Data

or use:

```js
[rows, fieldData] = result;
```

example:

```js
db.execute('SELECT * FROM transactions')
    .then(([rows, fieldData]) => {
      console.log('rows:', rows);
      res.status(200).json({ message: 'OK', rows: rows });
    })
```

in controller

```js
exports.getTransactions = async (req, res, next) => {
  try {
    const [rows, fieldData] = await db.execute('SELECT * FROM transactions');
    console.log('rows:', rows);
    res.status(200).json({ message: 'OK', rows: rows });
  } catch (err) {
    console.log(err);
  }
};
```



------



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



- 



# MongoDB with NodeJs

Use **Native Mongo Driver** or use **ODM (Object Document Mapper): Mongoose**

## Native Driver

https://docs.mongodb.com/drivers/node/

is rarely used. => complicated

```
npm install mongodb
```

------

assert - testing

assertion. check if everything went right

------



```js
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL 
const url = 'mongodb://localhost:27017';

// Database Name 
const dbName = 'myproject';

// create a new Mongoclient 
const client = new MongoClient(url);

// Use connect method to connect to the Server 
client.connect(function(err){
    assert.equal(null, err);
    console.log('Connected to Server');

    const db = client.db(dbName);

    client.close();
});

```



### Insert Document

```js
const insertDocuments = function(db, callback) {
    // Get the documents collection 
    const collection = db.collection('documents');
    // Insert some documents 
    collection.insertMany([
        {a:1}, {a:2}, {a:3}

    ], function (err, result) {
        assert.equal(err, null)
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 Documents");
        callback(result)
    })
}

```

complicated...

------


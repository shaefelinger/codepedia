# Read - Mongo

###  Read - .find()

https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find

```
db.students.find() 
// or
db.students.find({}) 

// nicer:
db.students.find().pretty()

```

### Query a Specific Document

The JSON that we pass to the **find()**function is our **query**.



```
db.students.find({ "FirstName": "Anna" })
```

### Find Similar

```
db.students.find({"name":/helder/i}) 

-> search similar (RegEx)
```

### Query Operators

```
db.students.find( { "FirstName": { $in: [ "Anna", "Michael" ] } } )
```

use query selectors

[https://docs.mongodb.com/manual/reference/operator/query/#query-selectors](https://docs.mongodb.com/manual/reference/operator/query/#query-selectors)

[https://docs.mongodb.com/manual/reference/operator/query/](https://docs.mongodb.com/manual/reference/operator/query/)

```
> db.products.find({name: "Pencil"} )
```

```
> db.products.find({price:{$gt: 1}} )
```

### 2nd parameter: projection

-> specify the field

```
db.products.find({_id:1}, {name: 1})
```

id always comes back by default, but can be disabled:

```
> db.products.find({_id:1}, {name:1, _id:0})
```

------

## 
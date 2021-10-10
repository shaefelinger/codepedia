# Delete - MongoDB

### Delete All Documents Matching

```
db.students.deleteMany({ "FirstName": "Anna" })
```

### Delete the First Document that Matches

```
db.students.deleteOne({ "FirstName": "Anna" })
```

https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/#db.collection.deleteOne

### Delete All

```
db.students.deleteMany({})
```

{} is Wildcard for all

## delete Database

```
use databaseName 
db.dropDatabase()
```



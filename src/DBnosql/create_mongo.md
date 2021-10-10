# Create - MongoDB



------

### Create a New Document (new entry)

insertOne()

```
db.students.insertOne({"name":"Teresa"})
```

```
db-products.insertOne({_id:1, name: "Pen", price: 1.20})
```

or Multiline:

```
db.students.insertOne(
{
"FirstName": "Stefan",
"Email": "stefan@gmail.com",
"Address": "Hauptstr. 1, 22679 Hamburg"
} )
```

The first object, **db**, is the database object.
 The second, **students**,is the collection that you are using.
 You are then calling a method on the collection: **insertOne(...)**

> ```
> {
> "acknowledged" : true,
> "insertedId" : ObjectId("5e11ebb8afe9bc071cc2389e") 
> }
> ```

In the second line, mongo tells you the ID for the document that it created automatically. MongoDB requires a unique ID  You don’t need to create an ID field in your document.

### Insert Multiple Documents

`insertMany()`

```
db.students.insertMany([
    {
        "name": "Maria",
        "email": "mail@maria.de",
        "student_id": 3
    },
    {
        "name": "Tom",
        "email": "tom@tom.com",
        "student_id": 4
    },
    {
        "name": "Bernd",
        "email": "bernd@gmail.com",
        "student_id": 5
    },
    {
        "name": "Kerstin",
        "email": "Kerstin@gmx.de",
        "student_id": 6
    },
    {
        "name": "Steffen",
        "email": "mail@shaefelinger.de",
        "student_id": 7
    },
    {
        "name": "Jan",
        "email": "jcs@me.com",
        "student_id": 8
    }
])
```

> Array!

> -> sehr umständlich im terminal. eher im editor


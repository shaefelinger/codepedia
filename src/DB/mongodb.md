# MongoDB

## Installation

Install MongoDB Community Edition. It is the non-commercial edition, but has all the features we need.

Follow the installation instructions of your operating system:

https://docs.mongodb.com/manual/administration/install-community/

```
brew tap mongodb/brew
brew install mongodb-community@4.2
```

*Mac:*

```
mongod --config /usr/local/etc/mongod.conf
```



## mongod

-> Software, Server. Running in background

start server:

```
mongod
```



## mongo-shell

### start the mongo command line tool:

```
mongo

>_
```

### Show the Database

```
db
```

### Show the Databases

```
show dbs
```

*admin, config, local = default*

### Switch to Other Database

```
use databaseName
```

> ****If the database does not exist, mongo will create it for you.
>
> (to get listed with `show dbs`, it has to have some content)

------

## Collections and Documents

In MongoDB, your data is organized in **collections**. (equivalent to a table in relational databases)

A **document** is a data item stored in a collection. It is the equivalent of a row in a table in relational databases.

Data is stored in **JSON** (JavaScript Object Notation) format

### Show Collections

```
show collections
```

collection =  table

document = datensatz

------

## CRUD

https://docs.mongodb.com/manual/crud/



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



------

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

https://docs.mongodb.com/manual/reference/operator/query/#query-selectors

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

## Update

```
db.students.updateOne(
{ "FirstName": "Michael" }, 
	{
		$set: { "Address": "Borselstraße 7, 22765 Hamburg" } 
	}
)
```

```
db.products.updateOne({_id:1}, {$set: {stock: 32}})
```

`$set` creates new Field



Similarly, you can use **updateMany()**with a query operator.

https://docs.mongodb.com/manual/tutorial/update-documents/

------

## Delete

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



------

### $ -> Operators/Functions

### -> füge aktuelles datum dem datensatz zu:

```
$currentDate: {"last_modified": true}
```

### Delete Field - $unset

```
db.students.updateMany( {}, { $unset: {"Adress":""} })
```

https://docs.mongodb.com/manual/reference/operator/update/unset/

------

## Relationships in MongoDB

two ways:

### 1) Document inside of Document. 

Good for one to many relationships

```
db.products.insert(
	{
		_id:3,
		name: "Rubber",
		stock: 43,
		reviews: [
			{
				authorName: "Sally",
				rating: 5,
				review: "Best rubber ever"
			},
			{
				authorName: "John",
				rating: 4,
				review: "Good rubber!"
			}
		]
	}
)
```

### 2) reference ID

```
{
	_id: 1,
	name: "Pen",
	price: 1.20,
	stock: 32
}

{
	_id: 2,
	name: "Pencil",
	price: 0.80,
	stock: 12
}

{
	orderNumber: 3234,
	productsOrdered: [1, 2]
}
```

------

## Methodology for Finding the Right Query

Finding the right query can be difficult, especially on the command line. To find the right query, you can follow the following steps:

1. **1)**  **Browse the dataset and familiarize yourself with it.**

2. **2)**  **Identify the field you are interested in.**

3. **3)**  **Identify the query operator or the syntax you need.**

   - ○  Check the documentation
   - ○  Search the web for examples

4. **4)**  **Try it out.**

   (Trial and error)

------

## MongoDB Atlas and Compass

MongoDB provides a cloud database called **Atlas**.

**Compass** is giving you a GUI (Graphical User Interface) that makes it a bit easier to work with the database.

Queries in Compass

- sort
- {title: 1}




### QuerySelectors 


https://docs.mongodb.com/manual/reference/operator/query/



> immer closing brackets gleich mitschreiben -> gefahr zu vergessen

### Mehrere Queries: Implicit and-Statement

```
{"year" : { $lt : 1925 }, "imdb.rating": { $gt: 8}  } 
```



------

## Heroku & Atlas

https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment

------

Atlas -> Heroku

https://developer.mongodb.com/how-to/use-atlas-on-heroku/

------

# Links

- [Handout - Databases.pdf](files/Handout - Databases.pdf) 
- MongoDBDocumentation:https://docs.mongodb.com/manual/ 
- MongoDBCourses: https://university.mongodb.com/
- MongoDB tutorial: https://www.guru99.com/what-is-mongodb.html 
- MongoDB Cheat Sheet:https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6 


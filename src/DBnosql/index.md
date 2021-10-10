# MongoDB - Basics

## Installation

Install MongoDB Community Edition. It is the non-commercial edition, but has all the features we need.

Follow the installation instructions of your operating system:

[https://docs.mongodb.com/manual/administration/install-community/](https://docs.mongodb.com/manual/administration/install-community/)

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

#### start server:

```
mongod
```

[https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/](https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/)

#### stop server 

```
./mongo

use admin

db.shutdownServer()
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

[https://docs.mongodb.com/manual/crud/](https://docs.mongodb.com/manual/crud/)

------

## Links

- [Handout - Databases.pdf](files/Handout - Databases.pdf) 
- [MongoDBDocumentation](https://docs.mongodb.com/manual/) 
- [MongoDBCourses](https://university.mongodb.com/)
- [MongoDB tutorial](https://www.guru99.com/what-is-mongodb.html) 
- [MongoDB Cheat Sheet](https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6) 


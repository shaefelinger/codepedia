# Databases - Intro

## What is a database?

- A database is a system for storing data in an ordered way.
- It consists of the data that is stored and a software that manages it.
- Databases have a query language to retrieve and manipulate the data.

## Classification

It is common practice to use these terms synonymously:

- Relational databases = SQL databases 
- Document-based databases = NoSQL databases

| **Relational Databases**                                     | **Document-based Databases**                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| The classic type of databases, made popular by MySQL.        | The modern approach to databases, addresses problems in web development. |
| Useful for more complex data that has a lot of relationships between entities. | Useful for large amounts of data that is rather uniform.     |
| Structured                                                   | Mostly unstructured                                          |
| Complex to set up                                            | Simple to query                                              |
| Data integrity built in                                      | Data integrity relies heavily on programming                 |
| Uses SQL                                                     | Uses a custom query language, often resembling JavaScript    |
| **Examples:** MariaDB, MySQL, SQLite (mobile), SQL Server    | **Examples: **MongoDB, CouchDB, Firebase Cloud Firestore     |

## CRUD

Regardless of the type of database we use, we will always have four types of operations: 

**C** - Create

**R​** - Read

**U​** - Update

**D** - Delete

> **CRUD **is not only used in databases, but also for REST APIs.


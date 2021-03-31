# Databases


## CRUD

Regardless of the type of database we use, we will always have four types of operations: 

**C** - Create

**R​** - Read

**U​** - Update

**D** - Delete


------

## What is a Relational Database?

Uses a structure that allows us to identify and access data *in relation* to another piece of data in the database. Often organized into tables.

## What is a Relational Database Management System (RDBMS)?

A program that allows you to create, update, and administer a relational database. Most relational database management systems use the SQL language to access the database.

## What is SQL?

SQL (**S**tructured **Q**uery **L**anguage) is a programming language used to communicate with data stored in a relational database management system.

Many RDBMSs use SQL (and variations of SQL) to access the data in tables

## Popular Relational Database Management Systems

**[MySQL](https://www.mysql.com/)**

MySQL is the most popular open source SQL database. typically used for web application development

-  easy to use, inexpensive, reliable (has been around since 1995), and has a large community of developer

-  disadvantages:  poor performance when scaling, does not include some advanced features 

**[PostgreSQL](https://www.postgresql.org/)**

open source SQL database that is not controlled by any corporation. It is typically used for web application development.

- shares many of the same advantages of MySQL. It is easy to use, inexpensive, reliable and has a large community of developers. It also provides some additional features such as foreign key support without requiring complex configuration.
- disadvantage:it can be slower in performance than other databases such as MySQL. It is also slightly less popular than MySQL.

read [this](https://www.codecademy.com/paths/design-databases-with-postgresql/tracks/what-is-a-database/modules/using-postgresql-on-your-own-computer/articles/installing-and-using-postgresql-locally) article.

Video:[ what is PostreSQL]( https://www.youtube.com/watch?v=MZdO1UbTG4U&list=PLwvrYc43l1MxAEOI_KwGe8l42uJxMoKeS)

**[Oracle DB](https://www.oracle.com/database/)**

Oracle Corporation owns Oracle Database, and the code is not open sourced.

for large applications, particularly in the banking industry.

disadvantage:  not free to use like its open source competitors and can be quite expensive.

**[SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-2017)**

Microsoft

Large enterprise applications mostly use SQL Server.

Microsoft offers a free entry-level version called *Express* but can become very expensive as you scale your application.

**[SQLite](https://www.sqlite.org/)**

popular open source SQL database. It can store an entire database in a single file. One of the most significant advantages this provides is that all of the data can be stored locally without having to connect your database to a server.

SQLite is a popular choice for databases in cellphones, PDAs, MP3 players, set-top boxes, and other electronic gadgets.

read [this](https://www.codecademy.com/courses/learn-sql/articles/what-is-sqlite) article.



------

## MariaDB

MariaDBKnowledgeBase:https://mariadb.com/kb/en/

Install MariaDB: https://mariadb.com/kb/en/installing-mariadb-on-macos-using-homebrew/

```sql
brew services start mariadb
brew services stop mariadb
brew services restart mariadb
```

------

check, if running: acivity monitor

start mariaDB: `brew services start mariadb`

`mysql -u root` -> command line application

control-c -> quit



`mysql -u root -p` -> passwort

`mysql -u [username]` (sh)

------

- localhost 3306

------

## User Fuck

admin 12345678



```
CREATE USER 'admin'@'localhost' IDENTIFIED BY '12345678';

GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' WITH GRANT OPTION;
```





------

### Statements

Statements always end in a semicolon `;`.

```sql
CREATE TABLE table_name (
   column_1 data_type, 
   column_2 data_type, 
   column_3 data_type
);
```

Let’s break down the components of a statement:

1. `CREATE TABLE` is a *clause*.
2. `table_name` refers to the name of the table
3. `(column_1 data_type, column_2 data_type, column_3 data_type)` is a *parameter*. Here, the parameter is a list of column names and the associated data type.





------

### Create a Database

```
SQL> CREATE DATABASE testDB;	
```

```
 CREATE DATABASE DatabaseName;
```

### `CREATE`

To create a new table

```sql
CREATE TABLE celebs (
  id INTEGER, 
  name TEXT, 
  age INTEGER
);
```

> Eine db kann mehrere Tables enthalten:
>
> [people]
>
> id (PK) - name - city - age - role
>
> [classes]
>
> id (PK) - name - length - description

------



### Show Databases

```
SQL> SHOW DATABASES;
```

### Select a Database

```
SQL> USE test;
Database changed
```

### Show Selected Database

```
SQL> SELECT database();
```

## Tables

### Create a Table

```
CREATE TABLE table_name(
	column1 datatype,
	column2 datatype,
	column3 datatype,
	.....
	columnN datatype,
	PRIMARY KEY( one or more columns )
);
```

------

### Data Types

All data stored in a relational database is of a certain data type.

Some of the most common data types are:

- `INTEGER`, a positive or negative whole number
- `TEXT`, a text string
- `DATE`, the date formatted as YYYY-MM-DD
- `REAL`, a decimal value

- no booleans

------

## Primary Key (PK)

unique ID - für jeden Datensatz

------

### Sequel Pro / Sequel Ace

 -> graphical Interface. Creates the sql-code. No Undo!

- use 127.0.0.1 as Host in SequelAce
- sequel pro funktioniert mit socket connection 

### Names (fields, databases, tables)

- not case sensitive

- -> convention: always lowercase, snake_case

- space are possible, but not advised

  

### New database

- database encoding -> utf8 (wie bei html). Immer darauf achten, dass Charset von HTML-Page  gleich ist wie das die Database 
- collation- ci (case insensitive) 
- -> default ist ok

### new table

convention: table-name is plural (lowercase, snake_case)

#### type -

 viele sind die selben (bool, boolean -> gibts gar nicht)

#### varchar

für bis zu 1000 zeichen oder so

(char - only oldschool)

#### Text

Beliebige Länge

#### allownull

darf es empty sein, or is it mandatory?



#### int

length 11 ist 11 bytes -> 

unsinged: -vorzeichen -> negative zeichen möglich



#### id

wird automatisch erzeugt



**create Syntax** in SequelPro -> zeigt den code an, um einen Clone zu erzeugen, nicht zwangsläufig das, was man im Terminal eingeben muss...



------

## SQL

### Structured Query Language

(SQL) ('sequel')

### List of SQL Commands

https://www.codecademy.com/articles/sql-commands

------

- Easy Language

- not case sensitive

- Convention: SQL-Comand in Uppercase

------

### comment

`# comment in SQL`

------



------

## Links

- [Handout - Databases.pdf](files/Handout-Databases.pdf) 

- https://www.sachsen.schule/~terra2014/sql_abfragen.php 

- https://sqlzoo.net/wiki/SELECT_basics

- MariaDB Knowledge Base: https://mariadb.com/kb/en/ 

- W3schoolSQLtutorial: https://www.w3schools.com/sql/

- MariaDB Foreign Key tutorial:

  https://www.mariadbtutorial.com/mariadb-basics/mariadb-foreign-key/

- ERDiagramsYoutubetutorial:https://www.youtube.com/watch?v=QpdhBUYk7Kk 

- JoiningTables:https://mariadb.com/kb/en/joining-tables-with-join-clauses/ 

- ModeAdvancedJoins:https://mariadb.com/kb/en/more-advanced-joins/


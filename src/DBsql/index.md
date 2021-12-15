# SQL Overview

## What is a Relational Database?

Uses a structure that allows us to identify and access data *in relation* to another piece of data in the database. Often organized into tables.

## What is a Relational Database Management System (RDBMS)?

A program that allows you to create, update, and administer a relational database. Most relational database management systems use the SQL language to access the database.

## What is SQL?

SQL (**S**tructured **Q**uery **L**anguage) is a programming language used to communicate with data stored in a relational database management system.

Many RDBMSs use SQL (and variations of SQL) to access the data in tables

Since 1974 - became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987

Every **DBMS** (DataBase Management System, a fancy name for database software) has slight differences in how they implement SQL. But there is a large set of standard commands that are the same in all SQL databases.

> **Note:** Most of the SQL database programs also have their own proprietary extensions in addition to the SQL standard!

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

- database is stored in a single file
-  poor choice when many different users are updating the table at the same time
- SQLite does not offer the same exact functionality as many other database systems, limiting some advanced features other relational database systems offer. 
-  SQLite will not reject values of the wrong type
- SQLite is used worldwide for testing, development, and in any other scenario where it makes sense for the database to be on the same disk as the application code.

------

##  Additional resources:

- Article: [Pronouncing SQL: S-Q-L or Sequel?](http://patorjk.com/blog/2012/01/26/pronouncing-sql-s-q-l-or-sequel/)
- Article: [Understanding SQL and NoSQL Databases and Different Database Models](https://www.digitalocean.com/community/tutorials/understanding-sql-and-nosql-databases-and-different-database-models)
- Article: [PostgreSQL - CONSTRAINTS](https://www.tutorialspoint.com/postgresql/postgresql_constraints.htm)
- Lesson: [Why Learn SQL?](https://www.codecademy.com/paths/web-development/tracks/sql-for-web-development/modules/webdev-sql-intro/lessons/why-sql) (from a data analysis perspective)
- Video: [SQL and Databases are MORE IMPORTANT than you think in 2018](https://www.youtube.com/watch?v=D5HRYIxcYh8)
- Resource: [SQL Fiddle](http://sqlfiddle.com/)
- Resource: [Kickstarter SQL Style Guide](https://gist.github.com/fredbenenson/7bb92718e19138c20591)

### Practice:

https://dreamy-cabbage-87c3f6.netlify.app/

https://sqlzoo.net/wiki/SQL_Tutorial


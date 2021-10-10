# SQL Databases

**SQL - Structured Query Language**

Every **DBMS** (DataBase Management System, a fancy name for database software) has slight differences in how they implement SQL. But there is a large set of standard commands that are the same in all SQL databases.

[MariaDBKnowledgeBase](https://mariadb.com/kb/en/)

### List of SQL Commands

[https://www.codecademy.com/articles/sql-commands](https://www.codecademy.com/articles/sql-commands)

## Basic Commands

### Create a Database

To create a new database, use this command:

```
CREATE DATABASE testDB;
```

In general, the syntax is like this:

```
 CREATE DATABASE DatabaseName;
```

You can write all SQL statements in lowercase as well. Convention: use uppercase, so that you see better which words are SQL keywords.

------

### Show Databases

Show all databases:

```
SHOW DATABASES;
```

------

### Select a Database

Select a database to work with:

```
USE test;
```

------

### Show Selected Database

Show which database is selected:

```
SELECT database();
```

### Delete Database

------

**This cannot be reversed!**

```
DROP DATABASE bufg;
```

------


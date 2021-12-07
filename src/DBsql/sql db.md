# SQL Databases

**SQL - Structured Query Language**

SQL operates through simple, declarative statements. This keeps data accurate and secure, and helps maintain the integrity of databases, regardless of size.

https://www.codecademy.com/articles/sql-commands

[MariaDBKnowledgeBase](https://mariadb.com/kb/en/)

------

### List of SQL Commands

- Easy Language
- not case sensitive

[https://www.codecademy.com/articles/sql-commands](https://www.codecademy.com/articles/sql-commands)

### Formatting convention

- Capitalizing commands is  a convention that makes queries easier to read
- columns are named in lower case, and use underscores instead of spaces.
- The table name itself also uses underscores instead of spaces (it's annoying to deal with spaces in SQL - but it's posiible)
- putting double quotes around a word or phrase will indicate that you are referring to that column name.

------

## Statements

A statement is text that the database recognizes as a valid command. Statements always end in a semicolon `;`.

```sql
CREATE TABLE table_name (
   column_1 data_type, 
   column_2 data_type, 
   column_3 data_type
);
```

1. `CREATE TABLE` is a *clause*. Clauses perform specific tasks in SQL. By convention, clauses are written in capital letters.
2. `table_name` refers to the name of the table that the command is applied to.
3. `(column_1 data_type, column_2 data_type, column_3 data_type)` is a *parameter*. A parameter is a list of columns, data types, or values that are passed to a clause as an argument.

A statement can be written all on one line, or split up across multiple lines if it makes it easier to read.

------

## Basic Commands

### Comment

- `# comment in SQL`
- s multiple lines using `/*` to begin the comment and `*/` to close it

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


# SQL Databases

**SQL - Structured Query Language**

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


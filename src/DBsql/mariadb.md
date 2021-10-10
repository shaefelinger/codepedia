# MariaDB

MariaDBKnowledgeBase:https://mariadb.com/kb/en/

Install MariaDB: https://mariadb.com/kb/en/installing-mariadb-on-macos-using-homebrew/

```sql
brew services start mariadb
brew services stop mariadb
brew services restart mariadb
```

---

check, if running: acivity monitor

start mariaDB: `brew services start mariadb`

`mysql -u root` -> command line application

control-c -> quit

`mysql -u root -p` -> passwort

`mysql -u [username]` (sh)

---

- localhost 3306

---

## Create User Example

admin 12345678

```
CREATE USER 'admin'@'localhost' IDENTIFIED BY '12345678';

GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' WITH GRANT OPTION;
```

---

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

1. `CREATE TABLE` is a _clause_.
2. `table_name` refers to the name of the table
3. `(column_1 data_type, column_2 data_type, column_3 data_type)` is a _parameter_. Here, the parameter is a list of column names and the associated data type.

---

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

---

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

---

### Data Types

All data stored in a relational database is of a certain data type.

Some of the most common data types are:

- `INTEGER`, a positive or negative whole number
- `TEXT`, a text string
- `DATE`, the date formatted as YYYY-MM-DD
- `REAL`, a decimal value

- no booleans

---

## Primary Key (PK)

unique ID - für jeden Datensatz

---

### Sequel Pro / Sequel Ace

-> graphical Interface. Creates the sql-code. No Undo!

- use 127.0.0.1 as Host in SequelAce
- sequel pro funktioniert mit socket connection

### Names (fields, databases, tables)

- not case sensitive

- -> convention: always lowercase, snake_case

- space are possible, but not advised

### New database

- database encoding -> utf8 (wie bei html). Immer darauf achten, dass Charset von HTML-Page gleich ist wie das die Database
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

---

## SQL

### Structured Query Language

(SQL) ('sequel')

### List of SQL Commands

https://www.codecademy.com/articles/sql-commands

---

- Easy Language

- not case sensitive

- Convention: SQL-Comand in Uppercase

---

### comment

`# comment in SQL`

---

## Links

- [Handout - Databases.pdf](files/Handout-Databases.pdf)

- [https://www.sachsen.schule/~terra2014/sql_abfragen.php](https://www.sachsen.schule/~terra2014/sql_abfragen.php)

- [SELEECT basics](https://sqlzoo.net/wiki/SELECT_basics)

- [MariaDB Knowledge Base](https://mariadb.com/kb/en/)

- [W3schoolSQLtutorial](https://www.w3schools.com/sql/)

[MariaDB Foreign Key tutorial](https://www.mariadbtutorial.com/mariadb-basics/mariadb-foreign-key/)

- [ERDiagramsYoutubetutorial](https://www.youtube.com/watch?v=QpdhBUYk7Kk)

- [JoiningTables](https://mariadb.com/kb/en/joining-tables-with-join-clauses/)

- [ModeAdvancedJoins](https://mariadb.com/kb/en/more-advanced-joins/)

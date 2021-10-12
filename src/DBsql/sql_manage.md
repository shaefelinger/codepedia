# Manage SQL-DB

## Terminal

### MariaDB

[MariaDBKnowledgeBase](https://mariadb.com/kb/en/)

[Install MariaDB](https://mariadb.com/kb/en/installing-mariadb-on-macos-using-homebrew/)

```sql
brew services start mariadb
brew services stop mariadb
brew services restart mariadb
```

---

check, if running: acivity monitor



start mariaDB: `brew services start mariadb`

-› now mysql is alway running - uses little memory

`mysql -u root` -> command line application

control-c -> quit

`mysql -u root -p` -> passwort

`mysql -u [username]` (sh)

------

### MySQL

- install community-server, workbench
- legacy encryption
- root-user-pw: 

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

## Primary Key (PK)

Unique ID - für jeden Datensatz

---

# Sequel Ace

(Sequel Pro is old version)

-> graphical Interface. Creates the sql-code. No Undo!

- use 127.0.0.1 as Host in SequelAce

  

### Names (fields, databases, tables)

- not case sensitive

- -> convention: always lowercase, snake_case

- space are possible, but not advised

### New database

- database encoding -> utf8 (like html).Make sure, that Charset of HTML-Page gleich is the same as the Database
- collation- ci (case insensitive)
- -> default is ok

### backup database

sequel pro: export

### import

in sequel pro-> select "run all queries "

DropTable -> löscht alte und erzeugt eine neue table bein importieren? 

### format sql



------

#### varchar

für bis zu 1000 zeichen oder so

(char - only oldschool)



#### id

wird automatisch erzeugt

**create Syntax** in SequelPro -> zeigt den code an, um einen Clone zu erzeugen, nicht zwangsläufig das, was man im Terminal eingeben muss...


# SQL Databases

**SQL - Structured Query Language**

Every **DBMS** (DataBase Management System, a fancy name for database software) has slight differences in how they implement SQL. But there is a large set of standard commands that are the same in all SQL databases.

[MariaDBKnowledgeBase](https://mariadb.com/kb/en/)

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

## Tables

In relational databases, data is organized in tables. This example shows a table called “Customers”:

<img src="./assets/sql_table.png" />



In such a table, a column is an **attribute**, and a row is a **dataentry**.

------

### Create a Table

```
SQL> CREATE TABLE Customers( 
	id			INT						NOT NULL,
	name		VARCHAR(20)		NOT NULL,
	age 		INT						NOT NULL,
	address TEXT,
	salary	DECIMAL (18, 2),
	PRIMARY KEY (id)
);
```

In general, the syntax is like this:

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

For each column, you need to define the data type. Common data types are:

```
INT
FLOAT
DECIMAL - DECIMAL(#digits, #digits after floating point)
BOOLEAN
VARCHAR	- VARCHAR(length)
TEXT
ENUM
```

[https://mariadb.com/kb/en/library/data-types/](https://mariadb.com/kb/en/library/data-types/)

------

### Data Type Specifications

Some data types you can specify even further:

| Specification  |                                                    |
| -------------- | -------------------------------------------------- |
| UNSIGNED       | only positive numbers                              |
| SIGNED         | can have a sign (positive or negative)             |
| NOT NULL       | required - can not be null                         |
| AUTO_INCREMENT | if not set, increment automatically (used for IDs) |

------

### Primary Key

Every table needs one field that is unique. This is necessary for the database to uniquely identify each row in the table. This field (or column) is called the **primary key**.

You usually use integers for it. They need to be **NOT NULL**.

```
CREATE TABLE Customers( 
	id			INT						NOT NULL,
	name		VARCHAR(20)		NOT NULL,
	age 		INT						NOT NULL,
	address TEXT,
	salary	DECIMAL (18, 2),
	PRIMARY KEY (id)
);
```

It is recommended to set this column to **AUTO_INCREMENT**. This means that if you don’t specify it for a new row, the database automatically sets it to a value that is the last value +1.

```
CREATE TABLE Customers(
	id INT NOT NULL AUTO_INCREMENT, 
	...
	PRIMARY KEY (ID)
);
```

------

### Show All Tables

Show all tables in a database:

```
SHOW TABLES;
```

------

### Show Columns of a Table

```
DESCRIBE Students;
```

<img src="./assets/sql_describe.png" />

------

### Create a Data Entry

`INSERT`

To insert a row into a table:

```
INSERT INTO Students(name, email) VALUES ('John Doe', 'john@doe.com');
```

------

### Create Multiple Data Entries

```
INSERT INTO Customers(name, age, address, salary) VALUES
    -> ('Teresa', 33, 'Borselstr. 7, 22765 Hamburg', 30000),
    -> ('John', 25, 'Hauptstr. 1, 22087 Hamburg', 45000),
    -> ('Max', 35, 'Bernstorffstr. 118, 22796 Hamburg', 50000);
```

------

### Show All Rows of a Table

`SELECT`

```
SELECT * FROM Customers;
```

```
+----+--------+-----+-----------------------------------+----------+
| id | name   | age | address                           | salary   |
+----+--------+-----+-----------------------------------+----------+
|  1 | Teresa |  33 | Borselstr. 7, 22765 Hamburg       | 30000.00 |
|  2 | John   |  25 | Hauptstr. 1, 22087 Hamburg        | 45000.00 |
|  3 | Max    |  35 | Bernstorffstr. 118, 22796 Hamburg | 50000.00 |
+----+--------+-----+-----------------------------------+----------+
```

------

### Show a Certain Column

```
SELECT name FROM Customers;
```

```
+--------+
| name   |
+--------+
| Teresa |
| John   |
| Max    |
+--------+
3 rows in set (0.003 sec)
```

------

### Queries: Show Specific Rows

`WHERE`

Queries are the most important feature of the SQL language. You use it to show only specific rows that match a certain search criteria – the query.

```
SELECT * FROM Customers WHERE salary > 40000;
```

```
+----+------+-----+-----------------------------------+----------+
| id | name | age | address                           | salary   |
+----+------+-----+-----------------------------------+----------+
|  2 | John |  25 | Hauptstr. 1, 22087 Hamburg        | 45000.00 |
|  3 | Max  |  35 | Bernstorffstr. 118, 22796 Hamburg | 50000.00 |
+----+------+-----+-----------------------------------+----------+
2 rows in set (0.012 sec)
```

This follows a certain pattern:

```
SELECT <columns> 	# what to show in the result
FROM <table>			# the table to search
WHERE <query>;		# what we search for
```

Some more examples. You can test them out on the website:

https://www.sachsen.schule/~terra2014/ergebnis.php

```
SELECT * FROM BERG
WHERE B_NAME = "Chimborazo"

SELECT * FROM BERG
WHERE HOEHE >= 7001

SELECT * FROM BERG
WHERE HOEHE >= 7000 AND HOEHE <= 8000

SELECT * FROM BERG
WHERE HOEHE BETWEEN 7000 AND 8000
```

------

### Sorting the Results

`ORDER BY`

```
SELECT * FROM Customers WHERE salary > 40000 ORDER BY salary;
```

```
+----+------+-----+-----------------------------------+----------+
| id | name | age | address                           | salary   |
+----+------+-----+-----------------------------------+----------+
|  2 | John |  25 | Hauptstr. 1, 22087 Hamburg        | 45000.00 |
|  3 | Max  |  35 | Bernstorffstr. 118, 22796 Hamburg | 50000.00 |
+----+------+-----+-----------------------------------+----------+
```

In ascending order: `ASC`

```
SELECT * FROM Customers WHERE salary > 40000 ORDER BY salary ASC;
```

```
+----+------+-----+-----------------------------------+----------+
| id | name | age | address                           | salary   |
+----+------+-----+-----------------------------------+----------+
|  2 | John |  25 | Hauptstr. 1, 22087 Hamburg        | 45000.00 |
|  3 | Max  |  35 | Bernstorffstr. 118, 22796 Hamburg | 50000.00 |
+----+------+-----+-----------------------------------+----------+
```

In descending order: `DESC`

```
SELECT * FROM Customers WHERE salary > 40000 ORDER BY salary DESC;
```

```
+----+------+-----+-----------------------------------+----------+
| id | name | age | address                           | salary   |
+----+------+-----+-----------------------------------+----------+
|  3 | Max  |  35 | Bernstorffstr. 118, 22796 Hamburg | 50000.00 |
|  2 | John |  25 | Hauptstr. 1, 22087 Hamburg        | 45000.00 |
+----+------+-----+-----------------------------------+----------+
```

------

### Update Certain Rows

`UPDATE`

To update a certain column, use a query statement as well:

```
UPDATE Customers SET salary = 45000 WHERE salary > 45000;
```

```
SELECT * FROM Customers;
+----+--------+-----+-----------------------------------+----------+
| id | name   | age | address                           | salary   |
+----+--------+-----+-----------------------------------+----------+
|  1 | Teresa |  33 | Borselstr. 7, 22765 Hamburg       | 30000.00 |
|  2 | John   |  25 | Hauptstr. 1, 22087 Hamburg        | 45000.00 |
|  3 | Max    |  35 | Bernstorffstr. 118, 22796 Hamburg | 45000.00 |
+----+--------+-----+-----------------------------------+----------+
```

------

### Alter Columns of a Table

`ALTER TABLE`

 [ALTER TABLE](https://mariadb.com/kb/en/alter-table/)

You can also change the table’s columns. This is a complex topic, because you can change a lot of different things (e.g. the data type or default value of a column).

#### Add a new column to a table:

`ADD COLUMN`

```
ALTER TABLE Students ADD COLUMN address VARCHAR(100);
```

#### Remove a column:

`DROP COLUMN`

```
ALTER TABLE Students DROP COLUMN address;
```

------

### Delete Rows

```
DELETE FROM Customers WHERE name = 'Teresa';
```

------

### Delete a Table

**This cannot be reversed!**

```
DROP TABLE Customers;
```

------

## Relations


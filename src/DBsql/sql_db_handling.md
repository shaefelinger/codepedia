# SQL w3 Database Handling

## SQL CREATE DATABASE

```
CREATE DATABASE databasename;
```

check it in the list of databases with  `SHOW DATABASES`;

## SQL DROP DATABASE

to drop an existing SQL database.

```
DROP DATABASE databasename;
```

## SQL CREATE TABLE

```
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);
```

```sql
CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);
```

##### Create Table Using Another Table

```
CREATE TABLE new_table_name AS
    SELECT column1, column2,...
    FROM existing_table_name
    WHERE ....;
```

```sql
CREATE TABLE TestTable AS
SELECT customername, contactname
FROM customers;
```

## SQL DROP TABLE

```sql
DROP TABLE table_name;
```

## SQL TRUNCATE TABLE

to delete the data inside a table, but not the table itself.

```sql
TRUNCATE TABLE table_name;
```

## SQL ALTER TABLE (MySQL)

To add, delete, or modify columns in an existing table and to add and drop various constraints on an existing table.

## ALTER TABLE - ADD Column

```
ALTER TABLE table_name
ADD column_name datatype;
```

```sql
ALTER TABLE Customers
ADD Email varchar(255);
```

## ALTER TABLE - DROP COLUMN

```
ALTER TABLE table_name
DROP COLUMN column_name;
```

> some database systems don't allow deleting a column

## ALTER TABLE - MODIFY COLUMN

```
ALTER TABLE table_name
MODIFY COLUMN column_name datatype;
```

------

## SQL Constraints

## SQL Create Constraints

 can be specified when the table is created with the `CREATE TABLE` statement, or after the table is created with the `ALTER TABLE` statement.

are used to specify rules for the data in a table.This ensures the accuracy and reliability of the data in the table. If there is any violation between the constraint and the data action, the action is aborted.

```
CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    column3 datatype constraint,
    ....
);
```

Constraints can be column level or table level. 

Common constraints:

- `NOT NULL` - Ensures that a column cannot have a NULL value
- `UNIQUE` - Ensures that all values in a column are different
- `PRIMARY KEY` - A combination of a `NOT NULL` and `UNIQUE`. Uniquely identifies each row in a table
- `FOREIGN KEY` - Prevents actions that would destroy links between tables
- `CHECK` - Ensures that the values in a column satisfies a specific condition
- `DEFAULT` - Sets a default value for a column if no value is specified
- `CREATE INDEX` - Used to create and retrieve data from the database very quickly

## SQL NOT NULL

 enforces a column to NOT accept NULL values.

```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255) NOT NULL,
    Age int
);
```

```sql
ALTER TABLE Persons
MODIFY Age int NOT NULL;
```

## SQL UNIQUE

ensures that all values in a column are different.

Both the `UNIQUE` and `PRIMARY KEY` constraints provide a guarantee for uniqueness for a column or set of columns.

A `PRIMARY KEY` constraint automatically has a `UNIQUE` constraint. You can have many `UNIQUE` constraints per table, but only one `PRIMARY KEY` constraint per table.

MySQL-Example: [Different in otherDBs](https://www.w3schools.com/sql/sql_unique.asp)

```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    UNIQUE (ID)
);
```

multiple (MySQL)

```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CONSTRAINT UC_Person UNIQUE (ID,LastName)
);
```

```sql
ALTER TABLE Persons
ADD UNIQUE (ID);
```

```sql
ALTER TABLE Persons
ADD CONSTRAINT UC_Person UNIQUE (ID,LastName);
```

#### DROP a UNIQUE Constraint (MySQL)

```sql
ALTER TABLE Persons
DROP INDEX UC_Person;
```

## MySQL PRIMARY KEY

uniquely identifies each record in a table. must contain UNIQUE values, and cannot contain NULL values.

A table can have only ONE primary key; and in the table, this primary key can consist of single or multiple columns (fields).

```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (ID)
);
```

```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CONSTRAINT PK_Person PRIMARY KEY (ID,LastName)
);
```

**Note:** In the example above there is only ONE `PRIMARY KEY` (PK_Person). However, the VALUE of the primary key is made up of TWO COLUMNS (ID + LastName).



```sql
ALTER TABLE Persons
ADD PRIMARY KEY (ID);
```

allow naming of a `PRIMARY KEY` constraint, and for defining a `PRIMARY KEY` constraint on multiple columns:

```sql
ALTER TABLE Persons
ADD CONSTRAINT PK_Person PRIMARY KEY (ID,LastName);	
```

>  If you use `ALTER TABLE` to add a primary key, the primary key column(s) must have been declared to not contain NULL values 



## DROP a PRIMARY KEY Constraint

```sql
ALTER TABLE Persons
DROP PRIMARY KEY;
```

------

## MySQL FOREIGN KEY

used to prevent actions that would destroy links between tables

A `FOREIGN KEY` is a field (or collection of fields) in one table, that refers to the `PRIMARY KEY` in another table.

The table with the foreign key is called the child table, and the table with the primary key is called the referenced or parent table.

The `FOREIGN KEY` constraint prevents invalid data from being inserted into the foreign key column, because it has to be one of the values contained in the parent table.

```sql
CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);
```

To allow naming of a `FOREIGN KEY` constraint, and for defining a `FOREIGN KEY` constraint on multiple columns, use the following SQL syntax:

```sql
CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    CONSTRAINT FK_PersonOrder FOREIGN KEY (PersonID)
    REFERENCES Persons(PersonID)
);
```



```sql
ALTER TABLE Orders
ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);
```

```sql
ALTER TABLE Orders
ADD CONSTRAINT FK_PersonOrder
FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);
```

## DROP a FOREIGN KEY Constraint

```sql
ALTER TABLE Orders
DROP FOREIGN KEY FK_PersonOrder;
```

## SQL CHECK

to limit the value range that can be placed in a column

```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CHECK (Age>=18)
);
```

To allow naming of a `CHECK` constraint, and for defining a `CHECK` constraint on multiple columns, use the following SQL syntax:

```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255),
    CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')
);
```



```sql
ALTER TABLE Persons
ADD CHECK (Age>=18);
```

```sql
ALTER TABLE Persons
ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND City='Sandnes');
```



## DROP a CHECK Constraint

```sql
ALTER TABLE Persons
DROP CHECK CHK_PersonAge;
```

## MySQL DEFAULT

to set a default value for a column.

```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255) DEFAULT 'Sandnes'
);
```

The `DEFAULT` constraint can also be used to insert system values, by using functions like `CURRENT_DATE()`:

```sql
CREATE TABLE Orders (
    ID int NOT NULL,
    OrderNumber int NOT NULL,
    OrderDate date DEFAULT CURRENT_DATE()
);
```

> or use `CURRENT_TIMESTAMP` ??

```sql
ALTER TABLE Persons
ALTER City SET DEFAULT 'Sandnes';
```

## DROP a DEFAULT

```sql
ALTER TABLE Persons
ALTER City DROP DEFAULT;
```

## SQL CREATE INDEX

to create indexes in tables

Indexes are used to retrieve data from the database more quickly than otherwise. The users cannot see the indexes, they are just used to speed up searches/queries.

> **Note:** Updating a table with indexes takes more time than updating a table without (because the indexes also need an update). So, only create indexes on columns that will be frequently searched against.

Duplicate values are allowed:

```sql
CREATE INDEX index_name
ON table_name (column1, column2, ...);
```

Duplicate values are not allowed:

```sql
CREATE UNIQUE INDEX index_name
ON table_name (column1, column2, ...);
```

> **Note:** The syntax for creating indexes varies among different databases. Therefore: Check the syntax for creating indexes in your database

```sql
CREATE INDEX idx_lastname
ON Persons (LastName);
```

combination of columns

```sql
CREATE INDEX idx_pname
ON Persons (LastName, FirstName);
```

### DROP INDEX

```sql
ALTER TABLE table_name
DROP INDEX index_name;
```

## SQL AUTO INCREMENT

allows a unique number to be generated automatically when a new record is inserted into a table.

[Syntax for different DBs](https://www.w3schools.com/sql/sql_autoincrement.asp)

Often this is the primary key field

```sql
CREATE TABLE Persons (
    Personid int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (Personid)
);
```

```sql
ALTER TABLE Persons AUTO_INCREMENT=100;
```

## MySQL Dates

> The most difficult part when working with dates is to be sure that the format of the date you are trying to insert, matches the format of the date column in the database.

https://www.w3schools.com/sql/sql_dates.asp

MySQL comes with the following data types for storing a date or a date/time value in the database:

- `DATE` - format YYYY-MM-DD
- `DATETIME` - format: YYYY-MM-DD HH:MI:SS
- `TIMESTAMP` - format: YYYY-MM-DD HH:MI:SS
- `YEAR` - format YYYY or YY

> To keep your queries simple and easy to maintain, do not use time-components in your dates, unless you have to!

## SQL CREATE VIEW

SQL, a view is a virtual table based on the result-set of an SQL statement.

```sql
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

>  A view always shows up-to-date data! The database engine recreates the view, every time a user queries it.

```slq
CREATE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName
FROM Customers
WHERE Country = 'Brazil';
```

```
SELECT * FROM [Brazil Customers];
```

--

```
CREATE VIEW [Products Above Average Price] AS
SELECT ProductName, Price
FROM Products
WHERE Price > (SELECT AVG(Price) FROM Products);
```

## MySQL Updating a View

A view can be updated with the `CREATE OR REPLACE VIEW` statement.

```
CREATE OR REPLACE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```



```sql
CREATE OR REPLACE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName, City
FROM Customers
WHERE Country = 'Brazil';
```



## MySQL Dropping a View

```
DROP VIEW view_name;
```

```
DROP VIEW [Brazil Customers];
```


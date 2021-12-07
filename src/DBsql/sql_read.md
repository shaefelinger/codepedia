# SQL Read

## Overview

## SELECT

is used every time you want to query data from a database

```sql
SELECT name, age FROM people;
```

Semicolon at the End!

```sql
SELECT name, age 
FROM people;
```

```sql
SELECT * FROM people;
# all
```

```sql
SELECT * 
FROM people
WHERE role = "Teacher";
```

```sql
SELECT * 
FROM people
WHERE id = 2;
```

https://www.w3schools.com/sql/sql_select.asp

#### Specify the Colums to be shown

```sql
SELECT * FROM products 
```

```sql
SELECT name, price FROM products 
```

## WHERE

https://www.w3schools.com/sql/sql_where.asp

Specify the rows to be shown

Restrict our query results using the `WHERE` 

- `WHERE` clause filters the result set to only include rows where the following *condition* is true.

```sql
SELECT * FROM products WHERE id=1	
```

### Operators - WHERE

The following operators can be used in the WHERE clause:

| Operator | Description                                                  | Example                                                      |
| :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| =        | Equal                                                        | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_equal_to) |
| >        | Greater than                                                 | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_greater_than) |
| <        | Less than                                                    | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_less_than) |
| >=       | Greater than or equal                                        | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_greater_than2) |
| <=       | Less than or equal                                           | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_less_than2) |
| <>       | Not equal. **Note:** In some versions of SQL this operator may be written as != | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_not_equal_to) |
| BETWEEN  | Between a certain range                                      | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_between) |
| LIKE     | Search for a pattern                                         | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_like) |
| IN       | To specify multiple possible values for a column             | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_in) |

------

`BETWEEN`:  is inclusive

`%` - Wildcard

`_` - Wildcard

`LIMIT` is called  `TOP` in other engines

`LIKE` instead of `===`



### Like

when you want to compare similar values.

- `LIKE` is a special operator used with the `WHERE` clause to search for a specific pattern in a column.

```sql
SELECT *
FROM movies
WHERE name LIKE 'Se_en';
```

`%` is a wildcard character that matches zero or more missing letters in the pattern. For example:

```
SELECT *
FROM movies
WHERE name LIKE '%man%';
```

### Is Null

More often than not, the data you encounter will have missing values.

Unknown values are indicated by `NULL`.

It is not possible to test for `NULL` values with comparison operators, such as `=` and `!=`.

Instead, we will have to use these operators:

- `IS NULL`
- `IS NOT NULL`

### Between

used in a `WHERE` clause to filter the result set within a certain *range*. It accepts two values that are either numbers, text or dates.

```sql
SELECT *
FROM movies
WHERE year BETWEEN 1990 AND 1999;
```



```sql
SELECT *
FROM movies
WHERE name BETWEEN 'A' AND 'J';
```

In this statement, `BETWEEN` filters the result set to only include movies with `name`s that begin with the letter ‘A’ up to, *but not including* ones that begin with ‘J’.

However, if a movie has a name of simply ‘J’, it would actually match. This is because `BETWEEN` goes *up to* the second value — up to ‘J’. 



### And

to *combine multiple conditions* in a `WHERE` clause 

```sql
SELECT *
FROM movies
WHERE year > 2014
   AND genre = 'action';
```



### Or

`OR` operator can also be used to combine multiple conditions in `WHERE`,

```sql
SELECT *
FROM movies
WHERE year > 2014
   OR genre = 'action';
```





------



### Show All Rows of a Table

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

## Queries: Show Specific Rows

##### `WHERE`

filter - always before eg `GROUP`

##### `HAVING`

like `WHERE`, but after `GROUP`

------

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

### `AS`

`AS` is a keyword in SQL that allows you to *rename* a column or table using an alias.   The new name can be anything you want as long as you put it inside of single quotes.

```sql
SELECT name AS 'Titles'
FROM movies;
```

- Although it’s not always necessary, it’s best practice to surround your aliases with single quotes.
- the columns are not being renamed in the table. The aliases only appear in the result.



------



## Sorting the Results

### Order By

to list the data in our result set in a particular order.

```sql
SELECT *
FROM movies
ORDER BY name;
```

```sql
SELECT *
FROM movies
WHERE imdb_rating > 8
ORDER BY year DESC;
```

The column that we `ORDER BY` doesn’t even have to be one of the columns that we’re displaying.

Note: `ORDER BY` always goes after `WHERE` (if `WHERE` is present).

##### `ORDER BY` 

always at the End (default: ASCending)

Multiple Conditions:

```sql
ORDER BY city, name;
```

```sql
ORDER BY city ASC, name DESC;ORDER BY city, name;
```

------

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

### Ordering data by multiple columns

```sql
SELECT *
  FROM tutorial.billboard_top_100_year_end
  WHERE year_rank <= 3
 ORDER BY year DESC, year_rank
```

-  columns in the `ORDER BY` clause must be separated by commas. 
-  the `DESC` operator is only applied to the column that precedes it. 

you can make your life a little easier by substituting numbers for column names in the `ORDER BY` clause. The numbers will correspond to the order in which you list columns in the `SELECT` clause (*not supported by every flavor of SQL*)

```sql
SELECT *
  FROM tutorial.billboard_top_100_year_end
 WHERE year_rank <= 3
 ORDER BY 2, 1 DESC
```

When using `ORDER BY` with a row limitm the ordering clause is executed first. This means that the results are ordered **before** limiting to only a few rows

------

## SQL DISTINCT for viewing unique values

If you include two (or more) columns in a `SELECT DISTINCT` clause, your results will contain all of the unique pairs of those two columns:

```
SELECT DISTINCT year, month
  FROM tutorial.aapl_historical_stock_price
```

> *Note: You only need to include* `DISTINCT` *once in your* `SELECT` *clause—you do not need to add it for each column name.*

> `DISTINCT` can be particularly helpful when exploring a new data set.

### DISTINCT in aggregations

```sql
SELECT COUNT(DISTINCT month) AS unique_months
  FROM tutorial.aapl_historical_stock_price
```

notice that `DISTINCT` goes inside the [aggregate function](https://mode.com/sql-tutorial/sql-aggregate-functions) rather than at the beginning of the `SELECT` clause.

> using `DISTINCT`, particularly in aggregations, can slow your queries down quite a bit.

```sql
SELECT COUNT(DISTINCT year) AS years_count,
       COUNT(DISTINCT month) AS months_count
  FROM tutorial.aapl_historical_stock_price
```



### Distinct

 is used to return unique values in the output. It filters out all duplicate values in the specified column(s).

For instance,

```
SELECT tools 
FROM inventory;
```

might produce:

| tools  |
| ------ |
| Hammer |
| Nails  |
| Nails  |
| Nails  |



By adding `DISTINCT` before the column name,

```
SELECT DISTINCT tools 
FROM inventory;
```

the result would now be:

| tools  |
| ------ |
| Hammer |
| Nails  |

------

### Limit

most SQL tables contain hundreds of thousands of records. In those situations, it becomes important to cap the number of rows in the result.

```sql
SELECT *
FROM movies
LIMIT 10;
```

saves space on our screen and makes our queries run faster.

`LIMIT` always goes at the very end of the query. Also, it is not supported in all SQL databases.



------


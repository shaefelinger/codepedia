# SQL Aggregate Functions

SQL is excellent at aggregating data the way you might in a [pivot table](http://en.wikipedia.org/wiki/Pivot_table) in Excel.

The functions themselves are the same ones you will find in Excel or any other analytics program

- [`COUNT`](https://mode.com/sql-tutorial/sql-count) counts how many rows are in a particular column.
- [`SUM`](https://mode.com/sql-tutorial/sql-sum) adds together all the values in a particular column.
- [`MIN`](https://mode.com/sql-tutorial/sql-min-max) and [`MAX`](https://mode.com/sql-tutorial/sql-min-max) return the lowest and highest values in a particular column, respectively.
- [`AVG`](https://mode.com/sql-tutorial/sql-avg) calculates the average of a group of selected values.

 arithmetic operators only perform operations across rows. Aggregate functions are used to perform operations across entire columns (which could include millions of rows of data or more).



## Overview

- `COUNT()`: count the number of rows
- `SUM()`: the sum of the values in a column
- `MAX()`/`MIN()`: the largest/smallest value
- `AVG()`: the average of the values in a column
- `ROUND()`: round the values in the column

*Aggregate functions* combine multiple rows together to form a single value of more meaningful information.

- `GROUP BY` is a clause used with aggregate functions to combine data from one or more columns.
- `HAVING` limit the results of a query based on an aggregate property.

------

## Counting all rows

`COUNT()` is a function that takes the name of a column as an argument and counts the number of non-empty values in that column.

```sql
SELECT COUNT(*)
FROM table_name;		
```



`COUNT` is a [SQL aggregate function](https://mode.com/sql-tutorial/sql-aggregate-functions) for counting the number of rows in a particular column.

```sql
SELECT COUNT(*)
  FROM tutorial.aapl_historical_stock_price
```

> *Note: Typing* `COUNT(1)` *has the same effect as* `COUNT(*)`*. Which one you use is a matter of personal preference.*

The following code will provide a count of all of rows in which the `high` column **is not null**.

```sql
SELECT COUNT(high)
  FROM tutorial.aapl_historical_stock_price
```

We recommend naming your columns so that they make a little more sense to anyone else who views your work. 

```sql
SELECT COUNT(date) AS count_of_date
  FROM tutorial.aapl_historical_stock_price
```

For spaces, you will need to use double quotes.

```sql
SELECT COUNT(date) AS "Count Of Date"
  FROM tutorial.aapl_historical_stock_price
```

> *Note: This is really the only place in which you'll ever want to use double quotes in SQL. Single quotes for everything else.*





------

## SQL SUM

`SUM()` is a function that takes the name of a column as an argument and returns the sum of all the values in that column.

```sql
SELECT SUM(downloads)
FROM fake_apps;
```





`SUM` is a [SQL aggregate function](https://mode.com/sql-tutorial/sql-aggregate-functions). that totals the values in a given column. Unlike [`COUNT`](https://mode.com/sql-tutorial/sql-count), you can only use `SUM` on columns containing numerical values.

> remember: **aggregators only aggregate vertically**. If you want to perform a calculation across rows, you would do this with [simple arithmetic](https://mode.com/sql-tutorial/sql-operators#arithmetic-in-sql).

> `SUM` treats nulls as 0

------

## SQL MIN and MAX

MAX() and MIN() functions return the highest and lowest values in a column, respectively

```sql
SELECT MAX(downloads)
FROM fake_apps;
```

`MAX()` takes the name of a column as an argument and returns the largest value in that column. 

-  can be used on non-numerical columns. 
-  Depending on the column type, `MIN` will return the lowest number, earliest date, or non-numerical value as close alphabetically to "A" as possible. `MAX` does the opposite

```sql
SELECT MIN(volume) AS min_volume,
       MAX(volume) AS max_volume
  FROM tutorial.aapl_historical_stock_price
```

also:

```sql
SELECT
  MAX(close - open)
FROM
  tutorial.aapl_historical_stock_price
```

------

## SQL AVG

```sql
SELECT AVG(price)
FROM fake_apps;
```

`AVG` is a [SQL aggregate function](https://mode.com/sql-tutorial/sql-aggregate-functions) that calculates the average of a selected group of value

useful, but has some limitations:

- can only be used on numerical columns
- ignores nulls completely

> There are some cases in which you'll want to treat null values as 0. For these cases, you'll want to write a statement that changes the nulls to 0

------

## Round

`ROUND()` function takes two arguments inside the parenthesis:

1. a column name
2. an integer

rounds the values in the column to the number of decimal places specified by the integer.

```sql
SELECT name, ROUND(price, 0)
FROM fake_apps;
```

```sql
SELECT ROUND(AVG(price),2)
FROM fake_apps;
```







------

## SQL GROUP BY



to calculate an aggregate for data with certain characteristics.

```sql
SELECT year,
   AVG(imdb_rating)
FROM movies
GROUP BY year
ORDER BY year;
```



the same as 

```sql
SELECT AVG(imdb_rating)
FROM movies
WHERE year = 1999;
 
SELECT AVG(imdb_rating)
FROM movies
WHERE year = 2000;
 
SELECT AVG(imdb_rating)
FROM movies
WHERE year = 2001;
```

`GROUP BY` is a clause in SQL that is used with aggregate functions. It is used in collaboration with the `SELECT` statement to arrange identical data into *groups*.

The `GROUP BY` statement comes after any `WHERE` statements, but before `ORDER BY` or `LIMIT`.

```sql
SELECT price, COUNT (*)
FROM fake_apps
GROUP BY price;
```

```sql
SELECT category, SUM (downloads)
FROM fake_apps
GROUP BY category;
```



[SQL aggregate function](https://mode.com/sql-tutorial/sql-aggregate-functions) like `COUNT`, `AVG`, and `SUM`  aggregate across the entire table.

if you want to aggregate only part of a table:

 `GROUP BY` allows you to separate data into groups, which can be aggregated independently of one another

```sql
SELECT year,
       COUNT(*) AS count
  FROM tutorial.aapl_historical_stock_price
 GROUP BY year
```

You can group by multiple columns, but you have to separate column names with commas—just as with [`ORDER BY`](https://mode.com/sql-tutorial/sql-order-by)):

```sql
SELECT year,
       month,
       COUNT(*) AS count
  FROM tutorial.aapl_historical_stock_price
 GROUP BY year, month	
```

### GROUP BY column numbers

#### column reference(s) 

SQL lets us use column reference(s) in our `GROUP BY` that will make our lives easier.

- `1` is the first column selected
- `2` is the second column selected
- `3` is the third column selected

and so on.

```sql
SELECT ROUND(imdb_rating),
   COUNT(name)
FROM movies
GROUP BY ROUND(imdb_rating)
ORDER BY ROUND(imdb_rating);
```

this is the same:

```sql
SELECT ROUND(imdb_rating),
   COUNT(name)
FROM movies
GROUP BY 1
ORDER BY 1;
```

--

```
SELECT category, 
   price,
   AVG(downloads)
FROM fake_apps
GROUP BY category, price;
```

or:

```
SELECT category, 
   price,
   AVG(downloads)
FROM fake_apps
GROUP BY 1, 2;
```



As with `ORDER BY`, you can substitute numbers for column names in the `GROUP BY` clause.

> (generally recommended to do this only when you're grouping many columns, or if something else is causing the text in the `GROUP BY` clause to be excessively long:)

```sql
SELECT year,
       month,
       COUNT(*) AS count
  FROM tutorial.aapl_historical_stock_price
 GROUP BY 1, 2
```

order of column names in your `GROUP BY` clause doesn't matter



```sql
SELECT
  year,
  AVG(OPEN - close) AS price_change
FROM
  tutorial.aapl_historical_stock_price
GROUP BY
  year
ORDER BY
  year
```

### GROUP BY with LIMIT

SQL evaluates the aggregations before the `LIMIT` clause.

------

## SQL HAVING

`HAVING` is very similar to `WHERE`. But  to *filter groups*

```sql
SELECT year,
   genre,
   COUNT(name)
FROM movies
GROUP BY 1, 2
HAVING COUNT(name) > 10;
```

`HAVING` statement always comes after `GROUP BY`, but before `ORDER BY` and `LIMIT`.

```sql
SELECT price, 
   ROUND(AVG(downloads)),
   COUNT(*)
FROM fake_apps
GROUP BY price
HAVING COUNT(*) > 10;
```





The `WHERE` clause won't work for this because it doesn't allow you to filter on aggregate columns—that's where the `HAVING` clause comes in:

```sql
SELECT year,
       month,
       MAX(high) AS month_high
  FROM tutorial.aapl_historical_stock_price
 GROUP BY year, month
HAVING MAX(high) > 400
 ORDER BY year, month
```

> *Note:* `HAVING` *is the "clean" way to filter a query that has been aggregated, but this is also commonly done using a subquery*

------


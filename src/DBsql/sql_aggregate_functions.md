# SQL Aggregate Functions

SQL is excellent at aggregating data the way you might in a [pivot table](http://en.wikipedia.org/wiki/Pivot_table) in Excel.

The functions themselves are the same ones you will find in Excel or any other analytics program

- [`COUNT`](https://mode.com/sql-tutorial/sql-count) counts how many rows are in a particular column.
- [`SUM`](https://mode.com/sql-tutorial/sql-sum) adds together all the values in a particular column.
- [`MIN`](https://mode.com/sql-tutorial/sql-min-max) and [`MAX`](https://mode.com/sql-tutorial/sql-min-max) return the lowest and highest values in a particular column, respectively.
- [`AVG`](https://mode.com/sql-tutorial/sql-avg) calculates the average of a group of selected values.

 arithmetic operators only perform operations across rows. Aggregate functions are used to perform operations across entire columns (which could include millions of rows of data or more).

## Counting all rows

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

## SQL SUM

`SUM` is a [SQL aggregate function](https://mode.com/sql-tutorial/sql-aggregate-functions). that totals the values in a given column. Unlike [`COUNT`](https://mode.com/sql-tutorial/sql-count), you can only use `SUM` on columns containing numerical values.

> remember: **aggregators only aggregate vertically**. If you want to perform a calculation across rows, you would do this with [simple arithmetic](https://mode.com/sql-tutorial/sql-operators#arithmetic-in-sql).

> `SUM` treats nulls as 0

## SQL MIN and MAX

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

## SQL AVG

`AVG` is a [SQL aggregate function](https://mode.com/sql-tutorial/sql-aggregate-functions) that calculates the average of a selected group of value

useful, but has some limitations:

- can only be used on numerical columns
- ignores nulls completely

> There are some cases in which you'll want to treat null values as 0. For these cases, you'll want to write a statement that changes the nulls to 0

## SQL GROUP BY

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

## SQL HAVING

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


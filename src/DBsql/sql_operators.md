# SQL Operators

## SQL Arithmetic Operators

You can only perform arithmetic across columns on values in a given row.  To add values across multiple rows, you'll need to use [aggregate functions](https://mode.com/sql-tutorial/sql-aggregate-functions),

You can use parentheses to manage the [order of operations](http://www.mathgoodies.com/lessons/vol7/order_operations.html). 

```sql
SELECT year,
       month,
       west,
       south,
       (west + south)/2 AS south_west_avg
  FROM tutorial.us_housing_units
```



| Operator | Description | Example                                                      |
| :------- | :---------- | :----------------------------------------------------------- |
| +        | Add         | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_add) |
| -        | Subtract    | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_subtract) |
| *        | Multiply    | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_multiply) |
| /        | Divide      | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_divide) |
| %        | Modulo      | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_modulo) |

------

## SQL Bitwise Operators

| Operator | Description          |
| :------- | :------------------- |
| &        | Bitwise AND          |
| \|       | Bitwise OR           |
| ^        | Bitwise exclusive OR |

## SQL Comparison Operators

| Operator | Description              |
| :------- | :----------------------- |
| =        | Equal to                 |
| >        | Greater than             |
| <        | Less than                |
| >=       | Greater than or equal to |
| <=       | Less than or equal to    |
| <>       | Not equal to             |

#### Comparison operators on non-numerical data

Rules when using these operators

- If you're using an operator with values that are non-numeric, you need to put the value in single quotes: `'value'`. 
  **Note:** SQL uses single quotes to reference column values.

-  `>`, `<`, etc.  filter based on alphabetical order

  ```sql
  SELECT *
    FROM tutorial.us_housing_units
   WHERE month_name > 'J'
  ```

  > selecting `month_name > 'J'` will yield only rows in which `month_name` starts with "j" or later in the alphabet. 
  >
  > SQL considers 'Ja' to be greater than 'J' because it has an extra letter. It's worth noting that most dictionaries would list 'Ja' after 'J' as well.

## SQL Compound Operators

| Operator | Description              |
| :------- | :----------------------- |
| +=       | Add equals               |
| -=       | Subtract equals          |
| *=       | Multiply equals          |
| /=       | Divide equals            |
| %=       | Modulo equals            |
| &=       | Bitwise AND equals       |
| ^-=      | Bitwise exclusive equals |
| \|*=     | Bitwise OR equals        |

## SQL Logical Operators

Aallow you to use multiple comparison operators in one query.

| Operator                                                | Description                                                  | Example                                                      |
| ------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `ALL`                                                   | TRUE if all of the subquery values meet the condition        | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_all&ss=-1) |
| [`AND`](https://mode.com/sql-tutorial/sql-and-operator) | TRUE if all the conditions separated by AND is TRUE          | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_and) |
| `ANY`                                                   | TRUE if any of the subquery values meet the condition        | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_any&ss=-1) |
| [`BETWEEN`](https://mode.com/sql-tutorial/sql-between)  | TRUE if the operand is within the range of comparisons. Has to be paired with the [`AND`](https://mode.com/sql-tutorial/sql-logical-operators) operator. | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_between) |
| `EXISTS`                                                | TRUE if the subquery returns one or more records             | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_exists) |
| [`IN`](https://mode.com/sql-tutorial/sql-in-operator)   | TRUE if the operand is equal to one of a list of expressions | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_in) |
| [`LIKE`](https://mode.com/sql-tutorial/sql-like)        | TRUE if the operand matches a pattern                        | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_like) |
| [`NOT`](https://mode.com/sql-tutorial/sql-not-operator) | Displays a record if the condition(s) is NOT TRUE            | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_not) |
| [`OR`](https://mode.com/sql-tutorial/sql-or-operator)   | TRUE if any of the conditions separated by OR is TRUE        | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_or) |
| `SOME`                                                  | TRUE if any of the subquery values meet the condition        | [Try it](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_some&ss=-1) |
| [`IS NULL`](https://mode.com/sql-tutorial/sql-is-null)  | to select rows that contain no data in a given column.       |                                                              |

### The SQL LIKE operator

```sql
SELECT *
  FROM tutorial.billboard_top_100_year_end
 WHERE "group" LIKE 'Snoop%'
```

### The SQL IN operator

Allows you to specify a list of values that you'd like to include in the results. 

### SQL BETWEEN operator

`BETWEEN` is a [logical operator](https://mode.com/sql-tutorial/sql-logical-operators) in SQL that allows you to select only rows that are within a specific range. It has to be paired with the [`AND`](https://mode.com/sql-tutorial/sql-logical-operators) operator,

```sql
SELECT *
  FROM tutorial.billboard_top_100_year_end
 WHERE year_rank BETWEEN 5 AND 10
```

is the same

```sql
SELECT *
  FROM tutorial.billboard_top_100_year_end
 WHERE year_rank >= 5 AND year_rank <= 10
```

### IS NULL operator

allows you to exclude rows with missing data from your results.

You can select rows that contain no data in a given column by using `IS NULL`.

`WHERE artist = NULL` will **not** work—you can't perform arithmetic on null values.

### SQL AND operator

```sql
SELECT *
  FROM tutorial.billboard_top_100_year_end
 WHERE year = 2012 AND year_rank <= 10
```

```sql
SELECT *
  FROM tutorial.billboard_top_100_year_end
 WHERE year = 2012
   AND year_rank <= 10
   AND "group" ILIKE '%feat%'
```

### SQL OR 

 to select rows that satisfy either of two conditions.

```sql
SELECT *
  FROM tutorial.billboard_top_100_year_end
 WHERE year_rank = 5 OR artist = 'Gotye'
```

```sql
SELECT *
  FROM tutorial.billboard_top_100_year_end
 WHERE year = 2013
   AND ("group" ILIKE '%macklemore%' OR "group" ILIKE '%timberlake%')
```

### SQL NOT

`NOT` is a [logical operator](https://mode.com/sql-tutorial/sql-logical-operators) that you can put before any conditional statement to select rows for which that statement is false.

```sql
SELECT *
  FROM tutorial.billboard_top_100_year_end
 WHERE year = 2013
   AND year_rank NOT BETWEEN 2 AND 3
```

`NOT` is commonly used with `LIKE`.

`NOT` is also frequently used to identify non-null rows

```sql
SELECT *
  FROM tutorial.billboard_top_100_year_end
 WHERE year = 2013
   AND artist IS NOT NULL
```


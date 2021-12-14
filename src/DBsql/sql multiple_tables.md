# SQL Multiple Tables

we can split our data

[Codecademy Scheatsheet](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path/tracks/fscp-sql-for-back-end-development/modules/fscp-working-with-multiple-sql-tables/cheatsheet)

**Combining Tables with SQL**

[Codecademy Reference Sheet](https://content.codecademy.com/courses/learn-sql/SQL_Reference_sheet_v3.pdf)

------

of course you can use joins…

------

## Union

 to stack one dataset on top of the other. 

```sql
SELECT *
FROM table1
UNION
SELECT *
FROM table2;
```


SQL has strict rules for appending data:

- Tables must have the same number of columns.
- The columns must have the same data types in the same order as the first table.

> duplicate rows will be excluded.

Besides stacking one table on top of another, we can also use `UNION` to quickly make a “mini” dataset:

```
SELECT '2017-01-01' AS 'month'
UNION
SELECT '2017-02-01' AS 'month'
```

will produce:

| month      |
| ---------- |
| 2017-01-01 |
| 2017-02-01 |

------

## With

eg. to combine two tables, when one of the tables is the result of another calculation.

```sql
WITH previous_results AS (
   SELECT ...
   ...
   ...
   ...
)
SELECT *
FROM previous_results
JOIN customers
  ON _____ = _____;
```

- The `WITH` statement allows us to perform a separate query (such as aggregating customer’s subscriptions)
- `previous_results` is the alias that we will use to reference any columns from the query inside of the `WITH` clause
- We can then go on to do whatever we want with this temporary table (such as join the temporary table with another table)

Essentially, we are putting a whole first query inside the parentheses `()` and giving it a name. After that, we can use this name as if it’s a table and write a new query *using* the first query.



```sql
WITH previous_query AS (
  SELECT customer_id,
   COUNT(subscription_id) AS 'subscriptions'
  FROM orders
  GROUP BY customer_id
)
SELECT customers.customer_name, previous_query.subscriptions
FROM previous_query
JOIN customers
  ON previous_query.customer_id = customers.customer_id;
```

> Do *not* include `;` inside of the `()` of your `WITH` statement.

> you can use `WITH` for more than one nested query by listing each query using commas after the `WITH`.
>
> ```
> WITH
> query1 AS (SELECT column1 FROM table1 WHERE condition1),
> query2 AS (SELECT column2 FROM table2 WHERE condition2)
> …
> ```

## Review

- `JOIN` will combine rows from different tables if the join condition is true.
- `LEFT JOIN` will return every row in the *left* table, and if the join condition is not met, `NULL` values are used to fill in the columns from the *right* table.
- *Primary key* is a column that serves a unique identifier for the rows in the table.
- *Foreign key* is a column that contains the primary key to another table.
- `CROSS JOIN` lets us combine all rows of one table with all rows of another table.
- `UNION` stacks one dataset on top of another.
- `WITH` allows us to define one or more temporary tables that can be used in the final query.

Practice Projects:

https://discuss.codecademy.com/t/data-science-independent-project-2-explore-a-sample-database/419945

https://discuss.codecademy.com/t/data-science-independent-project-3-education-census-data/419947

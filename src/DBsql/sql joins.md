# SQL Joins

## `JOIN`

Join tables together temporarily - pull data from different tables



Joins follow this pattern:

```sql
SELECT <column_names>						# Can be * or Table.Column
FROM <left_table>								
JOIN <right_table> 
ON <left_table.column> = <right_table.column>; #Columns to join on
```

```sql
SELECT Courses.name, Teachers.name FROM Courses
-> JOIN Teachers ON Courses.teacher = Teachers.id;
```



```sql
SELECT *
FROM orders
JOIN customers
  ON orders.customer_id = customers.customer_id;
```

- first line selects all columns from our combined table.
- second line specifies the first table that we want to look in, `orders`
- third line uses `JOIN` to say that we want to combine information from `orders` with `customers`.
- Fourth line tells us how to combine the two tables. Match `orders` table’s `customer_id` column with `customers` table’s `customer_id` column.

#### Syntax

use the syntax `table_name.column_name` to be sure that our requests for columns are unambiguous

```sql
SELECT orders.order_id,
   customers.customer_name
FROM orders
JOIN customers
  ON orders.customer_id = customers.customer_id;
```









The real power of SQL, however, comes from working with data from multiple tables at once

```sql
SELECT teams.conference AS conference,
       AVG(players.weight) AS average_weight
  FROM benn.college_football_players players
  JOIN benn.college_football_teams teams
    ON teams.school_name = players.school_name
 GROUP BY teams.conference
 ORDER BY AVG(players.weight) DESC
```

#### table alias

- When performing joins, it's easiest to give your table names aliases by adding a space after the table name and typing the intended name of the alias. 
- Once you've given a table an alias, you can refer to columns in that table in the `SELECT` clause using the alias name. 
- best practice here is to use all lowercase letters and underscores instead of spaces.





------

## Inner Join (most common)

When we perform a simple `JOIN` (often called an *inner join*) our result only includes rows that match our `ON` condition.

[https://www.w3schools.com/sql/sql_join_inner.asp](https://www.w3schools.com/sql/sql_join_inner.asp)

```sql
SELECT orders.oder_number, customers.name, customers.adsress
FROM orders
INNER JOIN customers
ON orders.customer_id = customers.id
```

-> joins the data from 2 seperate tables

------

[JoiningTables MariaDB](https://mariadb.com/kb/en/joining-tables-with-join-clauses/)

[Advanced Jouns - MariaDB](https://mariadb.com/kb/en/more-advanced-joins/)

In our example, we have a table “Courses” and a table “Teachers”. If we want to have each teacher’s name and the courses they teach, this works like this:

```
SELECT * FROM Teachers;
+----+----------------+--------------------------------+
| id | name           | email                          |
+----+----------------+--------------------------------+
|  1 | Teresa Holfeld | teresa@hamburgcodingschool.com |
|  2 | Helder Pereira | helder@hamburgcodingschool.com |
|  3 | Thomas Hedeler | thomas@hamburgcodingschool.com |
+----+----------------+--------------------------------+
```

```
SELECT * FROM Courses;
+----+----------------+-------+---------+
| id | name           | hours | teacher |
+----+----------------+-------+---------+
|  1 | Learn to Code  |			24|				 2|
|  2 | Git and GitHub |			 6|				 1|
|  3 | Databases 1    |			 6|				 2|
|  4 | Databases 2    |			 6|			   1|
|  5 | Vue.js         |    24 |       3 |
+----+----------------+-------+---------+
```

```
SELECT Courses.name, Teachers.name FROM Courses
-> JOIN Teachers ON Courses.teacher = Teachers.id;
+----------------+----------------+
| name           | name           |
+----------------+----------------+
| Learn to Code  | Helder Pereira |
| Git and GitHub | Teresa Holfeld |
| Databases 1		 | Teresa Holfeld |
| Databases 2		 | Helder Pereira |
| Vue.js				 | Thomas Hedeler |
+----------------+----------------+
```

------

## JOIN HCS

```sql
SELECT * 
FROM people
JOIN roles ON roles.id = people.role_id;
```

-> both must exist

```sql
SELECT * 
FROM people
LEFT JOIN roles ON roles.id = people.role_id;
```

-> show even if there is no match

`LEFT JOIN` -> is most common

> left/right - ist outer join (in other DBs). join - is inner join

w3schools -> explains joins very well



------

## Inner Joins, Outer Joins, and even more Joins

#### Inner Joins

If you want to join two tables, but you only want to see the lines that have a match on both tables, you use an **INNER JOIN**.

#### Outer Joins

If you want to see all values, also the ones that don’t have a match, use an **OUTER JOIN**.

#### Left Joins

If you want to see all values from the left table, but you don’t want to see the values from the right table that don’t have a match on the left table, use **LEFT JOIN**.



 if we want to combine two tables and keep some of the un-matched rows

A *left join* will keep all rows from the first table, regardless of whether there is a matching row in the second table.

```sql
SELECT *
FROM table1
LEFT JOIN table2
  ON table1.c2 = table2.c2;
```

1. The first line selects all columns from both tables.
2. The second line selects `table1` (the “left” table).
3. The third line performs a `LEFT JOIN` on `table2` (the “right” table).
4. The fourth line tells SQL how to perform the join (by looking for matching values in column `c2`).

#### Right Joins

If you want to see all values from the right table, but not the values from the left table that don’t have a match on the right table, use **RIGHT JOIN**.

------

## Primary Key vs Foreign Key

Primary keys have a few requirements:

- None of the values can be `NULL`.
- Each value must be unique
- A table can not have more than one primary key column.

When the primary key for one table appears in a different table, it is called a **foreign key**.

Generally, the primary key will just be called `id`. Foreign keys will have more descriptive names.

The most common types of joins will be joining a foreign key from one table with the primary key from another table. 

------

## Cross Join

to combine all rows of one table with all rows of another table.

```sql
SELECT shirts.shirt_color,
   pants.pants_color
FROM shirts
CROSS JOIN pants;
```

- The first two lines select the columns `shirt_color` and `pants_color`.
- The third line pulls data from the table `shirts`.
- The fourth line performs a `CROSS JOIN` with `pants`.

cross joins don’t require an `ON` statement.



```sql
SELECT premium_users.user_id,
  months.months,
  CASE
    WHEN (
      premium_users.purchase_date <= months.months
      )
      AND
      (
        premium_users.cancel_date >= months.months
        OR
        premium_users.cancel_date IS NULL
      )
    THEN 'active'
    ELSE 'not_active'
  END AS 'status'
FROM premium_users
CROSS JOIN months;
```

```sql
SELECT riders.first, riders.last, cars.model
FROM riders, cars
```


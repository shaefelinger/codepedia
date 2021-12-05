# SQL Conditional Statements

## SQL CASE statement

The `CASE` statement is SQL's way of handling if/then logic.

-  is followed by at least one pair of `WHEN` and `THEN` statements—SQL's equivalent of IF/THEN in Excel.
-  Every `CASE` statement must end with the `END` statement. 
-  The `ELSE` statement is optional

```sql
SELECT
  player_name,
  year,
  CASE
    WHEN year = 'SR' THEN 'yes'
    ELSE NULL
  END AS is_a_senior
FROM
  benn.college_football_players
```

### Adding multiple conditions to a CASE statement

You can also define a number of outcomes in a `CASE` statement by including as many `WHEN`/`THEN` statements as you'd like:

```sql
SELECT player_name,
       weight,
       CASE WHEN weight > 250 THEN 'over 250'
            WHEN weight > 200 THEN '201-250'
            WHEN weight > 175 THEN '176-200'
            ELSE '175 or under' END AS weight_group
  FROM benn.college_football_players
```

the `WHEN`/`THEN` statements will get evaluated in the order that they're written. 

it's really best practice to create statements that don't overlap. A better way to write the above would be:

```sql
SELECT player_name,
       weight,
       CASE WHEN weight > 250 THEN 'over 250'
            WHEN weight > 200 AND weight <= 250 THEN '201-250'
            WHEN weight > 175 AND weight <= 200 THEN '176-200'
            ELSE '175 or under' END AS weight_group
  FROM benn.college_football_players
```

You can also string together multiple conditional statements with `AND` and `OR` the same way you might in a `WHERE` clause:

```sql
SELECT player_name,
       CASE WHEN year = 'FR' AND position = 'WR' THEN 'frosh_wr'
            ELSE NULL END AS sample_case_statement
  FROM benn.college_football_players
```

### Review CASE basics:

1. The `CASE` statement always goes in the `SELECT` clause
2. `CASE` must include the following components: `WHEN`, `THEN`, and `END`. `ELSE` is an optional component.
3. You can make any conditional statement using any conditional operator (like [`WHERE`](https://mode.com/sql-tutorial/sql-where) ) between `WHEN` and `THEN`. This includes stringing together multiple conditional statements using `AND` and `OR`.
4. You can include multiple `WHEN` statements, as well as an `ELSE` statement to deal with any unaddressed conditions.



you can also access other columns:

```sql
SELECT
  *,
  CASE
    WHEN year IN ('SR', 'JR') THEN player_name
    ELSE 'depp'
  END AS is_senior
FROM
  benn.college_football_players
```

### Using CASE with aggregate functions

`CASE`'s slightly more complicated and substantially more useful functionality comes from pairing it with [aggregate functions](https://mode.com/sql-tutorial/sql-aggregate-functions). 

```sql
SELECT
  CASE
    WHEN year = 'FR' THEN 'FR'
    ELSE 'Not FR'
  END AS year_group,
  COUNT(1) AS count
FROM
  benn.college_football_players
GROUP BY
  CASE
    WHEN year = 'FR' THEN 'FR'
    ELSE 'Not FR'
  END
```



example2

```sql
SELECT
  CASE
    WHEN year IN ('FR', 'JR', 'SR') THEN year
    ELSE 'No Year Data'
  END AS year_group,
  COUNT(1) AS count
FROM
  benn.college_football_players
GROUP BY
  1
```

 you can use the column's alias in the `GROUP BY` clause like this:

```sql
SELECT CASE WHEN year = 'FR' THEN 'FR'
            WHEN year = 'JR' THEN 'JR'
            WHEN year = 'SR' THEN 'SR'
            ELSE 'No Year Data' END AS year_group,
            COUNT(1) AS count
  FROM benn.college_football_players
 GROUP BY year_group
```



example

```sql
SELECT
  CASE
    WHEN state IN ('CA', 'OR', 'WA') THEN 'West Coast'
    WHEN state = 'TX' THEN 'Texas'
    ELSE 'Other'
  END AS region,
  COUNT(*) AS players
FROM
  benn.college_football_players
WHERE
  weight > 300
GROUP BY
  region
```

example

```sql
SELECT
  CASE
    WHEN year IN ('FR', 'SO') THEN 'underclass'
    WHEN year IN ('JR', 'SR') THEN 'upperclass'
    ELSE NULL
  END AS class,
  SUM(weight)
FROM
  benn.college_football_players
WHERE
  state = 'CA'
GROUP BY
  class
```

### Using CASE inside of aggregate functions

you might want to show data horizontally. This is known as "pivoting" (like a [pivot table](https://en.wikipedia.org/wiki/Pivot_table) in Excel). 

```sql
SELECT COUNT(CASE WHEN year = 'FR' THEN 1 ELSE NULL END) AS fr_count,
       COUNT(CASE WHEN year = 'SO' THEN 1 ELSE NULL END) AS so_count,
       COUNT(CASE WHEN year = 'JR' THEN 1 ELSE NULL END) AS jr_count,
       COUNT(CASE WHEN year = 'SR' THEN 1 ELSE NULL END) AS sr_count
  FROM benn.college_football_players
```

```sql
SELECT
  state,
  count(*) AS total,
  COUNT(CASE WHEN year = 'FR' THEN 1 ELSE NULL END) AS fr_count,
  COUNT(CASE WHEN year = 'SO' THEN 1 ELSE NULL END) AS so_count,
  COUNT(CASE WHEN year = 'JR' THEN 1 ELSE NULL END) AS jr_count,
  COUNT(CASE WHEN year = 'SR' THEN 1 ELSE NULL END) AS sr_count
FROM
  benn.college_football_players
GROUP BY
  state
ORDER BY
  total DESC
```



### Case

allows us to create different outputs (usually in the `SELECT` statement). 

It is SQL’s way of handling [if-then](https://en.wikipedia.org/wiki/Conditional_(computer_programming)) logic.

```sql
SELECT name,
 CASE
  WHEN imdb_rating > 8 THEN 'Fantastic'
  WHEN imdb_rating > 6 THEN 'Poorly Received'
  ELSE 'Avoid at All Costs'
 END AS 'Review'
FROM movies;
```

- Each `WHEN` tests a condition and the following `THEN` gives us the string if the condition is true.
- The `ELSE` gives us the string if *all* the above conditions are false.
- The `CASE` statement must end with `END`.

we can rename the column to ‘Review’ using `AS`

- 

------


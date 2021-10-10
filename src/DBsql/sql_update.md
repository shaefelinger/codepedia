# SQL Update

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





```sql
UPDATE people SET age = 15, role = "Teacher"
WHERE id = 6;
```

be careful!! no UNDO!

Never do UPDATE without WHERE -› it is dangerous



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


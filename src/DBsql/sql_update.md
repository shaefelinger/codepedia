# SQL Update

## `UPDATE`

Update Certain Rows

> Never UPDATE without WHERE -› it is dangerous
>
> be careful!! no UNDO!

https://www.w3schools.com/sql/sql_update.asp

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

```sql
UPDATE products
SET price = 0.80
WHERE id=2
```

------

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

------

## `ALTER TABLE`

is used to add, delete, or modify columns in an existing table

https://www.w3schools.com/sql/sql_alter.asp

 [ALTER TABLE mariadb](https://mariadb.com/kb/en/alter-table/)



```sql
ALTER TABLE table_name
ADD column_name datatype;
```

```sql
ALTER TABLE products
ADD stock Int	
```





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


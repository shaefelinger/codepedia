# SQL Create

### `INSERT INTO` - Create a Data Entry

To insert a row into a table:

```
INSERT INTO Students(name, email) VALUES ('John Doe', 'john@doe.com');
```

------



### Create Multiple Data Entries

```sql
INSERT INTO Customers(name, age, address, salary) VALUES
    -> ('Teresa', 33, 'Borselstr. 7, 22765 Hamburg', 30000),
    -> ('John', 25, 'Hauptstr. 1, 22087 Hamburg', 45000),
    -> ('Max', 35, 'Bernstorffstr. 118, 22796 Hamburg', 50000);
```

------



```sql
INSERT INTO *table_name* (*column1*, *column2*, *column3*, ...)
VALUES (*value1*, *value2*, *value3*, ...);
```

not needed, when using all values:

```sql
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
```

```sql
INSERT INTO products
VALUES (1, "Pen", 1.20)
```


# SQL Constraints

## Constraints

add information about how a column can be used are invoked after specifying the data type for a column. They can be used to tell the database to reject inserted data that does not adhere to a certain restriction. 

```
CREATE TABLE celebs (
   id INTEGER PRIMARY KEY, 
   name TEXT UNIQUE,
   date_of_birth TEXT NOT NULL,
   date_of_death TEXT DEFAULT 'Not Applicable'
);
```

------

# POSTGRESQL CONSTRAINTS

*constraints* - to safeguard a database and maintain *data integrity*.

- Reject inserts or updates containing values that shouldn’t be inserted into a database table, which can help with preserving data integrity and quality.
- Raise an error when they’re violated, which can help with debugging applications that write to the DB.

### Set Data Type

https://www.postgresql.org/docs/10/datatype.html



PostgreSQL will try to interpret incoming data as the data type the column has been defined as. This process, called *type casting*, can have mixed results.

- If one tries to insert `1.5` into our table’s `hours_available` column, PostgreSQL will cast this value to `integer`, round the data, and insert it into the table as `2`.
- If one tries to insert `1.5` into the `email` column, PostgreSQL will insert this into the database by casting `1.5` to `'1.5'` even though `'1.5'` is not a valid email address.

### Nullability Constraints

In some cases, we might enter data into our database without including a value for every column in each row. 

 we can choose to reject inserts and updates that don’t include data for specific columns by adding a `NOT NULL` constraint on those columns.

SQL will raise an error alerting us that these rows violate the constraint and that our insert or update couldn’t be completed.

```sql
CREATE TABLE talks (
    id integer,
    title varchar NOT NULL,
    speaker_id integer NOT NULL,
    estimated_length integer,
    session_timeslot timestamp NOT NULL
);
```

### ALTER TABLE

we can use `ALTER TABLE` statements to add or remove constraints from existing tables.

```sql
ALTER TABLE talks
ALTER COLUMN session_timeslot SET NOT NULL;
```

```sql
ALTER TABLE talks
ALTER COLUMN session_timeslot DROP NOT NULL
```

SQL will reject the addition of the constraint if `NULL` values are already present in the column.

#### Backfill

*Backfilling* is a term occasionally used in DB engineering to refer to the process of adding or updating past values. 

```sql
UPDATE talks
SET title = 'TBD'
WHERE title IS NULL;
```

## Check Constraints

establish specific rules to determine what makes a row valid. For example, In our `talks` table, we might want to ensure that the `estimated_length` column is:

- An integer
- `NOT NULL`
- Positive

 use `CHECK` statements to implement more precise constraints on our table. 

A `CHECK` constraint can be written into a `CREATE TABLE` statement, or added to an existing table with `ALTER TABLE`.

list `CHECK (...)` following the data type in a `CREATE TABLE` statement and write the condition we’d like to test for inside the parentheses. -› must be a SQL statement that can be **evaluated as either true or false**. 

(similar to the statements in `WHERE` clauses)

any logic that you might use in a `WHERE` statement  can be applied within a `CHECK`, including logic that involves multiple columns or conditions.

```sql
ALTER TABLE talks 
ADD CHECK (estimated_length > 0);
```

We can add additional constraints on a column with multiple `ALTER TABLE` statements.

```sql
ALTER TABLE talks 
ADD CHECK (estimated_length > 0 AND estimated_length < 120);
```

##### constraints that apply to multiple columns

```sql
ALTER TABLE talks
ADD CHECK (estimated_length < 120 AND date_part('year', session_timeslot) = 2020);
```

> the `date_part` function just returns a portion of the date as an integer (e.g. `date_part('year' ,'2020-08-01 00:00:00'::date)` = 2020)

------

### Unique Constraints

It’s a good practice to structure tables such that rows are uniquely identifiable by some combination of attributes.



For Example: To make sure that no two people submit the same email address when they register. To do so we could apply a unique constraint on `email`.

To identify values in a single column as unique, we specify `UNIQUE` following the column name and datatype definitions, 

or add later:

```
ALTER TABLE attendees 
ADD UNIQUE (email);
```



```sql
CREATE TABLE registrations (
    id integer NOT NULL,
    attendee_id integer NOT NULL,
    session_timeslot timestamp NOT NULL,
    talk_id integer NOT NULL,
    UNIQUE (attendee_id, session_timeslot)
);
```

ensures attendees (identified by `attendee_id`) are registered for only one talk at a time (identified by `session_timeslot`).

------

### Primary Keys

A primary key is a column (or set of columns) that **uniquely identifies a row within a database table**. 

A table can only have one primary key, and in order to be selected as a primary key a column (or set of columns) should:

- Uniquely identify that row in the table (like a `UNIQUE` constraint)
- Contain no null values (like a `NOT NULL` constraint)

(tables are limited to one `PRIMARY KEY`, but not limited in how many columns can have both `UNIQUE` and `NOT NULL` constraints.)

primary keys also improve your data model in several other ways:

- Many joins will use the primary key from one table to join data with another table
- Primary keys can improve query performance
- Primary keys help to enforce data integrity within a table by ensuring that rows can be uniquely identified

```
ALTER TABLE attendees
ADD PRIMARY KEY (id); 
```

------

## Foreign Keys

When discussing relations between tables, you may see the terms *parent table* and *child table* to describe two tables that are related. -› values inserted into *child table* must be validated by data that’s already present in a *parent table*.

This property that ensures data can be validated by referencing another table in the data model is called ***referential integrity*.**

Referential integrity can be enforced by adding a `FOREIGN KEY` on the child table

If the parent table doesn’t contain the data a user is attempting to insert, PostgreSQL will reject the insert or update and throw an error.

```
ALTER TABLE registrations
ADD FOREIGN KEY (talk_id)
REFERENCES talks (id);
```

or include the following line in the `CREATE TABLE` statement , 

```
FOREIGN KEY (talk_id) REFERENCES talks (id)
```

#### Cascading Changes

By default, a foreign key constraint will prevent an engineer from deleting or updating a row of a parent table that is referenced by some child table. This behavior is sometimes explicitly specified in a `CREATE TABLE` statement using `REFERENCES talks (id) ON DELETE RESTRICT` or `REFERENCES talks (id) ON UPDATE RESTRICT`.

another strategy you may consider is adding a `CASCADE` clause. Rather than preventing changes, `CASCADE` clauses (`ON UPDATE CASCADE`, `ON DELETE CASCADE`) **cause the updates or deletes to automatically be applied to any child tables**.

```sql
ALTER TABLE registrations
ADD FOREIGN KEY (talk_id)
REFERENCES talks (id) ON DELETE CASCADE
```

------

## Constraints Review

*Constraints* are rules a DB engineer defines as part of the data model to gain more control over what values are allowed in specific columns and tables.

Constraints:

- Reject rows containing values that shouldn’t be inserted into a database table, which can help with preserving data integrity and quality.
- Raise an error when they’re violated, which can also help with debugging applications that write to the database.

 types of constraints:

- Data types — Are your first line of defense, these rules aren’t constraints but can help reject incorrect data from your database.
- `NOT NULL` constraints — Reject incoming rows from your table when critical information is missing from a row.
- `CHECK` constraints — Give you more control over what rules you’d like to apply to your tables. These constraints will allow you to reject a row if it fails the criteria you’ve defined.
- `UNIQUE` constraints — Help with defining unique values in a table, they also create an index which can improve query and join performance.
- `PRIMARY KEY` constraints — A column or combination of columns that uniquely identify a row and are both `NOT NULL` and `UNIQUE`. `PRIMARY KEY`s are unique to a table, and will often be used in joins between tables.
- `FOREIGN KEY` constraints — Allow you to maintain *referential integrity* between two tables by validating the entry in one also appears in the other. Referential integrity depends on `FOREIGN KEY` constraints.

- [PostgreSQL Constraints Docs](https://www.postgresql.org/docs/10/ddl-constraints.html)
- [Codecademy Forums](https://discuss.codecademy.com/)

# 

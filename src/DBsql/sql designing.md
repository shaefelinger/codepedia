# Designing Relational Databases

[https://medium.com/@kimtnguyen/relational-database-schema-design-overview-70e447ff66f9](https://medium.com/@kimtnguyen/relational-database-schema-design-overview-70e447ff66f9)

What is essential to a good database design?

-  **Reduces redundancy**: Duplicate data wastes space and can lead to inconsistency.
-  **Provides access** with information a user needs to join tables together. (Use good primary keys, while creating proper relationships between tables.)
-  Ensures **data accuracy** and **integrity**.

## Design Process

[10 Best Database Design Practices](https://medium.com/quick-code/10-best-database-design-practices-1f10f3441730)



1. Define the purpose of the database

2. Figure out the Primary Key for each table

   -  A primary key can be multiple fields if necessary, in which this is known as a *composite key*, while a primary key using only one field is known as a *simple key*. 
   -  none of the columns can be NULL.

3. Determine the relationships among the tables 

   - There are many types of relationships between tables: one-to-one, one-to-many, many-to-many. 

   - **One-to-one:** In a one-to-one relationship, only one row of a table is linked to at most one row on the other table. 

   - One-to-Many: In a one-to-many relationship, one row of one table can link to many rows in a table. A great example of a one-to-many relationship is an AuthorsList and BooksList. 
     The advantage of a one-to-many relationship is to store the frequently used information in the parent table (the table with “one”), while referencing this information many times in the child table (the table with “many”)
     In the child table, there should be a **foreign key**, which is the parent table’s primary key, that is used to reference back to the parent table. 

   - **Many-to-Many**: In a many-to-many relationship, one or more rows of one table can link to 0, 1 or many rows in the other table. To implement this relationship, we must use a **mapping** or **intermediary** or **junction** table.

     <img src="./assets/design3.png" alt="1*3ZOI8zSYPGs3d-kwAFDiTg" style="zoom:67%;" />

4. **Refine the Design —** Ask yourself these questions: do you have enough columns to represent your data? Could you derive a column from a combination of columns? Are you entering duplicate information? Do you have any empty fields in individual records? Can a large table be split into two? 

------

## Atomic Values

[https://www.calebcurry.com/atomic-values/](https://www.calebcurry.com/atomic-values/)

Everything we store in a database should be atomic. An **atomic** value can not be broken down into smaller pieces. You may also hear “rule-of-one.”

Whenever you can break up attributes into multiple attributes, you know they are not atomic. Something is atomic when we can think of it and use it as a complete whole!  As long as a value can be thought of as “a single thing,” then it can be considered atomic. 

We never want to store multiple values within a single column in a table. 

#### Rule of One

Each column should store only one indivisible (well…practically) fact. This also means that each table must only be for a single entity.

Not only must attributes store one thing, but these values must be all of one data type. You must specify a data type for each column and the rows can never break these columns rules.

-> column header-name sould be singular

------

## DATABASE SCHEMA

A database schema gives an overview of the purpose of the database along with the data that makes up the database, how the data is organized into tables, how the tables are internally structured and how they relate to one another.

<img src="./assets/schema2.png" />



- Define the purpose of your database
- Find the information that make up the database
- Organize your information into tables
- Structure your tables into columns of information
- Avoid redundant data that leads to inaccuracy and waste in space
- Identify the relationships between your tables and implement them

database design tools:

- [DbDiagram.io](http://dbdiagram.io/) 
- [SQLDBM](http://sqldbm.com/home) 
- [DB Designer](http://dbdesigner.net/) 

Your database schema should contain the following:

- table names
- column names per table
- column types per table
- constraints per table, if any
- relationships between tables, if any


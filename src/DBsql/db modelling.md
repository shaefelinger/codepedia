# Database Modelling

- Take your time to think about the tables that you will create. Pay close attention to the relationships between your tables.

- Use pen and paper or a whiteboard and draw some sketches first. 
- [Learn about Entity Relationship Diagrams (ERD)](https://www.youtube.com/watch?v=QpdhBUYk7Kk)

------

## ERD

Entity Relationship Diagrams

- Lucidchard

### Entities

- Entities - rows
- Attributes -columns

![image-20211011110518161](assets/erd1.png)



![image-20211011110612176](assets/erd2.png)

## Relationships

Describe, how the elements interact with each other



## Cardinality

![image-20211011110854614](assets/erd3.png)



Think: what is the minimum and maximum:

Zero or many:

![image-20211011112435115](assets/erd4.png)

![image-20211011112526269](assets/erd5.png)

![image-20211011113408199](assets/erd6.png)

## Primary Key

Rules

1. unique 
2. never changing
3. never null

-  one PK per table

## Foreign Key

- Foreign Key dont have to be uniqe, they can be repeated
- There can be multiple Foreign Keys in one entity

![image-20211011190514225](assets/erd7.png)

### Composite Primary Key

when 2 or more attributes are nescessary to uniquly idetify a record

##### Rules:

1. Use the fewest amout of attributes possible
2. Don't use attributes that are apt to change
3. 

![image-20211011190908384](assets/erd8.png)

## Bridge Table

![image-20211011201811349](assets/erd9.png)

Breaks up the many-to-many relationship


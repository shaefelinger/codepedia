# SQL Relations

To refer from one table to the other. For Example:

A table “Teachers” and a table “Courses”. In the table “Courses” you have a column called “Teacher” where you want to refer to an entry in the table “Teachers”.

<img src="./assets/sql_relations.png" />

## Foreign keys

A foreign key refers to a column in a different table.

In our example, we have a table “Teachers” and a table “Courses”. In "courses", we have a column called “Teacher”, which refers to the “Teacher” table.

Use  SHOW CREATE TABLE  to see how it was created: `CONSTRAINT`

```
+---------+--------------------------------------
| Table   | Create Table
+---------+--------------------------------------
| Courses | CREATE TABLE `Courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `hours` int(11) DEFAULT NULL,
  `teacher` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
	KEY `teacher` (`teacher`),
  CONSTRAINT `teacher` FOREIGN KEY (`teacher`) REFERENCES `Teachers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 |
+---------+--------------------------------------
```

like this:

```
KEY <key_name> (<column_name>), 	# key_name: you can choose a name 
CONSTRAINT <constraint_name> 			# constraint_name: you can choose a name 
FOREIGN KEY (<column_name>) 			# specify column in the table 
REFERENCES <foreign_table>(<foreign_column>) 
# table and column) from the referenced table
```

[Tutorial on foreign keys - MariaDB](https://www.mariadbtutorial.com/mariadb-basics/mariadb-foreign-key/)

------


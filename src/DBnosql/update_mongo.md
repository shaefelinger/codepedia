# Update - MongoDB

## Update

```
db.students.updateOne(
{ "FirstName": "Michael" }, 
	{
		$set: { "Address": "Borselstraße 7, 22765 Hamburg" } 
	}
)
```

```
db.products.updateOne({_id:1}, {$set: {stock: 32}})
```

`$set` creates new Field



Similarly, you can use **updateMany()**with a query operator.

https://docs.mongodb.com/manual/tutorial/update-documents/

------

## $ -> Operators/Functions

-> füge aktuelles datum dem datensatz zu:

```
$currentDate: {"last_modified": true}
```

------

## Delete Field - $unset

```
db.students.updateMany( {}, { $unset: {"Adress":""} })
```

https://docs.mongodb.com/manual/reference/operator/update/unset/


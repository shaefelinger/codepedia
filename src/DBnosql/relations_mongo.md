# Relationships in MongoDB

two ways:

### 1) Document inside of Document. 

Good for one to many relationships

```
db.products.insert(
	{
		_id:3,
		name: "Rubber",
		stock: 43,
		reviews: [
			{
				authorName: "Sally",
				rating: 5,
				review: "Best rubber ever"
			},
			{
				authorName: "John",
				rating: 4,
				review: "Good rubber!"
			}
		]
	}
)
```

### 2) reference ID

```
{
	_id: 1,
	name: "Pen",
	price: 1.20,
	stock: 32
}

{
	_id: 2,
	name: "Pencil",
	price: 0.80,
	stock: 12
}

{
	orderNumber: 3234,
	productsOrdered: [1, 2]
}
```

------

## 
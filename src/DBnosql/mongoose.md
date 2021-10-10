# Mongoose

[https://mongoosejs.com/](https://mongoosejs.com/)

simplifies writing

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```

### Connect to Database

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/yourDB', {useNewUrlParser: true, useUnifiedTopology: true});
```



## Create - Schema

Blueprint -> how should the data in the collection be structured?

You can only have Fields that are specified in the Schema

```js
const fruitSchema = new mongoose.Schema ({
    name: {
    	type: String,
    	required: true
  	},
    rating: Number,
    review: String,
  	array: [String]
});
```

oder eventuell auch nur: ???

```js
const intemsSchema = {
  name: String
}
```



### use the Schema to create a new Model:

```js
const Fruit = mongoose.model("Fruit", fruitSchema);
```

The first Argument is alway a string in singular form -> mongoose will create plural for the collection (`Fruit` -> `fruits` will be the name of the collection)

-> can be disabled:

```
You can do this in 5.0.0-rc0:

mongoose.pluralize(null);
This will make mongoose not pluralize collection names at all, so mongoose.model('User', schema) will store documents in the 'User' collection.
```



### Create Document from the model:

```js
const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit"
});
fruit.save();		
```

### save to collection

```js
fruit.save();		
```

might be good to add a error-check-callback

```js
 post.save((err) => {
      if (!err){
        res.redirect("/");
      }
    });
  
```



------

### insertMany()

[https://mongoosejs.com/docs/api/model.html#model_Model.insertMany](https://mongoosejs.com/docs/api/model.html#model_Model.insertMany)

```js
const kiwi = new Fruit ({
    name: "Kiwi",
    rating: 10,
    review: "The best fruit"
})

const orange = new Fruit ({
    name: "Orange",
    rating: 4,
    review: "Too sour"
})

const banana = new Fruit ({
    name: "Banana",
    rating: 3,
    review: "Weird texture",
})

Fruit.insertMany([kiwi, orange, banana], function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("successfully saved the fruits to fruitsDB");
    }
} )
```

------

## Read - find()

```js
>ModelName>.find({condition<}, (err, results) => {
	//Use the found results docs
})
```



```js
Fruit.find((err, fruits) => {
    if (err) {
        console.log(err);
    } else {
        console.log(fruits);
    }
})
```

-> gives an array of JS-Objects. fruits

```js
Fruit.find((err, result) => {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        result.forEach(element =>  {
            console.log(element.name);
        })
    }
})
```

------

### Close connection

good practice:  Close the connection to the Database once you're done..

```js
mongoose.connection.close();
```

------

### Model Methods

[https://mongoosejs.com/docs/api/model.html](https://mongoosejs.com/docs/api/model.html)

------

### Validation

[https://mongoosejs.com/docs/validation.html](https://mongoosejs.com/docs/validation.html)

add validation to the Schema:

Built in-Validators, zB

- required
- min / max for Numbers
- etc,

```js
const fruitSchema = new mongoose.Schema ({
    name: {
    	type: String,
    	required: true
  	},
    rating: {
        type: Number,
        min: 1,
        max: 10
    }, 
    review: String
});
```

-> if rating is different than 1-10 -> document doesn`t get added

------

## Update

- update

- updateMany

- updateOne


```js
Fruit.updateOne({_id:"60255dfb7c758f4905a8e136"}, {name: "Peach"}, (err) => {
    if(err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        console.log("👍Sucessfully updated");
    }
})
```

------

## Delete

```js
Fruit.deleteOne({name: "Peach"}, (err) => {
    if(err) {
                console.log('❗️'+ err);
    } else {
        mongoose.connection.close();
        console.log("👍Sucessfully deleted");
    }
});
```

condition / callback

### deleteMany

```js
<ModelName>.deleteMany{
	{conditions},
	function(err){
	
	}
};
```

leave out conditions to delete all

------

## Relationships

out schema of other Collection in the Schema:

```js
const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});


const person = new Person ({
   name: "Amy",
   age: 12,
   favoriteFruit: pineapple
})
```

------

```
$pull
```

MongoDB-operators

[https://docs.mongodb.com/manual/reference/operator/update/pull/](https://docs.mongodb.com/manual/reference/operator/update/pull/)

findOneAndUpdate()

```
List.findOneAndUpdate({}, {}, callback)
```


------

## Mongoose Links

- Mongoose: [https://mongoosejs.com/](https://mongoosejs.com/)
- [Node with MongoDB - Mongoose Tutorial](​https://www.youtube.com/watch?v=4yqu8YF29cU)


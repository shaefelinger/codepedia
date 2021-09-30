# Async JS

different syntax to write asnyc requests

1. nested callbacks -› gets very unreadable
2. `.then` - / Promises
3. async-await

## Callbacks

js can handle callbacks.

When your application grows more complex, you can have callbacks in callbacks in callbacks...

hard to read and hard to understand -›  callback hell

better:

## Promises

Promises are a better alternative to callbacks. They come with methods for the case that everything went well (**resolve**), and for the error case (**reject**).

```js
var promise = new Promise((resolve, reject) => { 
  // do what your function is supposed to do
if (/* everything turned out fine */) { 
	resolve("It worked!");
}
else {
	reject (Error("This didn’t work, because...")); }
});
```

You can then use your Promise like this:

```js
promise.then((result) => { 
  console.log(result); // "Stuff worked!"
}).catch((error) => {
	console.log('Something went wrong: ' + error);
});
```

Use the function **then ** to execute code that should run in the case when everything went well, and the function **catch** to run code if there was an error.

## Async-Await

special syntax:

You can define a function as **a** **sync**, meaning that the result is returned at some later time.

```js
async function calculateResult() {
	var result = // stuff your function does 
  return result;
}
```

You can then use the function just like a promise:

```js
 calculateResult()
  .then(/* do something with it */);
```

To handle the response in a synchronous way, you can use the keyword **await**.

```js
val result1 = await calculateResult(param1); // executed first 
val result2 = await calculateResult(param2); // executed second 
val random = Math.random(); // executed third
```



### write async/await

instead of:

```js
exports.getPosts = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 2;
  let totalItems;
  Post.find()
    .countDocuments()
    .then(count => {
      totalItems = count;
      return Post.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage);
    })
    .then(posts => {
      res.status(200).json({
        message: 'Fetched posts successfully.',
        posts: posts,
        totalItems: totalItems
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
```

`async` in front of the function, then you can write simpler syntax

```js
exports.getPosts = async (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 2;
  let totalItems;
  try {
    const totalItems = await Post.find().countDocuments();

    const posts = await Post.find()
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    res.status(200).json({
      message: 'Fetched posts successfully.',
      posts: posts,
      totalItems: totalItems,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
```

behind the szenes it gets converted to `.then`!

### Handle Errors

use try/catch



[Async-await - More Details](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

------

#### top level await 

(eg. with node 14.3)

you can use await outside of async functions on the top-level…

------

## Helper function - to

The 'to' function is a helper function that abstracts away the handling of promises. 
It accepts a promise as an argument, i.e. returned from a call to the fetch api 
and 'thens' down into the json and the data content.

It returns a plain javascript object with two properties: data and error.

use this pattern:

```
... some code ...
const { data, error } = await to(fetch( -- arguments -- ))
if (error) {
    -- handle error, probably exit function
}

continue normally with data object extracted from backend response

... some code ...
```

This is the function:

```js
function to(promise) {
  return promise.then(response => response.json())
    .then(data => ({ data, error: null }))
    .catch(error => ({ data: null, error }));
}
```

example:

```js
const { data, error } = await to(getCharacterList());
	if (error) {
		return;
	}
	//..handle data…
//

function getCharacterList() {
  return fetch(url + 'characters');
}
```


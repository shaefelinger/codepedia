# Async JS

different syntax to write asnyc requests

1. nested callbacks -› gets very unreadable
2. `.then` - / Promises
3. async-await

## Callbacks

js can handle callbacks.

When your application grows more complex, you can have callbacks in callbacks in callbacks...

hard to read and hard to understand -›  callback hell

> **Tip:** Using callbacks can be quite "messy"  This problem is commonly known as "callback hell". This problem can be reduced by good coding practices (see http://callbackhell.com/), using a module like [async](https://www.npmjs.com/package/async), or even moving to ES6 features like [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

> **Note:** A common convention for Node and Express is to use error-first callbacks: the first value in your *callback functions* is an error value, while subsequent arguments contain success data.  good explanation: [The Node.js Way - Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js) (fredkschott.com).

[Using asynchronous APIs](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#using_asynchronous_apis)

better:

## Promises

[WebDev promises](https://web.dev/promises/)

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

Create async function with the `async`-keyword! Instead of `.then()` use the await-keyword

```js
const gettodo = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/3')
    console.log(res);
}

gettodo()
```



You can define a function as **async**, meaning that the result is returned at some later time.

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

#### `Asyc`

Add `async` before the function itself.

-> gives access to the `await`, `try` and `catch`.

##### `await`

tells the script, not to go on, until the data is recieved. (only works, if it is a asyc-function using the async keyword).

await for the fetch-call `const res = await fetch(url)`

##### `try`

...if everything goes well

-> convert to json `const data = await res.json();`

##### `catch`

...if there is an error

```js
catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }	
```

------

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

## Helper function - `to()`

Helper-Function:

```js
function to(promise) {
  return promise.then(response => response.json())
    .then(data => ({ data, error: null }))
    .catch(error => ({ data: null, error }));
}
```

The 'to' function is a helper function that abstracts away the handling of promises. 
It accepts a promise as an argument, i.e. returned from a call to the fetch api 
and 'thens' down into the json and the data content.

It returns a plain javascript object with two properties: data and error.

use this pattern:

```js
// ... some code ... inside async function

const { data, error } = await to(fetch( /*arguments*/ ))

if (error) {
   // -- handle error, probably exit function
}

... some code - handle data...
```

##### Examples:

```js
const gettodo = async () => {
  const { data, error } = await to(fetch('https://jsonplaceholder.typicode.com/todos/3'));
  if (error) {
    console.log('🤯', error);
  } else {
    console.log(data);
  }
};

gettodo()
```

or

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


# Async-Await

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

## `Asyc`

Add `async` before the function itself.

-> gives access to the `await`, `try` and `catch`.

## `await`

Halts the execution of an `async` function until a promise is no longer pending.  the `await` operator returns the resolved value of a promise (if you forget  `await`, the function will return the promise object itself.)

Don’t forget the `await` keyword! It may seem obvious, but this can be a tricky mistake to catch because our function will still run— it just won’t have the desired results.

await for the fetch-call `const res = await fetch(url)`





## `try`

...if everything goes well

-> convert to json `const data = await res.json();`

## `catch`

...if there is an error

```js
catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }	
```

------

## write async/await

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

## Handle Errors

use try/catch



[Async-await - More Details](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

------

## top level await 

(eg. with node 14.3)

you can use await outside of async functions on the top-level…

------

[https://scotch.io/tutorials/asynchronous-javascript-using-async-await](https://scotch.io/tutorials/asynchronous-javascript-using-async-await)

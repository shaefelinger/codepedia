# Promises

Promises are a better alternative to callbacks. They give you flexibility, intuitive syntax, and easy error handling.

Promises allow you to set an operation running (e.g. the fetching of an image from the server), and then wait until the result has returned before running another operation:

```html
Main thread: Task A                   Task B
    Promise:      |__async operation__|
```

Since the operation is happening somewhere else, the main thread is not blocked while the async operation is being processed.

Think of Promises as a special function that either satisfy (resolve) or fail (reject) to execute a task, and then executes the corresponding actions - usually another task with the returned data in the case of 'resolved' and usually throw an error in the case of 'reject'.

They come with methods for the case that everything went well (**resolve**), and for the error case (**reject**).

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
  console.log(result); // "It worked!"
}).catch((error) => {
	console.log('Something went wrong: ' + error);
});
```

Use the function **then ** to execute code that should run in the case when everything went well, and the function **catch** to run code if there was an error.

Promises are specifically made for handling async operations, and have many advantages over old-style callbacks:

-  You can chain multiple async operations together using multiple `.then()` operations, passing the result of one into the next one as an input.
-  Error handling is much better — all errors are handled by a single `.catch()` block at the end of the block



A good example is the `fetch()` API, which is basically like a modern, more efficient version of [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest). 

```js
fetch('products.json')
  .then((response) => {
  return response.json();
}).then((json) => {
  products = json;
  initialize();
}).catch((err) => {
  console.log('Fetch problem: ' + err.message);
});
```

- Here `fetch``()` is returning a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). 
- The promise is an object representing the completion or failure of the async operation. 
- It's the browser's way of saying "I promise to get back to you with the answer as soon as I can," hence the name "promise."

Code blocks chained onto the end of the `fetch()`:

- Two `then()` blocks. Both contain a callback function that will run if the previous operation is successful, and each callback receives as input the result of the previous successful operation
- Each `.then()` block returns another promise, meaning that you can chain multiple `.then()` blocks onto each other, so multiple asynchronous operations can be made to run in order, one after another.
- The `catch()` block at the end runs if any of the `.then()` blocks fail. an error object is made available inside the `catch()`, which can be used to report the kind of error that has occurred. 
- synchronous `try...catch` won't work with promises, but it will work with [async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)

## The event queue

Async operations like promises are put into an **event queue**, which runs after the main thread has finished processing so that they *do not block* subsequent JavaScript code from running.

[What the heck is the event loop anyway? ](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

## Create Promises

Promises are objects that represent the eventual outcome of an asynchronous operation. A `Promise` object can be in one of three states:

- **Pending**: The initial state— the operation has not completed yet. But we have a guarantee that it will settle.
- **Fulfilled**: The operation has completed successfully and the promise now has a *resolved value*. For example, a request’s promise might resolve with a JSON object as its value.
- **Rejected**: The operation has failed and the promise has a reason for the failure. This reason is usually an `Error` of some kind.

We refer to a promise as ***settled*** if it is no longer pending— it is either **fulfilled** or rejected**.** 

To create a new `Promise` object, we use the `new` keyword and the `Promise` constructor method:

```js
const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!'); 
  }
}
const myFirstPromise = new Promise(executorFunction);
```

- The `Promise` constructor method takes one argument: a callback called the *executor function* which runs automatically when the constructor is called. 


- The executor function has two function parameters, usually referred to as the `resolve()` and `reject()` functions. 

- The `resolve()` and `reject()` functions aren’t defined by the programmer. When the `Promise` constructor runs, JavaScript will pass **its own** `resolve()` and `reject()` functions into the executor function.
  - `resolve` is a function with one argument. Under the hood, if invoked, `resolve()` will change the promise’s status from `pending` to `fulfilled`, and the promise’s resolved value will be set to the argument passed into `resolve()`.
  - `reject` is a function that takes a reason or error as an argument. Under the hood, if invoked, `reject()` will change the promise’s status from `pending` to `rejected`, and the promise’s rejection reason will be set to the argument passed into `reject()`.

```js
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.') 
  }
}

const orderSunglasses = () => {
  return new Promise(myExecutor)
};

let orderPromise = orderSunglasses();

console.log(orderPromise);
```

```js
//_ ES6: Full example_

const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => { 
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }
    }
);

// 2nd promise
const showOff = function (phone) {
    const message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';
    return Promise.resolve(message);
};

// call our promise
const askMom = function () {
    willIGetNewPhone
        .then(showOff)
        .then(fulfilled => console.log(fulfilled)) // fat arrow
        .catch(error => console.log(error.message)); // fat arrow
};

askMom();
```



```js
// 2nd promise
var showOff =  (phone) => {
    return new Promise(
        function (resolve, reject) {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};
```

this can be shortened:

```js
// shorten it

// 2nd promise
var showOff = phone => {
    var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';
    return Promise.resolve(message);
};
```



### Consuming Promises `.then`

The `.then()` method of a JavaScript `Promise` object can be used to get the eventual result (or error) of the asynchronous operation.

`.then()` accepts two function arguments. The first handler supplied to it will be called if the promise is resolved. The second one will be called if the promise is rejected.

It takes two callback functions as arguments. We refer to these callbacks as *handlers*. 

- The first handler, sometimes called `onFulfilled`, is a *success handler*, and it should contain the logic for the promise resolving.
- The second handler, sometimes called `onRejected`, is a *failure handler*, and it should contain the logic for the promise rejecting.

We can invoke `.then()` with one, both, or neither handler!

```js
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});
```

If the appropriate handler is not provided, instead of throwing an error, `.then()` will just return a promise with the same settled value as the promise it was called on. 

One important feature of `.then()` is that it always returns a promise!

When you return something from a `then()` callback, it's a bit magic. If you return a value, the next `then()` is called with that value. However, if you return something promise-like, the next `then()` waits on it, and is only called when that promise settles (succeeds/fails)

## The onFulfilled and onRejected Functions

To handle a “successful” promise, we invoke `.then()` on the promise, passing in a success handler callback function:

```js
const prom = new Promise((resolve, reject) => {
  resolve('Yay!');
});
 
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
prom.then(handleSuccess); // Prints: 'Yay!'
```

- `prom` is a promise which will resolve to `'Yay!'`.
- We define a function, `handleSuccess()`, which prints the argument passed to it.
- We invoke `prom`‘s `.then()` function passing in our `handleSuccess()` function.
- Since `prom` resolves, `handleSuccess()` is invoked with `prom`'s resolved value, `'Yay'`, so `'Yay'` is logged to the console.

With typical promise consumption, we won’t know whether a promise will resolve or reject, so we’ll need to provide the logic for either case. We can pass both an `onFulfilled` and `onRejected` callback to `.then()`.

```js
let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});
 
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};
 
prom.then(handleSuccess, handleFailure);
```

## Chaining `.then`

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

myPromise
  .then(handleResolvedA, handleRejectedA)
  .then(handleResolvedB, handleRejectedB)
  .then(handleResolvedC, handleRejectedC);
```

```js
myPromise
.then(handleResolvedA)
.then(handleResolvedB)
.then(handleResolvedC)
.catch(handleRejectedAny);
```



## Using catch() with Promises

To create even more readable code, we can use a different promise function: `.catch()`.

The `.catch()` function takes only one argument, `onRejected`

In the case of a rejected promise, this failure handler will be invoked with the reason for rejection.

```js
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });	
```

There's nothing special about `catch()`, it's just sugar for `then(undefined, func)`, 

## Chaining Multiple Promises

One common pattern we’ll see with asynchronous programming is multiple operations which depend on each other to execute or that must be executed in a certain order.	

The process of chaining promises together is called ***composition***.

```js
firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});
```

In order for our chain to work properly, we had to `return` the promise `secondPromiseFunction(firstResolveVal)`. 

This ensured that the return value of the first `.then()` was our second promise 

## Avoiding Common Mistakes

**Mistake 1:** Nesting promises instead of chaining them.

```js
returnsFirstPromise()
.then((firstResolveVal) => {
  return returnsSecondValue(firstResolveVal)
    .then((secondResolveVal) => {
      console.log(secondResolveVal);
    })
})
```

**Mistake 2:** Forgetting to `return` a promise.

```js
returnsFirstPromise()
.then((firstResolveVal) => {
  returnsSecondValue(firstResolveVal)
})
.then((someVal) => {
  console.log(someVal);
})
```

Let’s break down what’s happening in the example:

- We invoke `returnsFirstPromise()` which returns a promise.
- We invoke `.then()` with a success handler.
- Inside the success handler, we create our second promise, but we forget to `return` it!
- We invoke a second `.then()`. It’s supposed to handle the logic for the second promise, but since we didn’t return, this `.then()` is invoked on a promise with the same settled value as the original promise!

Since forgetting to return our promise won’t throw an error, this can be a really tricky thing to debug!

## Promise.all()

To maximize efficiency we should use ***concurrency***, multiple asynchronous operations happening together. With promises, we can do this with the function `Promise.all()`.

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 300);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 200);
});
 
Promise.all([promise1, promise2]).then((res) => {
  console.log(res[0]);
  console.log(res[1]);
});
```

The JavaScript `Promise.all()` method can be used to execute multiple promises in parallel. The function accepts an array of promises as an argument. If all of the promises in the argument are resolved, the promise returned from `Promise.all()` will resolve to an array containing the resolved values of all the promises in the order of the initial array.





For example, if you want to download multiple things at once.

`Promise.all()` accepts an array of promises as its argument and returns a single promise.

- If every promise in the argument array resolves, the single promise returned from `Promise.all()` will resolve with an array containing the resolve value from each promise in the argument array.
- If any promise from the argument array rejects, the single promise returned from `Promise.all()` will immediately reject with the reason that promise rejected. This behavior is sometimes referred to as *failing fast*.

```js
Promise.all([img1.ready(), img2.ready()])
.then(function() {
  // all loaded
}, function() {
  // one or more failed
});
```



## Review

Promises are a difficult concept even for experienced developers

- Promises are JavaScript objects that represent the eventual result of an asynchronous operation.
- Promises can be in one of three states: pending, resolved, or rejected.
- A promise is settled if it is either resolved or rejected.
- We construct a promise by using the `new` keyword and passing an executor function to the `Promise` constructor method.
- We use `.then()` with a success handler callback containing the logic for what should happen if a promise resolves.
- We use `.catch()` with a failure handler callback containing the logic for what should happen if a promise rejects.
- Promise composition enables us to write complex, asynchronous code that’s still readable. We do this by chaining multiple `.then()`‘s and `.catch()`‘s.
- To use promise composition correctly, we have to remember to `return` promises constructed within a `.then()`
- We should chain multiple promises rather than nesting them.
- To take advantage of concurrency, we can use `Promise.all()`.

------

## Overview

```js
const doSomething = (value1, value2) => {
  const myAwesomePromise = new Promise((resolve, reject) => {
    if (value1 > value2) {
      resolve('Success!!'); // similar to return  'Success!!'
    } else {
      reject('Failure!!'); // similar to return  new Error('Failure!!');
    }
  });
  return myAwesomePromise;
};

// .then
doSomething(1, 2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// async await
const asyncTest = async () => {
  try {
    const result = await doSomething(3, 2);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
asyncTest();

```

simplified

```js
const doSomething = (value1, value2) => {
  return new Promise((resolve, reject) => {
    if (value1 > value2) {
      resolve('Success!!'); // similar to return  'Success!!'
    } else {
      reject('Failure!!'); // similar to return  new Error('Failure!!');
    }
  });
};
```



------

## Convert Callback to Promise

[Converting callbacks into promises](https://zellwk.com/blog/converting-callbacks-to-promises/)



------

## Promises Links

- [WebDev promises](https://web.dev/promises/)

- [MDN Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 

- [MDN Graceful asynchronous programming with Promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)

- [Promises for Dummies](https://www.digitalocean.com/community/tutorials/javascript-promises-for-dummies)

- [Codecademy Promises cheatsheet](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path/tracks/fscp-async-javascript-and-http-requests/modules/fecp-learn-javascript-syntax-promises/cheatsheet)

  


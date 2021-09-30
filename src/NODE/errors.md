# Node Errors

The Node environment has all the standard JavaScript errors such as `EvalError`, `SyntaxError`, `RangeError`, `ReferenceError`, `TypeError`, and `URIError` as well as the JavaScript `Error` class for creating new error instances. 	

- Within our own code, we can generate errors and `throw` them
- with synchronous code in Node, we can use [error handling](https://www.codecademy.com/learn/javascript-errors-debugging/modules/errors-and-error-handling) techniques such as `try...catch` statements.

### Error-first callback functions

Used by many  asynchronous Node APIs

- Callback functions which have an error as the first expected argument and the data as the second argument. 
- If it results in an error, the error will be passed in as the first argument to the callback function. 
- If no error was thrown, the first argument will be `undefined`.

```js
const errorFirstCallback = (err, data)  => {
  if (err) {
    console.log(`There WAS an error: ${err}`);
  } else {
     // err was falsy
      console.log(`There was NO error. Event data: ${data}`);
  }
}
```

or:

```js
const errorFirstCallback = (err, data)  => {
  if (err) {
    console.log(`There WAS an error: ${err}`);
    return;
  } 
  console.log(`There was NO error. Event data: ${data}`);
  }
}
```

------

#### 
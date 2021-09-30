# Error-Handling - Express

[Handling errors](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#handling_errors)

Errors are handled by one or more special middleware functions that have four arguments, instead of the usual three: `(err, req, res, next)`. For example:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

These can return any content required, but must be called after all other `app.use()` and routes calls so that they are the last middleware in the request handling process!

> **Note:** HTTP404 and other "error" status codes are not treated as errors. If you want to handle these, you can add a middleware function to do so. For more information see the [FAQ](http://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

For more information see [Error handling](http://expressjs.com/en/guide/error-handling.html) (Express docs).

------

### 
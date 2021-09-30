# route handlers - Express

The HTTP verb is always included in the request

[HTTP-Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)



[Routing Docs](https://expressjs.com/en/guide/routing.html)

## Use

`use` always executes -› for middleware

```js
app.use('/users', (req, res, next) => {
  res.send('users');
});
```

[app.use docs](https://expressjs.com/en/4x/api.html#app.use)

------

In Express, routes takes the following structure: `app.METHOD(PATH, HANDLER)`.

METHOD is an http method in lowercase. PATH is a relative path on the server (it can be a string, or even a regular expression). HANDLER is a function that Express calls when the route is matched. Handlers take the form `function(req, res) {...}`, where req is the request object, and res is the response object.

```js
function(req, res) {
  res.send('Response String');
}
```

will serve the string 'Response String'.

------

## [Creating route handlers](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#creating_route_handlers)



#### Get-Request

##### `app.get()` 

to register routes to match `GET` requests.

Express routes (including `app.get()`) usually take two arguments, a path (usually a string), and a callback function to handle the request and send a response.

```js
app.get('/data', (req, res, next) => {
  // Here we would send back the some data
});
```

The route above will match any `GET` request to `'/data'` and call the callback function, passing in two objects as the first two arguments. These objects represent the request sent to the server and the response that the Express server should eventually send to the client.

If no routes are matched on a client request, the Express server will handle sending a 404 Not Found response to the client.

------

This is a (callback) route handler function for HTTP `GET` requests to the site root (`'/'`):

```js
app.get('/', (req, res) => {
  res.send('Hello World!')
});
```

- The callback function takes a request and a response object as arguments. 

- the method calls `send()` on the response to return the string "Hello World!". This ends the function

- There are a [number of other response methods](https://expressjs.com/en/guide/routing.html#response-methods) for ending the request/response cycle, eg., you could call `res.json()` to send a JSON response or `res.sendFile()` to send a file.

## Other HTTP verbs

`app.get` is the same as `app.use` but only reacts to `get` requests



`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`, `mkcol()`, `move()`, `m-search()`, `notify()`, `options()`, `patch()`, **`post()`**, `purge()`, **`put()`**, `report()`, `search()`, `subscribe()`, `trace()`, `unlock()`, `unsubscribe()`.

special routing method: `app.all()`, which will be called in response to any HTTP method. Similar to `app.use()`



##### `.post()`

`POST` routes create new data, their paths do not end with a route parameter, but instead end with the type of resource to be created.

The HTTP status code for a newly-created resource is 201 Created.



##### `DELETE` 

is the HTTP method verb used to delete resources. Their paths should usually end with a route parameter to indicate which resource to delete.

Servers often send a 204 No Content status code if deletion occurs without error.



------

## 404-page / catch-all route

you can chain methods, but `send` has to be the last one

```
res.setHeader(...).send(...)
```

as the very last middleware:

```js
app.use((req, res, next) => {
  res.status(404).send('<h1>404 Page not found!</h1>');
});
```

------

## Chain Route Handlers

`app.route()`

-> chainable route handlers

```js
app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })
```

```js
app.route('/articles')
  .get((req, res) => {
    Article.find((err, foundArticles) => {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })
  .post((req, res) => {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    newArticle.save((err) => {
      if (!err) {
        res.send('Succesfully added a new article');
      } else {
        res.send(err);
      }
    });
  })
  .delete((req, res) => {
    Article.deleteMany((err) => {
      if (!err) {
        res.send('Successfully deleted ALL articles.');
      } else {
        res.send(err);
      }
    });
  });

```

https://medium.com/@saginadir/native-function-chaining-in-javascript-what-we-can-learn-from-jquery-3b42d5d4a0d


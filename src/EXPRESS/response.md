# Responses - Express

### Sending A Response

HTTP follows a one request-one response cycle. Each client expects exactly one response per request, and each server should only send a single response back to the client per request.

Express servers send responses using the `.send()` method on the response object. `.send()` will take any input and include it in the response body.

```js
const monsters = [{ type: 'werewolf' }, { type: 'hydra' }, { type: 'chupacabra' }];
app.get('/monsters', (req, res, next) => {
  res.send(monsters);
});
```

In addition to `.send()`, `.json()` can be used to explicitly send JSON-formatted responses. `.json()` sends any JavaScript object passed into it.

------

### Matching Route Paths

Express searches through routes in the order that they are registered in your code. The first one that is matched will be used, and its callback will be called.

If there are no matching routes registered, or the Express server has not sent a response at the end of all matched routes, it will automatically send back a 404 Not Found response



#### *route parameters*

Routes become much more powerful when they can be used dynamically. 

Parameters are route path segments that begin with `:` in their Express route definitions. They act as [wildcards](https://expressjs.com/en/guide/routing.html#route-parameters),

 For example `/monsters/:id` will match both`/monsters/1` and `/monsters/45`.

Express parses any parameters, extracts their actual values, and attaches them as an object to the request object: `req.params`. 

```js
const monsters = { hydra: { height: 3, age: 4 }, dragon: { height: 200, age: 350 } };
// GET /monsters/hydra
app.get('/monsters/:name', (req, res, next) => {
  console.log(req.params) // { name: 'hydra' };
  res.send(monsters[req.params.name]);
});
```



------

### Setting Status Codes

Express allows us to set the [status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) on responses before they are sent.

The `res` object has a `.status()` method to allow us to set the status code, and other methods like `.send()` can be chained from it.

```js
const monsterStoreInventory = { fenrirs: 4, banshees: 1, jerseyDevils: 4, krakens: 3 };
app.get('/monsters-inventory/:name', (req, res, next) => {
  const monsterInventory = monsterStoreInventory[req.params.name];
  if (monsterInventory) {
    res.send(monsterInventory);
  } else {
    res.status(404).send('Monster not found');
  }
});


```



```js
if(thisIsValid) {
    res.status(204).send()
  } else {
    res.status(404).send();
  }
```



------

### Other HTTP Methods

[HTTP Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) defines a number of different method verbs with many use cases.

 three other important HTTP methods: `PUT`, `POST`, and `DELETE`. Express provides methods for each one: `app.put()`, `app.post()`, and `app.delete()`.

`PUT` requests are used for updating existing resources

#### Using Queries

 [Query strings](https://en.wikipedia.org/wiki/Query_string) appear at the end of the path in URLs, and they are indicated with a `?` character.

 The `key: value` relationship is indicated by the `=` character in a query string, and key-value pairs are separated by `&`. 

Query strings do not count as part of the route path. Instead, the Express server parses them into a JavaScript object and attaches it to the request body as the value of `req.query`. 

```js
const monsters = { '1': { name: 'cerberus', age: '4'  } };
// PUT /monsters/1?name=chimera&age=1
app.put('/monsters/:id', (req, res, next) => {
  const monsterUpdates = req.query;
  monsters[req.params.id] = monsterUpdates;
  res.send(monsters[req.params.id]);
});
```

------

### 





There are a [number of other response methods](https://expressjs.com/en/guide/routing.html#response-methods) for ending the request/response cycle, eg., you could call `res.json()` to send a JSON response or `res.sendFile()` to send a file.



## Send

```js
res.send('Hello World');
```

use `res.send()`

- send sets the header to 'html' by default
- send ends the request.

> you could use 
>
> - `res.setHeader`
> - `res.write`
>
> but you don't have to…
>

------

## redirect

```
res.redirect('/');
```

------

## Send HTML-Pages

use `res.sendFile()`

This method needs an absolute file path. eg. `/views` -folder

```
absolutePath = __dirname + relativePath/file.ext
```

------

#### 
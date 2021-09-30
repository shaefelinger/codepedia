# Requests - Express

sort me…

### Parsing Incoming Requests

### Dynamic Routing

- pass dynamic path segments by adding `:` to the express router path
- the name afther the `:` is the name by wich you extract the data on `req.params`
- optional query parameters can be passed `?param=value&b=2` and extracted `req.query.myParam`



#### parse body:

not parsed by default, install and add: body-parser

```js
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
```

or use default express-parser: (better)

```js
app.use(express.urlencoded({ extended: true }))
```



------

### Get Route Parameter Input from the Client

Route parameters are named segments of the URL, delimited by slashes (/).

Each segment captures the value of the part of the URL which matches its position. The captured values can be found in the `req.params` object.

```
route_path: '/user/:userId/book/:bookId'
actual_request_URL: '/user/546/book/6754'
req.params: {userId: '546', bookId: '6754'}
```

### Get Query Parameter Input from the Client

Another common way to get input from the client is by encoding the data after the route path, using a query string. 

-  delimited by a question mark (?), and includes field=value couples
-  Each couple is separated by an ampersand (&)
-  Express can parse the data from the query string, and populate the object `req.query`
-  Some characters, like the percent (%), cannot be in URLs and have to be encoded in a different format before you can send them

```
route_path: '/library'
actual_request_URL: '/library?userId=546&bookId=6754'
req.query: {userId: '546', bookId: '6754'}
```

If you want, you can use the method `app.route(path).get(handler).post(handler)`. This syntax allows you to chain different verb handlers on the same path route. You can save a bit of typing, and have cleaner code.

```js
app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  // OR you can destructure and rename the keys
  var { first: firstName, last: lastName } = req.query;
  // Use template literals to form a formatted string
  res.json({
    name: `${firstName} ${lastName}`
  });
});
```

------

### Use body-parser to Parse POST Requests

POST is the default method used to send client data with HTML forms.

In REST convention, POST is used to send data to create new items in the database (a new user, or a new blog post). 

the data doesn’t appear in the URL, it is hidden in the request body.

The body is a part of the HTTP request, also called the payload. 

Even though the data is not visible in the URL, this does not mean that it is private.

```
POST /path/subpath HTTP/1.0
From: john@example.com
User-Agent: someBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 20

name=John+Doe&age=25
```

- urlencoded: Body is encoded like the query string
- With Ajax, you can also use JSON to handle data having a more complex structure.
- There is also another type of encoding: multipart/form-data. This one is used to upload binary files.

To parse the data coming from POST requests, you have to install the `body-parser` package. This package allows you to use a series of middleware, which can decode data in different formats.

```js
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
```

> **Note:** `extended=false` is a configuration option that tells the parser to use the classic encoding. When using it, values can be only strings or arrays. The extended version allows more data flexibility, but it is outmatched by JSON.

Use the following as a template:

```javascript
app.use(bodyParser.urlencoded({ extended: false }));
```

In order to parse JSON data sent in the POST request, use `bodyParser.json()` as the middleware as shown below:

```javascript
app.use(bodyParser.json());
```

The data received in the request is available in the `req.body` object.

all these statements need to go above any routes that might have been defined.

### Get Data from POST Requests

There are several other http methods other than GET and POST. And by convention there is a correspondence between the http verb, and the operation you are going to execute on the server. The conventional mapping is:

POST (sometimes PUT) - Create a new resource using the information sent with the request,

GET - Read an existing resource without modifying it,

PUT or PATCH (sometimes POST) - Update a resource using the data sent,

DELETE => Delete a resource.

There are also a couple of other methods which are used to negotiate a connection with the server. Except from GET, all the other methods listed above can have a payload (i.e. the data into the request body). The body-parser middleware works with these methods as well.

------

### Extract dynamic params

```js
router.get('products/:productId')
```

-> order of the routes matters! put the specific routes before the dynamic routes

access param =>

```
  const prodId = req.params.productId;
```

------

### Using Query Items

query-parameters

```
...url?edit=true&title=new
```

-> access:

```
req.query.parameter
```

-> the extracted value is always a string! `"true"` instead of `true`

------

## 
# Express

[express - install](http://expressjs.com/en/starter/installing.html)

Install:

```
npm i express
```

---

## Minimal Express-Server

```js
const express = require('express');

const app = express();

app.listen(3000)

// is the same as:
// const server = http.createServer(app);
// server.listen(3000);

```

------

## [Helloworld Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#helloworld_express)

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
```

------

##### create [Express application](https://expressjs.com/en/4x/api.html#app).

```js
const express = require('express');
const app = express();
```

------

## Basic Webserver

```js
const express = require('express');
const app = express(); //creates express-app-object

app.use(express.static(__dirname + '/public')); // public-foder

const port = process.env.PORT || 3000;

// root-folder
app.get('/', (req, res) => {
  console.log('A request was made to the root');
  res.send('A request was made to the root');
});

app.listen(port, () => {
  console.log(`Server running and listening on port ${port}`);
});
```

---



---

## stop running app

ctrl-c

---





---

## Requests

`get` - most basic request. most common. links...

`post` - zb. form -› secure

```js
app.get('route', function(req, res) {});
```

`req` - contains a lot of informartion

- `req.query` - query-object
- `User-agent` - info about the browser

---

## Query

`query-parameter` extra information, that is send via the http-get-request

`?variable=value-string`

e.g..

```
http://localhost:3000/about?name=Joe&age=39
```

```js
const express = require('express');
const app = express(); //creates express-app-object

const port = 3000; // use port 3000

app.listen(port, function() {
  console.log(`Server running and listening on port ${port}`);
});

// root-folder
app.get('/', function(req, res) {
  console.log('A request was made to the root');
  res.send('Hello');
});

// about-folder
app.get('/about', function(req, res) {
  console.log('A request was made to about');
  const name = req.query.name;
  if (name) {
    res.send(
      `<h1>About:</h1> 
       <p>Hello ${name}, you are ${req.query.age} old ...</p>`
    );
  } else {
    res.send(`You nameless bastard!!`);
  }
});
```

---


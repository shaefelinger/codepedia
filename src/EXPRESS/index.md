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

## Basic Webserver

```js
const express = require('express');
const app = express(); //creates express-app-object

app.use(express.static(__dirname + '/public')); // public-foder

const port = process.env.PORT || 3000;

// root-folder
app.get('/', function(req, res) {
  console.log('A request was made to the root');
  res.send('A request was made to the root');
});

app.listen(port, () => {
  console.log(`Server running and listening on port ${port}`);
});
```

---

### localhost

`127.0.0.1` oder `localhost` -> the computer itself !!

---

### stop running app

ctrl-c

---

## URLs

allways have a port! If you dont' enter a port, the browser uses a default port!

80 - http

443 - https

3000 - ok for developement

<img src="./assets/how urls work.png" alt="how urls work" style="zoom: 40%;" />

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

## Response

```js
res.send('Hello World');
```

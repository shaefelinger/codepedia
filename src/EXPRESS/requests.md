# Requests - Express

### Parsing Incoming Requests



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




# File Path - Express 

Import the path-module -> builds the path, so that works on both windows and linux systems. windows uses `\` linux uses `/`

```js
const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
});

module.exports = router;
```

- `__dirname` is the path of the file. 
- if it is in a module, you have to go up one level by adding `'../'` or (preferable) just `'..'`
- when using `path`, don't add `/`

------

#### Using a helper-function for Navigation

eg. in `/util`

```js
const path = require('path');

module.exports = path.dirname(require.main.filename);
```

and then use it to build the rootDir of the path:

```js
const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
```


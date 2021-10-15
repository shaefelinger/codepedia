# .ENV

## Use the .env File

a hidden file that is used to pass environment variables to your application.

This file is secret, no one but you can access it, and it can be used to store data that you want to keep private or hidden. For example, you can store API keys from external services or your database URI. You can also use it to store configuration options. 

- environment variables are accessible from the app as `process.env.VAR_NAME`. 
- `process.env`  is a global Node object, and variables are passed as strings. 
- By convention, the variable names are all uppercase, with words separated by an underscore
- `.env` is a shell file, so you don’t need to wrap names or values in quotes

- there cannot be space around the equals sign when you are assigning values to your variables, e.g. `VAR_NAME=value`
- Usually, you will put each variable definition on a separate line.

## DOTENV

Loads environment variables from a `.env` file into [`process.env`](https://nodejs.org/docs/latest/api/process.html#process_process_env)

https://www.npmjs.com/package/dotenv

```
npm i dotenv
```

As early as possible in your application, require and configure dotenv.

```
require('dotenv').config()
```

Create a `.env` file in the root directory

```
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```

`process.env` now has the keys and values you defined in your `.env` file.

```js
const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})
```

> convention: also add a `.env.example` file, that shows the structure

[Github collection of .gitignore-templates](https://github.com/github/gitignore)


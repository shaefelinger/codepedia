# VS Code Vue

[Vuemastery optimizing VScode](https://www.vuemastery.com/blog/vs-code-for-vuejs-developers/)

- #### Vetur

- Syntax Highlighting
- Snippets
- Emmet

- #### ES Lint

- #### Prettier



#### Configuring ESLint

Create an **.eslintrc.js** file as a dedicated configuration file,  instead of the `eslintConfig` option from **package.json**.

> One of the benefits of having an individual config file is that it can be written in JavaScript, and JavaScript syntax is more flexible than JSON.

```
// .eslintrc.js
```



```
quotes: ['error', 'single']
// semi: ['error', 'always']
```

> ??? So, in our .eslintrc.js file, we’ll add:

> ```
> 'plugin:prettier/recommended'
> ```

#### Configuring Prettier

Prettier configuration file, to add some special settings

 `.prettierrc.js`

```
// .prettierrc.js

module.exports = {
	singleQuote: true,
	semi: false
}
```

### VS Code User Settings

- Turn off Vetur’s linting feature.Iinstead rely on ESLint + Prettier 

  ```js
  "vetur.validation.template": false
  ```

  

- Tell ESLint what languages  to validate (vue, html, and javascript) and set `autoFix` to `true` on each:

  ```js
   "eslint.validate": [
          {
              "language": "vue",
              "autoFix": true
          },
          {
              "language": "html",
              "autoFix": true
          },
          {
              "language": "javascript",
              "autoFix": true
          }
      ],
  ```

  

------

### Extensions

- Vue VSCode Snippets
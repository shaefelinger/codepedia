# VS Code Settings Vue

[Vuemastery optimizing VScode](https://www.vuemastery.com/blog/vs-code-for-vuejs-developers/)

- #### Vetur

- Syntax Highlighting

- Snippets

- Emmet

- #### ES Lint

- #### Prettier

#### Configuring Prettier

Prettier configuration file, to add some special settings

 `.prettierrc.js`

```
// .prettierrc.js

module.exports = {
	singleQuote: true,
	semi: true
}
```



 #### Configuring ESLint

Create an **.eslintrc.js** file as a dedicated configuration file,  instead of the `eslintConfig` option from **package.json**. Can be written in JavaScript syntax -› more flexible than JSON.



`.eslintrc.js`

add

```js
"extends": [
  "plugin:vue/vue3-essential",
  "@vue/prettier", // ADD
  "eslint:recommended"
],
```

maybe add to rules:

```
  rules: {
    ...
    'no-unused-vars': ['warn'],
  },
```



<!-- > ``` -->
<!-- > quotes: ['error', 'single'] -->
<!-- > // semi: ['error', 'always'] -->
<!-- > ``` -->




<!--  > ??? So, in our .eslintrc.js file, we’ll add: -->

<!-- > ``` -->
<!-- > 'plugin:prettier/recommended' -->
<!-- > ``` -->



### VS Code User Settings

- Turn off Vetur’s linting feature. Instead rely on ESLint + Prettier 

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

Vue VSCode Snippets *Sarah Drasner*

- `vif` :  `v-if` statement
- `von` :  full event handler
-  `vdata` :  data property
- `vprops`
- `vimport-lib`



>  if you’re using this Snippets extension,  disable Vetur’s scaffold feature: 
>
> vs code `settings.json`:
>
> ```
> "vetur.completion.useScaffoldSnippets": false,
> ```


# NPM



## NPM - Node package manager

[npmjs.com/](https://www.npmjs.com/)

## init

```js
npm init // -> (accept defaults).
```

Creates `package.json`. and `node-modules-folder` 

In the section **dependencies **you see all the packages that are included for your project. They have the format

```json
"package-name": "version"
```

`package-lock.json` -> computer-generated. never change

------

## install all project-packages

`npm i`  (or `npm install`) - downloads all dependencies (even after deleting the node-modules-folder)

------

## Install package

-> This installs the package for your project and automatically adds it to your package.json file.

```js
npm i package-name// or exactly the same:
npm install package-name
```

> `--save//`  add dependencies to package.json. No longer needed

> check for vulnerabilities... be careful!  check how many downloads per week!!

------

## Install package globally:

```js
npm i -g package-name// global
```

------

## Install dev dependencies

```
npm i -D package-name
```




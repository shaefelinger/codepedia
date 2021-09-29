# NPM

**N**ode **P**ackage **M**anager

[npmjs.com/](https://www.npmjs.com/)

NPM is installed with node

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

#### Add Scripts

`start` is a special script name

```js
"scripts": {
	"start": "node app.js",
}
```

->  `npm start` good practice

if you use a non-reserverd name:

`npm run script-name`

------

## install all project-packages

`npm i`  (or `npm install`) - downloads all dependencies (even after deleting the node-modules-folder)



You can always delete the node-modules folder and run `npm i` later again

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

`--save-dev` od `-D`

------

## Nodemon

```
npm i -D nodemon
```

then change the start-script in package.json:

```
 "scripts": {
    "start": "nodemon app.js",
```

You could install `nodemon` globally if you wanted (this is NOT required though - because we can just run it locally)


# NPM

**N**ode **P**ackage **M**anager

We can access NPM, a registry of hundreds of thousands of packages of re-usable code from other developers, directly through our terminal.

[npmjs.com/](https://www.npmjs.com/)

NPM is installed with node

------

## package.json

The `package.json` file is the center of any Node.js project or npm package.

- A single JSON object where information is stored in key-value pairs. 
- only two required fields; "name" and "version", but it’s good practice to provide additional information 

- ```json
  "author": "Jane Doe",
  ```

- ```json
  "description": "A project that does something awesome",
  ```

  - a short, but informative description about your project 

- ```json
  "keywords": [ "descriptive", "related", "words" ],
  ```

- ```json
  "license": "MIT",
  ```

  - ​	 common licenses for open source projects include MIT and BSD.

- ```json
  "version": "1.2.0",
  ```

  - required

- ```json
  "dependencies": {
    "package-name": "version",
    "express": "4.14.0"
  }
  ```

  > **Note:** Moment is a handy library for working with time and dates.

------

##  `init`

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

## Add Scripts

`start` is a special script name

```js
"scripts": {
	"start": "node app.js",
}
```

->  `npm start` good practice

if you use a non-reserverd name:

`npm run script-name`



### [Running tasks](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment#running_tasks)

you can also define *named* scripts in your **package.json** files and call NPM to execute them with the [run-script](https://docs.npmjs.com/cli/run-script) command. 

> **Note:** Task runners like [Gulp](http://gulpjs.com/) and [Grunt](http://gruntjs.com/) can also be used to run tests and other external tools.

```
"scripts": {
  ...
  "lint": "eslint src/js"
  ...
}
```

We would then be able to run *eslint* using NPM by calling:

```
npm run-script lint
# OR (using the alias)
npm run lint
```





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

##### remove dependency

just remove the corresponding key-value pair for that package from your dependencies.



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

##### [Development dependencies](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment#development_dependencies)

For example, to use the popular JavaScript Linting tool [eslint](http://eslint.org/) you would call NPM as shown:

```
npm install eslint --save-dev
```



------

## Semantic Versioning

Semantic Versioning (SemVer), an industry standard for software versioning aiming to make it easier to manage dependencies. 

This is how Semantic Versioning works according to the official website:

```json
"package": "MAJOR.MINOR.PATCH"
```

The MAJOR version should increment when you make incompatible API changes. The MINOR version should increment when you add functionality in a backwards-compatible manner. The PATCH version should increment when you make backwards-compatible bug fixes. This means that PATCHes are bug fixes and MINORs add new features but neither of them break what worked before. Finally, MAJORs add changes that won’t work with earlier versions.

##### Use the Tilde-Character to Always Use the Latest Patch Version

 in most use cases, you don’t want to miss bug fixes

To allow an npm dependency to update to the latest PATCH version, you can prefix the dependency’s version with the tilde (`~`) character. 

```
"package": "~1.3.8"
```

-> any 1.3.x Version

##### Use the Caret-Character to Use the Latest Minor Version

the caret will allow both MINOR updates and PATCHes

```json
"package": "^1.3.8"
```

 any 1.x.x version




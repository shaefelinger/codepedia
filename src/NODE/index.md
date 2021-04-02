# Node

[nodejs.org](https://nodejs.org)

[Understand the event queue](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

------

## Node REPL

Read - Evaluation - Print - Loop

```
node
```

- use JS in the Terminal
- like working in the devtools-console

### exit repl

`.exit` or 2x  `ctrl-c` 

### multiple lines

- to type multiple lines  type `.editor` while in the REPL. 
- control + d when you’re ready for the input to be evaluated.

------


## Node-specific global elements 

Every Node-specific global property sits inside the [the Node `global` object](https://nodejs.org/api/globals.html). This object contains a number of useful properties and methods that are available anywhere in the Node environment.

```js
console.log(Object.keys(global));
```

One difference from running JavaScript on the browser:  since we don’t have a DOM here, there’s no `Window` object.

------

### Running a Program with Node

```bash
$ node myProgram.js
```



------

## Modules and require()

Node brings a bunch of predefined modules. These you can use without installation. If you want to use other modules, you need to use the built-in `require()` function.

```
const http = require('http');
```

The difference between module and package:
**Module:** a JavaScript library, or simply a set of JavaScript functions

**Package:** one or more modules packaged together. 

------

## Package.json

If you need a certain package for your project, you put it into a file called **package.json**.



### Workflow

```js
npm init // -> (accept defaults).
```

Creates `package.json`. and `node-modules-folder` -> alles was npm downloaded



In the section **dependencies **you see all the packages that are included for your project. They have the format

```json
"package-name": "version"
```





`package-lock.json` -> computer-generated. never change

> "main": im json ist nur wenn ich eigene npm-packages bauen will

------



## NPM - Node package manager

[npmjs.com/](https://www.npmjs.com/)

## Install

Install Packages, usually the install is locally for that project.

```js
npm i // or exactly the same:
npm install 
```

`--save//`  add dependencies to package.json. No longer needed

> check for vulnerabilities... be careful! imer checken ob viele leute es benutzen!!

------

## To install something globally:

```js
npm init -g // global
```

------




`npm i`  (or `npm install`) - downloads all dependencies (even after deleting the node-modules-folder)

------

## node and git

- **Best practice: **If you use git, always add and commit your **package.json** and **package-lock.json** file.

- ### official npm `.gitignore` [npm official .gitignore](files/npm official .gitignore) 

------


## Readline-Sync

[readline-sync Documentation](https://www.npmjs.com/package/readline-sync#basic_options-hideechoback)



Readline-Sync ermöglicht User-Input für node.js

### Installieren (auf Folder Basis):

npm init -< erzeigt package.json

npm install readline-sync

-> erzeugt Ordner: 'node_modules' (wird in Git nicht ge-added

### Anwendung

let readlineSync = require (‚headline-sync‘)

let name = readlineSync.question („frage“);

Readline-Sync ermöglicht User-Input für node.js

### Installieren (auf Folder Basis):

npm init -< erzeigt package.json

npm install readline-sync

-> erzeugt Ordner: 'node_modules' (wird in Git nicht ge-added

### Anwendung

```js
let readlineSync = require (‚readline-sync‘)

let name = readlineSync.question („frage“);
```


------

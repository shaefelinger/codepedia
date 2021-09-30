# Node

## Basics

### What is Node.js?

Node is a a **runtime environment** for executing JavaScript code.

In 2009, **Ryan Dahl** took the V8 JavaScript engine of the Chrome browser and embedded it in a C++ program to be able to run it outside of a browser and called it **Node**.

------

## Node.js Properties and Terms



##### Single-threaded

Node is single-threaded, which means it uses only one thread.

##### Callback-based

A callback is a function that is passed to another function. It is called if a certain state is reached, e.g. the calculation in the function has a result.

##### Event Loop

This is an infinite loop that is run over and over and over, and what is added to it (events), is executed in the next iteration of the loop.

##### Call Stack

This is a place where Node stores all the functions that need to be run next.

##### Callback Queue

A place where node.js puts all callbacks it encounters

##### Task-Queue

A queue where node.js stores all things that need to be executed before they can be put on the call stack

[Understand the event queue](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

------



## Check node-version

```
node -v
```

------

## Node REPL

Read - Evaluation - Print - Loop

REPLs are processes that **r**ead, **e**valuate, **p**rint, and repeat (**l**oop), and Node.js comes with its own REPL we can access in our terminal with the `node` command.

Playground

```
node
>
```

- use JS in the Terminal
- like working in the devtools-console

### exit repl

`.exit` or 2x  `ctrl-c`  or `control + d` 

### multiple lines

- to type multiple lines  type `.editor` while in the REPL. 
- `control + d`  when you’re ready for the input to be evaluated.



------

## Running a Program with Node

We run JavaScript programs with Node in the terminal by typing `node` followed by the file name (if we’re in the same directory) or the absolute path of the file.

```bash
$ node myProgram.js
```

------

## Readline-Sync

[readline-sync Documentation](https://www.npmjs.com/package/readline-sync#basic_options-hideechoback)

Readline-Sync enables User-Input für node.js / command-line

### Anwendung

```js
let readlineSync = require ('readline-sync')

let name = readlineSync.question ('Question: ');
```

------


## Node-specific global elements 

Every Node-specific global property sits inside the [the Node `global` object](https://nodejs.org/api/globals.html). This object contains a number of useful properties and methods that are available anywhere in the Node environment.

```js
console.log(Object.keys(global));
```

One difference from running JavaScript on the browser:  since we don’t have a DOM here, there’s no `Window` object.

------

## node and git

- **Best practice: **If you use git, always add and commit your **package.json** and **package-lock.json** file.

- official npm `.gitignore` [npm official .gitignore](files/npm official .gitignore) 


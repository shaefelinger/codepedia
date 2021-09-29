# Node - The Process Object

A *process* is the instance of a computer program that is being executed. (-› Activity Monitor)

Node has a global `process` object with useful methods and information about the current process.

https://nodejs.org/api/process.html

## `process.env` 

is an object which stores and controls information about the environment in which the process is currently running.

- contains a `PWD` property which holds a string with the directory in which the current process is located. 

- -› convention is to add a property to `process.env` with the key `NODE_ENV` and a value of either `production` or `development`.

- ```js
  if (process.env.NODE_ENV === 'development'){
    console.log('Testing! Testing! Does everything work?');
  }
  ```

## `process.memoryUsage()` 

returns information on the CPU demands of the current process. 

similar to this:

```json
{ rss: 26247168,
  heapTotal: 5767168,
  heapUsed: 3573032,
  external: 8772 }
```

*Heap* can mean different things in different contexts: a heap can refer to [a specific data structure](https://en.wikipedia.org/wiki/Heap_(data_structure)), but it can also refer to the a block of [computer memory](https://en.wikipedia.org/wiki/Memory_management).

`process.memoryUsage().heapUsed` will return a number representing how many bytes of memory the current process is using.

## `process.argv`

holds an array of command line values provided when the current process was initiated.

0. absolute path to Node, which ran the process

1. path to the file that’s running
2. following elements will be any command line arguments provided when the process was initiated

```bash
node myProgram.js testing several features
```

```js
console.log(process.argv[3]); // Prints 'several'
```

`process.argv[2]` -› first parameter


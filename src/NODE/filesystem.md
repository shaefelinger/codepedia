# Node Filesystem & Streams

## `fs` module

- The Node `fs` core module is an API for interacting with the **f**ile **s**ystem.



```js
const fs = require('fs');

fs.writeFileSync('hello.txt', 'Hello from node.js');
// creates text-file with the content "Hello from node.js"
```

`fs.writeFileSync('')` writes a file to the filesystem

------

The Node `fs` core module is an API for interacting with the **f**ile **s**ystem. It was modeled after the [POSIX](https://en.wikipedia.org/wiki/POSIX) standard for interacting with the filesystem.

Each method available through the `fs` module has a synchronous version and an asynchronous version. 

##### `.readFile()` 

method which **read**s data from a provided **file**:

```js
const fs = require('fs');
 
let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};
 
fs.readFile('./file.txt', 'utf-8', readDataCallback);
```

 three arguments:

1. The first argument is a string that contains a path to the file **file.txt**.
2. The second argument is a string specifying the file’s [character encoding](https://en.wikipedia.org/wiki/Character_encoding) (usually ‘utf-8’ for text files).
3. The third argument is the callback function to be invoked when the asynchronous task of reading from the file system is complete. Node will pass the contents of **file.txt** into the provided callback as its second argument.

------

`fs.readFile()` - reads entire content of a file (for very big files there are better ways (readStream))

put a callback in `fetchAll(cb)` -> this will run, when the fetch is done

------

## Readable Streams

- *Streams* allow us to read or write data piece by piece instead of all at once.

, data isn’t processed all at once but rather sequentially, piece by piece, in what is known as a *stream*

One of the simplest uses of streams is reading and writing to files line-by-line. To read files line-by-line, we can use the `.createInterface()` method from the `readline` core module. `.createInterface()` returns an `EventEmitter` set up to emit `'line'` events:

```js
const readline = require('readline');
const fs = require('fs');
 
const myInterface = readline.createInterface({
  input: fs.createReadStream('text.txt')
});
 
myInterface.on('line', (fileLine) => {
  console.log(`The line read: ${fileLine}`);
});
```

- We require in the `readline` and `fs` core modules.
- We assign to `myInterface` the returned value from invoking `readline.createInterface()` with an object containing our designated `input`.
- We set our `input` to `fs.createReadStream('text.txt')` which will create a stream from the **text.txt** file.
- Next we assign a listener callback to execute when `line` events are emitted. A `'line'` event will be emitted after each line from the file is read.
- Our listener callback will log to the console `'The line read: [fileLine]'`, where `[fileLine]` is the line just read.

------

## Writable Streams

Create a writeable stream to a file using the `fs.createWriteStream()` method:

```js
const fs = require('fs')
 
const fileStream = fs.createWriteStream('output.txt');
 
fileStream.write('This is the first line!'); 
fileStream.write('This is the second line!');
fileStream.end();
```

n the code above, we set the output file as **output.txt**. Then we `.write()` lines to the file. Unlike a readable stream, which ends when it has no more data to read, a writable stream could remain open indefinitely. We can indicate the end of a writable stream with the `.end()` method.

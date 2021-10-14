# Nested Callbacks

JS can handle callbacks.

When your application grows more complex, you can have callbacks in callbacks in callbacks...

hard to read and hard to understand -›  callback hell

> **Tip:** Using callbacks can be quite "messy"  This problem is commonly known as "callback hell". This problem can be reduced by good coding practices (see http://callbackhell.com/), using a module like [async](https://www.npmjs.com/package/async), or moving to ES6 features like [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

> **Note:** A common convention for Node and Express is to use error-first callbacks: the first value in your *callback functions* is an error value, while subsequent arguments contain success data.  good explanation: [The Node.js Way - Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js) (fredkschott.com).

[MDN Using asynchronous APIs](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#using_asynchronous_apis)

Using callbacks is slightly old-fashioned now, but you'll still see them in use in a number of older-but-still-commonly-used APIs.

```js
btn.addEventListener('click', () => {
  alert('You clicked me!');

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});
```

Note that not all callbacks are async — some run synchronously. An example is when we use [`Array.prototype.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)



> Better to use Promises
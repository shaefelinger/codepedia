# Helper function - `to()`

Helper-Function:

```js
function to(promise) {
  return promise.then(response => response.json())
    .then(data => ({ data, error: null }))
    .catch(error => ({ data: null, error }));
}
```

The 'to' function is a helper function that abstracts away the handling of promises. 
It accepts a promise as an argument, i.e. returned from a call to the fetch api 
and 'thens' down into the json and the data content.

It returns a plain javascript object with two properties: data and error.

use this pattern:

```js
// ... some code ... inside async function

const { data, error } = await to(fetch( /*arguments*/ ))

if (error) {
   // -- handle error, probably exit function
}

... some code - handle data...
```

##### Examples:

```js
const gettodo = async () => {
  const { data, error } = await to(fetch('https://jsonplaceholder.typicode.com/todos/3'));
  if (error) {
    console.log('🤯', error);
  } else {
    console.log(data);
  }
};

gettodo()
```

or

```js
const { data, error } = await to(getCharacterList());
	if (error) {
		return;
	}
	//..handle data…
//

function getCharacterList() {
  return fetch(url + 'characters');
}
```


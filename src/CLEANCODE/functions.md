# Functions (& Methods)



Extremely important to write clean functions. 

Functions are made up of three main parts:

- name
- parameters (if any) 
- body

## Minimize The Number Of Parameters

The **fewer parameters a function has, the easier it is to read and call** (and it' easier to read and understand statements where a function is called).

Example:

```js
createUser('Max', 'Max', 'test@test.com', 'testers', 31, ['Sports',
'Cooking']);
```

This is

- difficult to call - 
  - you have to remember **which parameters** are required and their **order** 
- difficult to read

### How Many Parameters Are Okay?

Generally, **fewer is better**.

- more than 3 sould be avoided

Functions **without paramters are easy to read** and digest. For example:

```js
createSession();
user.save();
```

functions with **one parameter** are also easy:

```js
isValid(email);
file.write(data);
```

Functions with **two parameters can be okay** - depends on the context and the kind of function.

```js
login('test@test.com', 'testers');
createProduct('Carpet', 12.99);
```

**More than two parameters should mostly be avoided** - can be hard to call and read

### Reducing The Number Of Parameters

**You can replace multiple parameters with an object or an array**

```js
createRectangle({x: 10, y: 9, width: 30, height: 12}); 
```

## Keep Functions Small

the **function body should also be kept small**.

- **less code to read and understand**. 
- also forces you to write highly readable code - for example by extracting other functions which use good naming.
- the goal: Having short, focused functions which are **easy to read, to understand and to maintain**! 

instead of this:

```js
function renderContent(renderInformation) {
  const element = renderInformation.element;
  if (element === 'script' || element === 'SCRIPT') {
    throw new Error('Invalid element.');
  }

  let partialOpeningTag = '<' + element;

  const attributes = renderInformation.attributes;

  for (const attribute of attributes) {
    partialOpeningTag =
      partialOpeningTag + ' ' + attribute.name + '="' + attribute.value + '"';
  }

  const openingTag = partialOpeningTag + '>';

  const closingTag = '</' + element + '>';
  const content = renderInformation.content;

  const template = openingTag + content + closingTag;

  const rootElement = renderInformation.root;

  rootElement.innerHTML = template;
}
```

do this:

```js
function renderContent(renderInformation) {
  const element = renderInformation.element;
  const rootElement = renderInformation.root;

  validateElementType(element);

  const content = createRenderableContent(renderInformation);

  renderOnRoot(rootElement, content);
}
```

and split into multiple small functions

### Do One Thing

**functions should just do one thing**. Exactly one thing. This ensures that a function doesn't do too much.
But what is "one thing"?

- A function is considered to do just one thing if all operations in the function body are **on the same level of abstraction** and **one level below** the function name.



### Levels of Abstraction

- dont mix

There **high-level and low-level operations in programming** - and then a **huge bandwidth between** these two extremes. Consider this example:

```js
function connectToDatabase(uri) {
  if (uri === '') {
    console.log('Invalid URI!');
    return; 
  }
  const db = new Database(uri);
  db.connect();
}
```



 `db.connect()` is a high level operation -  we call a function which then does a bunch of things under the hood.

`console.log(...)` on the other hand, just like making that `uri === ''` comparison is a lower level operation. A higher level equivalent would be code like this:

```js
if (uriIsValid(uri)) {
 showError('Invalid URI!');
 return;
}
```



Now the implementation details are "**abstracted away**".

**Low levels of abstraction aren't bad though**! You just should **not mix them with higher level** operations since that can cause confusion and make code harder to read.

-  try to write functions where **all operations are on the same level** of abstraction which then in turn should be exactly **one level below the function name** (i.e. the level ob abstraction implied by the function name).


- can be tricky and requires experience 


### Operations Should Be One Level Below The Function Name

example:

```js
function login(email, password) {
  validateUserInput(email, password);
  verifyCredentials(email, password);
  createSession();
}
```



- The login function clearly wants to do all the steps that are required to log a user in. That definitely includes input validation, credential verification and then the creation of some session, token or anything like that.


- All three operations are on the same level of abstraction (pretty high levels in this case) and one level below the function name.
-  always leaves **room for discussion and interpretation**.

### Avoid Mixing Levels Of Abstraction

 decreases readability and can cause confusion.

example:

```js
function printDocument(documentPath) {
  const fsConfig = { mode: 'read', onError: 'retry' };
  const document = fileSystem.readFile(documentPath, fsConfig);
  const printer = new Printer('pdf');
  printer.print(document);
}
```



It's not a lot of code but it mixes levels of abstractions. 

This version is cleaner:

```js
function printDocument(documentPath) {
 const document = readFromFile(documentPath);
 const printer = new Printer('pdf');
 printer.print(document);
}
```

Of course, you could argue, that this could be split up even more:

```js
function printDocument(documentPath) {
 const document = readFromFile(documentPath);
 printFile(document);
}
```



### Rules Of Thumb

1. **Extract code that works on the same functionality / is closely related**
2. **Extract code that requires more interpretation than the surrounding code**

Here's an example for rule #1:

```js
function updateUser(userData) {
  validateUserData(userData);
  const user = findUserById(userData.id);
  user.setAge(userData.age);
  user.setName(userData.name);
  user.save();
}  
```



`setAge()` and `setName()` have the same goal / functionality: They update data in the user object. `save()` then confirms these changes.

You could therefore split the function:

```js
function updateUser(userData) {
  validateUserData(userData);
  applyUpdate(userData);
}

function applyUpdate(userData) {
  const user = findUserById(userData.id);
  user.setAge(userData.age);
  user.setName(userData.name);
  user.save();
}
```

-> removes another problem: Mixed levels of abstraction in the original function.

 **example for rule #2:**

```js
function processTransaction(transaction) {
  if (transaction.type === 'UNKNOWN') {
    throw new Error('Invalid transaction type.');
  }
  if (transaction.type === 'PAYMENT') {
    processPayment(transaction);
	} 
}
```

you could refactor this to:

```js
function processTransaction(transaction) {
  validateTransaction(transaction);
  if (isPayment(transaction)) {
    processPayment(transaction);
  }
}
```

-> all very readable 


# Comments & Formatting - CleanCode

Comments are mostly bad - generally avoid

- too many comments can make the code harder to read

## Bad Comments

There are plenty of bad comments which you can add to your code. In the best case, "bad" means "**redundant**" in the worst case, it means "**confusing**" or even "**misleading**".

### Dividers & Markers

```js
// !!!!!!!
// CLASSES
// !!!!!!!
class User { ... }
class Product { ... }
// !!!!!!!
// MAIN
// !!!!!!!
const user = new User(...);
```

- Dividers and markers are redundant. They stop your reading flow and make analyzing the code file **harder**.

- If you code is written in a clean way (i.e. you use proper names etc.), it's obvious what your different code parts are about.

### Redundant Information

```js
function createUser() { // creating a new user
  ...
```

> This **adds nothing**. Instead, just use proper names!

### Commented-Out Code

```
// function createProduct() {
//   ...
// }
```

- try to **avoid commenting out code**. Instead: Just **delete** it.

- When using **source control** (e.g. Git), you can always bring back old code if you need it


### Misleading Comments

Definitely avoid:

```js
function login() { // create a new user
  ...
```

## Good Comments

#### Legal Information

In some projects and/ or companies, you could be required to add legal information to your code files.

For example:

```
   // (c) 2022 Steffen Häfelinger
```

#### "Required" Explanations

- In rare cases, adding extra explanations next to your code does help - **even if you named everything properly**.


- For example: regular expressions: **Regular expressions are not that easy to read**


#### Warnings

Also in rare cases, warnings next to some code could make sense - for example if a unit test may take a long time to complete or if a certain functionality won't work in certain environments.

```js
function fetchTestData() { ... } // requires local dev server
# Min. 8 characters, at least: one letter, one number, one special character
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?
&]{8,}$/
```

#### Todo Notes

```js
function login(email, password) {
  // todo: add password validation
}
```

- Dont't over-do it, but "Todo" notes can be okay.


- it's better to implement a feature completely or not at all - but leaving a "Todo" comment here and there won't hurt.
- modern IDEs help you find these comments.

Obviously, it will not help readability (and your code in general), if you just have a bunch of "Todo" comments everywhere!

## Formatting

Proper **code formatting** (i.e. keeping lines short, adding blank lines etc.)  **helps a lot with reading** and understanding code.

### Vertical Formatting

Adding blank lines and also  grouping related concepts together and adding space between distanct concepts.

-  concept of "Vertical Density" and "Vertical Distance".


#### Vertical Density & Vertical Distance

**Vertical density** simply means that related concepts should be **kept closely together**. **Vertical distance** means that concepts which are not closely related **should be separated**.

That affects both individual statements inside of a function as well as functions/ methods as a whole.

```js
function signup(email, password) {
  if (!email.includes('@') || password.length < 7) {
    throw new Error('Invalid input!');
  }
  
  const user = new User(email, password);
  user.saveToDatabase();
}
```

- **functions that call other functions should be kept close together** - with blank lines in between but not on different ends of the code file. 

  A function A which is called by function B should be (closely) **below function B** - 

  (at least if your programming language allows such an ordering.)

  ```js
  function login(email, password) {
    validate(email, passsword);
    ...
  }
  function validate(email, password) {...}
  ```


- If functions are **not directly working together** (i.e. not directly calling each other) it is okay if there is **more space** (e.g. other functions) in between. 

#### Splitting Code Across Files

- good practice to split bigger code code across multiple files and to then use import and export statements to connect your code. 

## Horizontal Formatting

Horizontal formatting of course is about using the horizontal space in your code file - that primarily means that lines should be kept short and readable.



### Breaking Lines Into Multiple Lines

- Good code should use **relatively short lines** and you should consider splitting code across multiple lines if it becomes too long.
- avoid long lines. eg put options in a variable instead of everything in the same line

### Using Short Names

Dont' waste space and make names harder to read by **being too specific**. 

`const loggedInUserAuthenticatedByEmailAndPassword = ..`. is way too specific! `loggedInUser` is better!

------

## JavaScript Formatting

### Use a formatting tool...

### Use consistent capitalization

- JavaScript is untyped, so capitalization tells you a lot about the variables, functions, etc. 
- you can choose whatever you want, but be consistent.

**Bad:**

```js
const DAYS_IN_WEEK = 7;
const daysInMonth = 30;

const songs = ["Back In Black", "Stairway to Heaven", "Hey Jude"];
const Artists = ["ACDC", "Led Zeppelin", "The Beatles"];

function eraseDatabase() {}
function restore_database() {}

class animal {}
class Alpaca {}
```

**Good:**

```js
const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 30;

const SONGS = ["Back In Black", "Stairway to Heaven", "Hey Jude"];
const ARTISTS = ["ACDC", "Led Zeppelin", "The Beatles"];

function eraseDatabase() {}
function restoreDatabase() {}

class Animal {}
class Alpaca {}
```

### Function callers and callees should be close

- If a function calls another, keep those functions vertically close in the source file. 

- Ideally, the caller is right above the callee. (We tend to read code from top-to-bottom, like a newspaper)

**Bad:**

```js
class PerformanceReview {
  constructor(employee) {
    this.employee = employee;
  }

  lookupPeers() {
    return db.lookup(this.employee, "peers");
  }

  lookupManager() {
    return db.lookup(this.employee, "manager");
  }

  getPeerReviews() {
    const peers = this.lookupPeers();
    // ...
  }

  perfReview() {
    this.getPeerReviews();
    this.getManagerReview();
    this.getSelfReview();
  }

  getManagerReview() {
    const manager = this.lookupManager();
  }

  getSelfReview() {
    // ...
  }
}

const review = new PerformanceReview(employee);
review.perfReview();
```

**Good:**

```js
class PerformanceReview {
  constructor(employee) {
    this.employee = employee;
  }

  perfReview() {
    this.getPeerReviews();
    this.getManagerReview();
    this.getSelfReview();
  }

  getPeerReviews() {
    const peers = this.lookupPeers();
    // ...
  }

  lookupPeers() {
    return db.lookup(this.employee, "peers");
  }

  getManagerReview() {
    const manager = this.lookupManager();
  }

  lookupManager() {
    return db.lookup(this.employee, "manager");
  }

  getSelfReview() {
    // ...
  }
}

const review = new PerformanceReview(employee);
review.perfReview();
```

------

## JavaScript Comments

### Only comment things that have business logic complexity.

Comments are an apology, not a requirement. Good code *mostly* documents itself.

### Avoid positional markers

- They usually just add noise. 
- Let the functions and variable names along with the proper indentation and formatting give the visual structure to your code.

**Bad:**

```js
////////////////////////////////////////////////////////////////////////////////
// Scope Model Instantiation
////////////////////////////////////////////////////////////////////////////////
$scope.model = {
  menu: "foo",
  nav: "bar"
};

////////////////////////////////////////////////////////////////////////////////
// Action setup
////////////////////////////////////////////////////////////////////////////////
const actions = function() {
  // ...
};
```

**Good:**

```js
$scope.model = {
  menu: "foo",
  nav: "bar"
};

const actions = function() {
  // ...
};
```
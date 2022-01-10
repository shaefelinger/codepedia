# Naming - CleanCode

Naming things (_= variables, properties, functions, methods, classes_) correctly and in an understandable way is **extremely important**

- should be meaningful
- you should know what is stored in a variable or what a function does without loking at the code
-  will require some practice and often **multiple iterations** -  by iterating and improving code over time!

## Be Descriptive

Names have **one simple purpose** - they should **describe**:

- what's stored in a variable or property
- or what a function or method does.
- Or what kind of object will be created when instantiating a class
- avoid redundacy (no unnesscesary information)

| Variables & Constants                                        | Funcions/Methods                                   | Classes                                      |
| ------------------------------------------------------------ | -------------------------------------------------- | -------------------------------------------- |
| Data Container                                               | Commands or calculated values                      | to create "things"                           |
| e.g. user input data, validatoin results, a list of products | e.g. send data to server, check if input is valid  | e.g. a user, a product, a http request body  |
| use **nouns** or short phrases with **adjectives**           | use **verbs** or short phrases with **adjectives** | use **nouns** or shortphrases with **nouns** |
| `userData`, `isValid`                                        | `sendData()`, `inputIsValid()`                     | `class User {...}`, `class RequestBody()`    |



## Naming Rules

### Variables & Properties

Variables and properties **hold data** - numbers, text (strings), boolean values, objects, lists, arrays, maps etc.

 **the name should imply which kind of data is being stored**.

- should typically receive a **noun** as a name.
- example: `user`, `product`, `customer`, `database`, `transaction` etc.

Typically for **boolean values**:

- **short phrase with an adjective**
- example: `isValid`, `didAuthenticate`, `isLoggedIn`, `emailExists` etc.

If you can be more specific, be more specific:

- For example, prefer `customer` over `user` if the code is doing customer-specific operations with that data.



### Functions & Methods

Functions and methods **perform tasks and operations**.

- should typically receive a **verb** as a name. (describe the operation)
- example: `login()`, `createUser()`, `database.insert()`, `log()` etc.
- Try to **avoid** names like `email()`, `user()` etc.  (sound like properties). Prefer `getEmail()` etc. instead.

Alternatively, they can also be used to primarily produce values -

- then, especially when producing **booleans**, you could also go for **short phrases with adjectives**. (answer a true/false question)
- example: `isValid(...)`, `isEmail(...)`, `isEmpty(...)` etc.



If you can **be more specific**, it makes sense to use more specific names. E.g: `createUser()` instead of  `create()`. `emailIsValid()` instead of `isValid()`

##### Examples:

- `validate` - good if an error is thrown, when not valid
- `isValid` - good if it returns a boolean

------

### Classes

Classes are used to **create objects** (unless it's a static class).

The class name should **describe the kind of object it will create**.

Even if it's a static class (i.e. it won't be instantiated), you will still use it as a of container for various pieces of data and/or functionality - so describe that container.

- Good class names - (like variable and property) - are  **nouns**.
- example: `User`, `Product`, `RootAdministrator`, `Transaction`, `Payment` etc.
- Avoid redundant suffixes (`DatabaseManager` makes no sense)

Exceptions:

- it makes sense to use property-naming roles for getters and setters !

## Common Errors

### Avoid Generic Names

In most situations, you should **avoid generic names** like `handle()`, `process()`, `data`, `item` etc.

There can be situations where it makes sense but typically, you should:

- either make these names more specific (e.g. `processTransaction()`)
- or go for a different kind of name (e.g. `product` instead of `item`).

### Be Consistent

An important part of using proper names is **consistency**.

If you used `fetchUsers()` in one part of your code, you should also use `fetchProducts()` - and not `getProducts()`  in another part of that same code.

It doesn't matter if you prefer fetch...(), get...(), retrieve...() etc.  but you should be consistent!

### Other Common Errors

- avoid redunant information 
- avoid slang, unclear Abbreviations & Disinformation


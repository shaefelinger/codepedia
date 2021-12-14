# Naming - CleanCode

Naming things (*= variables, properties, functions, methods, classes*) correctly and in an understandable way if **an extremely important part of writing clean code.**

This will of course still require some practice and often **multiple iterations** - clean code is written by iterating and improving code over time!

## Be Descriptive

Names have **one simple purpose**: 

They should **describe** 

- what's stored in a variable or property 
- or what a function or method does. 
- Or what kind of object will be created when instantiating a class.

## Naming Rules 

### Variables & Properties

Variables and properties hold data - numbers, text (strings), boolean values, objects, lists, arrays, maps etc.

Hence **the name should imply which kind of data is being stored**.

- should typically receive a **noun** as a name. 
- example: user, product, customer, database, transaction etc. 

Typically for **boolean values**: 

- **short phrase with an adjective** 
- example: isValid, didAuthenticate, isLoggedIn, emailExists etc.

If you can be more specific, you **should** be more specific:

- For example, prefer customer over user if the code  is doing customer-specific operations with that data. 

### Functions & Methods

Functions and methods perform **tasks and operations**.

-  should typically receive a **verb** as a name. 
- example: login(), createUser(), database.insert(), log() etc.

Alternatively, they can also be used to primarily produce values - 

- then, especially when producing **booleans**, you could also go for **short phrases with adjectives**. 
- example: isValid(...), isEmail(...), isEmpty(...) etc.

Try to **avoid** names like email(), user() etc. These names sound like properties. Prefer getEmail() etc. instead.

As with variables and properties, if you can **be more specific**, it typically makes sense to use such more specific names. For example: createUser() instead of just create().

### Classes

Classes are used to **create objects** (unless it's a static class).

The class name should **describe the kind of object it will create**. 

Even if it's a static class (i.e. it won't be instantiated), you will still use it as some kind of container for various pieces of data and/ or functionality - so you should then describe that container.

- Good class names - (like variable and property) - are therefore **nouns**.  

- example: User, Product,RootAdministrator, Transaction, Payment etc.

## Avoid Generic Names

In most situations, you should **avoid generic names** like handle(), process(), data, item etc.

There can always be situations where it makes sense but typically, you should 

- either make these names more specific (e.g. processTransaction()) 
- or go for a different kind of name (e.g. product instead of item).

## Be Consistent

An important part of using proper names is **consistency**.

If you used fetchUsers() in one part of your code, you should also use fetchProducts() - and not getProducts() - in another part of that same code.

It doesn't matter if you prefer fetch...(), get...(), retrieve...() or any other term but you should be consistent!


# JS 'This'

- The object that a method belongs to is called the **calling object**. The `this` keyword references the calling object and can be used to access properties of the calling object.
- Methods do not automatically have access to other internal properties of the calling object.
- The value of `this` depends on where it is being accessed from.
- avoid using arrow functions when using `this` in a method!!
  - We cannot use arrow functions as methods if we want to access other internal properties	
  - Arrow functions inherently bind an already defined `this` value to the function itself that is NOT the calling object. -> the value of `this` is the global object, 
- [MDN - Global Object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object)
- [MDN - Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

```js
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};
 
goat.diet(); 
// Output: herbivore
```

------

```js
  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),

    getFormattedTitle: function () {
      return this.info.title.toUppercase();
    },
  };
```

> !! Don't use arrow function inside of object!!

inside of a function, `this` refers to whatever called that function

(inside an object it is the object itself)

```js
let text = movie.getFormattedTitle() + ' - ';
```

this always refers to the thing in front of the funtion, eg: `movie.getFormattedTitle()`

> look what's left of the funcition to see what `this` refers to

## this - strange behavoiur

if you eg. desturcture the method:

```js
const { getFormattedTitle } = movie;

let text = getFormattedTitle() + ' - ';
```

there is nothing on the left side, so

- `this` refers to the global `window` - object

- of you use strict mode , `this` is `undefined`

- to make sure, `this` refers to the right thing, you can use `bind`

  - ```js
    let { getFormattedTitle } = movie;
    getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle() + ' - ';
    ```

## call

executes the function directly. 

- allows you to overwrite what `this` refers to
- arguments as comma-seperated list

```
.call(thisRef, arg1, arg2, ...)
```



```js
let { getFormattedTitle } = movie;
let text = getFormattedTitle.call(movie) + ' - ';
```



## apply

also directly executes the function. 

- only takes one array as the argument

------

### Browser & `this`

if e.g. you use an event-handler

`this` refers to who is responsible for calling the function

> if you are not using an arrow function:
>
> - The browser binds `this` for you (on event listeners) to the DOM element that triggered the event. 
>
> If you use an arrow-function, you get the global-window-object

------



### Arrow-Functions & This

- Arrow-Functions don't know `this` (they don't bind `this` to anything) -> you always get the global-object

- can be or not be desired, 

- example: 
  this works fine:

  ```js
  const members =  {
      teamName: 'Blue Rockets', 
      people: ['Max', 'manuel'], 
      getTeamMembers() {
          this.people.forEach(p => {
              console.log(p + ' - ' + this.teamName);
          })
      }};
  
  members.getTeamMembers();
  ```

  this give undefined: this is bound to the global window-object

  ```js
  const members =  {
      teamName: 'Blue Rockets', 
      people: ['Max', 'manuel'], 
      getTeamMembers() {
          this.people.forEach(function(p)  {
              console.log(p + ' - ' + this.teamName);
          })
      }};
  
  members.getTeamMembers();
  ```

## this" - Summary

`this` refers to different things, depending on where it's used and how (if used in a function) a function is called.

Generally, `this` refers to the "thing" which called a function (if used inside of a function). That can be the global context, an object or some bound data/ object (e.g. when the browser binds `this` to the button that triggered a click event).

**1)** `this` **in Global Context (i.e. outside of any function)**

```js
function something() { ... } 
	console.log(this); // logs global object (window in browser) - ALWAYS (also in strict mode)!
```

**2)** `this` **in a Function (non-Arrow) - Called in the global context**

```js
function something() {     
  console.log(this);
} 

something(); // logs global object (window in browser) in non-strict mode, undefined in strict mode
```

**3)** `this` **in an Arrow-Function - Called in the global context**

```js
const something = () => {
  console.log(this);
} 

something(); // logs global object (window in browser) - ALWAYS (also in strict mode)!
```

**4)** `this` **in a Method (non-Arrow) - Called on an object**

```js
const person = {
  name: 'Max',
  greet: function() { // or use method shorthand: greet() { ... } 
    console.log(this.name);
  }
}; 

person.greet(); // logs 'Max', "this" refers to the person object
```

**5)** `this` **in a Method (Arrow Function) - Called on an object**

```js
const person = {
  name: 'Max',
  greet: () => {
    console.log(this.name);
  }}; 

person.greet(); // logs nothing (or some global name on window object), "this" refers to global (window) object, even in strict mode
```

`this` can refer to unexpected things if you call it on some other object, e.g.:

```js
const person = {
  name: 'Max',
  greet() {
    console.log(this.name);
  }
}; 

const anotherPerson = { name: 'Manuel' }; // does NOT have a built-in greet method! 

anotherPerson.sayHi = person.greet; // greet is NOT called here, it's just assigned to a new property/ method on the "anotherPerson" object

anotherPerson.sayHi(); // logs 'Manuel' because method is called on "anotherPerson" object => "this" refers to the "thing" which called it
```

If in doubt, a `console.log(this);` can always help you find out what `this` is referring to at the moment!

- More on the `this` keyword (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
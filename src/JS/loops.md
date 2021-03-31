# Loops

- repeat a set of instructions until a specified condition (stopping condition) is reached.
- iterate simply means “to repeat”.
- **`break`** allows to leave a loop during the execution of its block.
- Best Practice: if possible, don't create variables inside the loop - makes it slower

## ForLoop

contains three expressions separated by ; inside the parentheses:

- an **initialization** starts the loop and can also be used to declare the iterator variable.
- a **stopping condition** is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
- an **iteration statement** is used to update the iterator variable on each loop.

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

- -> will execute until the condition evaluates to false.
- is the same as a while loop with counter
- convention: variable-name i
- the variable only exists inside the scope of the loop
- the loop can also count in reverse
- a for loop is ideal when we know how many times the loop should run

### Looping through Arrays

use the array’s .length property in its condition:

```js
const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
```

---

## WhileLoop

- Best used for when you don't know how often some code has to run until a certain condition is met.
- Irgendwann muss die condition false werden -> sonst infinite loop -> fehleranfällig

```js
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++) {
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}
```

This Syntax is also possible:

```js
let index = 0;
while (++index < 10) {
  console.log(index);
}
```

---

## Do...While Statement

- says to do a task once and then keep doing it until a specified condition is no longer met.
- will run at least once whether or not the condition evaluates to true

```js
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);
```

---

## Break & Continue

`break` beendet die Loop sofort

`continue` direkt nach oben-> bei for zur nächsten nummer , bei while checkt again.

---

## for...in loop

```js
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}
```

you still have to deal with the issue of using an **index** to access the values of the array, Also, the for...in loop can get you into big trouble when you need to add an extra method to an array (or another object).

> -> don´t use with arrays !!

**NOTE:** _The_ **forEach loop** _is another type of for loop in JavaScript. However,_ `forEach()` _is actually an array method, so it can only be used exclusively with arrays. There is also no way to stop or break a forEach loop. If you need that type of behavior in your loop, you’ll have to use a basic for loop._

## for...of loop

To loop over any type of data that is **iterable** (meaning it follows the [iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)).

almost exactly like you would write a **for...in** loop, except you swap out `in` with `of` and you can drop the **index**.

The for...of loop will only loop over the values in the object.

```js
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}
```

Während `for...in` über die Namen der Eigenschaften läuft, geht `for...of` über deren Werte.

https://dmitripavlutin.com/javascript-for-of/

**TIP:** _It’s good practice to use plural names for objects that are collections of values. That way, when you loop over the collection, you can use the singular version of the name when referencing individual values in the collection. For example,_ `for (const button of buttons) {...}`_._

additional benefits: You can stop or break a for...of loop at anytime.

```js
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}
```

---

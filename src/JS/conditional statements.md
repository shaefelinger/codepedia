# Conditional Statements

## if..then Statement

```js
if (condition) {
  // code block A to be executed
} else {
  // code block B to be executed
}
              let age = 22;

if (age >= 18) {
  console.log('sure, you can get the car keys!');
} else {
  console.log('no way');
}  
```

{} sind optional bei else wenn in der selben Zeile...

```js
if (??) {
    xxx
} else if (??) {
  yyy
} else {
  zzz
}
```

You can add any number of else if’s, but there can only be one (single) if and one (single) else. You don’t have to define an else. But if you use it, it has to be at the end.

------

## short-circuit evaluation

This code checks if username is defined and assigns a default string if it is not:

```js
let defaultName;
if (username) {
defaultName = username;
} else {
defaultName = 'Stranger';
}
```

you can use a short-hand for the code above. In a boolean condition, JavaScript assigns the truthy value to a variable if you use the || operator in your assignment:

```js
let defaultName = username || 'Stranger';
```

------

## Ternary Operator

to simplify an if...else statement.

```
condition ? expression-if-true : expression-if-false;
let isNightTime = true;
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
```

Shorthand:

```js
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
```

- The condition (true/false) is provided before the ?.

- Two expressions follow the ? and are separated by a colon :

- If the condition evaluates to true, the first expression executes

- If the condition evaluates to false, the second expression executes.

- [can-ternary-operators-contain-multiple-actions](https://discuss.codecademy.com/t/can-ternary-operators-contain-multiple-actions/428487)

- can also be nested: `return sum > product ? 'sum' : sum < product ? 'product' : 'same';`

- We can pass the entire ternary as the argument:

- ```js
  console.log(a % 2 === 0 ? `${a} is even.` : `${a} is odd.`);
  ```

------

## Switch

A switch statement provides an alternative syntax if we need to check multiple conditions.

```js
let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
                
// Prints 'Papayas are $1.29'
```

or multiple Identical Options:

```js
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
// Cases for 1, 2, and 3 will all produce the same result.
```

- At the end of each switch statement, there is a default statement. If none of the cases are true, then the code in the default statement will run.
- Note: Without break keywords, the first matching case will run, but so will every subsequent case regardless of whether or not it matches—including the default.
- make a habit of ending all your switch branches with a break (also the for default, even though it isn't nescessary.
- case values are tested with strict equality (===)
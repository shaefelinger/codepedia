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

## else

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



{} are optional with `else`if in the same row...

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

You can use a **short-hand** for the code above. In a boolean condition, JavaScript assigns the truthy value to a variable if you use the `||` operator in your assignment:

```js
let defaultName = username || 'Stranger';
```

------

## Double &&- Operator

- if the first value is true, it returns the second value, 

- if the first value is false, it returns the first value

```js
const shoppingCart = isLoggedIn && ['Books']
```

is the same as:

```js
if (isLoggedIn) { 
shoppingCart = ['Books'] 
} else {
  shoppingCart = isLoggedIn
}
```

------

## Ternary Operator

[MDN: Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

to simplify an if...else statement.

> if statements return no values- this does not work:
>
> ```js
> // This does not work!
> const userName = if (isLogin) {
> 	return ‘Max’;
> } else {
> 	return null;
> }
> ```
>
> this works:
>
> ```js
> const userName = isLogin ? ‘Max’ : null
> ```



```js
isNightTime ? console.log('Lights On!') : console.log('Lights Off!');
```

is the same as:

```js
condition ? expression-if-true : expression-if-false;
let isNightTime = true;
if (isNightTime) {
  console.log('Lights On!');
} else {
  console.log('Lights Off!');
}
```

- The condition (true/false) is provided before the `?`.

- Two expressions follow the `?` and are separated by a colon `:`

- If the condition evaluates to true, the first expression executes

- If the condition evaluates to false, the second expression executes.

- [can-ternary-operators-contain-multiple-actions](https://discuss.codecademy.com/t/can-ternary-operators-contain-multiple-actions/428487)

- can also be nested: 

  ```js
  return sum > product ? 'sum' : sum < product ? 'product' : 'same';
  ```

- We can pass the entire ternary as the argument: 

  ```js
  console.log(a % 2 === 0 ? `${a} is even.` : `${a} is odd.`);
  ```

```react
const message = bottle.fullOfSoda
  ? 'The bottle has soda!'
  : 'The bottle may not have soda :-('

// is the same as
let message
if (bottle.fullOfSoda) {
  message = 'The bottle has soda!'
} else {
  message = 'The bottle may not have soda :-('
}

// in React:
function TeddyBearList({teddyBears}) {
  return (
    <React.Fragment>
      {teddyBears.length ? (
        <ul>
          {teddyBears.map(teddyBear => (
            <li key={teddyBear.id}>
              <span>{teddyBear.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div>There are no teddy bears. The sadness.</div>
      )}
    </React.Fragment>
  )
}
```



------

## Logical Operators Overview

```js
const userName = 'John';
const altName = '';
console.log(userName === 'John'); // generates and prints a boolean => true
console.log(userName); // wasn't touched, still is a string => 'John'
 
console.log(userName || null); // userName is truthy and therefore returned by || => 'John'
console.log(altName || 'John'); // altName is falsy (empty string), hence 'John' is returned => 'John'
console.log(altName || ''); // both altName and '' are falsy but if the first operand is falsy, the second one is always returned => ''
console.log(altName || null || 'Jane'); // altName and null are falsy, 'Jane' is returned => 'Jane'
 
console.log(userName && 'Jane'); // userName is truthy, hence second (!) value is returned => 'Jane'
console.log(altName && 'Jane'); // altName is falsy, hence first value is returned => ''
console.log(userName && ''); // userName is truthy, hence second value is returned => ''
```

------

## Switch

A switch statement provides an alternative syntax if we need to check multiple conditions. Always checks for equallity.

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
- Note: Without **break** keywords, the first matching case will run, but so will every subsequent case regardless of whether or not it matches—including the default. ("fall-through")
- make a habit of ending all your switch branches with a break (also the for default, even though it isn't nescessary.
- case values are tested with strict equality (===)
- [here](https://stackoverflow.com/questions/32576618/switch-statement-to-compare-values-greater-or-less-than-a-number/32576647) is a workaroud to check for `>`,`<=` etc. 
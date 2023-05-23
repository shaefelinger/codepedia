# Numbers

## [Properties & Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

::: danger
❗️Floating point numbers cannot represent all decimals precisely in binary. This can lead to unexpected results, such as `0.1 + 0.2 === 0.3` returning `false` . 
::: 

## Rounding

- [`.toFixed(digits)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) 
  - formats a number using fixed-point. 
  - parameter is optional
- [`Math.round()`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round) -> rounded to the nearest integer
- [`Math.ceil()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) -> will round the value up.
- [`Math.floor()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) -> will round the value down.
- [`Math.pow`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)

------

## String to Number

- [`.parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt)
  - Turns String to Integer - parseInt(„60SJKL68“) -> 60
- [`.parseFloat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat)
  - Turns String to Float
- `a = a * 1;`
- [`Number()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
- `a = +a`

------

## Random

[`.Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

returns a floating-point, pseudo-random number in the range 0 to less than 1

```js
function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}
```

or

```js
random(min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;
```

------

## [Other Number-Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

- `Math.sqrt()`
- [`Math.pow()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) -> returns the `base` to the `exponent` power
- `Infinity`, `-Infinity`


# Numbers

## [Properties & Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

## Rounding

- [`.toFixed(digits)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) 
  - formats a number using fixed-point. `
  - parameter is optional
  - ❗️Floating point numbers cannot represent all decimals precisely in binary. This can lead to unexpected results, such as `0.1 + 0.2 === 0.3` returning `false` .
- `Math.round()`  
  - -> rauf/runter runden
- `Math.ceil()`
- `Math.pow()`
  - potenz

------

## String to Number

- [`.parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt)
  - Turns String to Integer - parseInt(„60SJKL68“) -> 60
- [`.parseFloat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat)
  - Turns String to Float
- `a = a * 1;`
- [`Number()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)

------

## Random

[`.Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

returns a floating-point, pseudo-random number in the range 0 to less than 1

```js
function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}
```



------

## Other Number-Methods

- `Math.sqrt()`
- `Math.pow`
- `Infinity`, `-Infinity`

------

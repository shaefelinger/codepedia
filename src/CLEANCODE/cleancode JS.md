# Clean Code Javascript

## Links

- [Clean Code Javascript](https://github.com/ryanmcdermott/clean-code-javascript)

## Variables

### Use meaningful and pronounceable variable names

**Bad:**

```js
const yyyymmdstr = moment().format("YYYY/MM/DD");
```

**Good:**

```js
const currentDate = moment().format("YYYY/MM/DD");
```

### Use searchable names

Use capitalized named constants, instead of numbers

Tools like [buddy.js](https://github.com/danielstjules/buddy.js) and [ESLint](https://github.com/eslint/eslint/blob/660e0918933e6e7fede26bc675a0763a6b357c94/docs/rules/no-magic-numbers.md) can help identify unnamed constants.

```js
const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000; //86400000;
```

```js
var FLAT_SHIPPING_COST = 9.99;
var SALES_TAX = 0.13;

function getTotal(subtotal) {
  var beforeTax = subtotal + FLAT_SHIPPING_COST;
  return beforeTax + (beforeTax * SALES_TAX);
}
```

------

### Use explanatory variables

**Bad:**

```js
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCityZipCode(
  address.match(cityZipCodeRegex)[1],
  address.match(cityZipCodeRegex)[2]
);
```

**Good:**

```js
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [_, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);
```

------

### Use explicit names for iterators

`locations.forEach(location => {...}`

instead of

`locations.forEach(l => {...}`

------

### Don't add unneeded context

bad:

```js
const Car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Blue"
};	
```

good:

```js
const Car = {
  make: "Honda",
  model: "Accord",
  color: "Blue"
};
```

------

### Use default arguments instead of conditionals

```js
function createMicrobrewery(name = "Hipster Brew Co.") {
  // ...
}
```

Be aware:

- will only provide default values for `undefined` arguments
- Other "falsy" values such as `''`, `""`, `false`, `null`, `0`, and `NaN`, will not be replaced by a default value

**Bad:**

```js
function createMicrobrewery(name) {
  const breweryName = name || "Hipster Brew Co.";
  // ...
}
```

**Good:**

```js
function createMicrobrewery(name = "Hipster Brew Co.") {
  // ...
}
```




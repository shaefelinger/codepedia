# Strings

##  [Properties & Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

everything in JS has a `toString()` method

------

### [`.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)	

property - contains the length of the string, in UTF-16 code units

- to get the last letter of a string, you can subtract one from the string's length. `var lastLetter = firstName[firstName.length - 1];`

------

### square bracket notation []

return any character inside a string

- But string values are immutable: `str[0]="x"` doesn't work

------

### [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

checks if a substring is present inside a string

- If the substring is **found** inside the main string, it returns a number representing the **index position** of the substring
- If the substring is **not found** inside the main string, it returns a value of **-1**.

```js
if(browserType.indexOf('mozilla') === -1) {
  // do stuff with the string if the 'mozilla'
  // substring is NOT contained within it
}
```

------

### [`.lastIndexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)

------

### [`slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

extracts a section of a string and returns it as a new string, without modifying the original string.

- the first parameter is the character position to start extracting at, and the second parameter is the character position after the last one to be extracted.
- to extract all of the remaining characters in a string after a certain character, don't include the second parameter!
- `slice(x,y)` slice (start-end)
- `slice(-4)` last 4 letters

------

### [`toLowerCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) - [`toUpperCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

convert all the characters to lower- or uppercase

------

### [`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

replace one substring inside a string with another substring.

- two parameters — the string you want to replace, and the string you want to replace it with.
- doesn't change the string

------

### [`.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) -› create array

divides a String into an array

- `let digits = number.toString().split('');` converts number into an array of strings for each digit

- ```
  string.split(seperator)
  ```

  ```js
  const data = 'new york;10.99;2000';
  
  const transformedData = data.split(';');
  ```

  > ->  all elements are strings. You could eg convert it to a number:
  >
  > ```
  > transformedData[1] = +transformedData[1];
  > ```
  >

------

### [`.repeat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

returns a new string which contains the specified number of copies of the string on which it was called

------

### [`.trim()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)

removes whitespace

------

### [`.trimStart()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) - [`.trimEnd()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd)

### [`.substring()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

### [`.substr()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)

### [`.replaceAll()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)

### [.startsWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)

### [`.endsWith()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)

### [`.concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)

### [`.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

------

## Number to String

```js
let str = `${number}`
```

```js
let str = number + ""
```

```js
let str = String(number)
```

------

## String Concatenation

```js
let name = 'John'
let age = '32'

console.log ("Hello, my name is " + name + " and I am " + age + " years old")
```

```js
let firstName = 'John';
let lastName = 'Doe'

let fullName = firstName + ' ' + lastName

console.log (fullName);
```

------

## Template Literals

template literals use backticks ` and ${} to interpolate values into a string

in template literals `${..}`is called codeblock

```js
const myPet = 'cat';
console.log(`I have a ${myPet}.`);
// Output: I have a cat.
```

------

## Strings - Escape Character \

- `\n`  - Newline
- `\'` - Single quote
- `\" ` - Double quote
- `\\` - Backslash
- `\t` - Horizontal Tab
- `\v` - Vertical Tab
- `\0` - Nul char


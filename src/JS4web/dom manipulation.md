# Manipulating the DOM

## Selecting Elements

You  have access to all of an element’s properties. You can modify

- the contents of the element 
- attributes 
- properties

###   `.querySelector()` and `.querySelectorAll()`

-  `querySelector()`  <u>only returns the first element</u> that matches the specified CSS selectors. 
- To return all the matches, use the `querySelectorAll()` :
  - It returns a **NodeList** object, representing elements that match the specified CSS selector(s).  Looks like an Array, but it's not
- If no matches are found, **null** is returned.

Inside the brackets the same rules apply as with any CSS selectors:

- `#` for IDs
-  `.​` (dot) for classes
-  `[ ]` for attributes, etc.

```js
// find and return the element with an ID of "header"
document.querySelector('#header');

// find and return the first element with the class "header"
document.querySelector('.header');

// find and return the first <header> element
document.querySelector('header');
```

Select by attribute:

```html
<p aria-hidden="true">Lorem Ipsum ...</p>
document.querySelector("[aria-hidden]"); 
document.querySelector('[aria-hidden="true"]');
```

Select by Order:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
// Select Item 2 and Item 3
document.querySelector('li + li');
```

Multiple selectors:

```html
<h1>Header</h1>
<h2>Sub Header</h2>
document.querySelector('h1, h2');
```

- [.querySelector() method on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [.querySelectorAll() method on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [NodeList on MDN](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)

#### Usage:

Apply this method on the whole DOM or on a selected part of the DOM.

```js
// Get the first match:
document.querySelector() 
// Get all matches:
document.querySelectorAll()
// Match on children:
const navigation = document.querySelector("#nav") 
navigation.querySelector(‘li')
```

### Shorthands

### `.getElementById()` 

Often the best way to select a single element.

```js
const footer = document.getElementById('footer');
```

 `'footer'`, not `'#footer'`

https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

Selecting Multiple Elements At Once: 

> Beware of the S: getElement**s**By...

### `.getElementsByClassName()`

```js
document.getElementsByClassName('brand-color');
```

https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName



### `.getElementsByTagName()`

-> aktive Node-List:  adapts, when the page-content changes and it is faster than:`querySelectorAll()`  (static Node-List)

```js
document.getElementsByTagName('p');
```

Also:`document.getElementByTagName()`



------

### Special Accessors

Every Node object has special accessors. These are properties of DOM elements and ***read-only***.

- `element.childNodes` - returns a collection of a node's child nodes, as a NodeList object
- `element.firstChild` 
- `element.lastChild`
- `element.parentNode`
- `element.closest('p')` -Traverses all children of the parent in search for a match
- `.children` - return a list of the element’s children and return `null` if the element has no children.
- `previousSibling/nextSibling`



------

## An Element's (Text) Content

### `.innerHTML`

Each element has an `.innerHTML` property. This represents the markup of the element's content. We can use this to:

- get an element's (and all of its descendants!) HTML content
- set an element's HTML content

It retuns: it looks like a string. Technically, what it returns is called a **DOMString**.

- https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

### `.outerHTML` 

rarely used - Represents the **HTML element itself**, *as well as its children*.

```js
<h1 id="pick-me">Greetings To <span>All</span>!</h1>

const innerResults = document.querySelector('#pick-me').innerHTML;
console.log(innerResults); // logs the string: "Greetings To <span>All</span>!"

const outerResults = document.querySelector('#pick-me').outerHTML;
console.log(outerResults); // logs the string: "<h1 id="pick-me">Greetings To <span>All</span>!</h1>"
```

- https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML

  

### `.textContent`

The `.textContent` property will set and return the text content of an element and all its descendants

```js
nanodegreeCard.textContent = "I will be the updated text!";
```

Passing any text that *looks* like HTML to the `.textContent` property will still be displayed as text. It will *not* be displayed as HTML when the element is rendered.

- [textContent on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)



### `.innerText`

`.innerText` will get the <u>*visible*</u> text of the element.

- If CSS is used to hide any text inside that element, `.innerText` <u>*will not*</u> return that text, while `.textContent` *will* return it

- `.innerText` will also honor changes to things like capitalization.

- You probably want to use `.textContent` since that will return all of the text no matter what.


- [innerText on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText)
- [Article: The poor, misunderstood innerText](http://perfectionkills.com/the-poor-misunderstood-innerText/)
- [Article: innertext vs. textcontent](https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/)

------



## Creating new elements

### `.createElement`

The `.createElement()` method is a method on the `document` object. It just creates an an empty element with no inner HTML. It doesn't add it to the DOM.

In order add it to the web page, you must assign it to be the child of an element that already exists on the DOM. We call this process appending`.appendChild()`

```js
const div = document.createElement('div')
div.innerHTML = '<p>Text</p>'
// or
div.innerText = 'Text'
```

- [createElement on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)



### `.createTextNode`

Not recommendet: it's faster and easier to just update the element's text with the `.textContent` property.

```js
var h = document.createElement("h1")
var t = document.createTextNode("Hello World");
h.appendChild(t);
```

```js
const myPara = document.createElement('p');
const textOfParagraph = document.createTextNode('I am the text for the paragraph!');

myPara.appendChild(textOfParagraph);
document.body.appendChild(myPara);
```

the code below will provide the exact same result:

```js
const myPara = document.createElement('p');

myPara.textContent = 'I am the text for the paragraph!';
document.body.appendChild(myPara);
```

- https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode

------

## Adding and replacing nodes

### `.appendChild()` etc.

| method                                                | Description                                                  |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| `element.appendChild(newElement)`                     | nests a new element inside another element. - will move an element from its current position to the new position!- https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild |
| `document.body.appendChild(newElement)`               | nests a new element inside the body tag                      |
| `document.insertBefore(newElement, referenceElement)` | puts a new element just before the other element             |
| `document.replaceChild(newElement, oldElement)`       | replaces one element with another                            |

###  `.insertAdjacentHTML()`

To insert HTML text anywhere around an element. It needs to be called on a parent element with two arguments:

- the location of the HTML
- the HTML text that is going to be inserted

The first argument to this method will let us insert the new HTML in one of four different locations

- `beforebegin` – inserts the HTML text as a previous sibling

- `afterbegin` – inserts the HTML text as the first child

- `beforeend` – inserts the HTML text as the last child

- `afterend` – inserts the HTML text as a following sibling

- ```html
  <!-- beforebegin -->
  <p>
      <!-- afterbegin -->
      Existing text/HTML content
      <!-- beforeend -->
  </p>
  <!-- afterend -->
  ```

The second argument text parses the specified text as HTML and inserts the resulting nodes into the DOM tree at a specified position.

```js
const mainHeading = document.querySelector('#main-heading');
const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';

mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);
```

-  [insertAdjacentHTML docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

------

## Removing nodes

| method                        | Description                                                  |
| ----------------------------- | ------------------------------------------------------------ |
| `parent.remove(element)`      | removes an element directly [.remove() MDN](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove) |
| `parent.removeChild(element)` | removes an element [removeChild MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) - drawback to the `.removeChild()` method: it requires access to parent.  Workaround: `mainHeading.parentElement.removeChild(mainHeading);` |
| `element.innerHTML = ''`      | empties an element - deletes all children as well as all listeners |

------

## Style Page Content

### `.style`  

**Modifying an Element's Style Attribute** 

 `.style` provides access to the inline style of that HTML tag. 

- Good for setting one style at a time, but not great for controlling multiple styles.

- does not implement a hyphen such as `background-color`, but rather camel case notation `backgroundColor`.  [MDN reference page](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)


```js
let blueElement = document.querySelector('.blue');
blueElement.style.backgroundColor = 'blue';
```

*chaining* syntax would also work:

```js
document.querySelector('.blue').style.fontFamily = 'Roboto';
```

- [style docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
- [Article: Using dynamic styling information](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [DOM methods to control styling](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#DOM-CSS_CSSOM)



###  `.style.cssText`

**Adding Multiple Styles At Once **

 use `.style.cssText`  to set multiple CSS styles at once!

```js
const mainHeading = document.querySelector('h1');

mainHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';
```

write the CSS styles just as you would in a stylesheet; so you write `font-size` rather than `fontSize`. 

- https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/cssText

  

###  `.setAttribute()`

**Setting An Element's Attributes**

Another way to set styles for an element is to use the `.setAttribute()` method:

```js
const mainHeading = document.querySelector('h1');

mainHeading.setAttribute('style', 'color: blue; background-color: orange; font-size: 3.5em;');
```

 not *just* for styling page elements. You can use this method to set *any* attribute for an element. If you want to give an element an ID, you can do that!:

```js
const mainHeading = document.querySelector('h1');

// add an ID to the heading's sibling element
mainHeading.nextElementSibling.setAttribute('id', 'heading-sibling');

// use the newly added ID to access that element
document.querySelector('#heading-sibling').style.backgroundColor = 'red';
```

- https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

------

## Other Properties

### Change Attributes of an Element

-> eveything inide the tag

`.attributes` gives a list of all attributes

`.getAttribute("href")` returns the value of a single attribute

`.setAttribute("href", "www.google.com")` sets the attribute



`hasAttribute()`

`removeAttribute()`

------

###  `.hidden`

Allows to hide the Element by assigning it as true or false:

```js
document.getElementById('sign').hidden = true;
```

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden

------

## Accessing an Element's Classes 

###  `.classList` 

- `.classList` is by far the most helpful property of the bunch, 

-  helps to keep your CSS styling out of your JavaScript code.
- Use the `.classList` property more than any other. 

```js
const listOfClasses = mainHeading.classList;
```

Returns a  [DOMTokenList](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList). Similar to an Array.

Has a number of properties. Some of the most popularly used ones are:

- `.add()` - to add a class to the list
- `.remove()` - to remove a class from the list
- `.toggle()` - to add the class if it doesn't exists or remove it from the list if it does already exist
- `.contains()` - returns a boolean based on if the class exists in the list or not

```js
element.classList.add('cool-class', ‘second-class’)
element.classList.remove('bad-class')
element.classList.contains('another-class')
```

- ​	[classList docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)



### `.className`

-  returns a space-separated string  of all of the element's classes. 

- This isn't the most ideal format, it makes it hard to add or remove individual classes.  -> would have to it convert into array.

```
// store the list of classes in a variable
const listOfClasses = mainHeading.className;
```

```js
mainHeading.className = "im-the-new-class";
```

The above code *erases* any classes that were originally in the element's `class` attribute and replaces it 

- [className on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)	
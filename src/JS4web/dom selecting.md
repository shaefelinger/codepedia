# Selecting DOM Elements

You  have access to all of an element’s properties. You can modify

- the contents of the element 
- attributes 
- properties

::: tip

usually `querySelector()` , `querySelectorAll()` or `getElementById()`) is the best way to select

:::

##   `.querySelector()` and `.querySelectorAll()`

-  `querySelector()`  only returns the **first element** that matches the specified CSS selectors. 
-  To return all the matches, use the `querySelectorAll()` :
   - It returns a ***non-live*** **NodeList** object, representing elements that match the specified CSS selector(s).  Looks like an Array, but it's not
-  If no matches are found, **null** is returned.

Inside the brackets the same rules apply as with any CSS selectors:

- `#` for IDs
- `.​` (dot) for classes
- `[ ]` for attributes, etc.

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

------

## `.getElementById()` 

Often the best way to select a single element.

```js
const footer = document.getElementById('footer');
```

- [https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

>  `'footer'`, not `'#footer'`

------

## Selecting Multiple Elements At Once: 

::: tip

`getXbyY` return a **live Node-List** ( `HTMLCollection`) :

- adapts, when the page-content changes 
- faster than:`querySelectorAll()` 
- Empty `HTMLCollection` if no matching elements were found. 

:::

::: warning

Beware of the S: getElement**s**By...

:::

### `.getElementsByClassName()`

```js
document.getElementsByClassName('brand-color');
```

- [https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)

### `.getElementsByTagName()`

```js
document.getElementsByTagName('p');
```

Also:`document.getElementByTagName()`

- [https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName)

------

## Properties on the document object 

to select parts of the document:

`document.body` => Selects the `<body>` element node.

`document.head` => Selects the `<head>` element node.

`document.documentElement` => Selects the `<html>` element node

------

## HTMLElement-Interface

Most HTML-Elements use the HTMLElement-Interface

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

you can always check with `console.dir()`

------

## Traversing the DOM

if you already have one element selected and wont to work with its siblings or parents/ancestors.

- can be quicker
- but use with care - could break if you change the HTML

## Children, Descendants, Parents & Ancestors

Example:

```html
<div>
	<p> 
		This is a <em>test!<em>
	</p>
</div>
```



| Child                                    | Descendant                                 | Parent                                         | Ancestor                                   |
| ---------------------------------------- | ------------------------------------------ | ---------------------------------------------- | ------------------------------------------ |
| Direct child node/element                | Direct or indirect child node/element      | Direct parent node/element                     | Direct or indirect parent node/element     |
| `<p>` is a child of `<div>`.`<em>` isn't | `<p>`and `<em>` are descendants of `<div>` | `<div>` is a parent of `<p>` but not of `<em>` | `<div>` is an ancestor of `<p>` and `<em>` |

------

## Special Accessors

Every Node object has special accessors. These are properties of DOM elements and ***read-only***.

- `element.children` -› list of the child-element-nodes
- `element.childNodes` - returns a NodeList of all all child-nodes incl. text-nodes
- `element.firstChild`  includes the (whitespace)-text-node
- `element.firstElementChild` - this is what you usually want! 
- `element.lastChild`
- `element.parentNode`
- `element.closest('p')` -Traverses all ancestors in search for a match
- `.children` - return a list of the element’s children and return `null` if the element has no children.
- `previousSibling/nextSibling` - (might give you a Text-Node)
- `previousElemenSibling/nextElementSibling`

------
> if you add in CSS: `white-space: pre;` the whitespace of the text-nodes will also be rendered

------


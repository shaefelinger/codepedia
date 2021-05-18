# Float & Clear

## Float

- can move elements as far left or as far right as possible on a web page.
- Values: left/right/none
- Floated elements must have a width specified, Otherwise, the element will assume the full width of its containing element, and changing the float value will not yield any visible results.
- Floated Elements are not in the Document-Flow
- float only works on elements on the same level (silbings/brothers)
- float implies the use of the block layout, it modifies the computed value of the display values to block (in most cases)

- [Float - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
- [Float and Clear - w3schools](https://www.w3schools.com/css/css_float.asp)
- [Float Examples - w3schools](https://www.w3schools.com/css/css_float_examples.asp)
- [Die CSS-Eigenschaft float verstehen und anwenden](https://blog.kulturbanause.de/2012/10/die-css-eigenschaft-float-verstehen-und-anwenden/)
- [Self-HTML Float](https://wiki.selfhtml.org/wiki/CSS/Eigenschaften/Positionierung/float)

------

## Clear

The Clear property specifies how elements should behave when they bump into each other on the page. You can clear an element’s left or right side (or both) It can take on one of the following values:

- left — the left side of the element will not touch any other element within the same containing element
- right — the right side of the element will not touch any other element within the same containing element
- both — neither side of the element will touch any other element within the same containing element.
- none — the element can touch either side

- [Clear - w3schools](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
- [Clear - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)

------

## Clearfix-hack

If an element is taller than the element containing it, and it is floated, it will "overflow" outside of its container. This 'hack' can fix it:

```css
.clearfix {
  overflow: auto;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}  
```

simple ClearFix:

```css
.clearFix {
  clear: both;
} 
<div class="clearFix"></div>
```

- [Clear & Clearfix - w3schools](https://www.w3schools.com/css/css_float_clear.asp)
- [Clearfix - CSS-Tricks](https://css-tricks.com/snippets/css/clear-fix/)


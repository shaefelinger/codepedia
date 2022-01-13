# Positioning

## `position:`

Default: `position: static`

1. content defines the size
2. html defines the order
3. children sits on top of parent (z-axis)

An inline-element becomes a block-element if it's position is other than static.

| Value    | Description                                                  |
| :------- | ------------------------------------------------------------ |
| static   | - Default value (does not need to be specified)<br/>- offset properties (`top, bottom` etc.) will not work<br/>- `z-index` is also ignored<br/>-`margin` works |
| relative | - element’s position is relative to its default position on the page<br/>- leaves a "ghost" on the original position in the document flow. Original space is still occupied<br/>- offset properties (`top, bottom` etc.) are working<br/>- rarely used |
| absolute | the element will scroll with the rest of the document when a user scrolls<br/>- removed from flow: all other elements on the page will ignore the element and act like it is not present on the page<br/>- offset properties working:<br/>    -If parent is `position: static`: postition relative to the whole screen<br/>.   -If parent-position is other than `static`: postition relative to the parent (-> it can make sense to put absolute elements in a relative container) |
| fixed    | - the element will remain fixed to its position no matter where the user scrolls on the page.<br/>- often used for navigation bars<br/>- removed from flow<br/>- doesn't care about the parent - positioned to the browser window<br/> *tip: create a dummy-container for empty space (esp. for footer and header)* |
| sticky   | - A sticky element toggles between relative and fixed, depending on the scroll position. <br/>- It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed) |

- [The position Property - w3schools](https://www.w3schools.com/css/css_positioning.asp)
- [Position - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Position: css-tricks](https://css-tricks.com/almanac/properties/p/position/)

------

##  Offset Properties

- top - moves the element down
- bottom - moves the element up
- left - moves the element right
- right - moves the element left

## Z-Index

The z-index property controls how far “back” or how far “forward” an element should appear on the web page when elements overlap

- [Z-Index - w3schools](https://www.w3schools.com/cssref/pr_pos_z-index.asp)
- [z-index - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)

### Stacking-Infos

- you can use `position: absolute`  to overlap elements

- by default: later in HTML = on top

- z-index only works if the elements are in the same stacking context

- new stacking context can be created in many different ways, e,g: this creates a stacking context

  ```css
  p {
  	opacity: 0.4;
  }
  ```

  

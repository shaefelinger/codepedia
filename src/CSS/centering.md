
# Centering

- [Centering Things - w3c](https://www.w3.org/Style/Examples/007/center.en.html)
- [Centering in CSS: A Complete Guide - CSS Tricks](https://css-tricks.com/centering-css-complete-guide/)
- [Center Anything with CSS - freecodecamp.org](https://www.freecodecamp.org/news/how-to-center-anything-with-css-align-a-div-text-and-more/)

------

### Perfect Centering with Flexbox:

Set both the `justify-content` and `align-items` properties to center, and the flex item will be perfectly [centered](https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox_perfect_center).

------

## 1.) Centering Horizontally

### a) Text-Align: Center

Working with text (`<p>, <h1>, <div>, ...`)

Or:  assign `text-align: center;` to the parent  block-element (eg `<div>`) -> everything is centered

Think of `text-align: center;`  as "content-align"

```css
.center-children {
  text-align: center;
}
```

[Codepen - Centering Inline Elements](https://codepen.io/chriscoyier/pen/HulzB)

### b) margin: auto

Center a **block-element** by giving it margin-left and margin-right of auto (**needs a set width**, otherwise it would be full width and wouldn’t need centering).

```css
.center-me {
  margin: 0 auto;
  width: 200px;
} 
```

This is also the way to center an image: make it into block of its own and apply the margin properties to it. For example:

```css
IMG.displayed {
  display: block;
  margin-left: auto;
  margin-right: auto }
  ...
<IMG class="displayed" src="..." alt="...">
```

[Codepen - Centering Single Block Level Element](https://codepen.io/chriscoyier/pen/eszon)

### c) Flexbox

Flexbox is the most modern way to center things

```css
.container {
  ...
  display: flex;
  justify-content: center;
}
<div class="container">
  <div>Blabla</div>
</div>
```

------

### d) Multiple Block Elements

`margin:auto` also works for multiple block level elements stacked on top of each other

[Codepen - Centering Blocks on Top of Each Other](https://codepen.io/chriscoyier/pen/haCGt)

For Multiple block-level elements that need to be centered horizontally in a row, change the display type. Eg. `inline-block` or Flexbox

This also works for multiple block level elements stacked on top of each other

[Codepen -  Centering Row of Blocks](https://codepen.io/chriscoyier/pen/ebing)

------

## 2.) Centering Vertically

### A.) Single Line Inline or Inline-*

a) **Equal padding** above and below them:

```css
.link {
  padding-top: 30px;
  padding-bottom: 30px;
}
```

[Centering a line with line-height](https://codepen.io/chriscoyier/pen/LxHmK)

### B.) Multiple Lines

a) **Equal padding** on Top & Buttom [a)] can work as well...

b) ...or perhaps the element the text is in can be a **table cell**, either literally or made to behave like one with CSS.  The [`vertical-align`](https://css-tricks.com/what-is-vertical-align/) property handles this, in this case, unlike what it normally does which is handle the alignment of elements aligned on a row

[Centering text (kinda) with Padding](https://codepen.io/chriscoyier/pen/ekoFx)

c) you could employ the **“ghost element”** technique, in which a full-height pseudo-element is placed inside the container and the text is vertically aligned with that.

```css
.ghost-center {
  position: relative;
}
.ghost-center::before {
  content: " ";
  display: inline-block;
  height: 100%;
  width: 1%;
  vertical-align: middle;
}
.ghost-center p {
  display: inline-block;
  vertical-align: middle;
}
```

[Codepen - Ghost Centering Multi Line Text](https://codepen.io/chriscoyier/pen/ofwgD)

### C.) Block-Level-Element

a) if you do know the height, you can center vertically like: (But it’s fairly common to *not* know the height)

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  height: 100px;
  margin-top: -50px; /* account for padding and border if not using box-sizing: border-box; */
}
```

[Codepen - Center Block with Fixed Height](https://codepen.io/chriscoyier/pen/HiydJ)

b) if you don't know the height, you can center it vertically by nudging it up half of it’s height after bumping it down halfway:

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

[Codepen - Center Block of unknown height](https://codepen.io/chriscoyier/pen/lpema)

### D.) BEST: Use Flexbox

a) A single flex-child can be made to center in a flex-parent pretty easily.

```css
.flex-center-vertically {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
}
```

[Codepen - Vertical Center Multi Lines of Text with Flexbox](https://codepen.io/chriscoyier/pen/uHygv)

b) You can also get centering in flexbox using `margin: auto;` on the child element.

c) or even simpler:

```css
.container {
  ...
  display: flex;
  align-items: center;
}
```

------

## 3.) Centering Vertically & Horizontally

### a) if you know the width and the height:

```css
.container {
  ...
  position: relative;
}

.child {
  width: 50px;
  height: 50px;
  background-color: red;
  /* Center vertically and horizontally */
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px; /* apply negative top and left margins to truly center the element */
}
```

### b) unknown width & Height. 

Use **Transform and Translate**

```css
.container {
  ...
  position: relative;
}

.child {
  ... 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}  
```

### c) Flexbox (best)

Apply `justify-content: center` and `align-items: center` to center the child element(s) horizontally and vertically:

```css
.container {
  ...
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### d) Or use Grid:

Little Trick for one Element:

```css
body, html {
  height: 100%;
  display: grid;
}
span { /* thing to center */
  margin: auto;
}
```

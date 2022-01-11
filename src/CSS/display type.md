
# Display Type 

Inline, Block, Block-Inline
<img src="./assets/HTML display.png" alt="img" style="zoom: 67%;" />

[Block-Display-Elements:](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)


## block
`display: block;`

`<article> <blockquote><div> <fieldset> <form> <h1>-<h6> <header> <footer> <ul> <ol> <li> <p> <pre> <table>` 

- starts on a new line and blocks the whole line
- default height = auto -> nothing is displayed, if empty- default width = 100%
- width, heigth, padding, margin - fully supported
- block elements are containerts for other elements
- Block elements are meant to structure the main parts of your page, by dividing your content in coherent blocks.

<!-- Udemy #47 nochmal anschauen, angela oder was? -->

- [dev.to -lesser known Display Values](https://dev.to/ekaterinavu/lesser-known-css-display-values-448j#ruby)
- [CSS Display Property - w3schools](https://www.w3schools.com/cssref/pr_class_display.asp)
- [Display - MDN](https://developer.mozilla.org/de/docs/Web/CSS/display)
- [Display - css tricks](https://css-tricks.com/almanac/properties/d/display/)

-------
## inline
`display: inline;`

`<a> <img> <button> <small> <b> <i> <u> <label> <span> <strong> <textarea> <select>  `

[Inline-Display-Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)


box wraps tightly around their content, only taking up the amount of space necessary to display their content and (take up as little space as possible).
- not requiring a new line after each element
- ignores manual width or height
- margin & padding: ignores top & bottom, only horizontally
- keeps everything on the same line
- inline elements are meant for text: should only contain text and other inline elements.
- Inline elements are meant to differentiate part of a text, to give it a particular function or meaning.
- Inline elements usually comprise a single or few words.

------
## inline-block

`<img>`  `display: inline-block;`

[Inline-Block](https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1)

- combines features of both inline and block elements
- can have set width and height, but they can also appear next to each other and do not take up their entire container width
- can appear next to each other and we can specify their dimensions using the width and height properties

-> wie ein Inline Element, aber mit veränderbarer Grösse

------

## none

`display: none;`

-> wird nicht angezeigt (zb ausblenden bei Quiz -> geht aber besser mit `visibility:hidden`)

------
## flex

`display: flex;` or `display: inline-flex;`

Define Element as Flex Container

------

## grid

`display: grid;` or `display: inline-grid;`

Define Element as Grid Container

------


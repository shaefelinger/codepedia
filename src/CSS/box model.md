
# The Box Model

## The Box Model

The CSS box model is essentially a box that wraps around every HTML element. It consists of **margin**, **border**, **padding**, and the actual **content**.<br>

<img src="./assets/CSS boxmodel2.png" alt="image-20220111093829073" style="zoom:50%;" />

- [CSS Box Model - w3schools](https://www.w3schools.com/css/css_boxmodel.asp)
- [The Box Model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [Video: The Box Model in Devtools](https://www.codecademy.com/courses/learn-css/videos/the-box-model-in-devtools)
- [Video: The Box Model History - Wikipedia](https://en.wikipedia.org/wiki/CSS_box_model#Background)

::: tip
inline Elements ignore other inlineElements vertical padding
:::



::: tip
[Margin collapse](https://www.w3schools.com/css/css_margin_collapse.asp): Top and bottom margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins. 

- [what-you-should-know-about-collapsing-margins](https://css-tricks.com/what-you-should-know-about-collapsing-margins/)

:::

------

## box-sizing

How the total size of the box is calculated:

`box-sizing: content-box` 

- the default setting
- width/height doesn't include margin, border & padding 
- width (height) = width(height) + padding + border

`box-sizing: border-box`. 

- include the padding and border in an element's total width and height. 
- Recommended (include in CSS reset)

##### Links - Box-sizing


- [Box sizing - w3schools](https://www.w3schools.com/css/css3_box-sizing.asp)

- [Box-Sizing - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

- [Paul Irish - Box Sizing](https://www.paulirish.com/2012/box-sizing-border-box-ftw/)

- [Box sizing best practice - CSS Tricks](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)

  ```css
  html {
  box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
  box-sizing: inherit;
  }
  ```


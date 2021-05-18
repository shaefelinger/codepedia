
# The Box Model

## The Box Model

The CSS box model is essentially a box that wraps around every HTML element. It consists of **margin**, **border**, **padding**, and the actual **content**.<br><img src="./assets/CSS boxmodel.png" alt="CSS boxmodel"  />

<img src="./assets/css boxmodel evans.jpeg" alt="css boxmodel evans" style="zoom: 67%;" />

- [CSS Box Model - w3schools](https://www.w3schools.com/css/css_boxmodel.asp)
- [The Box Model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [Video: The Box Model in Devtools](https://www.codecademy.com/courses/learn-css/videos/the-box-model-in-devtools)
- [Video: The Box Model History - Wikipedia](https://en.wikipedia.org/wiki/CSS_box_model#Background)

------

## `box-sizing`

How the total size of the box is calculated:

- `box-sizing: content-box` width (height) = width(height) + padding + border. (this is the default).

- `box-sizing: border-box`. include the padding and border in an element's total width and height. Recommended (include in CSS reset)

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

------
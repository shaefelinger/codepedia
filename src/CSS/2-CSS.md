






## ❗️Selectors

### Selectors & combining Selectors

| Selector                                                     | Example                                                      | Info                                                         | Learn CSS tutorial                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Type selector](https://developer.mozilla.org//en-US/docs/Web/CSS/Type_selectors) | `h1`                                                         | All `<h1>` - Tags                                            | [Type selectors](https://developer.mozilla.org//en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#Type_selectors) |
| [Class selector](https://developer.mozilla.org//en-US/docs/Web/CSS/Class_selectors) | `.box`  <br/>`ul.important`<br/> `#big.wide` <br/>`li.big.elegant` | - All Elements with `class="box"`  <br>- All `<ul>` Elements with `class="important"` <br>- Elements with `id="big"` and `class="wide"` <br/>- All `<li>` Elements with `class="big"` and `class="elegant"` | [Class selectors](https://developer.mozilla.org//en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#Class_selectors) |
| [ID selector](https://developer.mozilla.org//en-US/docs/Web/CSS/ID_selectors) | `#unique`                                                    | Elements with `id="unique"`                                  | [ID selectors](https://developer.mozilla.org//en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#ID_Selectors) |
| [Universal selector](https://developer.mozilla.org//en-US/docs/Web/CSS/Universal_selectors) | `*`                                                          | All Elements selects everything, <br>but cascading is no longer working! - be careful | [Universal selector](https://developer.mozilla.org//en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#The_universal_selector) |
| Comma Combinator                                             | `p, .fun` <br>`a, p, div`                                    | - All `<p> `Elements **and** all Elements with `class="fun"` <br>- All `<a>`, `<p> `and `<div>` Elements |                                                              |
| [Descendant combinator](https://developer.mozilla.org//en-US/docs/Web/CSS/Descendant_combinator) | `p strong` <br>`#fancy span` <br/>`.box p`<br/> `div *` <br/>`ul.fancy *` <br/><br/>`#list li:first-child a` | - All `<strong>` Elements **inside** any `<p>` <br/>- Any `<span>` inside Element with `id="fancy` <br/>- Any `<p>` inside Element with `class="box"` <br/>- All elements inside any `<div>` <br/>- Every element inside all `<ul class="fancy">` elements. <br/><br/><br/>- All `<a>` Elements inside `<li>` that are first-child from `#list` *The last element after the spaces is selected - doesn't have to be a direct child* | [Descendant combinator](https://developer.mozilla.org//en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators#Descendant_Selector) |
| [Adjacent sibling combinator](https://developer.mozilla.org//en-US/docs/Web/CSS/Adjacent_sibling_combinator) | `h1 + p` <br>`p + .intro`                                    | - Every `<p>` Element that **directly follows** a `<h1>` <br>- Every element with `class="intro"` that directly follows a `<p>` | [Adjacent sibling](https://developer.mozilla.org//en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators#Adjacent_sibling) |
| [General sibling combinator](https://developer.mozilla.org//en-US/docs/Web/CSS/General_sibling_combinator) | p ~ span                                                     | All `<span>` that **follow** a `<p>`                         | [General sibling](https://developer.mozilla.org//en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators#General_sibling) |
| [Child combinator](https://developer.mozilla.org//en-US/docs/Web/CSS/Child_combinator) | div > span                                                   | All `<span>` that are **direct children** of`<div>`          | [ Child combinator](https://developer.mozilla.org//en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators#Child_combinator) |

#### [Pseudo-Class Selectors](https://developer.mozilla.org//en-US/docs/Web/CSS/Pseudo-classes)
[Pseudo-classes Tutorial](https://developer.mozilla.org//en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-class)

| Selector                | Example                                                      | Info                                                         |
| ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| :first-child            | `:first-child`<br> `p:first-child`<br/> `div p:first-child`  | All **first child** Elements.<br/>All first child `<p>` elements <br/>all first child `<p>` elements that are in a `<div>` |
| :only-child             | `span:only-child` <br/>`ul li:only-child`                    | `<span>` elements that are the **only child** of some other element. <br/>The only `<li>` element that are in a <ul>. |
| :last-child             | `span:last-child` <br/>`ul li:last-child`                    | All **last child** `<span>` Elements <br/>last `<li>` elements inside of any `<ul>` |
| :nth-child(A)           | `:nth-child(8)`<br/> `div p:nth-child(2)`                    | Every element that is the **8th child** of another element.<br/> Second `<p>` in every `<div>` |
| :nth-last-child(A)      | `:nth-last-child(2)`                                         | All second-to-last child elements                            |
| :first-of-type          | `span:first-of-type`                                         | First `<span>` in any element.                               |
| :nth-of-type(A)         | `div:nth-of-type(2)`<br/> `.example:nth-of-type(odd)`        | second instance of a `<div>` <br/>All odd instances of a the example class. |
| :nth-of-type(An+B)      | `span:nth-of-type(6n+2)`                                     | every 6th instance of a `<span>`, starting from (and including) the second instance. |
| :only-of-type           | `p span:only-of-type`                                        | `>span<` within any `>p<` if it is the only `>span<` in there. |
| :last-of-type           | `div:last-of-type`                                           | last `>span<` in every p                                     |
| :empty                  | `div:empty`                                                  | all empty `>div<` elements                                   |
| :not(X)                 | `:not(#fancy)`<br/> `div:not(:first-child)`<br/> `:not(.big, .medium)` | all elements that do not have `id="fancy"` <br/>every `>div<` that is not a first child  <br/>all elements that do not have `class="big"` or `class="medium"` |
| Other Pseudo-Classes... | `:first­-line`<br/>`:first­-letter`<br/>`:hover`<br/>`:active`<br/>`:focus`<br/>`:first`<br/>`:checked`... | [Pseudo-class selectors](https://developer.mozilla.org//en-US/docs/Web/CSS/Pseudo-classes) |

#### [Attribute selectors](https://developer.mozilla.org//en-US/docs/Web/CSS/Attribute_selectors)

[Attribute Selector Tutorial](https://developer.mozilla.org//en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)

| Selector                                              | Example                                                      | Info                                                         |
| ----------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [attribute]                                           | `a[href]`<br> `[type]` <br/>`input[disabled]`                | all `<a>` elements that have a `href="anything"` attribute <br/>all elements that have a `type="anything"` attribute <br/>selects all `>input<` elements with the disabled attribute |
| [attribute="value"]                                   | `input[type="checkbox"]`                                     | All checkbox input elements                                  |
| *Attribute Starts With Selector* [attribute^="value"] | `.toy[category^="Swim"]`                                     | Elements with class toy and either `category="Swimwear` or `category="Swimming"` |
| *Attribute Ends With Selector* [attribute$="value"]   | `img[src$=".jpg"]`                                           | All .jpg images                                              |
| *Attribute Wildcard Selector* [attribute*="value"]    | `img[src*="/thumbnails/"]` <br/>`[class*="heading"]`         | All image elements that show images from the "thumbnails" folder<br/><br/> All elements with "heading" in their class, like `class="main-heading"` and `class="sub-heading"` |
| Other Attribute Selectors...                          | [Attribute selector](https://developer.mozilla.org//en-US/docs/Web/CSS/Attribute_selectors) | [Attribute selectors](https://developer.mozilla.org//en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) |

#### [Pseudo-element selectors](https://developer.mozilla.org//en-US/docs/Web/CSS/Pseudo-elements)

[Pseudo-Element Selector Tutorial](https://developer.mozilla.org//en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-element)

| Example                                                      |
| ------------------------------------------------------------ |
| `p::first-line`<br>`::first-letter`<br>`::after`<br>`::before`<br>`::placeholder...` |

<img src="assets/css%20selectors%20evans.jpeg" alt="css selectors evans" style="zoom: 50%;" />

- [CSS Selector Reference - w3schools](https://www.w3schools.com/cssref/css_selectors.asp)
- [CSS Selector Tester - w3schools](https://www.w3schools.com/cssref/trysel.asp)
- [CSS Selectors - MDN Webdocs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [shay howe - Complex Selectors](https://learn.shayhowe.com/advanced-html-css/complex-selectors/)
- [CSS Dinner-Spiel - flukeout.github.io/](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

------

### Color

##### [Color Names](https://www.w3schools.com/colors/colors_names.asp)

CSS has some predefined names for colors, e.g. red, blue, orange or tomato.

##### [Hex Color](https://www.w3schools.com/colors/colors_hexadecimal.asp)

Hex Colors Hex colors follow the pattern: `#rrggbb (red, green, blue)`

##### [RGB Color](https://www.w3schools.com/colors/colors_rgb.asp)

Here, colors are defined as: `rgb(r, g, b) (red, green, blue)`

##### [RGBA Colors](https://www.w3schools.com/css/css_colors_rgb.asp)

Additionally alpha-Value.(opacity)
`rgba(red, green, blue, alpha)`
The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all):

##### [HSL Colors](https://www.w3schools.com/colors/colors_hsl.asp)

They follow the pattern: `hsl(h, s%, l%)` (hue, saturation, lightness)

Hue is a number between 0 and 360 (degrees on the color wheel). Saturation and lightness are a percentage (between 0 and 100).

very close to how computers represent colors internally.

also: `color: hsla(34, 100%, 50%, 0.1);`

| Die wichtigsten Farben codes: |                                |
| ----------------------------- | ------------------------------ |
| red                           | #ff0000                        |
| green                         | #00ff00                        |
| blue                          | #0000ff                        |
| Black                         | #000000 or #000                |
| White                         | #FFFFFF or #FFF                |
| Aqua                          | #00FFFF or #0FF                |
| transparent                   | quivalent to rgba(0, 0, 0, 0). |

##### Color-Links:

- [Color Picker - w3schools](https://www.w3schools.com/colors/colors_picker.asp)
- [Color - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
- [Paletten - colorhunt.co](https://colorhunt.co/)

------

### Units

#### Absolute Units

|      |                    |
| ---- | ------------------ |
| px   | pixels             |
| pt   | points             |
| pc   | picas (apc = 12 pt |
| cm   | centimeters        |
| mm   | milimeters         |
| in   | inches             |

In web development, you usually use **px for height and width**, and **pt for font-size**.

Pixel values (px) actual size on the screen depends on the screen of the device. It is good practice to test your website on multiple devices.

#### Relative Units

|      |                                                              |
| ---- | ------------------------------------------------------------ |
| em   | Relative to the element’s font size (2em = 2 times the font size) |
| rem  | Relative to the font size of the root element - **most used!** |
| vw   | Relative to 1% of the viewport width                         |
| vh   | Relative to 1% of the height of the viewport                 |
| %    | Relative to the parent element                               |
|      |                                                              |

It is good practice to use **em** and **rem** a lot. It helps create good responsive websites. **vw** is also a useful unit, but has to be tested especially on small devices.

<img src="assets/css%20units%20evans.jpeg" alt="css units evans" style="zoom:50%;" />



- [CSS Units - w3schools](https://www.w3schools.com/cssref/css_units.asp)
- [CSS Values and Units - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [When to use rem vs em](https://webdesign.tutsplus.com/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984)
- [Understanding the Difference Between CSS Resolution and Device Resolution](https://medium.com/@elad/understanding-the-difference-between-css-resolution-and-device-resolution-28acae23da0b)
- dynamische font-grösse: (v.a. um die grase abhängig vom parent zu machen)
- Default Size: 100%=16px, 1em=16px
- rem ignores parent -> recomendet (aber reagiert auf Änderung der Font-grösse in den chrome-einstellungen)

------

### Typography

##### `font-family:`

- The default typeface for many browsers is Times New Roman.
- It’s a good practice to limit the number of typefaces used on a web page to 2 or 3
- When the name of a typeface consists of more than one word, it must be enclosed in double quotes. `font-family: "Courier New"`

------

##### `font-weight:`

- `normal, bold, bolder, lighter` - or a numeric scale ranging from 100 to 900. Valid values are multiples of 100 within this range
- 400 is the default font-weight of most text.
- 700 signifies a bold font-weight.
- 300 signifies a light font-weight.

- [CSS font-weight Property - w3schools](https://www.w3schools.com/cssref/pr_font_weight.asp)
- [font-weight - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)

------

##### `font-style:`

- `normal, italic`

- [CSS font-style Property - w3schools](https://www.w3schools.com/cssref/pr_font_font-style.asp)
- [font-style - MDN](https://developer.mozilla.org/de/docs/Web/CSS/font-style)

------

##### `text-transform:`

- to appear in either all uppercase or lowercase
- `uppercase, lowercase, capitalize`
- `text-transform: uppercase;`

- [Text Transform - w3schools](https://www.w3schools.com/cssref/pr_text_text-transform.asp)

------

##### `text-align:`

To move, or align text, we can use the text-align property.

- `left` - aligns text to the left hand side of the browser
- `center` - centers text
- right edges of the line box, except for the last line

- `right` - aligns text to the right hand side of the browser

- [Text Align - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)

------

##### `line-height:`

The vertical spacing between lines of text can be modified with the line-height property. Line heights can take one of several values:

- \* A unitless number, such as 1.2. This number is an absolute value that will compute the line height as a ratio of the font size. (prefered method)
- \* A number specified by unit, such as 12px. This number can be any valid CSS unit, such as pixels, percents, ems, or rems.

<img src="assets/css%20line%20height.png" alt="css line height" style="zoom:33%;" />

- [Line Height - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)

------

##### `word-spacing:`

- increase the spacing between words in a body of text, technically known as word spacing.
- the preferred unit is ems.
- default amount of space between words is usually 0.25em

- [Word Spacing - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing)

------

##### `letter-spacing:`

increase the spacing between letters, technically known as tracking. Can be adjusted with the letter-spacing property in CSS

- [Letter Spacing - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)

------

##### Fallback Fonts

when a stylesheet requires a font that is not installed on a user’s computer the following syntax is required:

```css
h1 {
  font-family: "Garamond", "Times", serif;
}
```

The CSS rule above says:

- Use the Garamond font for all `<h1>` elements on the web page
- If Garamond is not available, use the Times font
- If Garamond and Times are not available, use any serif font pre-installed on the user’s computer

- [Fallback Font Stacks - Css-tricks](https://css-tricks.com/css-basics-fallback-font-stacks-robust-web-typography/)
- [Web Safe Font Combinations - w3schools](https://www.w3schools.com/cssref/css_websafe_fonts.asp)

##### Linking Fonts

Google Fonts provides free fonts that can be used in an HTML file with the `<link>` tag or the `@font-face` property.

in HTML:

- [Google Fonts](https://fonts.google.com/)
- Add `<link>` in the `<head>`

To load Google fonts with the @font-face property:

- Instead of using the font’s link in the HTML document, enter the link into the URL bar in the browser.
- The browser will load the CSS rules. You will need to focus on the rules that are directly labeled as /* latin
- Some of the latin rules are on separate lines. You will need each of these.
- Copy each of the CSS rules labeled latin, and paste the rules from the browser to the top of style.css.

------

##### `@font-face`

The `@font-face` rule specifies a custom font (incl. Fallback-Fonts). the font can be loaded from either a remote server or a locally-installed font

in CSS: (on the top of the CSS)

```css
@font-face {
  font-family: "Bitstream Vera Serif Bold";
  src: url("https://mdn.mozillademos.org/files/2468/VeraSeBd.ttf");
}
@font-face {
  font-family: "Roboto";
  src: url(fonts/Roboto.woff2) format('woff2'),
        url(fonts/Roboto.woff) format('woff'),
        url(fonts/Roboto.tff) format('truetype');
} 
```

We add a format for each file to specify which font to use.

- Different browsers support different font types, so providing multiple font file options will support more browsers.
- As of now .woff2 appears to be the way of the future -> greatly reduced file sizes and improved performance, but many browsers still don’t support it.
- ...or .otf or .ttf

- [Font Face - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)
- [Font Face - w3schools](https://www.w3schools.com/cssref/css3_pr_font-face_rule.asp)
- [Using @font-face: - CSS-Tricks](https://css-tricks.com/snippets/css/using-font-face/)

------

##### `text-decoration:`

`underline, overline, line-through` etc.

- [Text Decoration - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
- [Text Decoration - w3schools](https://www.w3schools.com/cssref/pr_text_text-decoration.asp)

------

##### Div. Font-Links:

- [Google Fonts](https://fonts.google.com/)
- [Fonts - w3schools](https://www.w3schools.com/css/css_font.asp)
- [Websafe Fonts - w3schools](https://www.w3schools.com/cssref/css_websafe_fonts.asp)
- [cssfontstack.com](https://www.cssfontstack.com)
- [fontsquirrel.com](https://www.fontsquirrel.com)
- [onlinewebfonts.com/](https://www.onlinewebfonts.com/)

------

### Specifity

#### Specifity-Rules

**Rule1: From top to bottom**

styles that appear later in the style sheet overwrite the ones that appeared earlier

**Rule 2: IDs over Classes over Tags over Universal**

**Rule 3: Inline CSS over Internal CSS over External CSS**

**Rule 4: `!important` trumps everything (To be used wisely and only in exceptional cases!!)**

```css
.highlighted {
  background-color: yellow !important;
}
```

composit selector usually has higher specificity

- [Specifity - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [Specifity - CSS Tricks](https://css-tricks.com/specifics-on-css-specificity/)
- [Calculating a selector's specificity - w3.org](https://www.w3.org/TR/selectors-3/#specificity)
- [Codecademy Forum - specificity](https://discuss.codecademy.com/t/how-can-i-calculate-specificity/363597)
- [Hacks for dealing with specificity - csswizardry.com](https://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/)

------

#### Cascading & Inheritance

- All Elements only care about the parent & siblings
- margin and body werden nicht an die children cascadiert. color hingegen schon
- links übernehmen nicht die color des parent

- [Cascade and Inheritance - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [The “C” in CSS: The Cascade - CSS Tricks](https://css-tricks.com/the-c-in-css-the-cascade/)

------

### The Box Model

The CSS box model is essentially a box that wraps around every HTML element. It consists of **margin**, **border**, **padding**, and the actual **content**.<br><img src="file:///Users/sh/Dropbox/SH%20@Coding/@Code/SH%20Codepedia/assets/CSS%20boxmodel.png" alt="CSS boxmodel"  />

<img src="file:./assets/css%20boxmodel%20evans.jpeg" alt="css boxmodel evans" style="zoom: 67%;" />

<img src="assets/css%20boxmodel%20evans.jpeg" alt="css boxmodel evans" style="zoom:67%;" />

- [CSS Box Model - w3schools](https://www.w3schools.com/css/css_boxmodel.asp)
- [The Box Model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [Video: The Box Model in Devtools](https://www.codecademy.com/courses/learn-css/videos/the-box-model-in-devtools)
- [Video: The Box Model History - Wikipedia](https://en.wikipedia.org/wiki/CSS_box_model#Background)

------

#### `box-sizing`

How the total size of the box is calculated:

- `box-sizing: content-box` width (height) = width(height) + padding + border. (this is the default).
- `box-sizing: border-box`. include the padding and border in an element's total width and height. Recommended (include in CSS reset)

- [Box sizing - w3schools](https://www.w3schools.com/css/css3_box-sizing.asp)

- [Box-Sizing - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

- [Paul Irish - Box Sizing](https://www.paulirish.com/2012/box-sizing-border-box-ftw/)

- Box Sizing - best practice CSS Tricks

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

### Positioning

Default: `position: static`

1. content defines the size
2. html defines the order
3. children sits on top of parent (z-axis)

An inline-element becomes a block-element if it's position is other than static.

|          |                                                              |
| -------- | ------------------------------------------------------------ |
| static   | - Default value (does not need to be specified)<br/>- offset properties (`top, bottom` etc.) will not work<br/>- `z-index` is also ignored<br/>-`margin` works |
| relative | - element’s position is relative to its default position on the page<br/>- leaves a "ghost" on the original position in the document flow. Original space is still occupied<br/>- offset properties (`top, bottom` etc.) are working<br/>- rarely used |
| absolute | the element will scroll with the rest of the document when a user scrolls<br/>- removed from flow: all other elements on the page will ignore the element and act like it is not present on the page<br/>- offset properties working:<br/>    -If parent is `position: static`: postition relative to the whole screen<br/>.   -If parent-position is other than `static`: postition relative to the parent (-> it can make sense to put absolute elements in a relative container) |
| fixed    | - the element will remain fixed to its position no matter where the user scrolls on the page.<br/>- often used for navigation bars<br/>- removed from flow<br/>- doesn't care about the parent - positioned to the browser window<br/> *tip: create a dummy-container for empty space (esp. for footer and header)* |
| sticky   | - A sticky element toggles between relative and fixed, depending on the scroll position. <br/>- It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed) |

- [The position Property - w3schools](https://www.w3schools.com/css/css_positioning.asp)
- [Position - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Position: css-tricks](https://css-tricks.com/almanac/properties/p/position/)

------

####  Offset Properties

- top - moves the element down
- bottom - moves the element up
- left - moves the element right
- right - moves the element left

#### Z-Index

The z-index property controls how far “back” or how far “forward” an element should appear on the web page when elements overlap<img src="assets/css%20stacking%20evans.jpeg" alt="css stacking evans" style="zoom:67%;" />



- [Z-Index - w3schools](https://www.w3schools.com/cssref/pr_pos_z-index.asp)
- [z-index - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)

------

### Float & Clear

#### Float

- can move elements as far left or as far right as possible on a web page.
- Values: left/right/none
- Floated elements must have a width specified, Otherwise, the element will assume the full width of its containing element, and changing the float value will not yield any visible results.
- Floated Elements are not in the Document-Flow
- float only works on elements on the same level (silbings/brothers)
- text does not dissapear (??..)
- float implies the use of the block layout, it modifies the computed value of the display values to block (in most cases)

- [Float - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
- [Float and Clear - w3schools](https://www.w3schools.com/css/css_float.asp)
- [Float Examples - w3schools](https://www.w3schools.com/css/css_float_examples.asp)
- [Die CSS-Eigenschaft float verstehen und anwenden](https://blog.kulturbanause.de/2012/10/die-css-eigenschaft-float-verstehen-und-anwenden/)
- [Self-HTML Float](https://wiki.selfhtml.org/wiki/CSS/Eigenschaften/Positionierung/float)

------

#### Clear

The Clear property specifies how elements should behave when they bump into each other on the page. You can clear an element’s left or right side (or both) It can take on one of the following values:

- left — the left side of the element will not touch any other element within the same containing element
- right — the right side of the element will not touch any other element within the same containing element
- both — neither side of the element will touch any other element within the same containing element.
- none — the element can touch either side

- [Clear - w3schools](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
- [Clear - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)

------

#### Clearfix-hack

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

ClearFix Helder:

```css
.clearFix {
  clear: both;
} 
<div class="clearFix"></div>
```

- [Clear & Clearfix - w3schools](https://www.w3schools.com/css/css_float_clear.asp)
- [Clearfix - CSS-Tricks](https://css-tricks.com/snippets/css/clear-fix/)

------

### Display Type: Inline, Block, Block-Inline

|                                                              |                                                              |                                                              |      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| [Block-Display-Elements:](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) | <article> <blockquote> <div> <fieldset> <form> <h1>-<h6> <header> <footer> <ul> <ol> <li> <p> <pre> <table>  `display: block;` | - starts on a new line and blocks the whole line<br>- default height = auto -> nothing is displayed, if empty<br>- default width = 100%<br/>- width, heigth, padding, margin - fully supported<br/>- block elements are containerts for other elements<br/>- Block elements are meant to structure the main parts of your page, by dividing your content in coherent blocks. |      |
| [Inline-Display-Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements) | <a> <img> <button> <small> <b> <i> <u> <label> <span> <strong> <textarea> <select>  `display: inline;` | box wraps tightly around their content, only taking up the amount of space necessary to display their content and (take up as little space as possible).<br/>- not requiring a new line after each element<br/>- ignores manual width or height<br/>- margin & padding: ignores top & bottom, only horizontally<br/>- keeps everything on the same line<br/>- inline elements are meant for text: should only contain text and other inline elements.<br/>- Inline elements are meant to differentiate part of a text, to give it a particular function or meaning.<br/>- Inline elements usually comprise a single or few words. |      |
| [Inline-Block](https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1) | `<img>`  `display: inline-block;`                            | - combines features of both inline and block elements<br/>- can have set width and height, but they can also appear next to each other and do not take up their entire container width<br/>- can appear next to each other and we can specify their dimensions using the width and height properties<br/><br>-> wie ein Inline Element, aber mit veränderbarer Grösse |      |
|                                                              | `display: none;`                                             | -> wird nicht angezeigt (zb ausblenden bei Quiz -> geht aber besser mit `visibility:hidden`) |      |
|                                                              | `display: grid;` or `display: inline-grid;`                  | Define Element as Grid Container                             |      |



<img src="assets/CSS Codepedia/HTML display-0743679.png" alt="img" style="zoom: 67%;" />

Udemy #47 nochmal anschauen

- [dev.to -lesser known Display Values](https://dev.to/ekaterinavu/lesser-known-css-display-values-448j#ruby)
- [CSS Display Property - w3schools](https://www.w3schools.com/cssref/pr_class_display.asp)
- [Display - MDN](https://developer.mozilla.org/de/docs/Web/CSS/display)
- [Display - css tricks](https://css-tricks.com/almanac/properties/d/display/)

------

### Centering

<img src="assets/CSS Codepedia/css centering evans.jpeg" alt="assets/css centering evans.jpeg" style="zoom:50%;" />

- [Centering Things - w3c](https://www.w3.org/Style/Examples/007/center.en.html)
- [Centering in CSS: A Complete Guide - CSS Tricks](https://css-tricks.com/centering-css-complete-guide/)
- [Center Anything with CSS - freecodecamp.org](https://www.freecodecamp.org/news/how-to-center-anything-with-css-align-a-div-text-and-more/)

##### Perfect Centering with Flexbox:

Set both the `justify-content` and `align-items` properties to center, and the flex item will be perfectly [centered](https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox_perfect_center).

------

#### 1.) Centering Horizontally

##### a) Text-Align: Center

Funktioniert bei Text. (`<p>, <h1>, <div>, ...`)

Oder: das übergeordnete Block-Element (z.B. `<div>`) bekommt `text-align: center;`
Dann ist alles zentriert

text-align: center; ist eigentlich content-align;

```css
.center-children {
  text-align: center;
}
```

[Codepen - Centering Inline Elements](https://codepen.io/chriscoyier/pen/HulzB)

##### b) margin: auto

Center a block-level element by giving it margin-left and margin-right of auto (needs a set width, otherwise it would be full width and wouldn’t need centering).

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

##### c) Flexbox

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

##### d) Multiple Block Elements

`margin:auto` also works for multiple block level elements stacked on top of each other

[Codepen - Centering Blocks on Top of Each Other](https://codepen.io/chriscoyier/pen/haCGt)

For Multiple block-level elements that need to be centered horizontally in a row, change the display type. E.g. `inline-block` or Flexbox

This also works for multiple block level elements stacked on top of each other

[Codepen -  Centering Row of Blocks
[](https://codepen.io/chriscoyier/pen/ebing)

------

#### 2.) Centering Vertically

##### A.) Single Line Inline or Inline-*

a) **Equal padding** above and below them:

```css
.link {
  padding-top: 30px;
  padding-bottom: 30px;
}
```

[Centering a line with line-height](https://codepen.io/chriscoyier/pen/LxHmK)

##### B.) Multiple Lines

a) **Equal padding** on Top & Buttom [a)] can work as well...

b) ...or Perhaps the element the text is in can be a **table cell**, either literally or made to behave like one with CSS. The property handles this, in this case, unlike what it normally does The [`vertical-align`](https://css-tricks.com/what-is-vertical-align/) property handles this, in this case, unlike what it normally does which is handle the alignment of elements aligned on a row

[Centering text (kinda) with Padding](https://codepen.io/chriscoyier/pen/ekoFx)

c) If both of these techniques are out, you could employ the **“ghost element”** technique, in which a full-height pseudo-element is placed inside the container and the text is vertically aligned with that.

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

##### C.) Block-Level-Element

a) if you do know the height, you can center vertically like: (It’s fairly common to *not* know the height)

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

##### D.) BEST: Use Flexbox

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

#### 3.) Centering Vertically & Horizontally

##### a) if you know the width and the height:

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

##### b) unknown width & Height. 

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

##### c) Flexbox (best)

Apply `justify-content: center` and `align-items: center` to center the child element(s) horizontally and vertically:

```css
.container {
  ...
  display: flex;
  justify-content: center;
  align-items: center;
}
```

##### d) Or use Grid:

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

------

### Flexbox

In flexbox, the outer box is called the **container**. The inner boxes (the columns) are called the **items**. Any element can be a flex container.

The **flex container** (parent) becomes flexible by setting the display property to flex: `**display:flex**` or `**display:inline-flex**`

```css
div.container {
  display: flex;
}
```

In the example above, all divs with the class container are flex containers. If they have children, the children are flex items.

- A div with the declaration `display: flex;` will remain block level — no other elements will appear on the same line as it.
- But it will change the behavior of its child elements: Child elements will not begin on new lines.
- `display: inline-flex` creates flex containers that are also inline elements -> allows multiple flex containers to appear inline with each other.
- wenn der content nicht passt, dann wächst der parent
- wenn alle `flex-grow:1` haben, sind alle gleich gross
- Step 1: make Item as small as possible, Step 2: try to apply grow
- all flex items shrink proportionally when the flex container is too small.
- If a `max-width` is set for an element, it will not grow larger than that even if there is more space
- Flex containers can be nested inside of each other by declaring `display: flex` or `display: inline-flex` for children of flex containers.

#### Flex Container properties :

##### [`flex-direction`](https://www.w3schools.com/css/css3_flexbox_container.asp#flex-direction) 

- defines in which **direction** the container wants to stack the flex items (is used to specify the main and cross axes). By default, the **main axis** is horizontal (row) and the cross axis is vertical.
- Values: *row (default), row-reverse, column, column-reverse*
- The main axis is used for: `justify-content, flex-wrap, flex-grow, flex-shrink`. The cross axis is used for: `align-items, align-content`

##### [`flex-wrap`](https://www.w3schools.com/css/css3_flexbox_container.asp#flex-wrap) 

- specifies whether the flex items should **wrap or not**. ( shift along the cross axis if the flex container is not large enough)
- Values: *wrap, nowrap (default), wrap-reverse*

##### [`flex-flow`](hhttps://www.w3schools.com/css/css3_flexbox_container.asp#flex-flow) 

- is a shorthand property for setting both the flex-direction and flex-wrap
- `flex-flow: direction wrap;`

##### [`justify-content`](https://www.w3schools.com/css/css3_flexbox_container.asp#justify-content) 

- used to space items along the main axis - (horizontally from left to right). 
- The size of each item is not changed.
- Values: *center, flex-start (default), flex-end, space-around (equal space before+after items), space-between (equal space between, no extra space @start/end)*

<img src="file:///Users/sh/Dropbox/SH%20@Coding/@Code/SH%20Codepedia/assets/flex%20justify-content.png" alt="flex justify-content" style="zoom:50%;" />

##### [`align-items`](https://www.w3schools.com/css/css3_flexbox_container.asp#align-items) 

- is used to space items along the cross axis (vertically). (within a single row)

- Values: *center, flex-start, flex-end, stretch (default), baseline (bottom aligned with each other)*

*\* stretch: elements with a specified height will not stretch; elements with a minimum height or no height specified will stretch).*

<img src="file:///Users/sh/Dropbox/SH%20@Coding/@Code/SH%20Codepedia/assets/flex-align-items.png" alt="flex-align-items" style="zoom: 50%;" />

##### [`align-content`](https://www.w3schools.com/css/css3_flexbox_container.asp#align-content) 

- If a flex container has multiple rows of content, we can use align-content to space the rows from top to bottom. 
- It is used to space rows along the cross axis.
- Values: *flex-start, flex-end, center, stretch, space-around (equal space), space-between (equal space except start/end)*

** stretch: if a minimum height or no height is specified*

------

#### Flex Item properties:

The direct child elements of a flex container automatically becomes flexible (flex) items.

##### [`order`](https://www.w3schools.com/css/css3_flexbox_items.asp#order) 

- specifies the order of the flex items. 
- The order value must be a number, default value is 0.

##### [`flex-grow`](https://www.w3schools.com/css/css3_flexbox_items.asp#flex-grow) 

- specifies how much a flex item will grow relative to the rest of the flex items if there is space. 
- The value must be a number, default value is 0. 
- Margins are unaffected by flex-grow and flex-shrink.
  minimum and maximum widths will take precedence over flex-grow and flex-shrink

##### [`flex-shrink`](https://www.w3schools.com/css/css3_flexbox_items.asp#flex-shrink) 

- specifies how much a flex item will shrink relative to the rest of the flex items. The value must be a number, default value is 1.
- flex-shrink will only be employed if the parent container is too small or the browser is adjusted

##### [`flex-basis`](https://www.w3schools.com/css/css3_flexbox_items.asp#flex-basis) 

- specifies the initial length of a flex item before it stretches or shrinks.
- similar to `width`. if `flex-direction: column`: flex-basis=height
  - We can think of flex-basis as the width OR height (depending on flex-direction)
  - flex-basis is limited by both max-width/max-height and min-width/min-height
  - When declared, flex-basis will override the width/height property set on a flex container
  - If no flex-basis is specified the default is the set width/height value, if width/height isn’t specified the default is the width/height of the content
  - When there is not enough space for our flex items our items will shrink at an even rate to fit within the container by default
  - If there is too much space we can declare flex-grow: 1; on our flex items to make them grow at an even rate

##### [`flex`](https://www.w3schools.com/css/css3_flexbox_items.asp#flex) 

- is a shorthand property for the flex-grow, flex-shrink, and flex-basis properties.
- `flex: grow shrink basis;`

##### [`align-self`](https://www.w3schools.com/css/css3_flexbox_items.asp#align-self) 

- specifies the alignment for the selected item inside the flexible container.
-  It overrides the default alignment set by the container's align-items property. 

#### Flexbox-Links

- [flexboxfroggy.com - GAME](http://flexboxfroggy.com/#de)
- [A complete Guide to Flexbox - CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Flexbox - w3schools](https://www.w3schools.com/css/css3_flexbox.asp)
- [Flexbox - MDN](https://developer.mozilla.org/de/docs/Learn/CSS/CSS_layout/Flexbox)
- [flexbox.help](http://flexbox.help/)
- [Flexbox Generator](https://loading.io/flexbox/)
- [A visual Guide to Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)
- [Flexbox Playground](https://demos.scotch.io/visual-guide-to-css3-flexbox-flexbox-playground/demos/)
- [use-flexbox-to-create-a-sticky-header-and-sidebar-with-flexible-content](https://www.bitovi.com/blog/use-flexbox-to-create-a-sticky-header-and-sidebar-with-flexible-content)
- [Easies Flex-Grid ever](https://www.taniarascia.com/easiest-flex-grid-ever/)
- https://flexbox.io/

------

### Grid

#### Creating a Grid

=> defining the Parent/Container

To set up a grid, you need to have both a **grid container** (parent) and **grid items** (children).

To turn an HTML element into a grid container:

- `display: grid;` or
- `display: inline-grid;`

Direct child element(s) of the grid container automatically become grid items.

------

##### Creating Columns & Rows

Define the Columns & Rows (Number & Size): `**grid-template: rows / columns;**`

Or : `**grid-template-columns**` or `**grid-template-rows**` (By default, the rows are sized to fit evenly inside the grid.)

```css
grid-template: 200px 300px / 20% 10% 70%;
```

------

##### Fraction

By using the **fr** unit, we can define the size of columns and rows as a fraction of the grid’s length and width.

```css
grid-template: 2fr 1fr 1fr / 1fr 3fr 1fr;
```

It is possible to use fr with other units as well. Each fr represents a fraction of the **available** space.

```css
 grid-template-columns: 1fr 60px 1fr;
```

------

##### Repeat

The repeat function will duplicate the specifications for rows or columns a given number of times.

```css
grid-template-columns: repeat(3, 100px);
grid-template-columns: repeat(2, 20px 50px)
grid-template-columns: repeat(5, 1fr)
```

------

##### minmax

to prevent a row or column from getting too big or too small

```css
grid-template-columns: 100px minmax(100px, 500px) 100px;
```

In this example, the first and third columns will always be 100 pixels wide, no matter the size of the grid. The second column, will vary in size (between 100 and 500 pixels) as the overall grid resizes.

------

##### Grid Gap

will put blank space between every row and column in the grid

```css
grid-gap: 20px 10px;
```

will set the distance between rows to 20 pixels and the distance between columns to 10 pixels. Unlike other CSS grid properties, this shorthand does not take a / between values!

Also: `grid-row-gap` and `grid-column-gap`

------

#### Defining the Grid Items

we can make grid items take up more than one row and one column. In the diagram: Items A, B, C, and E span more than one row

![css gridarea.png](/Users/sh/Dropbox/SH @Coding/_MD CODEPEDIA/assets/CSS Codepedia/css gridarea.png)



#### Grid Area

[grid-area ](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area) is a shorthand for [grid-row-start](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start), [grid-column-start](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start), [grid-row-end](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end) and [grid-column-end](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end), all in one line:

```css
grid-area: 2 / 3 / 4 / span 5;
```

grid-area takes four values separated by slashes:

1. grid-row-start
2. grid-column-start
3. grid-row-end
4. grid-column-end

- grid lines start at 1 and end at a value that is 1 greater than the number of rows or columns the grid has

- The value for start should be the row/column at which you want the grid item to begin. The value for end should be one greater than the row/column at which you want the grid item to end

- It is possible for the start-value to be greater than that end-value. Both properties can also each have negative values

- use the keyword `span` to start or end a column or row relative to its other end

  ```css
  grid-column: 4 / span 2;
  ```

- it will also include the grid-gap if any exists.

- `grid-row` and `column-row` are also available.the starting row goes before the “/“ and the ending row goes after it.

------

#### Grid Template Areas

- `grid-area` can also be used to assign names to grid items.
- Named grid items can be referred to by the `grid-template-areas` property of the grid container.
- To name sections of your web page.
- -> gibt namen für die linien zwischen den columns
- specifies grid named grid areas
- Use as values in the grid-row-start, grid-row-end, grid-col-start,grid-col-end, and grid-area properties

```css
.item1 { grid-area: header; }
.item2 { grid-area: menu; }
.item3 { grid-area: main; }
.item4 { grid-area: right; }
.item5 { grid-area: footer; }

.grid-container {
  grid-template-areas:
    'header header header header header header'
    'menu main main main right right'
    'menu footer footer footer footer footer';
}
grid-template-columns: 
  [full-start] 1fr
  [content-start] 30em
  [content-end] 1fr 
  [full-end];
```

------

##### Overlapping Elements

When overlapping elements, it is generally easiest to use grid line names and the grid-area property.

------

#### Justify and Align Items/Content

- The **column/block** axis stretches from **top to bottom** across the web page.
- The **row/inline** axis stretches from **left to right** across the web page

------

##### Justify Items - Align Items

**`justify-items`** positions grid items along the inline (row) axis -> from left to right

**`align-items`** positions grid items along the block, or column axis -> from top to bottom.

This property is declared on grid containers.

(??? If we specify a height for the .card elements, they will not stretch the height of their row even if align-items: stretch; is set)

align-items specifies how individual elements should spread across the column axis

justify-items specifies how individual elements should spread across the row axis

Values:

- start — aligns grid items to the left/top side of the grid area
- end — aligns grid items to the right/bottom side of the grid area
- center — aligns grid items to the center of the grid area
- stretch — stretches all items to fill the grid area

- [MDN - Justify Items](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout#Justifying_Items_on_the_Inline_or_Row_Axis)
- [MDN - Align Items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)

------

##### Justify Content - Align Content

position the entire grid

**`justify-content`** position the entire grid along the row axis -> from left to right

**`align-content`** positions the rows along the column axis -> from top to bottom

align-content specifies how groups of elements should spread across the column axis

justify-content specifies how groups of elements should spread across the row axis

Values:

- start — aligns the grid to the left side/top of the grid container
- end — aligns the grid to the right side/bottom of the grid container
- center — centers the grid horizontally in the grid container
- stretch — stretches the grid items to increase the size of the grid to expand across the container
- space-around — includes an equal amount of space on each side of a grid element, resulting in double the amount of space between elements as there is before the first and after the last element
- space-between — includes an equal amount of space between grid items and no space at either end
- space-evenly — places an even amount of space between grid items and at either end

- [MDN - Justify Content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content#Values)
- [MDN - Align Content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content#Values)

------

##### Justify Self - Align Self

**`justify-self`** specifies how an individual element should position itself with respect to the row axis. This property will override justify-items for any item on which it is declared.

**`align-self`** specifies how an individual element should position itself with respect to the column axis. This property will override align-items for any item on which it is declared.

\* align-self specifies how a single element should position itself with respect to the column axis

justify-self specifies how a single element should position itself with respect to the row axis

Values:

- start — positions grid items on the left side/top of the grid area
- end — positions grid items on the right side/bottom of the grid area
- center — positions grid items on the center of the grid area
- stretch — positions grid items to fill the grid area (default)

------

##### Implicit vs. Explicit Grid

The implicit grid is an algorithm that determines default behavior for the placement of elements when there are more than fit into the grid specified by the CSS.
\* grid-auto-rows specifies the height of rows added implicitly to the grid
\* grid-auto-columns specifies the width of columns added implicitly to the grid
 Default behavior of the implicit grid is:

- items fill up rows first, adding new rows as necessary.
- New grid rows will only be tall enough to contain the content within them.

`grid-auto-rows` and `grid-auto-columns`. specify the size of grid tracks added implicitly. These properties are declared on grid containers.

They accept the same values as their explicit counterparts, grid-template-rows and grid-template-columns

- pixels (px)
- percentages (%)
- fractions (fr)
- the repeat() function

------

##### Grid Auto Flow

\* grid-auto-flow specifies in which direction implicit elements should be created

In addition to setting the dimensions of implicitly-added rows and columns, we can specify the order in which they are rendered. grid-auto-flow specifies whether new elements should be added to rows or columns Values.

- row — specifies the new elements should fill rows from left to right and create new rows when there are too many elements (default)
- column — specifies the new elements should fill columns from top to bottom and create new columns when there are too many elements
- dense — this keyword invokes an algorithm that attempts to fill holes earlier in the grid layout if smaller elements are added

You can pair row and column with dense, like this: 

```css
grid-auto-flow: row dense;
```

This property is declared on grid containers.

------

#### Grid-links

- [css-tricks.com - Things I’ve Learned About CSS Grid Layout](https://css-tricks.com/things-ive-learned-css-grid-layout/)

- [css-tricks.com - A complete guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

- [Learn CSS Grid - scrimba](https://scrimba.com/learn/R8PTE)

- [Why CSS Grid is better than Bootstrap](https://hackernoon.com/how-css-grid-beats-bootstrap-85d5881cf163)

- [Moving From CSS Frameworks To CSS Grid](https://m.youtube.com/watch?v=paMmgo4MhQ8)

- [gridbyexample](https://gridbyexample.com/)

- [jensimmons](https://labs.jensimmons.com/)

- [Rachel Andrews](https://rachelandrew.co.uk/)

- [Grid - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

- [Specification w3.org](https://www.w3.org/TR/css-grid-1/)

- [Game: Grid Garden](https://codepip.com/games/grid-garden/)

- https://cssgrid.io/

  

------

### Responsiveness

A website is responsive if it is suitable for all screen sizes, even for small mobile screens. For making a website responsive, we can use media queries. Media queries are styles wrapped in a @media block that defines for which screen size this style applies.

Example: [Non-Responsive](https://content.codecademy.com/courses/freelance-1/unit-5/globe-book-store/index.html) vs [responsive](https://content.codecademy.com/courses/freelance-1/unit-5/globe-book-store/index-responsive.html)

#### Media Queries

CSS can detect the size of the current screen and apply different CSS styles

- The conditions that must be met to render the CSS within a media query are called **Media Features**

- Media features can detect many aspects of a user’s browser, including the screen’s width, height, resolution, orientation, and more.

- ```css
  @media only screen and (max-width: 480px) {
    body {
      /* a rule for screens smaller than 480  pixels */
    }
  }
  ```

  The **`only`** keyword is added to indicate that this rule only applies to one media type (screen) and not eg. prin`

- To target by resolution, we can use the `min-resolution` and `max-resolution` media features. in [dots-per-inch](https://en.wikipedia.org/wiki/Dots_per_inch) (dpi) or dots-per-centimeter (dpc)

  ```css
  @media only screen and (min-resolution: 300dpi) {
    /* CSS for high resolution screens */
  }
  ```

- By using multiple widths and heights combined by `and`, a range can be set for a media query.

  ```css
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    /* ruleset for 320px - 480px */
  }
  ```

  The `and` operator can be used to chain as many media features as necessary.

  ```css
  @media only screen and (max-width: 480px) and (min-resolution: 300dpi) {
    /* CSS ruleset */
  }
  ```

- If only one of multiple media features in a media query must be met, media features can be separated in a comma separated list.

  ```css
  @media only screen and (min-width: 480px), (orientation: landscape) {
    /* CSS ruleset */
  }
  ```

------

#### Common device Sizes:![screen-sizes](file:///Users/sh/Dropbox/SH%20@Coding/@Code/SH%20Codepedia/assets/screen-sizes.png)

The style without the media query is the smallest and the default style. The style inside the media query is the one for the larger screens and will overwrite the default style if the screen where the website is displayed is larger than specified.

- [Simulate screen sizes in chrome](https://developers.google.com/web/tools/chrome-devtools/device-mode)
- [Media Queries - w3schools](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
- [Using media queries - MDN](https://developer.mozilla.org/de/docs/Web/CSS/Media_Queries/Using_media_queries)
- [guidelines for responsive web design](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/)

------

### Gradients

- [Gradients - w3school](https://www.w3schools.com/css/css3_gradients.asp)

------

### Transition

CSS transitions allow us to control the timing of visual state changes.

#####  `transition: `

Shorthand: The properties must be specified in this order:

- `transition-property`
- `transition-duration`
- `transition-timing-function`
- `transition-delay`

To combine transitions, add a comma (,)

```css
transition: color 1s linear,
font-size 750ms ease-in 100ms;
```

##### transition-timing-function:

- ease-in — starts slow, accelerates quickly, stops abruptly
- ease-out — begins abruptly, slows down, and ends slowly
- ease-in-out — starts slow, gets fast in the middle, and ends slowly
- linear — constant speed throughout

- [MDN - transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
- [MDN - animateable properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)
- [MDN - using transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions∏)

------

### Animation

You specify animation inside the `@keyframes` rule. the animation will gradually change from the current style to the new style at certain times.

you must bind the animation to an element. (with `animation-name, animation-duration,...`) If the animation-duration property is not specified, no animation will occur (default value is 0s).

```css
/* The animation code */
  @keyframes example {
    from {background-color: red;}
    to {background-color: yellow;}
  }
  
  /* The element to apply the animation to */
  div {
    width: 100px;
    height: 100px;
    background-color: red;
    animation-name: example;
    animation-duration: 4s;
  }
```



By using percent, you can add as many style changes as you like:

```css
/* The animation code */
@keyframes example {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}

/* The element to apply the animation to */
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
```

| Animation                                                    |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [@keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) | Define the Animation                                         |
| [animation-name:](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name) | Apply the animation to the element                           |
| [animation-duration:](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration) | defines how long time an animation should take to complete. <br>If the animation-duration property is not specified, no animation will occur (default value is 0s) |
| [animation-delay:](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay) | Specifies a delay for the start of an animation.<br/> If using negative values, the animation will start as if it had already been playing for N seconds. |
| [animation-iteration-count:](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count) | Specifies the number of times an animation should run.<br/> Use "infinite" to make the animation continue forever. |
| [animation-direction:](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction) | specifies whether an animation should be played forwards, backwards or in alternate cycles. |
| [animation-timing-function:](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) | specifies the speed curve of the animation                   |
| [animation-fill-mode:](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode) | specifies a style for the target element when the animation is not playing (before it starts, after it ends, or both). |
| [animation-play-state:](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state) | Lets you pause and resume the animation sequence.            |
| **[animation:](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)** | Shorthand for: `animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, animation-play-state.` `animation: example 5s linear 2s infinite alternate;` |

- [Animations - w3schools](https://www.w3schools.com/css/css3_animations.asp)
- [CSS Animations - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

------

### Browser Compatibility

cross-browser-compatibility:

- [normalize.css]( https://necolas.github.io/normalize.css/)
- [caniuse.com/](https://caniuse.com/)
- [autoprefixer](https://autoprefixer.github.io/)
- [MDN Browser Compatibility Report 2020](files/MDN-Browser-Compatibility-Report-2020.pdf)

------

### Hugo etc

templates zb f. head, nav, etc.

[gohugo.io](https://gohugo.io)

Jekyll ist zb ne alternative

------

### ::before / ::after

- [..before / :: after - CSS tricks](https://css-tricks.com/almanac/selectors/a/after-and-before/)

------

### DefaultCSS & Reset

- [CSS Default Values - w3schools](https://www.w3schools.com/cssref/css_default_values.asp)
- [CSS Reset - meyerweb](https://meyerweb.com/eric/tools/css/reset/)
- [normalize CSS](https://necolas.github.io/normalize.css/)
- [Sanitize CSS](https://csstools.github.io/sanitize.css/)
- [a tale of css resets](https://medium.com/weekly-webtips/a-tale-of-css-resets-and-everything-you-need-to-know-about-them-781849d9b7f2)
- [Bootstrap reboot](https://raw.githubusercontent.com/twbs/bootstrap/v4-dev/dist/css/bootstrap-reboot.css)
- [mini resets](https://github.com/jgthms/minireset.css/blob/master/minireset.css)
- [SH reboot](files/SHreboot.css)
- [sh_sanitize](files/sh_sanitize.css)

- vielleicht eigenen erstellen mit

- ```
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
  /* evtl: margin: 0; für body */
  	
  ```


------

### CSS Variables

declare in: 

```css
 :root {
      --base: #ffc600;
      --spacing: 10px;
      --blur: 10px
    }
```

use it:

```css
img {
	padding: var(--spacing);
}
```

------



------

### BEM Naming Convention

```
block__element--modifier
```

The block is the larger section that you want to display, e.g. a form. The element is an element of it, e.g. a button. The modifier specifies a variant of this element, e.g. a highlighted button. It is optional. In the HTML, this would look like this:

```html
<button class=”form__button--highlighted”>Submit</button>
```

in CSS:

```
.form__button--highlighted {
...
}
```

- [More Info: getbem.com](http://getbem.com/naming/)
- [BEM 101 - css-tricks.com](https://css-tricks.com/bem-101/)
- [getting-your-head-round-bem-syntax - csswizardry.com](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

------

### Minify / Unminify

- [CSS Minifier](https://cssminifier.com)
- [unminify.com](https://unminify.com)
- https://minifier.org/

------

# LINKS

## Referenz-Links

- [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN CSS Refernce](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [w3schools CSS Tutorial](https://www.w3schools.com/css/default.asp)
- [w3schools CSS Reference](https://www.w3schools.com/cssref/default.asp)
- [devdocs - CSS](https://devdocs.io/css/)
- [Stanford CSS Cheatsheet](https://web.stanford.edu/group/csp/cs21/csscheatsheet.pdf)
- [CSS htmlcheatsheet.com](https://htmlcheatsheet.com/css/)
- [CSS cheatography](https://cheatography.com/davechild/cheat-sheets/css2/)
- [HandoutHTML Hamburg Coding School](files/Handout - HTML & CSS.pdf)
- [Shay Howe - Learn to Code Advanced HTML & CSS](https://learn.shayhowe.com/advanced-html-css/)
- [MDN - CSS Layout Cookbook](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook)

## Diverse Links

- [codepen.io](https://codepen.io)
- [caniuse.com - Browser Compatibility](https://caniuse.com/)
- [HTML/CSS Kurs A.Löhn](https://github.com/loehx/html-css-2020-1)
- [cssfontstack.com](https://www.cssfontstack.com)

- http://smacss.com/







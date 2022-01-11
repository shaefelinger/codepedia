# Typography

## `font-family:`

- The default typeface for many browsers is Times New Roman.
- It’s a good practice to limit the number of typefaces used on a web page to 2 or 3
- When the name of a typeface consists of more than one word, it must be enclosed in double quotes. `font-family: "Courier New"`

---

## `font-weight:`

- `normal, bold, bolder, lighter` - or a numeric scale ranging from 100 to 900. Valid values are multiples of 100 within this range
- 400 is the default font-weight of most text.
- 700 signifies a bold font-weight.
- 300 signifies a light font-weight.

- [CSS font-weight Property - w3schools](https://www.w3schools.com/cssref/pr_font_weight.asp)
- [font-weight - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)

---

## `font-style:`

- `normal, italic`

- [CSS font-style Property - w3schools](https://www.w3schools.com/cssref/pr_font_font-style.asp)
- [font-style - MDN](https://developer.mozilla.org/de/docs/Web/CSS/font-style)

---

## `text-transform:`

- to appear in either all uppercase or lowercase
- `uppercase, lowercase, capitalize`
- `text-transform: uppercase;`

- [Text Transform - w3schools](https://www.w3schools.com/cssref/pr_text_text-transform.asp)

---

## `text-align:`

To move, or align text, we can use the text-align property.

- `left` - aligns text to the left hand side of the browser
- `center` - centers text
- right edges of the line box, except for the last line

- `right` - aligns text to the right hand side of the browser

- [Text Align - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)

---

## `line-height:`

The vertical spacing between lines of text can be modified with the line-height property. Line heights can take one of several values:

- \* A unitless number, such as 1.2. This number is an absolute value that will compute the line height as a ratio of the font size. (prefered method)

- \* A number specified by unit, such as 12px. This number can be any valid CSS unit, such as pixels, percents, ems, or rems.

<img src="./assets/css lineheight2.png" alt="css line height"  />

- [Line Height - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)

---

## `word-spacing:`

- increase the spacing between words in a body of text, technically known as word spacing.
- the preferred unit is ems.
- default amount of space between words is usually 0.25em

- [Word Spacing - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing)

---

## `letter-spacing:`

increase the spacing between letters, technically known as tracking. Can be adjusted with the letter-spacing property in CSS

- [Letter Spacing - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)

---

## Fallback Fonts

when a stylesheet requires a font that is not installed on a user’s computer the following syntax is required:

```css
h1 {
  font-family: 'Garamond', 'Times', serif;
}
```

The CSS rule above says:

- Use the Garamond font for all `<h1>` elements on the web page
- If Garamond is not available, use the Times font
- If Garamond and Times are not available, use any serif font pre-installed on the user’s computer

- [Fallback Font Stacks - Css-tricks](https://css-tricks.com/css-basics-fallback-font-stacks-robust-web-typography/)
- [Web Safe Font Combinations - w3schools](https://www.w3schools.com/cssref/css_websafe_fonts.asp)

## Linking Fonts

Google Fonts provides free fonts that can be used in an HTML file with the `<link>` tag or the `@font-face` property.

in HTML:

- [Google Fonts](https://fonts.google.com/)
- Add `<link>` in the `<head>`

To load Google fonts with the @font-face property:

- Instead of using the font’s link in the HTML document, enter the link into the URL bar in the browser.
- The browser will load the CSS rules. You will need to focus on the rules that are directly labeled as /\* latin
- Some of the latin rules are on separate lines. You will need each of these.
- Copy each of the CSS rules labeled latin, and paste the rules from the browser to the top of style.css.

---

## `@font-face`

The `@font-face` rule specifies a custom font (incl. Fallback-Fonts). the font can be loaded from either a remote server or a locally-installed font

in CSS: (on the top of the CSS)

```css
@font-face {
  font-family: 'Bitstream Vera Serif Bold';
  src: url('https://mdn.mozillademos.org/files/2468/VeraSeBd.ttf');
}
@font-face {
  font-family: 'Roboto';
  src: url(fonts/Roboto.woff2) format('woff2'), url(fonts/Roboto.woff) format('woff'),
    url(fonts/Roboto.tff) format('truetype');
}
```

Add a format for each file to specify which font to use.

- Different browsers support different font types, so providing multiple font file options will support more browsers.
- As of now .woff2 appears to be the way of the future -> greatly reduced file sizes and improved performance, but many browsers still don’t support it.
- ...or .otf or .ttf

- [Font Face - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)
- [Font Face - w3schools](https://www.w3schools.com/cssref/css3_pr_font-face_rule.asp)
- [Using @font-face: - CSS-Tricks](https://css-tricks.com/snippets/css/using-font-face/)

---

## `text-decoration:`

`underline, overline, line-through` etc.

- [Text Decoration - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
- [Text Decoration - w3schools](https://www.w3schools.com/cssref/pr_text_text-decoration.asp)

## Font-Links

- [Google Fonts](https://fonts.google.com/)
- [Fonts - w3schools](https://www.w3schools.com/css/css_font.asp)
- [Websafe Fonts - w3schools](https://www.w3schools.com/cssref/css_websafe_fonts.asp)
- [cssfontstack.com](https://www.cssfontstack.com)
- [fontsquirrel.com](https://www.fontsquirrel.com)
- [onlinewebfonts.com/](https://www.onlinewebfonts.com/)

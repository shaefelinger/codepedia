# CSS misc.
## Browser Compatibility

cross-browser-compatibility:

- [normalize.css](https://necolas.github.io/normalize.css/)
- [caniuse.com/](https://caniuse.com/)
- [autoprefixer](https://autoprefixer.github.io/)
- [MDN Browser Compatibility Report 2020](files/MDN-Browser-Compatibility-Report-2020.pdf)

------

## Static site generators etc

[Hugo](https://gohugo.io)

Jekyll 

------

## ::before / ::after

- [..before / :: after - CSS tricks](https://css-tricks.com/almanac/selectors/a/after-and-before/)

------

## DefaultCSS & Reset

- [CSS Default Values - w3schools](https://www.w3schools.com/cssref/css_default_values.asp)
- [CSS Reset - meyerweb](https://meyerweb.com/eric/tools/css/reset/)
- [normalize CSS](https://necolas.github.io/normalize.css/)
- [Sanitize CSS](https://csstools.github.io/sanitize.css/)
- [a tale of css resets](https://medium.com/weekly-webtips/a-tale-of-css-resets-and-everything-you-need-to-know-about-them-781849d9b7f2)
- [Bootstrap reboot](https://raw.githubusercontent.com/twbs/bootstrap/v4-dev/dist/css/bootstrap-reboot.css)
- [mini resets](https://github.com/jgthms/minireset.css/blob/master/minireset.css)
- [SH reboot](files/SHreboot.css)
- [sh_sanitize](files/sh_sanitize.css)

- simple reset:

- ```css
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
  /* evtl: margin: 0; for body */
  	
  ```


------

## CSS Variables

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

## BEM Naming Convention

```css
block__element--modifier
```

The block is the larger section that you want to display, e.g. a form. The element is an element of it, e.g. a button. The modifier specifies a variant of this element, e.g. a highlighted button. It is optional. In the HTML, this would look like this:

```html
<button class=”form__button--highlighted”>Submit</button>
```

in CSS:

```css
.form__button--highlighted {
...
}
```

- [More Info: getbem.com](http://getbem.com/naming/)
- [BEM 101 - css-tricks.com](https://css-tricks.com/bem-101/)
- [getting-your-head-round-bem-syntax - csswizardry.com](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

------

## Minify / Unminify

- [CSS Minifier](https://cssminifier.com)
- [unminify.com](https://unminify.com)
- https://minifier.org/


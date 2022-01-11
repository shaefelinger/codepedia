# Specifity

## Specifity-Rules

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
- [Specifity calculator](https://specificity.keegan.st/)

------

## Cascading & Inheritance

- All Elements only care about the parent & siblings
- margin and body are not cascaded to the children. color is cascaded
- links don't inherit the color of the parent

- [Cascade and Inheritance - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [The “C” in CSS: The Cascade - CSS Tricks](https://css-tricks.com/the-c-in-css-the-cascade/)

------
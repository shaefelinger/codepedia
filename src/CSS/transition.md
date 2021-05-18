
# Transition

CSS transitions allow us to control the timing of visual state changes.

###  `transition: `

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

### transition-timing-function:

- ease-in — starts slow, accelerates quickly, stops abruptly
- ease-out — begins abruptly, slows down, and ends slowly
- ease-in-out — starts slow, gets fast in the middle, and ends slowly
- linear — constant speed throughout

- [MDN - transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
- [MDN - animateable properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)
- [MDN - using transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions∏)

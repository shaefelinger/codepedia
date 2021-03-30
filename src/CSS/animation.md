
# Animation

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
# Vue GSAP 3

GreenSock Animation Platform (GSAP),

https://greensock.com/

https://greensock.com/learning/



https://greensock.com/get-started/

https://www.creativecodingclub.com/bundles/creative-coding-club



You essentially give GSAP a target to animate, whether that’s an element, component, or some data, then you tell GSAP *how* to animate that target by passing it an object full of instructions, including the duration of the animation and an optional easing function

```
npm i gsap
```

```js
import gsap from 'gsap'
...

methods: {
  beforeEnter(el) {
    el.style.opacity = 0
    el.style.transform = 'scale(0,0)'
  },
  enter(el, done) {
  	gsap.to(el, {
    	duration: 1,
    	opacity: 1,
    	scale: 1,
    	onComplete: done
  	})
	}
```

We’re using the `gsap.to()` method

The `to()` method is used to define what we want the element to animate *to*, versus start *from*.

- The first argument (`el`) tells GSAP which element to animate.
- Next, we’re passing in an object that gives GSAP the styles for this element to end up with, or to animate *to*. 
- GSAP also has a property where we can pass in a method to run when the animate is complete. So we’re passing in `done` to run when this transition is complete (`onComplete`).  This lets Vue know that this step in the `transition` component’s lifecycle is complete

t if we want our card to bounce in as in enters? We can achieve that effect by using a bounce `ease`, like so:

```js
enter(el, done) {
  gsap.to(el, {
    duration: 1,
    opacity: 1,
    scale: 1,
		ease: 'bounce.out',
    onComplete: done
  })
}
```

------

## Staggering Elements

 we don’t always need to rely on using the `transition` / `transition-group` components and their JavaScript Hooks when we’re building out third-party-based JavaScript animations like this. 

d using the Vue component’s lifecycle methods is also working

 in this example, we’ll rely on our component’s `mounted` hook.

using GSAP’s `from()` method instead of `to()`. If this doesn’t make sense at first, look at it this way: we want to provide GSAP with information about the starting state for these cards, then GSAP will move them from that starting state into their final position within the interface, staggering them in as they enter.

```js
mounted() {
  gsap.from('.card', {
    duration: 0.5,
    opacity: 0,
    scale: 0,
    y: 200,
    ease: 'power1',
    stagger: 0.1
  })
}
```

- we are telling GSAP which element to animate (every`.card`)
- the `stagger` property is the secret sauce for our stagger effect. We’ve given it a value of `0.1`. This is the delay, or the amount of time to wait, before staggering in the next card.

------

## A more nuanced Stagger



```js
  mounted() {
    // stagger cards into position
    gsap.from('.card', {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      y: 200,
      ease: 'power1',
      stagger: {
        from: 'edges',
        each: 0.1
      }
    })
  }
```



Now our `stagger` property is an object that includes the `each` property, which is used for the delay.

With `'edges'` we’re telling it to start from the outside elements and work its way inward. If we said `from: 'center'` it would start from the center and work its way out to the edges.

------

### Advanced staggers 

https://codepen.io/GreenSock/full/vYBRPbO

------

# State with GSAP

It’s not uncommon for a web app to display data that is always changing. it’s helpful to know how to display this kind of always-changing state in a nice way.



Under the hood, GSAP performs “tweens” for us.

Tweening is short for in-betweening, 

which is a process of generating the frames that will be displayed in between the beginning and end of the animation. For example, the values be*tween* 1 and 10 are: 2, 3, 4, 5, 6, 7, 8 and 9 (and their decimals, respectively: 2.123…). In the case of scaling from 0% to 100%, the values in be*tween* would be everything greater than 0 and less than 100. So by using GSAP, we can tween between values naturally and performantly.





use gsap to generate the values between the old `number` and the new `number`. 

```javascript
  watch: {
    number(newValue) {
      // now what?
    }
  },
```

Notice how we simply created a watcher by the same name as the data value it is watching (`number`), and we’re passing it the `newValue`.

```javascript
data() {
  return {
    number: 0,
    tweenedNumber: 0
  }
},
```

Now that we have the `number` and `tweenedNumber` data values, we can use them in our watcher with the `gsap.to()` method.



In this case, we don’t need GSAP to animate an element directly, we want it to animate our data, because it’s our data value that is being used to widen our `bar`, and we’re displaying that data value within the `bar`.



So instead of passing GSAP the element we want it to animate, we’re going to pass in the data we want it to animate:

```js
watch: {
  number(newValue) {
    gsap.to(this.$data, { 
          duration: 1, 
	  			ease: 'circ.out'
          tweenedNumber: newValue 
	})  
  }
},
```

we’re telling gsap to update the `tweenedNumber` property on our data (on `this.$data`) and animate it *to* the `newValue`. By the very nature of the `gsap.to()` method, it will animate that value by *tweening* it up or down to that new value, instead of just jumping abruptly to that value.

nstead of binding our `bar` style to `number`, let’s bind it to `tweenedNumber`, and display that number as well.

📃 **src/views/State.vue**

```html
<div :style="{ width: tweenedNumber + 'px' }" class="bar">
  <span>{{ tweenedNumber }}</span>
</div>
```

------

# Timelines with GSAP

There comes a point where a simple tween isn’t sufficient and we need to create multiple animations that work together in a sequence. For this, we can use GSAP’s timeline feature, which allows us to chain a group of tweens together to create more complex animations that work together as one.

```vue
<template>
  <div>
    <img class="runner first" src="../assets/runner.png" alt="runner" />
    <img class="runner second" src="../assets/runner.png" alt="runner" />
    <img class="runner third" src="../assets/runner.png" alt="runner" />
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  mounted() {
    // timeline will go here
  }
}
</script>

<style scoped>
.runner {
  display: block;
  height: 5em;
  width: 5em;
  margin-top: 1.5em;
}
</style>
```



```js
mounted() {
	let tl = gsap.timeline()
	tl.to('.first', { x: 700, duration: 2, ease: 'expo.out' })
}
```

using the `to` method like we’ve used in previous lessons. This method allows us to create a tween and apply it to the target (the element we’re animating). 

for each of the remaining runners:

```js
mounted() {
	...
	tl.to('.first', { x: 700, duration: 2, ease: 'expo.out' })
	tl.to('.second', { x: 700, duration: 2, ease: 'expo.out' })
  tl.to('.third', { x: 700, duration: 2, ease: 'expo.out' })
}
```

After the `first` runner reaches its destination, the `second` runner goes, then the `third` after that. 

## Position Parameter

We can alter the timing that animations within our timeline fire by using the the [position parameter](https://greensock.com/docs/v3/GSAP/Timeline). This parameter lets us define when a tween occurs within the timeline’s sequence, 

### Absolute Position

 we provide an integer value, which represents the value of seconds from the start of the animation. 

```js
mounted() {
	...
	tl.to('.first', { x: 200, duration: 2, ease: 'expo.out' })
	tl.to('.second', { x: 400, duration: 2, ease: 'expo.out' }, 0.5) // now with an absolute position
  tl.to('.third', { x: 600, duration: 2, ease: 'expo.out' })
}
Now, the second runner will start “running” 0.5 seconds into the sequence.
```

### Relative Position

To set a relative position, we use a string like `'-=.75'` or `+=.75` to set the start of one tween `.75` seconds *before* (`-=`) or *after* (`+=`) the end of the animation before it

Now the `second` animation will start `.75` seconds *before* the `first` one ends.

```js
mounted() {
	...
    tl.to('.first', { x: 200, duration: 2, ease: 'expo.out' })
    tl.to('.second', { x: 400, duration: 2, ease: 'expo.out' }, '-=2')
    tl.to('.third', { x: 600, duration: 2, ease: 'expo.out' })
}

```

### Start/End Position

When we set the position of our `second` runner as `'<'`, that tells it to always start when the `first` animation *starts*. Alternatively, `'>'` tells it to start when the `first` animation *ends*.

```javascript
mounted() {
	...
	tl.to('.first', { x: 200, duration: 2, ease: 'expo.out' })
	tl.to('.second', { x: 400, duration: 2, ease: 'expo.out' }, '<') // starts when first tween starts
  tl.to('.third', { x: 600, duration: 2, ease: 'expo.out' },  '<') // starts when second tween starts, which is when first tween starts
}
```

In the code above, all three runners will start at the same time. Why? Well, we’re telling our `third` runner to start when the `second` runner does, and the `second` runner starts when the `first` runner does.

We can also add to these to make them relative:

 the `second` animation would fire a half second after the start of the `first`, taking the `third` along with it, 

```js
mounted() {
	...
	tl.to('.first', { x: 200, duration: 2, ease: 'expo.out' })
	tl.to('.second', { x: 400, duration: 2, ease: 'expo.out' }, '<0.5') // What will this do?
  tl.to('.third', { x: 600, duration: 2, ease: 'expo.out' }) 
}
```

## **Timeline Duration**

However, in more complex timelines, we can run `tl.duration()` and that would add up all of our tweens’ individual durations and return our timeline’s total duration for us. This may be helpful when deciding where to position the tweens within your timeline’s sequence.

## Repeating / Looping Timelines

achieve that by passing in an object when creating our timeline, like so:

```javascript
gsap.timeline({ repeat: 2 })
```

```javascript
gsap.timeline({ repeat: -1 })
```

There’s also the ability to add a delay before the next repetition.

```javascript
gsap.timeline({ repeat: -1, repeatDelay: 1 })
```

------

## Nested Timelines

 create more scalable, modular, and reusable animations by nesting multiple timelines within one master timeline.



create timlines as methods, that return the timeline

```js
// methods
pawsTL() {
      let tl = gsap.timeline()
      tl.to('.first', {
        opacity: 4,
        scale: 1,
        duration: 0.5,
        ease: 'bounce.out'
      })
      tl.to(
        '.second',
        { opacity: 1, scale: 1, duration: 0.5, ease: 'bounce.out' },
        '<.3'
      )
      tl.to(
        '.third',
        { opacity: 1, scale: 1, duration: 0.5, ease: 'bounce.out' },
        '<.3'
      )
      tl.to(
        '.fourth',
        { opacity: 1, scale: 1, duration: 0.5, ease: 'bounce.out' },
        '<.3'
      )
      return tl
    },
    foxTL() {
      let tl = gsap.timeline()
      tl.to('#fox', {
        opacity: 1,
        filter: 'blur(0)',
        scale: 1,
        duration: 0.4,
        ease: 'slow'
      })
      return tl
    }
```

cretate master-timeline:

```js
<script>
import gsap from 'gsap'
let masterTL = gsap.timeline()

export default {
  methods: {
    play() {
      masterTL.add(this.pawsTL())
      masterTL.add(this.foxTL())
      masterTL.play()
    },
    
    ...
```

------


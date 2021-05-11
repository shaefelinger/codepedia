# Vue Events

## `v-on` directive 

```vue
<button class="button" v-on:click="logic to run">Add to Cart</button>
```

We are telling `v-on` what type of event to listen for: a `click`. Inside the quotes, we place the logic (or method name) we want to run when that event happens.

If we write `v-on:click="cart += 1"`, we’ll increment the value of cart by `1`, when a click event happens. 

### shorthand @

```vue
<button class="button" @click="addToCart">Add to Cart</button>
```

## Methods

### Triggering a method

Often, we need to trigger more complex logic. In those situations, we can add a method name to fire when the event happens.

```vue
<button class="button" @click="addToCart">Add to Cart</button>
```

add that method to our Vue app’s options object, like so:

> expexts an Object, where you define methods 

```js
const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      ...
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    }
  }
})
```

added the `methods` option, and inside of that we added the new `addToCart` method,



you can also use

```vue
@click="addToCart()"
```

or pass arguments:

```
@click="add(5)"
```

you can listen for clicks on any object, not just buttons!

### .this

The difference here is now we’re saying `this.cart` to refer to *this* `cart` in ***this* Vue instance’s** data.

## Understanding v-on

By adding `v-on` to an element, we’re essentially giving it an ear that can listen for events. In this case, we’ve specified that we’re listening for click events

To call the method you can use `@click="method"` or `@click="method()"`. Both is valid



------

## Other Events: Mouseover Events

main.js:

```vue
<div v-for="variant in variants" :key="variant.id" @mouseover="updateImage(variant.image)">{{ variant.color }}</div>
```

```vue
methods: {
  ...
  updateImage(variantImage) {
    this.image = variantImage
  }
}
```

------

## Native Event Object

`event.target.value`

If an event happens, the called method will automatically get an Object as an argument, that describes the event..

```vue
<input type="text" @input="setName" />
<p>Your Name: {{name}}</p>
//...

methods: {
	setName(event) {
		this.name = event.target.value
	},
}

```

if you have to pass an argument: and still need access to the Event-Object: use `$event`

```vue
 <input type="text" @input="setName($event, ' Häfelinger')" />
//...
methods: { 
  setName(event, lastName) {
      this.name = event.target.value + lastName
    },
}
```

------

## Event-modifiers

### on-submit

submit is a default browser-event

```vue
<form @submit="handleSubmit">
...
</form>

...

```

submit prevent: use event modifier

```vue
<form @submit.prevent="handleSubmit">
```

other event modifiers:

- `.stop` - just trigger click of this element, not the parent-element
- `.prevent`
- `.capture`
- `.self`
- `.once`
- `.passive`

https://vuejs.org/v2/guide/events.html

### mouse-modifiers

- `.right` -> only right-click
- `.left`, `.middle`

### keyboard-modifiers

- @keyup.enter
- .ctrl
- .shift
- .enter

------

## v-once

```vue
<p v-once>starting counter: {{ counter }}</p>
<p>Result: {{ counter }}</p>
```

value gets evaluated once, then i doesn't change
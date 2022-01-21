# Vue Events

## `v-on` directive 

- By adding `v-on` to an element, we’re essentially giving it a listener that can listen for events. 

- Attaches event-handler to event -> for all all browser events 

- Run javascript Inside the string.

  ```js
  v-on:click="javascript inside"
  ```


```vue
<button class="button" v-on:click="logic to run">Add to Cart</button>
```

```vue
<button v-on:click="age++">Increase age</button>
```

We are telling `v-on` what type of event to listen for: a `click`. Inside the quotes,  place the logic (or method name)  to run when that event happens.

e.g. `v-on:click="cart += 1"`, will increment the value of cart by `1`, when a click event happens

## shorthand @

```vue
<button class="button" @click="addToCart">Add to Cart</button>
```

## Methods

### Triggering a method

add a method name to fire when the event happens.

```vue
<button class="button" @click="addToCart">Add to Cart</button>
```

add that method to our Vue app’s options object, like so:

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

```js
@click="addToCart()"
```

### pass arguments

```js
@click="add(5)"
```

```html
<div @click="changeTitle('HTML-Title')">clickme</div>
```

::: tip
you can listen for clicks on any object, not just buttons!
:::

------

## Native Event Object

`event.target.value`

If an event happens, the called method will automatically get an Object as an argument, that describes the event

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

##### check type of event:

```js
methods: {	
	handleEvent(e) {
			console.log(e);
      console.log(e.type);
  }  
}
```

if you have to pass an argument and still need access to the Event-Object: use `$event`

```vue
 <input type="text" @input="setName($event, 'Mustermann')" />
//...
methods: { 
  setName(event, lastName) {
      this.name = event.target.value + lastName
    },
}
```

Example:

```js
<div class="box" @mouseover="handleEvent($event, 5)">mouseover</div>
<div class="box" @mouseleave="handleEvent">mouseleave</div>
<div class="box" @dblclick="handleEvent">double click</div>
<div class="box" @mousemove="handleMousemove">position {{ x }} - {{ y }} </div>
      
```

```js
handleEvent(e, data) {
	console.log(e, e.type);
	if (data) {
		console.log(data);
	}
},
handleMousemove(e) {
	this.x=e.offsetX
	this.y=e.offsetY
}  
```


------

## Toggle Status

```js
@click="showPopup = !showPopup"
```

------

## Other Events: Mouse Events

```vue
<div @mouseover="handleEvent">mouseover</div>
<div @mouseleave="handleEvent">mouseleave</div>
<div @dblclick="handleEvent">double click</div>
```

### Mouseover

```vue
<div v-for="variant in variants" :key="variant.id" @mouseover="updateImage(variant.image)">{{ variant.color }}</div>
```

```js
methods: {
  ...
  updateImage(variantImage) {
    this.image = variantImage
  }
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

[https://vuejs.org/v2/guide/events.html](https://vuejs.org/v2/guide/events.html)

### mouse-modifiers

- `.right` -> only right-click
- `.left`, `.middle`

only on right-click:

```vue
<button @click.right="toggleModal">Open Modal</button>
```

```vue
<button @click.shift="toggleModal">Open Modal</button>
```

only on the element itself, not anything inside:

```vue
<div class="backdrop" @click.self="closeModal">
```

Also: modify the click on certain conditions. eg shift, alt

### keyboard-modifiers

- `@keyup.enter`
- `.ctrl`
- .`shift`
- .`enter`

------

## v-once

```vue
<p v-once>starting counter: {{ counter }}</p>
<p>Result: {{ counter }}</p>
```

value gets evaluated once, then it doesn't change

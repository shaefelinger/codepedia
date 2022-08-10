# Vue Options-API

vue3 also has the composition-API (more similar to react)

```js
<script>
	export default {
  	name: 'Home',
    //
	},
</script>
```

---

## Access variables

use **`this`**

```js
methods: {
    changeTitle() {
      this.title = 'A new Title';
    },
  },
```

------

## Props

Array

```js
props: ['prop1', 'prop2'];
```

Object

```js
export default { 
...
  props: {
    src: {
      type: String,
      required: true
    }, 
    style: {
      type: String,
      validator: s => ['square', 'rounded'].includes(s) 
    }
  } 
};
```



---

## Data

is, where the state of the application is

::: warning

Remember: "A Function, that returns an Object"

:::

```js
 data() {
    return {
      message: 'This is Vue.js'
    }
  },

```

```js
data() {}
// is the same as
data: function() {}
```

---

## Methods

```js
 methods: {
    clearMessage(){
      this.message=''
    }
  },
```

---

## Computed

-> always recalculates, if something changes

```js
computed: {
    messageUppercase () {
      return this.message.toUpperCase();
    }
  },
```

---

## Watch

watch if values change.

```js
watch: {
	firstName (value, oldValue) {
    //
  }
},
```

- Anything that is reactive can be watched: (Composition API: anything that is a ref or reactive object.)

- ```js
  export default { 
     computed: {
  		someComputedProperty() {
  			// Update the computed prop
  		}, 
    },
  	watch: { someComputedProperty() {
  		// Do something when the computed prop is updated }
  	} 
  };
  ```

- nested values by using quotes:

  ```js
  watch: {
    '$route.query.id'() {
      // ...
    }
  }
  ```

[https://vuejs.org/guide/essentials/watchers.html](https://vuejs.org/guide/essentials/watchers.html)

##### Options:

```js
watch: {
	// Use the object syntax instead of just a method 
	colours: {
		// This will let Vue know to look inside the array 
		deep: true,
	
		// We have to move our method to a handler field 	
		handler()
			console.log('The list of colours has changed!'); }
		} 
}
```



- [Deep Watchers](https://vuejs.org/guide/essentials/watchers.html#deep-watchers)

- [Eager Watchers](https://vuejs.org/guide/essentials/watchers.html#eager-watchers)
  Force a watcher's callback to be executed immediately by declaring it using an object with a `handler` function and the `immediate: true` option:

  ```js
  export default {
    // ...
    watch: {
      question: {
        handler(newQuestion) {
          // this will be run immediately on component creation.
        },
        // force eager callback execution
        immediate: true
      }
    }
    // ...
  }
  ```


Anything in your component that is reactive can be watched, eg::

- computed props 
- props
- nested values
- Any value can be watched if you're using the composition API, as long as it's a ref or reactive object.

```js
xport default { 
	computed: {
		someComputedProperty() {
			// Update the computed prop
		}, 
	},
	watch: { 
		someComputedProperty() {
			// Do something when the computed prop is updated }
		} 
	};
```

##### Watch nested Values:

use Quotes:

```js

watch: { 
	'$route.query.id'() {
		// ... }
	}
```



---

## Directives

you can create your own: add `v-` bevore the name

```vue
  <input
      v-model="message"
      @keyup.enter="alertMessage"
      @keyup.esc="clearMessage"
      v-autofocus
    />
...
      
directives: {
    autofocus: {
      inserted(el) {
        el.focus()
      }
    }
  },
```

in template:

```
v-autofocus
```

Example

```vue
<template>
 <h1 v-bg-colour="'skyblue'">This background is blue</h1>
</template>
```

```js
import { createApp } from "vue"; 
const app = createApp({});

app.directive("bg-colour", { 
  mounted(el, { value }) {
		// Update the background colour
		el.style.background = value; 
  }
});
```

You can also specify a single argument:

```vue
<template>
	<h1 v-bg-colour:colour="'skyblue'">
		This background is blue
	</h1>
</template>
```

```js
app.directive("bg-colour", { 
	mounted(el, { value, arg }) {
		// Update the background colour 
		el.style.background = value; 
		console.log(arg); // "colour"
	} 
});
```

if you want multiple arguments pass in an options object:

```vue
<template>
	<!-- Two directives will be mounted --> 
	<h1
		v-bg-colour="{ 
    	colour: 'skyblue', 
      animate: true,
		}" 
  >
		This background is blue
	</h1> 
</template>
```

[docs - custom directives](https://vuejs.org/guide/reusability/custom-directives.html%23custom-directives)

---

## Components

```js
import Component1 from '@/components/Component1'
...
export default {
	components: {
		Component
	},
}
```

or like this:

```js
	components: {
  	'test': require('components/Test.vue').default
	}
```





---

## Filters

> only Vue2

```js
filters: {
    messageLowercase(value) {
      return value.toLowerCase()
    }
  },
```






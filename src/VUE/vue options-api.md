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

Options:

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






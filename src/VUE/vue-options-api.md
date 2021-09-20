# Vue Options-API-Cheatsheet

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

Function, that returns an Object!

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

## Watcher

watch if values change.

```js
watch: {
	firstName (value, oldValue) {
    //
  }
},
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

---

## Directives

```js
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

## 

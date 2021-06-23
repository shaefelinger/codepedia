# SORT ME



---

## Options-API -Cheatsheet

is now different in vue3 -> composition-API (more similar to react).

```js
<script>
	export default {
  	name: 'Home',
    //
	},
</script>
```

---

### Props

Array

```js
props: ['prop1', 'prop2'];
```

---

### Data

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

### Methods

```js
 methods: {
    clearMessage(){
      this.message=''
    }
  },
```

---

### Computed

-> always recalculates, if something changes

```js
computed: {
    messageUppercase () {
      return this.message.toUpperCase();
    }
  },
```

---

### Watcher

watch if values change.

```js
watch: {
	firstName (value, oldValue) {
    //
  }
},
```

---

### Filters

> only Vue2

```js
filters: {
    messageLowercase(value) {
      return value.toLowerCase()
    }
  },
```

---

### Directives

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

### Components

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

## Livecycle-Hooks

```js
mounted() {
  console.log('mounted');
},
```

| Hook          | when?                   |
| ------------- | ----------------------- |
| beforeCreate  |                         |
| created       |                         |
| beforeMount   |                         |
| mounted       | runs, when vue is ready |
| beforeUpdate  |                         |
| updated       |                         |
| beforeDestroy |                         |
| destroyed     |                         |

---

## Passing data

#### props

-> pass data from main-app to component

- downwards

#### custom Events

ist data from component to main-app

- upwards

---

## VUEX

vuex is implementation of flux design pattern. everything is in a loop -> bind your application date in a single store

**state=** one big object, contains everything

**getter**- functions, that read value from state

**actions** communicate with backend - async

**mutations** changes the state (nothing else does) -> everything is reactive

-> no props, and no events -> it is all done in VUEX

```js
import Vue from 'vue';

const state = {
  food: [
    {
      id: 1,
      name: 'Burger',
      description: 'A burger is a sandwich...',
      imageUrl: 'https://i.imgur.com/0umadnY.jpg',
      rating: 4,
    },
  ],
};

const mutations = {
  DELETE_FOOD(state, id) {
    Vue.delete(state.foods, id);
  },
};

const actions = {
  deleteFood(context, id) {
    context.commit('DELETE_TASK', id);
  },
};

const getters = {
  foods(state) {
    return state.foods;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
```

---


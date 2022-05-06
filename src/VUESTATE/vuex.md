# VUEX

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



## VUEX

1 store per app -> Predictable State-Management

local state = state inside a component (eg input )

global state = affects multiple components or entire app (eg. auth status etc.)



##### provide/inject

is working, but has problems



------

## Why Vuex?

Managing app-wide/global state can be difficult

- Unpredictable - not always obvious where data (state) gets changed in which way
- Error-prone -  accidental or missed stat-updates are possible

With Vuex

- state-management is outsourced
- predictible management/flow
- clearly defined data flow: less errors

------

install

```js
npm i vuex@next
```

------







------

## Create store

add to `main.js`:

```js
import { createStore } from 'vuex';
```

main.js:

```js
import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const app = createApp(App);
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
});

app.use(store);

app.mount('#app');
```

-> store can be used in any component

to use it:

```js
$store.state;
```



`state` is a method that returns an object (like `data`)

```js
state() {
        return {
            
        }
    }
```



---

## Mutation:

To update the data in the store - never manipulate the state directly!

mutations in `create store`-object. has alway access to the state-object

```js
// main.js

const store = createStore({
  state() {
    return {
      counter: 2,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
  },
});
```

in the component: `commit()` -> name of the mutation-function as a string

```js
methods: {
	addOne() {
		this.$store.commit('increment')
	}
}
```

### passing data to mutations

Mutations can get parameters - payload

```js
increase(state, payload){
	state.counter = state.counter + payload
}
```

payload can be an object:

```js
increase(state, payload){
	state.counter = state.counter + payload.value
}
```

--

```js
 methods: {
    addOne() {
      this.$store.commit('increase', { value: 10 });
    }
  }
```

alternatitve way of commiting:

```js
addOne() {
	this.$store.commit({
		type: 'increase', // name of the mutation
		value: 10
	})
}
```

-> can be complex functions

- NEVER directly access the store
- always use `commit()` in the component
- good practice: name of mutations in CAPS

alternative syntax:

```js
initialized: (state, data) => {
	state.initialized = data;
},
```

---

## Getters

Don't read directliy from store

- getters are like computed proerties inside the store
- getter has to return a value
- all getters have 2 arguments: state and other getters

Can have 2 arguments:

- current state
- other getters (if the value depends on the result of another getter)

getter has to return a value

```js
//... im createSore

getters: {
    finalCounter(state) {
      return state.counter * 2;
    }
  }
```

in the component: -> use `computed`

```js
export default {
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
  },
};
```

(dont invoke!)

##### getters can depend on another getter:

```js
normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    }
```

-> state is not used, so the convention is:

```js
normalizedCounter(_, getters) {
...
}
```

Short getter-syntax:

```js
episodes: (state) => state.episodes;
```

---

## Actions

-> for async-code. Mutations have to be synchronus! Actions can be asynchronus

-> good if components dont use mutations directly-> good practice to always use actions beetween components and mutations

-> can be the same name

use `dispatch()` instead of `commit()` - same syntax

pass the context-object!

```js
// in createStore

actions: {
    increment(context) {
      setTimeout(function() {
        context.commit('increment'); // the mutation
      }, 2000);
    }
  }
```

```js
//in the component:
  methods: {
    addOne() {
      this.$store.dispatch({
        type: 'increment', // name of the mutation
        value: 10
      });
    }
  }
```

action with payload:

```js
increase(context, payload) {
	context.commit('increase', payload);
}
```

---

## mapper-helpers

### `mapGetters()`

in computed: just list the getters you want in the component

gives an object full of computed properties

```js
<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['finalCounter'])
    // instead of
    // finalCounter() {
    //   return this.$store.getters.finalCounter;
    // }
  }
};
</script>
```

### `mapActions()`

for actions:

```vue
<template>
  <button @click="increment">Add 2</button>
  <button @click="increase({ value: 10 })">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['increment', 'increase']),
    // instead of:
    // increment() {
    //     this.$store.commit('increment')
    // }
  },
};
</script>
```

alternative Syntax: (object) -> give the action a different name

```js
...mapActions({
	inc: 'increment',
	increase: 'increase'
})
```

the same alternative syntax also exists for `mapGetters`

---

## Vuex-modules

-> split store

one for authentication, etc.

```js
const counterModule = {
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  getters: {},
};
```

-> in createStore-Object:

```js
const store = createStore({
  modules: {
    numbers: counterModule
  },
```

add all the Modules you want to add

-> is on the same level as main store

---

### local state

state inside module is treated as a local state

mutation, actions, etc. are global, the state is local

rootState, rootGetters -> access to the whole state inside a module. You can use:

```js
getters: {
	testAuth(state, getters, rootState, rootGetters) {
	return.state.isLoggedIn;
	}
}
```

---

### Namespaced module

-> to make sure that names don't clash. -> make the entire module local

inside module:

```js
const counterModule = {
	namespaced = true,
	...
```

-> now you have to use the name-key from the createStore-Object, to access is

in component:

```js
computed: {
    counter() {
      return this.$store.getters['numbers/normalizedCounter'];
    }
  }
```

and

```js
methods: {
    addOne() {
      this.$store.dispatch({
        type: 'numbers/increase', // name of the mutation
        value: 10
      });
    }
  },
```

for getters, add namespace as first argument

```js
...mapGetters('numbers', ['finalCounter'])
```

---

### Folder Structure

Example

```
/store
	/index.js
	/actions.js
	/mutations.js
	/getters.js

	/counter
		/actions.js
		/mutations.js
```

also possible: put all modules in module folder

-> small maintainable files

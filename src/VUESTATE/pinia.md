# Pinia

## What is Pinia?

A new state management library for the Vue ecosystem - officially supported

[https://pinia.vuejs.org/](https://pinia.vuejs.org/)

## Benefits of Pinia

### Simpler API

Vuex: complexity and repetitiveness behind that action / mutation pattern. Every state change requires a lot of boilerplate.

Vuex:

- actions will commit a mutation in order to increment the count
- and  the mutation itself, which actually increments


```jsx
import { createStore } from 'vuex'

const CounterStore = createStore({
  state() {
    return {
      count: 0
    }
  },
  actions: {
    increment(context) {
      context.commit('incrementCount')
    }
  },
  mutations: {
    incrementCount(state) {
      state.count++
    }
  }
})
```

Pinia: no mutations at all - directly inside of the action.

```js
// The following is pseudocode

import { createStore } from 'pinia'

const CounterStore = createStore({
  state() {
    return {
      count: 0
    }
  },
  actions: {
    increment() {
      state.count++
    }
  }
})
```

Inside of the component, it can be called like a normal JavaScript function

```js
// Calling an action with Vuex
store.$dispatch('increment')

// Calling an action with Pinia
store.increment()
```

#### DevTools Support

Pinia also comes with its own set of dev tools. 

#### TypeScript Support

Vuex is not as TypeScript friendly. Pinia has first-class TypeScript support.

------

## Install

```
yarn add pinia
# or with npm
npm install pinia
```

register in main.js - add `.use(createPinia())`

```js
import { createPinia } from 'pinia'

createApp(App)
    .use(createPinia())
    ...
```

------

[Add to Quasar ](https://quasar.dev/quasar-cli-vite/state-management-with-pinia)

```
quasar new store <store_name>
```

> quasar cli might need update:
>
> ```
> npm i -d @quasar/cli@latest
> # or: 
> yarn global add @quasar/cli
> 
> quasar upgrade -i
> ```

------

## Defining a Store`

```
defineStore('<StoreName>', { <config> })
```

Pinia is modular by default

convention:

- `stores`-folder

- defineStore - good practice to name the ID the same as the filename
- prefix export name woth `use`
- eg `/stores/ProductStore.js`:

```js
import { defineStore} from "pinia";

export const useProductStore = defineStore('ProductStore', {
    // state
    // actions
    // getters
})
```



### `state()` 

function that returns an object

```js
import { defineStore } from "pinia";

export const useUserStore = defineStore('UserStore', {
    state() {
        return {
            user: 'John Doe'
        }
    }
})
```



> alternative syntax: 
>
> ```js
> export const useUserStore = defineStore('UserStore', {
>  state: () => ({
>      user: 'John Doe'
>  })
> })
> ```

That’s all: store is ready to go 

------

## Access state

[https://pinia.vuejs.org/core-concepts/state.html](https://pinia.vuejs.org/core-concepts/state.html)

in the Component:

```vue
<script setup>
	import {useProductStore} from "./stores/ProductStore";
	const productStore = useProductStore() // invoke Function!!
</script>
```

> or destructure (use `storeToRefs()`)
>
> ```js
> import {storeToRefs} from 'pinia'
> const {products} = storeToRefs(useProductStore())
> ```

Or inside Options-API-Syntax:

```vue
<script>
import {useUserStore} from "./stores/UserStore";

export default {
...
setup() {
  const userStore = useUserStore();  
  return {
  	userStore
	}
}
...
}
</script>
```

### Read/Write

you can directly read and write to the state by accessing it through the `store` instance:

```js
const store = useStore() 

store.counter++
```

### [Resetting the state](https://pinia.vuejs.org/core-concepts/state.html#resetting-the-state)

You can *reset* the state to its initial value by calling the `$reset()` method on the store:

```js
const store = useStore()

store.$reset()
```



------

## Managing Getters

> in vuex:  you need to pass in the `state` i
>
> ```js
> createStore({
> state: {
>  events: []
> },
> getters: {
>  numberOfEvents(state) {
>    return state.events.length
>  }
> }
> })
> ```
>
> use in template
>
> ```
> <h1>{{$store.getters.numberOfEvents}}</h1>
> ```

#### Standard Function Definition

access the state by using `this`

```js
defineStore('UserStore', {
  state: () => ({
    user: 'Ben Hong'
  }),
  getters: {
    firstName() {
      return this.user.split(' ')[0]
    }
  }
})
```

> #### Arrow Function Definition
>
> the `this` context is reset in every arrow function. -> pass  `state` as the first argument
>
> ```javascript
> defineStore('EventStore', {
> state: () => ({
>  events: []
> }),
> getters: {
>  numberOfEvents: state => state.events.length
> }
> })
> ```

### Using Getters from Pinia

```vue
<p>Logged in as {{userStore.firstName}}</p>
```

## Changing State - Actions

> in vuex: actions and mutations. 
>
> ```js
> 📄 stores/index.js
> 
> import { createStore } from 'vuex'
> 
> export default createStore({
> state: {
>  events: []
> },
> mutations: {
>  SET_EVENTS(state, events) {
>    state.events = events
>  }
> },
> actions: {
>  fetchEvents({ commit }) {
>    return EventService.getEvents()
>      .then(response => {
>        commit('SET_EVENTS', response.data)
>      })
>      .catch(error => {
>        throw error
>      })
>  }
> }
> })
> ```

in Pinia: no Mutations!

```
 this.property = data
```

```js
    actions: {
        fetchEvents() {
            return EventService.getEvents()
                .then(response => {
                   this.events = response.data
                })
                .catch(error => {
                    throw error
                })
        },
    }
```

------

## Hot Module Replacement

[https://pinia.vuejs.org/cookbook/hot-module-replacement.html](https://pinia.vuejs.org/cookbook/hot-module-replacement.html)

import `acceptHMRUpdate`  from pinia und am Ende des Stores hinzufügen:

```js
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(<StoreName>, import.meta.hot))
}
```


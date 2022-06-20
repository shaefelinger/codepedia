# Pinia

## What is Pinia?

A new state management library for the Vue ecosystem - officially supported

[https://pinia.vuejs.org/](https://pinia.vuejs.org/)

- [Pinia Docs](https://pinia.vuejs.org/)
- [Pinia Repo](https://github.com/vuejs/pinia)



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

## Getters

synonymous to a `computed` prop in a component -> return a computed value based on the state

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
    user: 'John Doe'
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

## Reset the State

reset to original values: `$reset()`

```
@click="cartStore.$reset()"
```

------

## Access Stores from other stores

import it and use it (but inside the actions?)

```js
import {useAuthUserStore} from "./AuthUserStore";


actions: {
	checkout() {
		const authUserStore = useAuthUserStore()
		alert(`${authUserStore.username} just bought ${this.count} items`)
	},
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

------

## Persistent State

VueUse - Collection of composables

[https://vueuse.org/](https://vueuse.org/)

install:

```
npm i @vueuse/core
```

In Store:

```js
import {useLocalStorage} from '@vueuse/core';
...
  state() {
    return {
      counter: useLocalStorage("counter", 1),
    };
  },
```

------

## Subscribing to Actions

- [Pinia Docs: Subscribing to Actions](https://pinia.vuejs.org/core-concepts/actions.html#subscribing-to-actions)

to trigger something every time an action gets called

call `$onAction()` on the store  in App.vue

```js
cartStore.$onAction(({
                       name,
                       store,
                       args,
                       after,
                       onError
                     }) => {
  if(name==='addItems') {
    after(()=> {
      console.log(args[0])
    })
    onError((error)=> {
      console.log('tstsst', error)
    })
  }
})
```

## Subscribe to the State

`$subscribe`

- [Pinia Docs: Subscribing to the State](https://pinia.vuejs.org/core-concepts/state.html#subscribing-to-the-state)

perform sideeffects, whenever state changes

takes a callback, that receives 2 arguments

`$state` accesses the entire store



example: undo/redo

```js
const history = reactive([])
const future = reactive([])
const doingHistory = ref(false)
history.push(JSON.stringify(cartStore.$state))

const redo = () => {
  const latestState = future.pop()
  if(!latestState) return
  doingHistory.value = true
  history.push(latestState)
  cartStore.$state = JSON.parse(latestState)
  doingHistory.value = false

}
const undo = () => {
  if (history.length === 1) return
  doingHistory.value = true
  future.push(history.pop())
  cartStore.$state = JSON.parse(history.at(-1))
  doingHistory.value = false
}

cartStore.$subscribe((mutation, state) => {
  if (!doingHistory.value) {
    history.push(JSON.stringify(state))
    future.splice(0, future.length) // empty the reactive array
  }
})
```

------

## Plugins

- [Pinia Docs: Plugins](https://pinia.vuejs.org/core-concepts/plugins.html)
- [NPM Search: Pinia](https://www.npmjs.com/search?q=pinia)

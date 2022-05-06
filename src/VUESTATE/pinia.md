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
 npm i pinia
```

main.js - add `.use(createPinia())`

```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import store from './stores'

createApp(App).use(store).use(createPinia()).use(router).mount('#app')
```

------

## Defining a Store

store file, eg. `/stores/EventStore.js`

```
defineStore('<StoreName>', { <config> })
```



```js
import { defineStore } from 'pinia';

export const useEventStore = defineStore('EventStore', {})
```

That’s all there is to it - store is ready to go - Stores are modular by default!

`store()` (function that returns an object)

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

> shorthand: 
>
> ```js
> export const useUserStore = defineStore('UserStore', {
>  state: () => ({
>      user: 'John Doe'
>  })
> })
> ```



use in Component

```vue
<script setup>
import {useUserStore} from "./stores/UserStore";

const userStore = useUserStore();
</script>

...
<template>
	 <p>Logged in as {{userStore.user}}</p>
```

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


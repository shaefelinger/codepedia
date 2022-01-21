# Vue Error Handling

- The component that ultimately triggered the error should be responsible for handling that error.
- we don’t want to do so at a global level within Vuex. 

example solution:

1. Create a new component to display errors (**ErrorDisplay**)
2. Add **ErrorDisplay** as a route
3. Enable Vuex actions to hand over the error to the component that triggered it
4. Route the user to the **ErrorDisplay** view when an error is caught

#### The ErrorDisplay Component

```vue
<template>
  <h4>Oops! There was an error:</h4>
  <p>{{ error }}</p>
</template>

<script>
export default {
  props: ['error']
}
</script>
```

add to router

```js
// ...
import ErrorDisplay from '@/views/ErrorDisplay.vue'

const routes = [
  // ...
  {
    path: '/error/:error',
    name: 'ErrorDisplay',
    props: true,
    component: ErrorDisplay
  }
]
```

#### Accessing the error from the action

the component that ultimately triggered the error to needs  access to that error.

First, we need to `return` the result of our Vuex actions’ API calls so that the component that dispatched them can receive that result. Second, we need the action that *caught* the error to `throw` it to the component that caused it, so it can `catch` it, too.

```js
// store/index.js
actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
        })
        .catch(error => {
          throw(error) // <--- throw error
        })
    },
    fetchEvents({ commit }) {
      return EventService.getEvents() // <--- return result
        .then(response => {
          commit('SET_EVENTS', response.data)
        })
        .catch(error => {
          throw(error) // <--- throw error
        })
    },
    fetchEvent({ commit, state }, id) {  
      const existingEvent = state.events.find(event => event.id === id)
      if (existingEvent) {
          commit('SET_EVENT', existingEvent)
      } else {
        return EventService.getEvent(id) // <--- return result
          .then(response => {
            commit('SET_EVENT', response.data)
          })
          .catch(error => {
            throw(error) // <--- throw error
          })
      }
    }
  }
```

With these adjustments in place, we’re ready to `catch` the error locally in the component.

------

### Routing to ErrorDisplay

```js
onSubmit() {
  // ...
  this.$store.dispatch('createEvent', event)
    .then( () => {
      this.$router.push({
        name: 'EventDetails',
        params: { id: this.event.id }
      })
    })
    .catch( error => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error }
      })
    })
}
```

------

## Or

in vuex

```js
 if (!response.ok) {
      // error
      const error = new Error(responseData.message || 'Failed to Fetch');
      throw error;
    }
```

in the component

```js
methods: {
    async loadCoaches() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches');
      } catch (error) {
        this.error = error.message || 'Something went wrong';
      }
      this.isLoading = false;
    }
  },
```

------


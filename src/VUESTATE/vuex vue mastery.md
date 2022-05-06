# VUEX - sort me

Managing state in an application full of components can be difficult. Facebook discovered this the hard way and created the Flux pattern, which is what Vuex is based upon.

Communicating events up and passing props down to share data, can become overly complicated.

Instead, we can consolidate all of our state into one place. One location that contains the current state of our entire application.

**One Single Source of Truth**. This is what Vuex provides, and every component has direct access to this global State.

Just like the Vue instance’s data, this State is reactive. When one component updates the State, other components that are using that data get notified, automatically receiving the new value.

### Vuex is similar to the vue instance

```js
const app = new Vue({
	data: {
		...
	},
	methods: {
		...
	},
	computed: {
		...
	}
})
```

```js
const store = new Vuex.store({
	state: {
		...
	},
	mutations: {
		...
	},
	actions: {
		...
	},
	getters: {
		...
	}
})
```

While the Vue instance has a `data` property, the Vuex store has `state`. Both are _reactive_.

And while the instance has `methods`, which among other things can update `data`, the store has `actions`, which can update the state.

And while the instance has computed properties, the store has `getters`, which allow us to access a filtered, derived, or computed version of our `state`.

Additionally, Vuex provides a way to _track_ state changes, with something called `mutations`. We can use `actions` to commit `mutations`. ( best practice: use actions to call mutations)

### Example:

```js
const store = new Vuex.Store({
  state: {
    isLoading: false,
    todos: [],
  },
  mutations: {
    SET_LOADING_STATUS(state) {
      state.isLoading = !state.isLoading;
    },
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    fetchTodos(context) {
      context.commit('SET_LOADING_STATUS');
      axios.get('api/todos').then((response) => {
        context.commit('SET_LOADING_STATUS');
        context.commit('SET_TODOS', response.data.todos);
      });
    },
  },
});
```

actions take in the `context`-object, wich contains all vuex-store-properties.  allows to commit mutations

If we need the ability to only retrieve the todos that are labeled done, we can use a Getter for that, which will retrieve only the specific state that we want.

```js
getters: {
	doneTodos(state) {
		return state.todos.filter(todo => todo.done)
	}
}
```

---

> remember:
>
> actions: `this.$store.dispatch`
>
> mutations:  `context.commit`
>
> access the store: `this.$store.state.PROPERTY`



`state` is globally accessible throughout our application

it’s recommended to keep your `data` separate from your Vuex state to avoid reactivity issues.

------

## Updating our State

 **mutations** are what we use within Vuex to update or *mutate* the state.

running mutation = commit

##### simple example:

```js
state: {
	count: 1
},
mutations: {
	INCREMENT_COUNT(state) {
		state.count += 1
	}
}
```

use **commit**

```js
methods: {
	incrementCount() {
		this.$store.commit('INCREMENT_COUNT')
	}
}
```

add payload: (-> dynamic mutations)

```js
methods: {
	incrementCount() {
		this.$store.commit('INCREMENT_COUNT', 2)
	}
}
```

<!-- ![image-20210712121908059](../assets/image-20210712121908059.png) -->

but best practice:

always wrap your mutations within actions.

------



## Fetching State

An action allows us to program more nuanced behavior.  For example, what if we needed to run some conditional logic, or wait for an API call to return before we determine whether we should commit a mutation or not? We can encapsulate all of that behavior within an action. -> a logical wrapping layer around our state changes



**action** is the intent for a state change to happen. several steps might be nescessary and it might fail.

**mutation** is, where the changing of the state actually happens



### Actions.

you can also pass `{commit}` instad of `context`:

 

```js
actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
          // add to vuex state
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
```

This is part of what’s called the “context object” and simply gives us the ability to run commits on our store.



call the Action: call = dispatch

```js
this.$store.dispatch('createEvent', event)
```

 it’s a best practice for a reason because it builds in scalability to your app. While you might not need any conditional logic and/or asynchronous code to wrap your mutation today, when you discover that you need it next month, you can simply add it into your action and not have to refactor a bunch of code throughout your app.



#### Get reactive data from state

use computed -> will be re-computed, whenever data changes

```js
computed: {
    events() {
      return this.$store.state.events
    }
  }
```

------

### Getters

 a handy tool for when you want to take your state, process it in some way, and return a derived version of that state.

for example:

```js
getters: {
  petFriendlyEvents: (state) => {
    return state.events.filter(event => event.petFriendly)
  }
}
```

https://vuex.vuejs.org/guide/getters.html

### Modules

modules allow us to *modularize* our Vuex store. With a large-scale app, the store can get very full, and dividing it up into modules allows us to isolate state, actions, mutations, etc, into categorical sub-sections. 

### Mappers

 instead of getting state into a component like this:

```jsx
computed: {
  event() {
    return this.$store.state.event
  }
}
```

We could use a helper function called `mapState` and grab it like so:

```jsx
computed: {
  ...mapState(['event'])
}
```

Overall, these helper functions abbreviate our code, and can make it more readable and scalable, by allowing our component to map directly to the part of the store that it needs.

https://www.vuemastery.com/blog/refactoring-vuex-with-map-helpers-and-modules/

------

#### Check if data already exists in vuex ((performance enhancement))

```js
fetchEvent({ commit, state }, id) {  
  const existingEvent = state.events.find(event => event.id === id)
  if (existingEvent) {
    commit('SET_EVENT', existingEvent)
  } else {
    EventService.getEvent(id)
    .then(response => {
      commit('SET_EVENT', response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }
}
```


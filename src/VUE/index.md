# Adding vue

4 ways to add vue

1. script-tag
2. npm i
3. vue cli
4. vite -> alternative. new approach https://vitejs.dev/guide/

---

## Add Vue in Script tag

-> for small or simple apps. or to add vue to an existing project

### vue2

`index.html`

```html
<head>
  ...
  <!-- production version, optimized for size and speed -->
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>
<div id="app">
  // vue goes here
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script>
```

or

```html
<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
```

##### Create Vue instance:

`main.js`

```js
const app = new Vue({ options });
```

##### Plugging in to an Element on the DOM

```js
el: '#app';
```

Activating Vue on the div with the id of `app` = mounting-point.

Everything inside that div is controlled by Vue

```js
const app = new Vue({
  el: '#app',
  //  the whole option api goes here...
  data: {
    product: 'Socks',
    // ...
  },
});
```

---

### vue3

https://github.com/Code-Pop/Intro-to-Vue-3

`index.html`

```html
<head>
 ...
    <!-- Import Vue.js -->
    <script src="https://unpkg.com/vue@3.0.11/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app">
      <h1>Product goes here</h1>
    </div>

    <!-- Import App -->
    <script src="./main.js"></script>
     <!-- Mount App -->
    <script>
      const mountedApp = app.mount('#app')
    </script>
  </body>
</html>
```

##### create app

`main.js`

```js
const app = Vue.createApp({ optionsObject });
```

##### mount app

```js
// main.js
app.mount('#app');
```

or

```html
// index.html
<script>
  const mountedApp = app.mount('#app');
</script>
```

```js
const app = Vue.createApp({
  data() {
    return {
      // ...
    };
  },
});
app.mount('#app');
```

> ist the same as: ( using the ES6-shorthand)
>
> ```js
> data: function() {
> 	return {
> 		  // ...
> 	}
> }
> ```

---

### V-Cloak -CSS

```html
<style>
  [v-cloak] {
    display: none;
  }
</style>
```

-> no Curly-Braces before Vue is running

---

## Vue CLI

https://cli.vuejs.org/

CLI stands for Command Line Interface

- **select which libraries the project will be using** -> automatically plugs them into the project.
- **Configures Webpack** -> all of the JavaScript files, CSS, and dependencies get properly bundled together, minified and optimized.

- **Development-Server**. Server running locally on the Developement-Machine - uses http:-protocol (just opening an html-file uses the File-Protocol file://)
- **Hot Module Replacement (HMR)** -> changes appear instantly in the browser when the project is saved

#### Installing the CLI

```
npm i -g @vue/cli
```

#### create project

```
vue create projectname
```

->cd ito folder

vue is using webpack. configuring webpack sucks...

#### start dev server

```
npm run serve
```

### build project

```
npm run build
```

-> creates /dist- folder

---

## Vue UI

graphical alternative to the CLI:

```
vue ui
```

---

###

---

## Data-binding

```
{{output}}
```

-> bound to data-object "output"

---

## Directives

### `v-on`, `@event`

attaches event-handler to event -> all browser events

`v-on:click="changeOutput"`

`@` is shorthand for `v-on`

```html
<button @click="changeOutput">click me</button>
```

Run javascript Inside the string.

Use `.this` to access the vue object

```js
const app = Vue.createApp({
  data() {
    return {
      output: 'no output yet',
    };
  },
  methods: {
    changeOutput() {
      this.output = 'the button has been clicked';
    },
  },
});
```

---

### `v-model`

##### two-way-binding

connects data-object to input-element

---

### `v-show()`

- true/false
- faster then `v-if`

### `v-if` / `v-else`

removes the element from the domtree if false

---

## Loop

### `v-for`

repeats for each data

```html
<div v-for="player in players" :key="player">{{player.Name}}</div>
```

`:` is shorthand for `v-bind`

```html
html
<div v-for="character in characterList" vbind:key="character.char_id">
  {{character.char_id}} {{character.name}} {{character.nickname}}
</div>
```

`key:`

- to keep frontend-ui in sync

- has to bound to one of the unique-identifiers. (use id, if available).

- can be the whole object,

---

## Binding class

```vue
<div v-for="(game, key) in scoreTable" class="m-3 font-bold">{{key}}:
 	<div v-for="entry in game" :key="game.User" class="m-2 font-normal">
		{{entry.User}} - {{entry.TryCount}} - 
    <span :class="{ 'text-green-600 font-bold': entry.HasWon}">{{entry.HasWon}}</span>
	</div>
</div>
```

`:class` -> binding class to the `entry.HasWon`

---

## Options-API

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

watch, when values change.

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

## Routing

```
 <router-view />
```

is where the links are displayed

```js
<router-link class="font-bold text-gray-700" to="/">Home</router-link> |
```

special-css-class

```css
#nav a.router-link-exact-active {
  color: #42b983;
}
```

router also für security - blocking...

#### History Mode

```
history: createWebHistory(process.env.BASE_URL),
```

no # for navigation

---

### router has api

```
      this.$router.push({ name: 'Profile', params: { char_id } });
```

---

## 	VUE Overview



## Adding vue

4 ways to add vue

1. script-tag 
2. npm i
3. vue cli
4. vite -> alternative. new approach

https://vitejs.dev/guide/



#### in HTML script tag

-> for small or simple apps. or to add vue to an existing project

```html
 <head>
  
 ...
  
   <script src="https://unpkg.com/vue@next"></script>
 </head>
 <body id="app" >
    ... everything inside gets rendered by vue
    
   <script src="app.js"></script>
	</body>
</html>
```

::: tip or for vue2:

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
```

:::



##### Starting Point in `app.js`:

`const app = Vue.createApp();`

(new in Vue3) -> create new Vue-Application

```js
const app = Vue.createApp({
    data() {
        return {
            output: "no output yet",
            player: username,
        }
    },
  	methods: {
      //
    }
});

app.mount('#app');
```



```html
  <div id="app">
```

= mounting-point.

everything inside the `#app`-id  is handled by view.

vue turns everything into **template-language**



------

##### V-Cloak -CSS

```html
 <style>
        [v-cloak] {
            display: none;
        }
    </style>
```

-> no Curly-Braces before Vue is running



------

### Vue-CLI

Helps setting up project, and has dev-server and helps build project (folder-dist) 

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





------

## Data-binding

```
{{output}}
```

-> bound to data-object "output"



------

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
            output: "no output yet",
        }
    },
    methods: {
        changeOutput() {
            this.output = "the button has been clicked";
        }
    }
});
```

------

### `v-model`

##### two-way-binding

connects data-object to input-element


------

### `v-show()` 

- true/false
- faster then `v-if`

### `v-if`  / `v-else`  

removes the element from the domtree if false

------

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



------
## Binding class 

```vue
<div v-for="(game,key) in scoreTable" class="m-3 font-bold">{{key}}:
 	<div v-for="entry in game" :key="game.User" class="m-2 font-normal">
		{{entry.User}} - {{entry.TryCount}} - 
    <span :class="{ 'text-green-600 font-bold': entry.HasWon}">{{entry.HasWon}}</span>
	</div>
</div>
```

`:class` -> binding class to the `entry.HasWon`



------




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

------

### Props

Array

```js
props: ['prop1', 'prop2']
```

------

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

------

### Methods

```js
 methods: {
    clearMessage(){
      this.message=''
    }
  },
```

------

### Computed

-> always recalculates, if something changes

```js
computed: {
    messageUppercase () {
      return this.message.toUpperCase();
    }
  },
```

------

### Watcher

watch, when values change. 

```js
watch: { 
	firstName (value, oldValue) { 
    // 
  } 
},
```

------

### Filters 

> only Vue2

```js
filters: {
    messageLowercase(value) {
      return value.toLowerCase()
    }
  },
```

------

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



------

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



------

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



------

## Passing data

#### props

 -> pass data from main-app to component

- downwards

#### custom Events

ist data from component to main-app

- upwards

------

## VUEX

vuex is implementation of flux design pattern. everything is in a loop ->  bind your application date in a single store



**state=** one big object, contains everything 

**getter**- functions, that read value from state

**actions** communicate with backend - async

**mutations** changes the state (nothing else does) -> everything is reactive

-> no props, and no events -> it is all done in VUEX

```js
import Vue from "vue";

const state = {
  food: [
    {
      id: 1,
      name: "Burger",
      description:
        "A burger is a sandwich...",
      imageUrl: "https://i.imgur.com/0umadnY.jpg",
      rating: 4
    }
  ]
};

const mutations = {
  DELETE_FOOD(state, id) {
    Vue.delete(state.foods, id);
  }
};

const actions = {
  deleteFood(context, id) {
    context.commit("DELETE_TASK", id);
  }
};

const getters = {
  foods(state) {
    return state.foods;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
```

------

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

------

### router has api

```
      this.$router.push({ name: 'Profile', params: { char_id } });
```



------


# VUE Router Basics

To make SinglePage-Applications work with different URLs.

---

## Server-Side vs Client-Side Routing

### Server-side Routing

the client is making a request to the server on every URL change.

### client-side routing

- often usen in vue
- the routing happens in the browser itself using JavaScript.
- the webpage is loaded from a single index.html page and client-side routing to dynamically presents different views, depending on which link is clicked

**Single Page Application** (SPA) is defined as a web app that loads from a single page and dynamically updates that page as the user interacts with the app. For a single page application we need a way to navigate between content (client-side routing).

---

## Install Router

```
npm i vue-router
```

or (vue 3)

```
npm install vue-router@next --save
```

---

## Vue Router-Setup

https://router.vuejs.org/

### Vue2

```js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
```

`routes` contains an array of objects.

`path` indicates the actual route, in terms of the URL,

` '``/``' `, meaning this is the root,

`name` allows us to give this route a name so we can use that name throughout our application to refer to this route.

`component` allows us to specify which component to render at that route. Note that these are the same components that were imported at the top of the file

When the browser’s URL ends with `/about`, the `About` component will be rendered.

⚠️ **Question: Are About and Home “components” or “views”?**

✅ **Answer: They are components.**

it’s a best practice to put the components (AKA pages) that get loaded by Vue Router in the `/views` directory. You then keep the modular (reusable) components in your `/components` directory.

#### main.js

The Router is loaded in `main.js`:

```javascript
import router from './router';
```

And in **main.js** you’ll notice that we tell our Vue instance to use the router we’ve imported:

```javascript
    new Vue({
      router,
    ...
```

Since we’re using ES6, this is the same as writing:

```javascript
    new Vue({
      router: router,
    ...
```

#### App.vue

```vue
<div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
</div>
```

---

### Vue3

Router Setup

```js
// main.js

import { createRouter } from 'vue-router';
...
const router = createRouter({
    /// configuration
});

```

```js
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(), // use the build in browser history
  routes: [],
});
```

```
app.use()
```

------



```html
<div id="app"></div>
<!-- built files will be auto injected -->
```

`main.js` creates and mounts the app  to that `div` with the id of `#app`.:

```js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router)
  .mount("#app");
```

Vue Router enables client-side routing so we can navigate around and display different “views” of our app.

#### package.json

Usually Vue CLI already inserted Vue Router as a dependency

```js
...
"dependencies": {
  "core-js": "^3.6.5",
  "vue": "^3.0.0-0",
  "vue-router": "^4.0.0-0" 
},
..
```

---

## Organizing Route-Files

use a `views`(pages/screens) - folder for the components that are loaded through the router

move all routing-logic in a seperate-file:

and export it

```
export default router;
```

in main.js import it:

```js
import { createApp } from 'vue';

import App from './App.vue';
import router from '@/router';

const app = createApp(App);

app.use(router);

app.mount('#app');
```

---


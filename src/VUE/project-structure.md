# Vue Project-Structure

## Structure of the Vue Project

- **node_modules** directory is where all of the libraries are stored

- **public** directory, you place any static assets you don’t want to be run through Webpack

- **src** holds all the application code

  - put the majority of your assets, such as images and fonts, in the **assets** directory so they can be optimized by Webpack.

  - **components** directory is where we store the components, or building blocks, of our Vue app.

  - **Views** holds the different views/pages

  - **App.vue** is the root component

  - **rounter** handles router

  - **store** - vuex

  - **main.js** renders app and mounts it to the dom

---

## How the App is Loaded

### vue2

```js
// main.js
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
```

In our **main.js** file, we see that we’re importing Vue, along with our root **App.js** component, as well as our **router** and **store**. We are then creating a new Vue instance, telling it to use the **router** and **store**, and to _render_ `App` (our root component) and _mount_ it to the DOM, where this id of `app` is.

in `/public/index.html` there’s a div with the id of `"app"`, which means this is where our `App` will be _mounted_.

```html
<div id="app"></div>
<!-- built files will be auto injected -->
```

### vue3

```js
// main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
```
# Vue Project-Structure

## Structure of the Vue Project

- **node_modules** directory - all the libraries
- **public** directory - any static assets you don’t want to be run through Webpack
- **src** directory - all the application code
- put the majority of your assets, such as images and fonts, in the **assets** directory so they can be optimized by Webpack.
- **components** directory is where we store the components
- **Views** holds the different views/pages
- **App.vue** is the root component
- **router** handles router
- **store** - vuex
- **main.js** renders app and mounts it to the dom

in bigger Projects:

- use Subfolders for Components, eg `UI`,`layout`, etc

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

- In the **main.js** file, we’re importing Vue, along with the root **App.js** component, as well as the **router** and **store**. 

- We are creating a new Vue instance, telling it to use the **router** and **store**, and to _render_ `App` (our root component) and _mount_ it to the DOM, where this id of `app` is.

in `/public/index.html` there’s a div with the id of `"app"`. This is where the `App` will be _mounted_.

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

------

## Approach for building the App

1. create basic routes
2. create basic pages

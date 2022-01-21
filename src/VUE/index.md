# Adding Vue

4 ways to add vue

1. script-tag
2. npm i
3. vue cli
4. vite -> alternative. new approach [https://vitejs.dev/guide/](https://vitejs.dev/guide/)

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

[https://github.com/Code-Pop/Intro-to-Vue-3](https://github.com/Code-Pop/Intro-to-Vue-3)

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

-> no Curly-Braces before Vue is running

```html
<style>
  [v-cloak] {
    display: none;
  }
</style>
```

---

## Vue CLI

[https://cli.vuejs.org/](https://cli.vuejs.org/)

CLI stands for Command Line Interface

- **select which libraries the project will be using** -> automatically plugs them into the project.
- **Configures Webpack** -> all of the JavaScript files, CSS, and dependencies get properly bundled together, minified and optimized.

- **Development-Server**. Server running locally on the Developement-Machine - uses http:-protocol (just opening an html-file uses the File-Protocol file://)
- **Hot Module Replacement (HMR)** -> changes appear instantly in the browser when the project is saved

### Installing the CLI

```
npm i -g @vue/cli
```

### create project

```
vue create projectname
```

->cd ito folder

vue is using webpack. configuring webpack sucks...

### start dev server

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

------

## Virtual Dom

Behind the scenes, Vue uses a data structure called a **virtual DOM** to vastly improve speed and responsiveness of Vue apps -> representation of the dom as a javascript object

speeds up app performance. 

